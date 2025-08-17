import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-2 text-primary/70">
            We would love to hear from you. Reach out and our team will respond
            shortly.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-10 flex-1 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              toast({
                title: "Form not available",
                description:
                  "Please email contact@zellionhomes.com or call +260 972 841 363 to get in touch.",
              });
            }}
          >
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-md border border-primary/20 bg-white px-4 py-3 outline-none focus:border-[#0ba1ad]"
              required
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-md border border-primary/20 bg-white px-4 py-3 outline-none focus:border-[#0ba1ad]"
              required
            />
            <textarea
              placeholder="How can we help?"
              rows={5}
              className="w-full rounded-md border border-primary/20 bg-white px-4 py-3 outline-none focus:border-[#0ba1ad]"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-[#0ba1ad] px-5 py-3 font-medium text-white hover:opacity-90 active:opacity-100"
            >
              Send Message
            </button>
            <p className="text-sm text-primary/60">
              By submitting this form, you agree to our{" "}
              <Link to="/privacy-policy" className="text-[#0ba1ad] underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact details</h2>
          <div className="space-y-4 text-primary/80">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#0ba1ad]" />
              <a
                className="text-[#0ba1ad]"
                href="mailto:contact@zellionhomes.com"
              >
                contact@zellionhomes.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#0ba1ad]" />
              <a className="text-[#0ba1ad]" href="tel:18009355466">
                +260 972 841 363
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#0ba1ad]" />
              <span>Lusaka, Zambia</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
