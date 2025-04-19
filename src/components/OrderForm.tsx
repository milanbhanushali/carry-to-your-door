
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  shopName: z.string().min(2, {
    message: "Shop name must be at least 2 characters.",
  }),
  postcode: z.string().regex(/^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i, {
    message: "Please enter a valid UK postcode.",
  }),
  deliveryFrequency: z.enum(["weekly", "twice-weekly", "monthly"], {
    required_error: "Please select a delivery frequency.",
  }),
  notes: z.string().optional(),
});

type OrderFormValues = z.infer<typeof formSchema>;

const OrderForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shopName: "",
      postcode: "",
      deliveryFrequency: "weekly",
      notes: "",
    },
  });

  const onSubmit = async (data: OrderFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data submitted:', data);
      
      // Show success state
      setIsSuccess(true);
      toast({
        title: "Order Submitted Successfully",
        description: "We'll be in touch shortly to confirm your delivery details.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error Submitting Order",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="mb-6 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-green-600"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Thank You for Your Order!</h2>
        <p className="text-gray-600 mb-8">
          We've received your order request and our team will be in touch shortly to confirm your
          delivery details and finalize your order.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          className="bg-brand-teal hover:bg-brand-teal/90"
        >
          Place Another Order
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Place Your Order</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="shopName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">Shop Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your shop name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. SW1A 1AA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="deliveryFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">Delivery Frequency</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select delivery frequency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="twice-weekly">Twice Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-brand-charcoal">Notes / Special Requests</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any special requirements or requests for your delivery"
                    className="resize-none"
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
            {isSubmitting ? "Submitting..." : "Submit Order Request"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
