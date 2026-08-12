import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/business";

// Bottom-fixed CTA bar shown only on mobile/tablet (below the "lg" breakpoint
// where the header's own Order Now button already does this job well). Kept
// off the Order page itself so we're not stacking two "order now" prompts on
// top of each other right above the order form.
const StickyMobileCta = () => {
  const { pathname } = useLocation();

  if (pathname === "/order") return null;

  const whatsappLink = buildWhatsAppLink(
    "Hi, I'd like to place a wholesale order."
  );

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex gap-2 p-3">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-md border border-green-600 text-green-600 font-medium px-4 py-2.5 flex-1"
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          to="/order"
          className="flex items-center justify-center gap-2 rounded-md bg-brand-red text-white font-medium px-4 py-2.5 flex-1"
        >
          <ShoppingCart className="h-4 w-4" />
          Order Now
        </Link>
      </div>
    </div>
  );
};

export default StickyMobileCta;
