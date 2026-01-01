import { useState, useEffect } from 'react';
import { Toaster } from 'sonner@2.0.3';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Update the page title based on current page
    const titles = {
      home: 'Sai Infrastructure - LED Sign Board & Signage Solutions',
      about: 'About Us - Sai Infrastructure',
      services: 'Our Services - Sai Infrastructure',
      portfolio: 'Our Work - Sai Infrastructure',
      contact: 'Contact Us - Sai Infrastructure',
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'portfolio':
        return <Portfolio onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-center" richColors expand={true} />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}