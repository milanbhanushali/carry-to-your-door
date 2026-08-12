
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
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/business";

const formSchema = z.object({
  contactName: z.string().min(2, {
    message: "Please enter your name.",
  }),
  phone: z.string().min(7, {
    message: "Please enter a valid contact phone number.",
  }),
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

const frequencyLabels: Record<OrderFormValues["deliveryFrequency"], string> = {
  weekly: "Weekly",
  "twice-weekly": "Twice Weekly",
  monthly: "Monthly",
};

const OrderForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      phone: "",
      shopName: "",
      postcode: "",
      deliveryFrequency: "weekly",
      notes: "",
    },
  });

  const onSubmit = (data: OrderFormValues) => {
    // There's no checkout on this site - orders go straight to WhatsApp so
    // our team can confirm stock and pricing directly with the shop owner.
    const message = [
      `New order enquiry from ${data.shopName}`,
      `Contact: ${data.contactName} (${data.phone})`,
      `Postcode: ${data.postcode}`,
      `Preferred delivery: ${frequencyLabels[data.deliveryFrequency]}`,
      data.notes ? `Notes: ${data.notes}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");

    setIsSuccess(true);
    toast({
      title: "WhatsApp Opened",
      description: "Send the pre-filled message and our team will confirm your order shortly.",
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="mb-6 mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <MessageCircle className="h-7 w-7 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Almost There!</h2>
        <p className="text-gray-600 mb-8">
          We've opened WhatsApp with your order details pre-filled. Just hit send and our team
          will confirm your order and delivery details shortly. If WhatsApp didn't open, you can{" "}
          <a
            href={buildWhatsAppLink("Hi, I'd like to place a wholesale order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-red font-medium hover:underline"
          >
            tap here to open it manually
          </a>
          .
        </p>
        <Button
          onClick={() => { setIsSuccess(false); form.reset(); }}
          className="bg-brand-teal hover:bg-brand-teal/90"
        >
          Place Another Order
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Place Your Order</h2>
      <p className="text-sm text-gray-500 mb-6">
        We don't take orders through the website directly. Fill this in and we'll open WhatsApp
        with your details ready to send to our team.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="contactName"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-brand-charcoal">Contact Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" inputMode="tel" placeholder="e.g. 07123 456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
            className="w-full bg-green-600 hover:bg-green-700"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Send Order via WhatsApp
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
