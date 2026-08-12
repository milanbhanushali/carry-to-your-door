import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL } from "@/lib/business";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <Seo
        title="Privacy Policy"
        description="How Urban Wholesalers Ltd handles the information you share through this website."
        path="/privacy"
      />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-brand-charcoal mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: 12 August 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">The short version</h2>
            <p>
              This website doesn't have accounts, a database, or tracking analytics. It's a
              product catalogue with two forms. When you submit the Order or Contact form, your
              details are handed straight to WhatsApp or your own email app so you can send them
              to us directly &mdash; they never pass through a server we control, and we don't
              store anything you type here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Information you provide</h2>
            <p>
              The Place Order and Contact pages ask for details like your name, shop name, phone
              number, postcode and message. Submitting either form opens WhatsApp or your email
              client with that information pre-filled for you to review and send yourself. We
              only receive it once you actually send that WhatsApp message or email &mdash; at
              that point it's handled the same way as any other message you send us, and kept for
              as long as we need it to fulfil your order or enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Cookies and tracking</h2>
            <p>
              We don't run analytics, advertising pixels, or tracking cookies on this site. Your
              browser may still use its own local storage for basic things like remembering
              scroll position, but we don't read or collect that data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Third-party services</h2>
            <p>
              A few pages load content from outside services in order to work:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>WhatsApp (wa.me) &mdash; opens a chat with our number when you use the order form or a "message us" link.</li>
              <li>Your device's email app &mdash; opens when you submit the Contact form.</li>
              <li>A QR code generator (api.qrserver.com) &mdash; renders the WhatsApp QR code on the homepage.</li>
              <li>Unsplash &mdash; supplies a small number of general stock photos used for page imagery.</li>
            </ul>
            <p className="mt-2">
              These services may see that your browser requested content from them (standard for
              any web request), but we don't pass them any personal details you've entered on
              this site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Your rights</h2>
            <p>
              Because we don't hold a database of visitor information, there's nothing on our
              servers to request a copy of or ask us to delete beyond your own message history
              with us on WhatsApp or email, which you control directly. If you have any questions
              about this policy or how we handle an enquiry you've sent us, contact us using the
              details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Contact us</h2>
            <p>
              {BUSINESS_ADDRESS.line1}<br />
              {BUSINESS_ADDRESS.line2}<br />
              {BUSINESS_ADDRESS.line3}<br />
              {BUSINESS_ADDRESS.postcode}
            </p>
            <p className="mt-2">Email: {BUSINESS_EMAIL}</p>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
