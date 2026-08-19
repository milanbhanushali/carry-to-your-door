// Shared business contact details used across the site (order form, contact
// form, homepage WhatsApp section, footer links, etc.) so there's a single
// place to update them.
export const WHATSAPP_NUMBER = "447415633330"; // +44 7415 633330

/** Human-readable phone number, for display in text (not links). */
export const BUSINESS_PHONE_DISPLAY = "+44 7415 633330";

export const BUSINESS_EMAIL = "urbanwholesalers@hotmail.co.uk";

export const BUSINESS_ADDRESS = {
  line1: "Urban Wholesalers Ltd",
  line2: "27 Burnham Close",
  line3: "Windsor",
  postcode: "SL4 4PN",
};

/** Builds a wa.me click-to-chat link pre-filled with the given message. */
export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link pre-filled with subject and body. */
export function buildMailtoLink(subject: string, body: string) {
  return `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
