"use client";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    to_email: "ali13nadeem@gmail.com",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      console.log("EmailJS result:", result.text);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        to_email: "ali13nadeem@gmail.com",
      });

      setStatus({
        submitted: true,
        submitting: false,
        success: true,
        error: false,
        message: "Thank you! Your message has been sent successfully.",
      });

      setTimeout(() => {
        setStatus({ ...status, submitted: false, success: false, message: "" });
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        submitted: true,
        submitting: false,
        success: false,
        error: true,
        message: "Oops! Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thanks for taking the time to reach out. How can I help you today?
          </p>
        </div>

        {status.success ? (
          <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Message Sent!
            </h3>
            <p className="text-green-700">{status.message}</p>
          </div>
        ) : status.error ? (
          <div className="max-w-2xl mx-auto bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle size={48} className="text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              Something went wrong
            </h3>
            <p className="text-red-700">{status.message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-32"
                  placeholder="Tell me about your project, goals, or questions..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="inline-flex items-center justify-center bg-[#42f584] text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  {status.submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

        <div className="mt-12 text-center text-gray-600">
          <p>You can also reach me directly at:</p>
          <a
            href="mailto:ali13nadeem@gmail.com"
            className="text-[#42f584] hover:text-blue-800 font-medium"
          >
            ali13nadeem@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
