import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-boost-purple to-indigo-500 text-transparent bg-clip-text">BoostMaster</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-boost-purple transition-colors">Главная</Link>
          <Link to="#services" className="text-foreground/80 hover:text-boost-purple transition-colors">Услуги</Link>
          <Link to="#pricing" className="text-foreground/80 hover:text-boost-purple transition-colors">Цены</Link>
          <Link to="#faq" className="text-foreground/80 hover:text-boost-purple transition-colors">FAQ</Link>
          <Button variant="default" className="ml-4 bg-boost-purple hover:bg-boost-purple/90">
            Заказать буст
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/40">
          <div className="container py-4 px-4 flex flex-col gap-4">
            <Link to="/" className="py-2 text-foreground/80 hover:text-boost-purple transition-colors" onClick={toggleMobileMenu}>Главная</Link>
            <Link to="#services" className="py-2 text-foreground/80 hover:text-boost-purple transition-colors" onClick={toggleMobileMenu}>Услуги</Link>
            <Link to="#pricing" className="py-2 text-foreground/80 hover:text-boost-purple transition-colors" onClick={toggleMobileMenu}>Цены</Link>
            <Link to="#faq" className="py-2 text-foreground/80 hover:text-boost-purple transition-colors" onClick={toggleMobileMenu}>FAQ</Link>
            <Button variant="default" className="mt-2 w-full bg-boost-purple hover:bg-boost-purple/90">
              Заказать буст
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
