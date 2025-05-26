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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);

    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      referralSource: "",
    });

    // Show success message or redirect
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-[40px]  ">
      {" "}
      {/* Increased max-width from 2xl to 4xl */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {" "}
        {/* Increased spacing between rows */}
        {/* First row - First Name, Last Name, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {" "}
          {/* Increased gap from 4 to 6 */}
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-5 py-4 bg-[var(--light)]/10 text-[var(--light)] 
                         border-2 border-[var(--light)]/30 rounded-lg 
                         placeholder-[var(--light)]/60 focus:outline-none 
                         focus:ring-2 focus:ring-[var(--red)]/70 text-lg"
              required
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-5 py-4 bg-[var(--light)]/10 text-[var(--light)] 
                         border-2 border-[var(--light)]/30 rounded-lg 
                         placeholder-[var(--light)]/60 focus:outline-none 
                         focus:ring-2 focus:ring-[var(--red)]/70 text-lg"
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-5 py-4 bg-[var(--light)]/10 text-[var(--light)] 
                         border-2 border-[var(--light)]/30 rounded-lg 
                         placeholder-[var(--light)]/60 focus:outline-none 
                         focus:ring-2 focus:ring-[var(--red)]/70 text-lg"
              required
            />
          </div>
        </div>
        {/* Second row - Message box */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your company situation or why you're reaching out"
            rows={8}
            className="w-full px-5 py-4 bg-[var(--light)]/10 text-[var(--light)] 
                       border-2 border-[var(--light)]/30 rounded-lg 
                       placeholder-[var(--light)]/60 focus:outline-none 
                       focus:ring-2 focus:ring-[var(--red)]/70 resize-none text-lg"
            required
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
            className="w-full px-5 py-4 bg-[var(--light)]/10 text-[var(--light)] 
                       border-2 border-[var(--light)]/30 rounded-lg 
                       placeholder-[var(--light)]/60 focus:outline-none 
                       focus:ring-2 focus:ring-[var(--red)]/70 text-lg"
          />
        </div>
        {/* Submit button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[var(--red)] text-[var(--light)] px-4 py-4 rounded-3xl cursor-pointer flex items-center transition-all duration-300
                hover:shadow-lg hover:transform hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
