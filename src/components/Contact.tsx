'use client';

import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, Loader2, ArrowUpRight, MapPin, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [payloadCopied, setPayloadCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'dispatched'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const realEmail = 'adityasheregar2006@gmail.com';
  const realPhone = '+91 8660046208';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(realEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(realPhone);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const copyPayload = async () => {
    try {
      const payload = `To: ${realEmail}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
      await navigator.clipboard.writeText(payload);
      setPayloadCopied(true);
      setTimeout(() => setPayloadCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or project inquiry';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('loading');

    // Build the mailto protocol payload
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Aditya,\n\n${formData.message.trim()}\n\n---\nSender: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    const mailtoUri = `mailto:${realEmail}?subject=${subject}&body=${body}`;
    setLastMailtoUrl(mailtoUri);

    // Briefly show the pending state, then trigger the mail client and show honest dispatch guidance
    setTimeout(() => {
      setFormStatus('dispatched');
      window.location.href = mailtoUri;
    }, 450);
  };

  const resetForm = () => {
    setFormStatus('idle');
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative border-t border-[#262626] bg-[#171717] scroll-mt-20" aria-label="Contact Section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Reach Column (5 cols) - Compact, clearly spaced, aligned with top of form */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {/* Label and Heading */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#a31c1b] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a31c1b]" />
                <span>Initiate Contact</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#f4f4f7] tracking-tight leading-tight">
                Let&apos;s Build Something Resilient.
              </h2>
            </div>

            {/* Intro Narrative */}
            <p className="text-xs sm:text-sm text-[#9292a4] leading-relaxed">
              Whether you are looking to collaborate on machine learning systems, privacy-first software, or discuss software engineering opportunities, I&apos;m always open to connecting.
            </p>

            {/* Quick Email Copy Tile */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-[#14291e] bg-[#06110c] space-y-1.5 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8a9a] block font-semibold">
                Primary Direct Email
              </span>
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <a
                  href={`mailto:${realEmail}`}
                  className="font-mono text-xs sm:text-sm text-[#f4f4f7] hover:text-[#a31c1b] transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] rounded-sm"
                >
                  {realEmail}
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626] text-xs font-mono text-[#b0b0c4] hover:text-white hover:border-[#a31c1b] hover:bg-[#a31c1b] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[36px]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-[#ffffff]" />
                      <span className="text-[#ffffff]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Phone Copy Tile */}
            <div className="p-3.5 sm:p-4 rounded-xl border border-[#14291e] bg-[#06110c] space-y-1.5 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8a9a] block font-semibold">
                Direct Contact Phone
              </span>
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <a
                  href={`tel:${realPhone.replace(/\s+/g, '')}`}
                  className="font-mono text-xs sm:text-sm text-[#f4f4f7] hover:text-[#a31c1b] transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] rounded-sm"
                >
                  {realPhone}
                </a>
                <button
                  onClick={copyPhone}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] border border-[#262626] text-xs font-mono text-[#b0b0c4] hover:text-white hover:border-[#a31c1b] hover:bg-[#a31c1b] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[36px]"
                  aria-label="Copy phone number"
                >
                  {phoneCopied ? (
                    <>
                      <Check size={13} className="text-[#ffffff]" />
                      <span className="text-[#ffffff]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Profiles & Location */}
            <div className="space-y-2">
              <a
                href="https://github.com/adi202023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#14291e] bg-[#06110c] hover:border-[#a31c1b] hover:bg-[#0a1811] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[44px]"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#d0d0e0]">
                  <Github size={15} className="text-[#8e8e9f] group-hover:text-[#a31c1b] transition-colors" />
                  <span className="font-mono">github.com/adi202023</span>
                </div>
                <ArrowUpRight size={13} className="text-[#646476] group-hover:text-[#f4f4f7] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-sheregar-4484b2326/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#14291e] bg-[#06110c] hover:border-[#a31c1b] hover:bg-[#0a1811] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] min-h-[44px]"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#d0d0e0]">
                  <Linkedin size={15} className="text-[#8e8e9f] group-hover:text-[#a31c1b] transition-colors" />
                  <span className="font-mono">linkedin.com/in/aditya-sheregar-4484b2326</span>
                </div>
                <ArrowUpRight size={13} className="text-[#646476] group-hover:text-[#f4f4f7] transition-colors" />
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-[#14291e] bg-[#06110c] text-xs font-mono text-[#8a8a9a]">
                <MapPin size={13} className="text-[#a31c1b] shrink-0" />
                <span>Bengaluru, Karnataka, India 562112</span>
              </div>
            </div>
          </div>

          {/* Direct Message Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 rounded-2xl border border-[#14291e] bg-[#06110c] shadow-xl space-y-6">
              <div className="border-b border-[#14291e] pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#f4f4f7]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#8a8a9a] font-mono mt-0.5">
                  Fills and triggers your verified email client directly to Aditya.
                </p>
              </div>

              {formStatus === 'dispatched' ? (
                <div className="p-5 sm:p-6 rounded-xl border border-[#14291e] bg-[#0a1811] space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#a31c1b]/20 border border-[#a31c1b] text-white flex items-center justify-center shrink-0">
                      <Send size={14} className="text-[#a31c1b]" />
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#f4f4f7]">
                        Mail Client Opened
                      </h4>
                      <p className="text-xs text-[#9a9ab0] leading-relaxed">
                        Your message was encoded and routed to your email app. If your email application didn&apos;t open automatically, you can send it manually:
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#06110c] border border-[#14291e] space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#8a8a9a]">Recipient:</span>
                      <span className="text-[#f4f4f7] font-semibold">{realEmail}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#8a8a9a]">From:</span>
                      <span className="text-[#f4f4f7]">{formData.name} ({formData.email})</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {lastMailtoUrl && (
                      <a
                        href={lastMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#a31c1b] text-white font-mono font-bold text-xs hover:bg-[#bd2423] transition-colors min-h-[40px]"
                      >
                        <Send size={12} />
                        <span>Re-open Email App</span>
                      </a>
                    )}
                    <button
                      onClick={copyPayload}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#171717] border border-[#262626] text-xs font-mono text-[#e0e0ea] hover:border-[#a31c1b] hover:text-white transition-colors min-h-[40px]"
                    >
                      {payloadCopied ? <Check size={12} className="text-white" /> : <Copy size={12} />}
                      <span>{payloadCopied ? 'Payload Copied!' : 'Copy Form Content'}</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-mono text-[#8a8a9a] hover:text-white transition-colors min-h-[40px]"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#a0a0b2] font-semibold">
                      Your Name <span className="text-[#a31c1b]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-[#0a1811] border text-base sm:text-sm text-[#f4f4f7] placeholder-[#555566] transition-all focus:outline-none focus:ring-2 focus:ring-[#a31c1b] focus:border-[#a31c1b] ${
                        errors.name ? 'border-[#a31c1b] ring-1 ring-[#a31c1b]' : 'border-[#14291e]'
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-[#a31c1b] font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#a0a0b2] font-semibold">
                      Email Address <span className="text-[#a31c1b]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="elena@company.com"
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-[#0a1811] border text-base sm:text-sm text-[#f4f4f7] placeholder-[#555566] transition-all focus:outline-none focus:ring-2 focus:ring-[#a31c1b] focus:border-[#a31c1b] ${
                        errors.email ? 'border-[#a31c1b] ring-1 ring-[#a31c1b]' : 'border-[#14291e]'
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-[#a31c1b] font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#a0a0b2] font-semibold">
                      Message / Project Details <span className="text-[#a31c1b]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your project, timeline, or engineering challenge..."
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-lg bg-[#0a1811] border text-base sm:text-sm text-[#f4f4f7] placeholder-[#555566] transition-all focus:outline-none focus:ring-2 focus:ring-[#a31c1b] focus:border-[#a31c1b] resize-none ${
                        errors.message ? 'border-[#a31c1b] ring-1 ring-[#a31c1b]' : 'border-[#14291e]'
                      }`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-[#a31c1b] font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#a31c1b] text-[#ffffff] font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#bd2423] active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a31c1b] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(163,28,27,0.35)] min-h-[44px]"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 size={14} className="animate-spin text-[#ffffff]" />
                        <span>Encoding &amp; Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={14} className="text-[#ffffff]" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] font-mono text-[#6c6c80] text-center pt-1">
                    Direct mailto integration · No tracking or middleman server storage
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
