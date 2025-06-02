import { useState } from "react";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  referralSource: string;
}

export default function EmailForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    referralSource: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the API endpoint to send the email
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Handle response
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        referralSource: "",
      });

      // Show success message
      toast.success("Thank you for your message! We'll get back to you soon.");
    } catch (error) {
      // Show error message
      console.error("Form submission error:", error);
      toast.error(
        "Sorry, there was a problem sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-6 md:pt-[40px] px-2 md:px-0">
      <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
        {/* First row - First Name, Last Name, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name*"
              className="w-full px-3 md:px-5 py-3 md:py-4 bg-[var(--light)]/10 text-[var(--light)] 
                         border-2 border-[var(--light)]/30 rounded-lg 
                         placeholder-[var(--light)]/60 focus:outline-none 
                         focus:ring-2 focus:ring-[var(--red)]/70 text-sm md:text-lg"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className="w-full px-3 md:px-5 py-3 md:py-4 bg-[var(--light)]/10 text-[var(--light)] 
                         border-2 border-[var(--light)]/30 rounded-lg 
                         placeholder-[var(--light)]/60 focus:outline-none 
                         focus:ring-2 focus:ring-[var(--red)]/70 text-sm md:text-lg"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="w-full px-3 md:px-5 py-3 md:py-4 bg-[var(--light)]/10 text-[var(--light)] 
                         border-2 border-[var(--light)]/30 rounded-lg 
                         placeholder-[var(--light)]/60 focus:outline-none 
                         focus:ring-2 focus:ring-[var(--red)]/70 text-sm md:text-lg"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>
        {/* Second row - Message box */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your company situation or why you're reaching out*"
            rows={6}
            className="w-full px-3 md:px-5 py-3 md:py-4 bg-[var(--light)]/10 text-[var(--light)] 
                       border-2 border-[var(--light)]/30 rounded-lg 
                       placeholder-[var(--light)]/60 focus:outline-none 
                       focus:ring-2 focus:ring-[var(--red)]/70 resize-none text-sm md:text-lg"
            required
            disabled={isSubmitting}
          />
        </div>
        {/* Third row - Referral source */}
        <div className="relative">
          <input
            type="text"
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            placeholder="How did you hear about us?"
            className="w-full px-3 md:px-5 py-3 md:py-4 bg-[var(--light)]/10 text-[var(--light)] 
                       border-2 border-[var(--light)]/30 rounded-lg 
                       placeholder-[var(--light)]/60 focus:outline-none 
                       focus:ring-2 focus:ring-[var(--red)]/70 text-sm md:text-lg"
            disabled={isSubmitting}
          />
        </div>
        {/* Submit button */}
        <div className="flex justify-center md:justify-end mb-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[var(--red)] text-[var(--light)] px-6 md:px-4 py-3 md:py-4 rounded-3xl cursor-pointer flex items-center transition-all duration-300 text-sm md:text-base
                hover:shadow-lg hover:transform hover:scale-105 active:scale-95
                ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
