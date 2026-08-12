import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL } from "@/lib/business";

const Terms = () => {
  return (
    <MainLayout>
      <Seo
        title="Terms of Service"
        description="The terms that apply to using the Urban Wholesalers Ltd website and ordering process."
        path="/terms"
      />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold text-brand-charcoal mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: 12 August 2026</p>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Who we are</h2>
            <p>
              This website is operated by Urban Wholesalers Ltd ("we", "us", "our"), a wholesale
              supplier to off-licence stores in the UK. By browsing this site or using the order
              and contact forms, you agree to the terms below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">This site isn't a checkout</h2>
            <p>
              Product listings, pack sizes and any prices shown are for information only and are
              not a binding offer to sell. Submitting the order form does not place an order or
              create a contract &mdash; it opens a pre-filled WhatsApp message for you to send us.
              An order is only confirmed once our team has replied to confirm stock, pricing and
              delivery directly with you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Product information</h2>
            <p>
              We do our best to keep product images, descriptions and pack sizes accurate and up
              to date, but wholesale ranges change frequently and availability isn't guaranteed.
              If something you order is out of stock or has changed, we'll let you know when
              confirming your order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Minimum orders and delivery</h2>
            <p>
              Our standard minimum order value and delivery areas are outlined on the Contact
              page and may be updated from time to time. Delivery schedules are agreed directly
              with you once your order is confirmed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Acceptable use</h2>
            <p>
              Please don't use this site to submit false enquiries, attempt to disrupt the site,
              or copy its content for commercial use without permission. All logos, product
              photography and written content on this site belong to Urban Wholesalers Ltd or
              their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Limitation of liability</h2>
            <p>
              This website is provided as-is. While we try to keep it accurate and available,
              we're not liable for losses arising from temporary downtime, errors in listed
              information, or delays in responding to enquiries sent outside business hours.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-charcoal mb-2">Changes to these terms</h2>
            <p>
              We may update these terms occasionally to reflect changes to how the site or our
              business operates. The date at the top of this page shows when it was last revised.
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

export default Terms;
