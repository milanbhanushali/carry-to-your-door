
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import MainLayout from "@/layouts/MainLayout";
import Seo from "@/components/Seo";
import { buildMailtoLink, buildWhatsAppLink, BUSINESS_ADDRESS, BUSINESS_EMAIL } from "@/lib/business";
import { MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // No backend on this site - hand the enquiry off to the visitor's own
    // email client, pre-filled and ready to send.
    setIsSubmitting(true);

    const body = [
      data.message,
      "",
      `From: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = buildMailtoLink(`Enquiry from ${data.name}`, body);

    toast({
      title: "Opening Your Email App",
      description: "Send the pre-filled message and we'll get back to you as soon as possible.",
    });

    form.reset();
    // Brief disabled window so the button gives tactile feedback and can't
    // be double-clicked while the OS launches the mail app.
    window.setTimeout(() => setIsSubmitting(false), 1200);
  };

  return (
    <MainLayout>
      <Seo
        title="Contact Us"
        description="Get in touch with Urban Wholesalers Ltd for questions about our products, delivery areas or wholesale pricing."
        path="/contact"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-brand-charcoal mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help. Get in touch with our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Get In Touch</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-charcoal">Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-charcoal">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-charcoal">Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" inputMode="tel" placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-charcoal">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?"
                            className="min-h-32 resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-teal hover:bg-brand-teal/90 disabled:opacity-70"
                  >
                    {isSubmitting ? "Opening Your Email App..." : "Send Message"}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-gray-500 mb-3">Prefer to chat instead?</p>
                <a
                  href={buildWhatsAppLink("Hi, I have a question about Urban Wholesalers.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Address</h3>
                  <p className="text-gray-600">
                    {BUSINESS_ADDRESS.line1}<br />
                    {BUSINESS_ADDRESS.line2}<br />
                    {BUSINESS_ADDRESS.line3}<br />
                    {BUSINESS_ADDRESS.postcode}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Customer Service</h3>
                  <p className="text-gray-600 mb-1">Email: {BUSINESS_EMAIL}</p>
                  <p className="text-gray-600 mb-1">Phone: +44 7350 405313</p>
                  <p className="text-gray-600">Hours: Monday to Friday, 9am - 5pm</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Sales Enquiries</h3>
                  <p className="text-gray-600 mb-1">Email: {BUSINESS_EMAIL}</p>
                  <p className="text-gray-600">Phone: +44 7350 405313</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">What areas do you deliver to?</h3>
                  <p className="text-gray-600">
                    We currently deliver to off-license stores throughout Greater London, Manchester, Birmingham, Leeds, Liverpool, Bristol, Sheffield, Newcastle, and surrounding areas.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">How quickly can you deliver once I place an order?</h3>
                  <p className="text-gray-600">
                    For most areas, we can arrange delivery within 2-3 business days of order confirmation. Delivery schedules are then maintained according to your preference.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Is there a minimum order value?</h3>
                  <p className="text-gray-600">
                    Yes, our standard minimum order value is £250 for regular delivery service. This helps us maintain competitive pricing and efficient delivery routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
