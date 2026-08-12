import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={withBase("/lovable-uploads/header-logo.webp")}
              alt="Urban Wholesalers Ltd"
              className="h-20 md:h-32 w-auto"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-brand-charcoal hover:text-brand-red transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link to="/products" className="text-brand-charcoal hover:text-brand-red transition-colors whitespace-nowrap">
              Products
            </Link>
            <Link to="/order" className="text-brand-charcoal hover:text-brand-red transition-colors whitespace-nowrap">
              Place Order
            </Link>
            <Link to="/about" className="text-brand-charcoal hover:text-brand-red transition-colors whitespace-nowrap">
              About Us
            </Link>
            <Link to="/contact" className="text-brand-charcoal hover:text-brand-red transition-colors whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            
            <Button asChild variant="default" className="ml-4 bg-brand-red hover:bg-brand-red/90">
              <Link to="/order">
                <ShoppingCart className="mr-2 h-4 w-4" /> Order Now
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 py-2 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-brand-charcoal hover:text-brand-red hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="block px-3 py-2 text-brand-charcoal hover:text-brand-red hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/order" 
              className="block px-3 py-2 text-brand-charcoal hover:text-brand-red hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Place Order
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-brand-charcoal hover:text-brand-red hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-brand-charcoal hover:text-brand-red hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
