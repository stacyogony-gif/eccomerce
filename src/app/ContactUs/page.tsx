"use client";

import React, { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  ChevronDown,
  Phone,
  Clock,
} from "lucide-react";

/* ─────────────────────────────── CONSTANTS & FAQ DATA ─────────────────────────────── */
const subjectOptions = [
  "General Inquiry",
  "Order Status",
  "Returns & Refunds",
  "Product Support",
  "Other",
];

const faqItems = [
  {
    id: "faq-1",
    question: "How long does delivery take?",
    answer: "Delivery usually takes 1–3 business days.",
  },
  {
    id: "faq-2",
    question: "What payment methods do you accept?",
    answer: "We accept M-Pesa, Visa, and Mastercard.",
  },
  {
    id: "faq-3",
    question: "Can I return a product?",
    answer:
      "Yes, products can be returned within 7 days if they meet our return policy.",
  },
  {
    id: "faq-4",
    question: "How can I track my order?",
    answer:
      "You can track your order using the tracking number sent to your email or phone.",
  },
  {
    id: "faq-5",
    question: "How can I contact customer support?",
    answer:
      "You can reach us through phone, email, or by filling out the contact form on this page.",
  },
];

/* ─────────────────────────────── ACCORDION ITEM ───────────────────────── */
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-primary/40 shadow-md shadow-primary/10 bg-card"
          : "border-border hover:border-primary/30 bg-card"
      }`}
    >
      <button
        id={item.id}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-panel`}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
      >
        <span
          className={`font-semibold text-sm transition-colors duration-200 ${
            isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
          }`}
        >
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-primary text-primary-foreground rotate-180"
              : "bg-primary/10 text-primary rotate-0"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {/* Animated panel */}
      <div
        id={`${item.id}-panel`}
        role="region"
        aria-labelledby={item.id}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────── CONTACT INFO CARD ────────────────────── */
function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm text-muted-foreground mt-0.5 leading-snug">{value}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────── PAGE ──────────────────────────────────── */
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Contact Form Submitted:", form);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const toggleFaq = (id: string) =>
    setOpenFaq((prev) => (prev === id ? null : id));

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* ── Header Banner ────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-12 pb-8 text-center px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#6366f1] to-[#4f46e5] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
            Contact Support
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We&apos;re Here to Help
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Have questions about your order, products, or shipping? Reach out to our team anytime.
          </p>
        </div>
      </section>

      {/* ── Main Content ────────────────────────────────────────────── */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
            {/* ── Left: Info sidebar ──────────────────────────────── */}
            <aside className="space-y-8 lg:col-span-1">
              <div className="bg-card text-card-foreground rounded-3xl border border-border p-6 shadow-sm space-y-5">
                <h3 className="font-semibold text-base text-foreground pb-2 border-b border-border">
                  Get in Touch
                </h3>
                <div className="space-y-5 pt-1">
                  <InfoCard
                    icon={Mail}
                    label="Email"
                    value="hello@maisystore.co.ke"
                  />
                  <InfoCard
                    icon={Phone}
                    label="Phone"
                    value="+254 700 000 000"
                  />
                  <InfoCard
                    icon={Clock}
                    label="Support Hours"
                    value="Mon – Fri, 8 AM – 6 PM EAT"
                  />
                </div>
              </div>
            </aside>

            {/* ── Right: Form + FAQ ───────────────────────────────── */}
            <div className="lg:col-span-2 space-y-12">
              {/* ── Contact Form ──────────────────────────────────── */}
              <div
                id="contact-form-container"
                className="bg-card text-card-foreground rounded-3xl border border-border shadow-sm overflow-hidden"
              >
                {/* Form header */}
                <div className="px-7 pt-7 pb-5 border-b border-border">
                  <h2 className="text-xl font-bold text-foreground">
                    Send us a message
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We&apos;re here to help and answer any question you might have.
                  </p>
                </div>

                {submitted ? (
                  /* ── Success State ───────────────────────────────── */
                  <div className="px-7 py-10 flex flex-col items-center text-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Send className="h-7 w-7" />
                    </div>
                    <div className="w-full max-w-md">
                      <h3 className="text-lg font-bold text-foreground">
                        Message sent!
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Thanks for reaching out,{" "}
                        <span className="font-semibold text-primary">
                          {form.name || "there"}
                        </span>
                        . We&apos;ll get back to you within one business day.
                      </p>
                    </div>

                    {/* Submitted details preview */}
                    <div className="w-full max-w-md bg-muted/40 border border-border rounded-2xl p-4 text-left space-y-2 text-xs">
                      <p className="font-semibold text-muted-foreground uppercase tracking-wide text-[10px]">
                        Submitted Details
                      </p>
                      {form.subject && (
                        <div>
                          <span className="font-medium text-muted-foreground">Subject: </span>
                          <span className="font-semibold text-foreground">{form.subject}</span>
                        </div>
                      )}
                      {form.email && (
                        <div>
                          <span className="font-medium text-muted-foreground">Email: </span>
                          <span className="text-foreground">{form.email}</span>
                        </div>
                      )}
                      {form.message && (
                        <div>
                          <span className="font-medium text-muted-foreground">Message: </span>
                          <p className="mt-0.5 text-foreground bg-card p-2.5 rounded-xl border border-border whitespace-pre-wrap">
                            {form.message}
                          </p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-2 text-xs font-semibold text-primary hover:underline"
                    >
                      Send another message →
                    </button>
                  </div>
                ) : (
                  /* ── Form ────────────────────────────────────────── */
                  <form
                    onSubmit={handleSubmit}
                    className="px-7 py-7 space-y-5"
                    noValidate
                  >
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-semibold text-foreground uppercase tracking-wide"
                        >
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full pl-9 pr-4 py-2.5 text-sm bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold text-foreground uppercase tracking-wide"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="w-full pl-9 pr-4 py-2.5 text-sm bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-semibold text-foreground uppercase tracking-wide"
                      >
                        Subject
                      </label>
                      <div className="relative">
                        <select
                          id="contact-subject"
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full appearance-none pl-4 pr-10 py-2.5 text-sm bg-muted/50 border border-border rounded-xl text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        >
                          <option value="" disabled className="bg-card text-foreground">
                            Select a subject
                          </option>
                          {subjectOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-card text-foreground">
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold text-foreground uppercase tracking-wide"
                      >
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className="w-full pl-9 pr-4 py-2.5 text-sm bg-muted/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-xl py-2.5 text-sm shadow-sm shadow-primary/25 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-70 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
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
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* ── FAQ Accordion ────────────────────────────────── */}
              <div id="faq-section">
                {/* Section heading */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    FAQs
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Frequently Asked Questions
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Can&apos;t find what you&apos;re looking for? Drop us a message above.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqItems.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isOpen={openFaq === item.id}
                      onToggle={() => toggleFaq(item.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
