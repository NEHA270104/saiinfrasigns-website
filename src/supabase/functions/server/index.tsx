import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-5b59724a/health", (c) => {
  return c.json({ status: "ok" });
});

// Quote submission endpoint
app.post("/make-server-5b59724a/submit-quote", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, contact, workType, projectDescription, expectations, timeline, budget } = body;

    // Validate required fields
    if (!name || !email || !contact || !workType || !projectDescription || !expectations || !timeline) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Prepare email content
    const emailContent = `
New Quote Request from Sai Infrastructure Website

Personal Information:
--------------------
Name: ${name}
Email: ${email}
Contact: ${contact}

Project Details:
----------------
Type of Work: ${workType}
Project Description: ${projectDescription}
Expectations: ${expectations}
Timeline: ${timeline}
Budget: ${budget || 'Not specified'}

--------------------
This quote request was submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();

    // Send email using Resend API
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      // Store in KV as fallback
      const quoteId = `quote_${Date.now()}`;
      await kv.set(quoteId, body);
      return c.json({ 
        success: true, 
        message: 'Quote request saved successfully',
        note: 'Email service not configured. Quote saved to database.'
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sai Infrastructure Website <onboarding@resend.dev>',
        to: ['saiinfrastructure.official@gmail.com'],
        subject: `New Quote Request from ${name}`,
        text: emailContent,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', result);
      // Store in KV as fallback
      const quoteId = `quote_${Date.now()}`;
      await kv.set(quoteId, body);
      return c.json({ 
        success: true, 
        message: 'Quote request saved successfully',
        note: 'Email delivery failed but quote saved to database.'
      });
    }

    // Also store in KV for record keeping
    const quoteId = `quote_${Date.now()}`;
    await kv.set(quoteId, body);

    return c.json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      emailId: result.id 
    });

  } catch (error) {
    console.error('Error submitting quote:', error);
    return c.json({ error: 'Failed to submit quote request' }, 500);
  }
});

Deno.serve(app.fetch);