import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (loading) return;

    const form = formRef.current;

    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();
    const message = form.message.value.trim();

    if (name.length < 2) {
      toast.error("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      toast.error("Message should be at least 10 characters.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");

      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 sm:mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl italic font-light glow-text">
          Get in <span className="italic">touch</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base glow-text">
          Whether you have a project in mind, a question, or are looking to hire
          a developer, I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 rounded-2xl p-6 sm:p-8 lg:p-10"
          style={{
            background: "rgba(15,15,15,0.6)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "rgba(255,255,255,0.1) 0px 1px 2px inset, rgba(0,0,0,0.6) 0px 30px 60px",
          }}
        >
          {/* Left */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 glow-text">
              Let's build something meaningful
            </h3>

            <p className="text-gray-300 leading-relaxed mb-8">
              Whether you're looking to build a product, hire a developer, or
              simply have a question, I'd love to hear from you.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-white font-medium">Email:</span>{" "}
                <a
                  href="mailto:shivamgautama82@gmail.com"
                  className="hover:text-white"
                >
                  shivamgautama82@gmail.com
                </a>
              </p>

              <p>
                <span className="text-white font-medium">Location:</span> India
                (Remote-friendly)
              </p>

              <p>
                <span className="text-white font-medium">Availability:</span>{" "}
                Monday – Friday, 10am – 7pm IST
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>

              <input
                type="text"
                name="from_name"
                disabled={loading}
                placeholder="Emily Blunt"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Your Email Address
              </label>

              <input
                type="email"
                name="from_email"
                disabled={loading}
                placeholder="name@example.com"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                Message
              </label>

              <textarea
                rows={6}
                name="message"
                disabled={loading}
                placeholder="Tell me about your project, timeline, or how I can help..."
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-white/30 disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-lg transition hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
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
                    />

                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>

                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;