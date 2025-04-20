import { Link } from "react-router-dom";
import { Globe, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/710d3246-75a5-472c-a7a6-83ddb96da13e.png" 
              alt="Urban Wholesalers Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-300 mb-4">Cash and carry at your door.</p>
            <p className="text-gray-300">Providing quality wholesale products to off-license stores across the UK.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Place Order
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=food" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Food
                </Link>
              </li>
              <li>
                <Link to="/products?category=vapes" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Vapes
                </Link>
              </li>
              <li>
                <Link to="/products?category=cakes" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Cakes
                </Link>
              </li>
              <li>
                <Link to="/products?category=sandwiches" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Sandwiches
                </Link>
              </li>
              <li>
                <Link to="/products?category=drinks" className="text-gray-300 hover:text-brand-teal transition-colors">
                  Drinks
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">Customer Service: support@urbanwholesalers.co.uk</p>
            <p className="text-gray-300 mb-2">Phone: +44 123 456 7890</p>
            <p className="text-gray-300">Monday - Friday: 9am - 5pm</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Urban Wholesalers Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
