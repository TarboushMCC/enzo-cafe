"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import SectionLabel from "@/components/ui/SectionLabel";
import MagneticButton from "@/components/ui/MagneticButton";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const locations = [
  { name: "Abu Dhabi Flagship", address: "Al Maryah Island, Abu Dhabi", phone: "+971 2 123 4567" },
  { name: "Dubai DIFC", address: "Gate Village, DIFC, Dubai", phone: "+971 4 987 6543" },
  { name: "Dubai Mall", address: "The Dubai Mall, Downtown Dubai", phone: "+971 4 456 7890" },
];

const hours = [
  { days: "Monday – Friday", time: "7:00 AM – 11:00 PM" },
  { days: "Saturday", time: "8:00 AM – 12:00 AM" },
  { days: "Sunday", time: "8:00 AM – 10:00 PM" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  location: string;
  notes: string;
}

export default function Reservation() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", date: "", time: "",
    guests: "2", location: locations[0].name, notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b pb-3 pt-6 font-sans text-sm text-cream placeholder-transparent transition-colors duration-300 outline-none ${
      focused === field ? "border-gold" : "border-stone/50 hover:border-stone"
    }`;

  const labelClass = (field: string, value: string) =>
    `absolute left-0 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none ${
      focused === field || value
        ? "top-0 text-[10px] text-gold"
        : "top-5 text-bark"
    }`;

  return (
    <section
      id="reservation"
      className="relative overflow-hidden py-32 lg:py-44"
      style={{ background: "linear-gradient(180deg, #0F0E0D 0%, #1C1917 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(61,74,50,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <SectionLabel label="Reservations" />
          <div className="mt-8">
            <RevealText delay={0.1}>
              <h2
                className="text-[clamp(3rem,7vw,6rem)] font-serif font-light leading-[0.9] text-cream"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Reserve Your
              </h2>
            </RevealText>
            <RevealText delay={0.2}>
              <h2
                className="text-[clamp(3rem,7vw,6rem)] font-serif italic font-light leading-[0.9] text-gold"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Moment
              </h2>
            </RevealText>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field} className="relative">
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          id={`res-${field}`}
                          value={form[field]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          placeholder={field}
                          required
                          className={inputClass(field)}
                          aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
                        />
                        <label htmlFor={`res-${field}`} className={labelClass(field, form[field])}>
                          {field === "name" ? "Full Name" : "Email Address"}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Row 2: Phone + Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        id="res-phone"
                        value={form.phone}
                        onChange={handleChange}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        placeholder="phone"
                        className={inputClass("phone")}
                        aria-label="Phone number"
                      />
                      <label htmlFor="res-phone" className={labelClass("phone", form.phone)}>
                        Phone Number
                      </label>
                    </div>
                    <div className="relative">
                      <select
                        name="guests"
                        id="res-guests"
                        value={form.guests}
                        onChange={handleChange}
                        onFocus={() => setFocused("guests")}
                        onBlur={() => setFocused(null)}
                        className={`${inputClass("guests")} cursor-pointer`}
                        aria-label="Number of guests"
                      >
                        {["1","2","3","4","5","6","7","8+"].map((n) => (
                          <option key={n} value={n} className="bg-espresso text-cream">{n} {n === "1" ? "Guest" : "Guests"}</option>
                        ))}
                      </select>
                      <label htmlFor="res-guests" className={labelClass("guests", form.guests)}>
                        Number of Guests
                      </label>
                    </div>
                  </div>

                  {/* Row 3: Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {(["date", "time"] as const).map((field) => (
                      <div key={field} className="relative">
                        <input
                          type={field}
                          name={field}
                          id={`res-${field}`}
                          value={form[field]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          className={`${inputClass(field)} [color-scheme:dark]`}
                          required
                          aria-label={field.charAt(0).toUpperCase() + field.slice(1)}
                        />
                        <label htmlFor={`res-${field}`} className="absolute left-0 top-0 font-sans text-[10px] tracking-[0.2em] uppercase text-gold pointer-events-none">
                          {field === "date" ? "Preferred Date" : "Preferred Time"}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Location select */}
                  <div className="relative">
                    <select
                      name="location"
                      id="res-location"
                      value={form.location}
                      onChange={handleChange}
                      onFocus={() => setFocused("location")}
                      onBlur={() => setFocused(null)}
                      className={`${inputClass("location")} cursor-pointer`}
                      aria-label="Select location"
                    >
                      {locations.map((l) => (
                        <option key={l.name} value={l.name} className="bg-espresso text-cream">{l.name}</option>
                      ))}
                    </select>
                    <label htmlFor="res-location" className="absolute left-0 top-0 font-sans text-[10px] tracking-[0.2em] uppercase text-gold pointer-events-none">
                      Location
                    </label>
                  </div>

                  {/* Notes */}
                  <div className="relative">
                    <textarea
                      name="notes"
                      id="res-notes"
                      value={form.notes}
                      onChange={handleChange}
                      onFocus={() => setFocused("notes")}
                      onBlur={() => setFocused(null)}
                      rows={3}
                      placeholder="notes"
                      className={`${inputClass("notes")} resize-none`}
                      aria-label="Special requests or notes"
                    />
                    <label htmlFor="res-notes" className={labelClass("notes", form.notes)}>
                      Special Requests
                    </label>
                  </div>

                  <div className="pt-4">
                    <MagneticButton variant="gold" as="button">
                      Confirm Reservation
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <CheckCircle size={48} className="text-gold mx-auto mb-6" />
                  </motion.div>
                  <h3
                    className="font-serif text-3xl text-cream mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Reservation Confirmed
                  </h3>
                  <p className="font-sans text-sm text-sand leading-relaxed mb-6 max-w-sm mx-auto">
                    Thank you, {form.name}. We&apos;ve received your reservation request and will confirm via email within the hour.
                  </p>
                  <span className="font-sans text-xs tracking-[0.3em] text-bark uppercase">
                    We look forward to welcoming you.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-10">
            {/* Locations */}
            <FadeIn delay={0.2} direction="right" distance={30}>
              <div>
                <h4
                  className="font-serif text-xl text-cream mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Our Locations
                </h4>
                <div className="space-y-5">
                  {locations.map((loc) => (
                    <div key={loc.name} className="group">
                      <div className="flex items-start gap-3">
                        <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-sans text-sm font-medium text-cream group-hover:text-gold transition-colors duration-300">
                            {loc.name}
                          </p>
                          <p className="font-sans text-xs text-bark mt-0.5">{loc.address}</p>
                          <div className="flex items-center gap-1.5 mt-1">
                            <Phone size={10} className="text-bark" />
                            <span className="font-sans text-xs text-bark">{loc.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="divider-gold" />

            {/* Hours */}
            <FadeIn delay={0.3} direction="right" distance={30}>
              <div>
                <h4
                  className="font-serif text-xl text-cream mb-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Opening Hours
                </h4>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.days} className="flex items-center gap-3">
                      <Clock size={12} className="text-gold flex-shrink-0" />
                      <div className="flex-1 flex justify-between items-center">
                        <span className="font-sans text-xs text-bark">{h.days}</span>
                        <span className="font-sans text-xs text-sand">{h.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="divider-gold" />

            {/* Map placeholder */}
            <FadeIn delay={0.4} direction="right" distance={30}>
              <div className="relative h-48 rounded-xl overflow-hidden glass flex items-center justify-center">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(61,74,50,0.15) 0%, rgba(28,25,23,0.8) 100%)",
                  }}
                />
                <div className="relative text-center">
                  <MapPin size={28} className="text-gold mx-auto mb-2" />
                  <span className="font-sans text-xs tracking-[0.3em] text-bark uppercase">
                    Find Us in UAE
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
