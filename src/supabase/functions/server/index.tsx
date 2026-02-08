import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";

const app = new Hono();

// Enable CORS
app.use("/*", cors({
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  exposeHeaders: ["Content-Length"],
  maxAge: 600,
}));

// Health check
app.get("/make-server-5b59724a/health", (c) => {
  return c.json({ status: "ok" });
});

// Quote submission
app.post("/make-server-5b59724a/submit-quote", async (c) => {
  try {
    const body = await c.req.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.contact) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Log the quote request
    console.log("Quote request received:", body);

    return c.json({ 
      success: true, 
      message: "Quote request submitted successfully"
    });

  } catch (error) {
    console.error("Error:", error);
    return c.json({ error: "Failed to submit quote" }, 500);
  }
});

Deno.serve(app.fetch);
