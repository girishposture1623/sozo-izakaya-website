import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CircleCheck,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  TriangleAlert,
  User,
  Users,
} from "lucide-react";
import PageHero from "../components/PageHero";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import { SITE } from "../data/site";
import { EASE } from "../lib/motion";

/* ------------------------------ data -------------------------------- */

const TIME_SLOTS = {
  Lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM"],
  Dinner: ["6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"],
} as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

type Confirmation = FormState & { ref: string };

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
};

function todayIso(): string {
  const d = new Date();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${mm}-${dd}`;
}

function validate(f: FormState): Errors {
  const errors: Errors = {};

  if (f.name.trim().length < 2) errors.name = "Please enter your full name.";

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim()))
    errors.email = "Enter a valid email address.";

  const digits = f.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13)
    errors.phone = "Enter a valid phone number (10+ digits).";

  if (!f.date) errors.date = "Choose a date for your visit.";
  else if (f.date < todayIso()) errors.date = "The date can't be in the past.";

  if (!f.time) errors.time = "Pick a time slot.";

  const guests = Number(f.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 12)
    errors.guests = "Between 1 and 12 guests.";

  if (f.requests.length > 280)
    errors.requests = "Please keep requests under 280 characters.";

  return errors;
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/* --------------------------- field chrome --------------------------- */

function Field({
  label,
  htmlFor,
  icon,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  icon?: ReactNode;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-taupe"
      >
        {icon}
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (error?: string) =>
  `w-full rounded-lg border bg-coal px-4 py-3 text-sm text-cream placeholder:text-taupe/50 transition-colors focus:border-aka focus:outline-none ${
    error ? "border-red-500/60" : "border-line"
  }`;

/* ------------------------------- page ------------------------------- */

export default function Reservations() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    const ref = `SZ-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setConfirmation({ ...form, ref });
  };

  const reset = () => {
    setForm(INITIAL);
    setErrors({});
    setConfirmation(null);
  };

  return (
    <>
      <PageHero
        kicker="Reservations"
        jp="予約"
        title="Save your seat at the counter."
        copy="Tell us when you're coming and we'll have the lanterns lit. Submitting sends a demo request only — details below."
        image="/images/table.jpg"
        alt="A candle-lit table set for two"
      />

      <section className="container-x grid gap-10 py-16 lg:grid-cols-5 lg:py-24">
        {/* ------------------------- Form / confirmation ------------------------- */}
        <div className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {confirmation ? (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="rounded-3xl border border-line/70 bg-smoke/60 p-6 sm:p-10"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CircleCheck size={30} aria-hidden="true" />
                </span>
                <h2 className="mt-6 font-display text-4xl font-medium text-cream">
                  Request received.
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-cream/65">
                  Thanks, {confirmation.name.split(" ")[0]} — here's a summary
                  of your demo reservation request.
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl border border-line bg-coal p-6 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
                      Reference
                    </dt>
                    <dd className="mt-1 font-mono text-base text-gold">{confirmation.ref}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
                      Party
                    </dt>
                    <dd className="mt-1 text-cream">
                      {confirmation.guests}{" "}
                      {Number(confirmation.guests) === 1 ? "guest" : "guests"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
                      Date
                    </dt>
                    <dd className="mt-1 text-cream">{formatDate(confirmation.date)}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
                      Time
                    </dt>
                    <dd className="mt-1 text-cream">{confirmation.time}</dd>
                  </div>
                  {confirmation.requests.trim() && (
                    <div className="sm:col-span-2">
                      <dt className="text-[10px] font-bold uppercase tracking-[0.25em] text-taupe">
                        Special requests
                      </dt>
                      <dd className="mt-1 text-cream/80">{confirmation.requests}</dd>
                    </div>
                  )}
                </dl>

                <p className="mt-6 flex items-start gap-2 rounded-xl border border-gold/30 bg-gold/[0.07] p-4 text-xs leading-relaxed text-gold/90">
                  <TriangleAlert size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
                  This is a demo confirmation only — no booking has been made
                  with the restaurant. To reserve a real table at Sozo Izakaya,
                  please call {SITE.phoneDisplay}.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={SITE.phoneHref} icon={<Phone size={14} aria-hidden="true" />}>
                    Call the Restaurant
                  </Button>
                  <Button variant="outline" onClick={reset}>
                    Make Another Request
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                noValidate
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="rounded-3xl border border-line/70 bg-smoke/60 p-6 sm:p-10"
              >
                <h2 className="font-display text-3xl font-medium text-cream">
                  Reservation details
                </h2>
                <p className="mt-2 text-sm text-cream/55">
                  Fields marked with a red note need attention before
                  submitting.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    htmlFor="res-name"
                    icon={<User size={13} aria-hidden="true" />}
                    error={errors.name}
                  >
                    <input
                      id="res-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Aisha Kapoor"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputCls(errors.name)}
                    />
                  </Field>

                  <Field
                    label="Email"
                    htmlFor="res-email"
                    icon={<Mail size={13} aria-hidden="true" />}
                    error={errors.email}
                  >
                    <input
                      id="res-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputCls(errors.email)}
                    />
                  </Field>

                  <Field
                    label="Phone"
                    htmlFor="res-phone"
                    icon={<Phone size={13} aria-hidden="true" />}
                    error={errors.phone}
                  >
                    <input
                      id="res-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputCls(errors.phone)}
                    />
                  </Field>

                  <Field
                    label="Guests"
                    htmlFor="res-guests"
                    icon={<Users size={13} aria-hidden="true" />}
                    error={errors.guests}
                  >
                    <select
                      id="res-guests"
                      value={form.guests}
                      onChange={(e) => update("guests", e.target.value)}
                      className={inputCls(errors.guests)}
                    >
                      {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((n) => (
                        <option key={n} value={n}>
                          {n} {n === "1" ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Date"
                    htmlFor="res-date"
                    icon={<CalendarDays size={13} aria-hidden="true" />}
                    error={errors.date}
                  >
                    <input
                      id="res-date"
                      type="date"
                      min={todayIso()}
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      className={`${inputCls(errors.date)} [color-scheme:dark]`}
                    />
                  </Field>

                  <Field
                    label="Time"
                    htmlFor="res-time"
                    icon={<Clock size={13} aria-hidden="true" />}
                    error={errors.time}
                  >
                    <select
                      id="res-time"
                      value={form.time}
                      onChange={(e) => update("time", e.target.value)}
                      className={inputCls(errors.time)}
                    >
                      <option value="" disabled>
                        Select a time
                      </option>
                      {Object.entries(TIME_SLOTS).map(([group, slots]) => (
                        <optgroup key={group} label={group}>
                          {slots.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </Field>

                  <div className="sm:col-span-2">
                    <Field
                      label="Special requests (optional)"
                      htmlFor="res-requests"
                      icon={<MessageSquare size={13} aria-hidden="true" />}
                      error={errors.requests}
                    >
                      <textarea
                        id="res-requests"
                        rows={4}
                        maxLength={280}
                        placeholder="Anniversaries, allergies, counter seats…"
                        value={form.requests}
                        onChange={(e) => update("requests", e.target.value)}
                        className={`${inputCls(errors.requests)} resize-none`}
                      />
                    </Field>
                    <p className="mt-1.5 text-right text-[11px] text-taupe">
                      {form.requests.length}/280
                    </p>
                  </div>
                </div>

                <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
                  Submit Reservation
                </Button>
                <p className="mt-4 text-[11px] leading-relaxed text-taupe">
                  Demo form — submitting shows a sample confirmation on this
                  page. Nothing is sent to the restaurant, and no real booking
                  or payment is made.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* -------------------------------- Aside -------------------------------- */}
        <aside className="space-y-6 lg:col-span-2">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-line/70 bg-smoke/60 p-7">
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-cream">
                <Clock size={20} className="text-aka" aria-hidden="true" />
                Good to know
              </h3>
              <ul className="mt-5 space-y-4 text-sm text-cream/65">
                {SITE.hours.map((h) => (
                  <li key={h.days}>
                    <p className="font-semibold text-cream/85">{h.days}</p>
                    {h.slots.map((s) => (
                      <p key={s} className="text-taupe">
                        {s}
                      </p>
                    ))}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line/60 pt-4 text-[11px] leading-relaxed text-taupe">
                {SITE.hoursNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-line/70 bg-smoke/60 p-7">
              <h3 className="flex items-center gap-3 font-display text-2xl font-semibold text-cream">
                <Phone size={20} className="text-aka" aria-hidden="true" />
                Prefer to call?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/65">
                The quickest way to a real table — ring the restaurant and
                the team will sort you out.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-4 block font-display text-2xl font-semibold text-gold transition-colors hover:text-cream"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-2xl border border-gold/30 bg-gold/[0.07] p-7">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-gold">
                <TriangleAlert size={19} aria-hidden="true" />
                Demo notice
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-gold/85">
                This reservation form is a front-end demonstration. It does
                not contact Sozo Izakaya, create a booking, or process any
                payment — it simply validates your input and shows a sample
                confirmation.
              </p>
            </div>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
