
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Contact form data submitted:', data);
      
      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <MainLayout>
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
                          <Input placeholder="Enter your phone number" {...field} />
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
                    className="w-full bg-brand-teal hover:bg-brand-teal/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Contact Information</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Address</h3>
                  <p className="text-gray-600">
                    Urban Wholesalers Ltd<br />
                    123 Distribution Way<br />
                    Industrial Park<br />
                    London, EC1A 1BB
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Customer Service</h3>
                  <p className="text-gray-600 mb-1">Email: support@urbanwholesalers.co.uk</p>
                  <p className="text-gray-600 mb-1">Phone: +44 123 456 7890</p>
                  <p className="text-gray-600">Hours: Monday to Friday, 9am - 5pm</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-brand-charcoal mb-2">Sales Enquiries</h3>
                  <p className="text-gray-600 mb-1">Email: sales@urbanwholesalers.co.uk</p>
                  <p className="text-gray-600">Phone: +44 123 456 7891</p>
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
