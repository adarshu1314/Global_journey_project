import React, { useState, useRef } from "react";
import Turnstile from "react-turnstile";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const focusClass =
  "w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-base " +
  "focus:border-[#f4a750] focus:ring-2 focus:ring-[#f4a750] outline-none transition";

const Contact = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const captchaRef = useRef<any>(null);

  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const [groupData, setGroupData] = useState({
    groupName: "",
    adults: "",
    children: "",
    totalNights: "",
    destinations: "",
    nightsPerDestination: "",
    inclusions: "",
    mealPlan: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isCaptchaVerified || !captchaToken) {
      toast({
        title: "CAPTCHA Required",
        description: "Please complete the CAPTCHA before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("/.netlify/functions/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          destination: "",
          message: "",
        });
        
        
      
      } else {
        toast({
          title: "Failed to Send Message",
          description: result.message || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending your message.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
     
    }
  };

  const handlePlanSubmit = () => {
    toast({
      title: "Group Tour Submitted!",
      description: `Thanks ${groupData.groupName}, we'll contact you soon.`,
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f4a750]">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next adventure? Contact us today and let's plan
            your dream journey together.
          </p>
        </div>

        <div className="md:px-[25%] py-0">
          <Card className="border-0 shadow-md flex flex-col">
            <CardContent className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-[#f4a750]">
                Send us a message
              </h3>
              <form
                className="space-y-6 flex-1 flex flex-col"
                onSubmit={handleSubmit}
              >
                <input
                  name="fullName"
                  placeholder="Full Name"
                  className={focusClass}
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className={focusClass}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className={focusClass}
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  name="destination"
                  placeholder="Destination of Interest"
                  className={focusClass}
                  value={formData.destination}
                  onChange={handleInputChange}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your dream trip..."
                  className={`${focusClass} min-h-[120px]`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />

                {/* CAPTCHA */}
               <Turnstile
  ref={captchaRef}
  sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
  onSuccess={(token) => {
    setCaptchaToken(token);
    setIsCaptchaVerified(true);
  }}
  onExpire={() => {
    setCaptchaToken(null);
    setIsCaptchaVerified(false);
  }}
  onError={() => {
    setCaptchaToken(null);
    setIsCaptchaVerified(false);
  }}
  options={{ theme: "light" }}
/>

<Button
  type="submit"
  className="bg-[#f4a750] hover:bg-[#e08f30] w-full text-white flex items-center justify-center"
  disabled={!isCaptchaVerified || isLoading}
>
  {isLoading && (
    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  )}
  {isLoading ? "Sending..." : "Send Message"}
</Button>
              </form>
            </CardContent>
          </Card>

          {/* Group Tour Card */}
          <Card className="mt-[50px] border-0 bg-gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to explore?</h3>
              <p className="mb-6">
                Join thousands of happy travelers who have discovered amazing destinations with us.
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-orange-600 hover:bg-gray-100">
                    Start Planning
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md rounded-xl p-6">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">
                      Plan Your Group Tour
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4 max-h-[70vh] overflow-y-auto">
                    <input
                      name="groupName"
                      placeholder="Group Name"
                      value={groupData.groupName}
                      onChange={handleGroupChange}
                      className={focusClass}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        name="adults"
                        placeholder="Adults"
                        value={groupData.adults}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                      <input
                        name="children"
                        placeholder="Children"
                        value={groupData.children}
                        onChange={handleGroupChange}
                        className={focusClass}
                      />
                    </div>
                    <input
                      name="totalNights"
                      placeholder="Total Nights"
                      value={groupData.totalNights}
                      onChange={handleGroupChange}
                      className={focusClass}
                    />
                    <input
                      name="destinations"
                      placeholder="Destination(s)"
                      value={groupData.destinations}
                      onChange={handleGroupChange}
                      className={focusClass}
                    />
                    <input
                      name="nightsPerDestination"
                      placeholder="Nights in Each Destination"
                      value={groupData.nightsPerDestination}
                      onChange={handleGroupChange}
                      className={focusClass}
                    />
                    <input
                      name="inclusions"
                      placeholder="Inclusions"
                      value={groupData.inclusions}
                      onChange={handleGroupChange}
                      className={focusClass}
                    />
                    <input
                      name="mealPlan"
                      placeholder="Meal Plan"
                      value={groupData.mealPlan}
                      onChange={handleGroupChange}
                      className={focusClass}
                    />
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={handlePlanSubmit}
                      className="bg-[#f4a750] hover:bg-[#e08f30] text-white"
                    >
                      Submit
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
