'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Loader2, ArrowUpRight, MapPin, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [payloadCopied, setPayloadCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'dispatched'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [lastMailtoUrl, setLastMailtoUrl] = useState('');

  const realEmail = 'adityasheregar2006@gmail.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(realEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
    <section id="contact" className="py-16 sm:py-24 relative border-t border-[#181824]" aria-label="Contact Section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Reach Column (5 cols) - Compact, clearly spaced, aligned with top of form */}
          <div className="lg:col-span-5 space-y-5">
            {/* Label and Heading */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#d4ff32]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32]" />
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
            <div className="p-4 rounded-xl border border-[#242436] bg-[#0c0c12] space-y-1.5 shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#767688] block">
                Primary Direct Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${realEmail}`}
                  className="font-mono text-xs sm:text-sm text-[#f4f4f7] hover:text-[#d4ff32] transition-colors truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {realEmail}
                </a>
                <button
                  onClick={copyEmail}
                  className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161622] border border-[#28283a] text-xs font-mono text-[#b0b0c4] hover:text-[#d4ff32] hover:border-[#d4ff32] active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-[#d4ff32]" />
                      <span className="text-[#d4ff32]">Copied</span>
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
            <div className="space-y-2.5">
              <a
                href="https://github.com/adi202023"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#1f1f2e] bg-[#0d0d14] hover:border-[#383852] hover:bg-[#12121a] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#d0d0e0]">
                  <Github size={15} className="text-[#8e8e9f] group-hover:text-[#d4ff32] transition-colors" />
                  <span className="font-mono">github.com/adi202023</span>
                </div>
                <ArrowUpRight size={13} className="text-[#646476] group-hover:text-[#f4f4f7] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-sheregar-4484b2326/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#1f1f2e] bg-[#0d0d14] hover:border-[#383852] hover:bg-[#12121a] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#d0d0e0]">
                  <Linkedin size={15} className="text-[#8e8e9f] group-hover:text-[#d4ff32] transition-colors" />
                  <span className="font-mono">linkedin.com/in/aditya-sheregar-4484b2326</span>
                </div>
                <ArrowUpRight size={13} className="text-[#646476] group-hover:text-[#f4f4f7] transition-colors" />
              </a>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg border border-[#1a1a24] text-xs font-mono text-[#767688]">
                <MapPin size={13} className="text-[#d4ff32]" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Contact Message Form Column (7 cols) - Tightened padding & real working dispatch */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[#232332] bg-[#0c0c14] p-6 sm:p-8 shadow-xl relative">
              <h3 className="text-lg sm:text-xl font-bold text-[#f4f4f7] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs font-mono text-[#78788c] mb-6">
                Fill in the details below. Messages are formatted directly to Aditya.
              </p>

              {formStatus === 'dispatched' ? (
                /* Honest, clear dispatch state (never fake success) */
                <div className="p-6 text-center space-y-4 rounded-xl border border-[#2c2c40] bg-[#101018]">
                  <div className="w-11 h-11 rounded-full bg-[#d4ff32]/10 border border-[#d4ff32]/35 flex items-center justify-center text-[#d4ff32] mx-auto">
                    <Mail size={20} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-base font-bold text-[#f4f4f7]">
                      Launching Your Email Client
                    </h4>
                    <p className="text-xs text-[#a0a0b2] max-w-md mx-auto leading-relaxed">
                      Your message has been composed and addressed to{' '}
                      <span className="text-[#d4ff32] font-mono">{realEmail}</span>. Please click &ldquo;Send&rdquo; in your mail app to transmit.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                    {lastMailtoUrl && (
                      <a
                        href={lastMailtoUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#d4ff32] text-[#070709] font-mono font-bold text-xs hover:bg-[#e0ff54] transition-all"
                      >
                        <ArrowUpRight size={13} />
                        <span>Re-open Email App</span>
                      </a>
                    )}
                    <button
                      onClick={copyPayload}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#161622] border border-[#2b2b3c] text-xs font-mono text-[#dcdce8] hover:border-[#d4ff32] transition-colors"
                    >
                      {payloadCopied ? (
                        <>
                          <Check size={13} className="text-[#d4ff32]" />
                          <span>Copied Body</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Body</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-3.5 py-2 rounded-md text-xs font-mono text-[#828296] hover:text-[#f4f4f7] transition-colors"
                    >
                      Draft Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name field */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#8b8b9e] block">
                        Your Name
                      </label>
                      {errors.name && (
                        <span className="text-[11px] font-mono text-[#ff5555] flex items-center gap-1">
                          <AlertCircle size={11} />
                          <span>{errors.name}</span>
                        </span>
                      )}
                    </div>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Elena Rostova"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111119] border text-xs sm:text-sm text-[#f4f4f7] placeholder-[#4e4e60] transition-colors focus:outline-none ${
                        errors.name
                          ? 'border-[#ff5555] focus:border-[#ff5555] focus:ring-1 focus:ring-[#ff5555]'
                          : 'border-[#232332] focus:border-[#d4ff32] focus:ring-1 focus:ring-[#d4ff32]'
                      }`}
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#8b8b9e] block">
                        Email Address
                      </label>
                      {errors.email && (
                        <span className="text-[11px] font-mono text-[#ff5555] flex items-center gap-1">
                          <AlertCircle size={11} />
                          <span>{errors.email}</span>
                        </span>
                      )}
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="elena@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111119] border text-xs sm:text-sm text-[#f4f4f7] placeholder-[#4e4e60] transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-[#ff5555] focus:border-[#ff5555] focus:ring-1 focus:ring-[#ff5555]'
                          : 'border-[#232332] focus:border-[#d4ff32] focus:ring-1 focus:ring-[#d4ff32]'
                      }`}
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#8b8b9e] block">
                        Message / Project Details
                      </label>
                      {errors.message && (
                        <span className="text-[11px] font-mono text-[#ff5555] flex items-center gap-1">
                          <AlertCircle size={11} />
                          <span>{errors.message}</span>
                        </span>
                      )}
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your project, timeline, or engineering challenge..."
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#111119] border text-xs sm:text-sm text-[#f4f4f7] placeholder-[#4e4e60] transition-colors resize-none focus:outline-none ${
                        errors.message
                          ? 'border-[#ff5555] focus:border-[#ff5555] focus:ring-1 focus:ring-[#ff5555]'
                          : 'border-[#232332] focus:border-[#d4ff32] focus:ring-1 focus:ring-[#d4ff32]'
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#d4ff32] text-[#070709] font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 hover:bg-[#e0ff54] hover:shadow-[0_0_16px_rgba(212,255,50,0.25)] active:scale-[0.99] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        <span>Preparing Transmission...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-[#585868] text-center pt-1">
                    Opens your email app with pre-filled message routed to {realEmail}
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
