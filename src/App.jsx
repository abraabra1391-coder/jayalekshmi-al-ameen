import React, { useState, useEffect, useRef, useMemo } from 'react';

// Custom icons matching Lucide icons from original build
function MenuIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-menu ${className}`} aria-hidden="true">
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-x ${className}`} aria-hidden="true">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function MapPinIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-map-pin ${className}`} aria-hidden="true">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-clock ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CalendarDaysIcon({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-calendar-days ${className}`} aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Venue", href: "#venue" }
];

const WEDDING_DATA = {
  bride: {
    name: "Jayalekshmi",
    fullName: "Jayalekshmi T. S.",
    father: "Mr. Sundaran G.",
    mother: "Mrs. S. Thankamoni",
    image: "/images/bride.jpg"
  },
  groom: {
    name: "Al Ameen",
    fullName: "Al Ameen",
    father: "Mr. Abdul Azeez (Late)",
    mother: "Mrs. Nusaifa Beevi (Late)",
    image: "/images/groom.jpg"
  },
  date: "2026-12-13T12:00:00+05:30",
  dateLabel: "SUNDAY • 13 • DECEMBER • 2026",
  shortDateLabel: "13 • DECEMBER • 2026",
  timeLabel: "12:00 PM – 12:30 PM",
  venue: {
    name: "TG Auditorium",
    address: "TG Auditorium",
    city: "Puthuvettinmele, Perukavu, Trivandrum",
    maps: "https://www.google.com/maps/search/?api=1&query=TG+Auditorium+Puthuvettinmele+Perukavu+Trivandrum"
  }
};

function Petals({ count = 12 }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    setPetals(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: 100 * Math.random(),
        size: 8 + 10 * Math.random(),
        duration: 12 + 12 * Math.random(),
        delay: -(20 * Math.random()),
        drift: `${(Math.random() - 0.5) * 160}px`,
        opacity: 0.25 + 0.4 * Math.random()
      }))
    );
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map(p => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--petal-drift": p.drift,
            "--petal-opacity": p.opacity
          }}
        />
      ))}
    </div>
  );
}

function OrnamentDivider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/70 sm:w-24"></span>
      <svg width="46" height="16" viewBox="0 0 46 16" fill="none" className="text-gold">
        <path d="M23 2c2.5 3 5 4 8 4-3 0-5.5 1-8 4-2.5-3-5-4-8-4 3 0 5.5-1 8-4Z" fill="currentColor" fillOpacity="0.9"></path>
        <circle cx="4" cy="8" r="1.6" fill="currentColor"></circle>
        <circle cx="42" cy="8" r="1.6" fill="currentColor"></circle>
        <path d="M9 8h6M31 8h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"></path>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/70 sm:w-24"></span>
    </div>
  );
}

function SectionBadge({ children }) {
  return <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold">{children}</span>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-gold/20 bg-ivory/85 backdrop-blur-md" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-serif text-xl tracking-[0.2em] text-burgundy">
          J <span className="text-gold">&amp;</span> A
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="group relative font-sans text-xs uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:text-burgundy">
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setMenuOpen(prev => !prev)}
          className="text-burgundy md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <MenuIcon className="size-6" />
        </button>
      </nav>
      <div className={`fixed inset-0 z-50 flex flex-col paper-texture transition-opacity duration-500 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
        <div className="flex items-center justify-between px-6 py-4">
          <span className="font-serif text-xl tracking-[0.2em] text-burgundy">
            J <span className="text-gold">&amp;</span> A
          </span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="text-burgundy"
            aria-label="Close menu"
          >
            <XIcon className="size-7" />
          </button>
        </div>
        <ul className="flex flex-1 flex-col items-center justify-center gap-10">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl tracking-wide text-burgundy"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function Hero({ onOpenInvitation }) {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden paper-texture">
      <div className="absolute inset-0 arabesque opacity-70" aria-hidden="true"></div>
      <img
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width="520"
        height="520"
        className="blend-floral pointer-events-none absolute -left-8 -top-6 w-40 select-none sm:w-56 md:w-72 lg:w-80"
        style={{ color: "transparent" }}
      />
      <img
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width="520"
        height="520"
        className="blend-floral pointer-events-none absolute -right-8 -top-6 w-40 -scale-x-100 select-none sm:w-56 md:w-72 lg:w-80"
        style={{ color: "transparent" }}
      />
      <img
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width="520"
        height="520"
        className="blend-floral pointer-events-none absolute -bottom-6 -left-8 w-36 -scale-y-100 select-none opacity-90 sm:w-52 md:w-64 lg:hidden"
        style={{ color: "transparent" }}
      />
      <Petals count={10} />
      <div className="pointer-events-none absolute inset-4 border border-gold/25 sm:inset-6 md:inset-8"></div>
      <div className="pointer-events-none absolute inset-5 border border-gold/15 sm:inset-8 md:inset-10"></div>
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center px-8 pb-16 pt-24 text-center md:pt-28">
        <OrnamentDivider className="mt-4" />
        <p className="mt-8 font-sans text-xs uppercase tracking-[0.5em] text-foreground/70">
          The Wedding Of
        </p>
        <div className="mt-4 flex flex-col items-center">
          <h1 className="font-serif text-6xl font-light capitalize leading-none text-burgundy sm:text-7xl md:text-8xl">
            {WEDDING_DATA.bride.name}
          </h1>
          <span className="my-2 font-serif text-4xl italic text-gold sm:text-5xl">&amp;</span>
          <h1 className="font-serif text-6xl font-light capitalize leading-none text-burgundy sm:text-7xl md:text-8xl">
            Al Ameen
          </h1>
        </div>
        <p className="mt-8 max-w-md text-pretty font-serif text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
          Together with their families, jayalekshmi &amp; al ameen invite you to their wedding on 13 december 2026 in
        </p>
        <div className="mt-9 flex flex-col items-center gap-1.5">
          <p className="font-sans text-sm uppercase tracking-[0.4em] text-burgundy sm:text-base">
            {WEDDING_DATA.dateLabel}
          </p>
          <span className="h-px w-14 bg-gold/50"></span>
          <p className="mt-1 font-serif text-lg text-foreground/80">
            {WEDDING_DATA.venue.name}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-foreground/60">
            {WEDDING_DATA.venue.city}
          </p>
        </div>
        <a
          href="#invitation"
          onClick={e => {
            e.preventDefault();
            onOpenInvitation();
          }}
          className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-sm border border-gold bg-burgundy px-9 py-4 font-sans text-xs uppercase tracking-[0.3em] text-ivory shadow-lg shadow-burgundy/20 transition-all duration-500 hover:tracking-[0.4em]"
        >
          <span className="absolute inset-0 -translate-x-full bg-deep-burgundy transition-transform duration-500 group-hover:translate-x-0"></span>
          <span className="relative">Open Invitation</span>
        </a>
      </div>
    </section>
  );
}

function Reveal({ children, delay = 0, className = "", as: Component = "div" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

function Invitation() {
  return (
    <section id="invitation" className="relative overflow-hidden bg-warm-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 arabesque opacity-60"></div>
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="relative border border-gold/30 bg-ivory/70 px-6 py-16 text-center sm:px-14 md:py-20">
          <span className="absolute left-3 top-3 size-6 border-l border-t border-gold/60"></span>
          <span className="absolute right-3 top-3 size-6 border-r border-t border-gold/60"></span>
          <span className="absolute bottom-3 left-3 size-6 border-b border-l border-gold/60"></span>
          <span className="absolute bottom-3 right-3 size-6 border-b border-r border-gold/60"></span>
          <Reveal>
            <SectionBadge>Namaste</SectionBadge>
            <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
              With Divine Blessings
            </h2>
            <OrnamentDivider className="mt-7" />
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-9 max-w-xl text-pretty font-serif text-xl leading-relaxed text-foreground/85 sm:text-2xl">
              Seeking the divine grace of the Almighty and the heartfelt blessings of our elders and families.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-foreground/75">
              With joyous hearts, we cordially invite you to celebrate the auspicious wedding ceremony of Jayalekshmi &amp; Al Ameen.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <img
              src="/images/floral-branch.png"
              alt=""
              aria-hidden="true"
              width="520"
              height="180"
              className="blend-floral mx-auto mt-10 w-64 sm:w-80"
              style={{ color: "transparent" }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function UnionCard({ role, name, relation, image, alt }) {
  return (
    <div className="group flex flex-col items-center">
      {/* The Box containing Portrait Photo and Name */}
      <div className="relative flex w-full flex-col items-center overflow-hidden border border-gold/40 bg-warm-white p-7 text-center shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold group-hover:shadow-2xl group-hover:shadow-burgundy/10 sm:p-9">
        {/* Decorative frame corners */}
        <div className="pointer-events-none absolute inset-2.5 border border-gold/20" />
        <span className="pointer-events-none absolute left-3.5 top-3.5 size-3 border-l-2 border-t-2 border-gold/70" />
        <span className="pointer-events-none absolute right-3.5 top-3.5 size-3 border-r-2 border-t-2 border-gold/70" />
        <span className="pointer-events-none absolute bottom-3.5 left-3.5 size-3 border-b-2 border-l-2 border-gold/70" />
        <span className="pointer-events-none absolute bottom-3.5 right-3.5 size-3 border-b-2 border-r-2 border-gold/70" />

        {/* Royal Arched Portrait Frame */}
        <div className="relative mb-6 aspect-[4/5] w-52 overflow-hidden rounded-t-[120px] rounded-b-2xl border-2 border-gold/50 bg-gradient-to-b from-warm-white to-ivory p-1.5 shadow-md transition-all duration-500 group-hover:border-gold group-hover:shadow-lg sm:w-60">
          <div className="relative h-full w-full overflow-hidden rounded-t-[112px] rounded-b-xl bg-ivory">
            <img
              src={image}
              alt={alt || name}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Name inside the box */}
        <h3 className="mt-1 font-serif text-3xl font-light text-burgundy sm:text-4xl">{name}</h3>
        <span className="mt-3.5 block h-px w-14 bg-gradient-to-r from-transparent via-gold to-transparent"></span>
      </div>

      {/* Role and Relation below the box */}
      <div className="mt-4 flex flex-col items-center text-center">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold font-medium">{role}</p>
        {relation && (
          <p className="mt-2 max-w-xs font-sans text-xs leading-relaxed text-foreground/75 sm:text-sm">
            {relation}
          </p>
        )}
      </div>
    </div>
  );
}

function BlessedUnion() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <SectionBadge>The Blessed Union</SectionBadge>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            Two Hearts, One Journey
          </h2>
          <OrnamentDivider className="mt-7" />
        </Reveal>
        <div className="mt-14 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={100}>
            <UnionCard
              role="The Bride"
              name={WEDDING_DATA.bride.fullName}
              relation={`Daughter of ${WEDDING_DATA.bride.father} & ${WEDDING_DATA.bride.mother}`}
              image={WEDDING_DATA.bride.image}
              alt={WEDDING_DATA.bride.fullName}
            />
          </Reveal>
          <Reveal delay={200} className="flex justify-center">
            <span className="font-serif text-5xl italic text-gold md:text-6xl">&amp;</span>
          </Reveal>
          <Reveal delay={300}>
            <UnionCard
              role="The Groom"
              name={`${WEDDING_DATA.groom.fullName} .A`}
              relation={`Son of ${WEDDING_DATA.groom.father} & ${WEDDING_DATA.groom.mother}`}
              image={WEDDING_DATA.groom.image}
              alt={WEDDING_DATA.groom.fullName}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function getRemainingTime(targetMs) {
  const diff = Math.max(0, targetMs - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const days = Math.floor(totalHours / 24);

  return { days, hours, minutes, seconds };
}

function Countdown() {
  const targetMs = useMemo(() => new Date(WEDDING_DATA.date).getTime(), []);
  const [timeLeft, setTimeLeft] = useState(() => getRemainingTime(targetMs));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime(targetMs));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetMs]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <section className="relative overflow-hidden bg-deep-burgundy py-24 text-ivory md:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'90\' height=\'90\' viewBox=\'0 0 90 90\'%3E%3Cg fill=\'none\' stroke=\'%23d8c39a\' stroke-width=\'1\'%3E%3Cpath d=\'M45 6c10 15 24 15 34 0M45 84c10-15 24-15 34 0M6 45c15-10 15-24 0-32M84 45c-15-10-15-24 0-32\'/%3E%3Ccircle cx=\'45\' cy=\'45\' r=\'20\'/%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: "90px 90px"
        }}
        aria-hidden="true"
      ></div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <SectionBadge>Save the Date</SectionBadge>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-champagne sm:text-5xl">
            Counting Down to Our Forever
          </h2>
          <OrnamentDivider className="mt-7" />
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {units.map(item => (
              <div
                key={item.label}
                className="flex flex-col items-center border border-gold/30 bg-burgundy/40 px-4 py-7 backdrop-blur-sm"
              >
                <span className="font-serif text-5xl font-light tabular-nums text-champagne sm:text-6xl">
                  {isMounted ? String(item.value).padStart(2, "0") : "--"}
                </span>
                <span className="mt-3 font-sans text-[0.65rem] uppercase tracking-[0.3em] text-ivory/70">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-10 font-serif text-xl italic text-champagne/90">
            SUNDAY, 13 · DECEMBER · 2026 — {WEDDING_DATA.timeLabel}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-warm-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <SectionBadge>Written by Destiny</SectionBadge>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            Our Story
          </h2>
          <OrnamentDivider className="mt-7" />
        </Reveal>
        <Reveal className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-pretty font-serif text-xl leading-relaxed text-foreground/75 sm:text-2xl">
            What began with a quiet meeting grew into a bond rooted in love, kindness, and cherished moments. With grateful hearts and the blessings of our elders and families, we now begin our sacred journey of togetherness.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Venue() {
  const { venue, timeLabel } = WEDDING_DATA;
  return (
    <section id="venue" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 arabesque opacity-50"></div>
      <div className="relative mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <SectionBadge>Join Us At</SectionBadge>
          <h2 className="mt-5 text-balance font-serif text-4xl font-light text-burgundy sm:text-5xl">
            The Venue
          </h2>
          <OrnamentDivider className="mt-7" />
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="border border-gold/30 bg-warm-white p-8 sm:p-10">
              <h3 className="font-serif text-3xl text-burgundy">{venue.name}</h3>
              <span className="mt-4 block h-px w-16 bg-gold/50"></span>
              <ul className="mt-7 space-y-5 text-left">
                <li className="flex items-start gap-4">
                  <MapPinIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="leading-relaxed text-foreground/80">
                    {venue.name}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CalendarDaysIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-foreground/80">Sunday, 13 · December · 2026</span>
                </li>
                <li className="flex items-start gap-4">
                  <ClockIcon className="mt-0.5 size-5 shrink-0 text-gold" />
                  <span className="text-foreground/80">{timeLabel}</span>
                </li>
              </ul>
              <div className="mt-8 border-t border-gold/20 pt-6">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                  Wedding Ceremony
                </p>
                <p className="mt-3 leading-relaxed text-foreground/80">
                  {venue.name}, {venue.city}
                  <br />
                  {timeLabel}
                </p>
              </div>
              <a
                href={venue.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-sm border border-gold bg-burgundy px-8 py-3.5 font-sans text-xs uppercase tracking-[0.3em] text-ivory transition-all duration-500 hover:tracking-[0.4em]"
              >
                Get Directions
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative border border-gold/30 p-2">
              <iframe
                title={`Map showing ${venue.name}, ${venue.city}`}
                src="https://www.google.com/maps?q=TG+Auditorium+Puthuvettinmele+Perukavu+Trivandrum&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full grayscale-[0.2] sm:h-96"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-deep-burgundy text-center text-ivory">
      {/* Floral corners */}
      <img
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width="420"
        height="420"
        className="blend-floral pointer-events-none absolute -left-6 -top-6 z-10 w-40 opacity-70 sm:w-56"
        style={{ color: "transparent" }}
      />
      <img
        src="/images/floral-corner.png"
        alt=""
        aria-hidden="true"
        width="420"
        height="420"
        className="blend-floral pointer-events-none absolute -bottom-6 -right-6 z-10 w-40 -scale-x-100 -scale-y-100 opacity-70 sm:w-56"
        style={{ color: "transparent" }}
      />

      {/* Top text section */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 pt-16 pb-8">
        <Reveal>
          <p className="text-pretty text-sm leading-relaxed text-ivory/60">
            Your presence, prayers, and blessings are the greatest gift as we begin our new journey together.
          </p>
          <h2 className="mt-6 flex flex-col items-center font-serif font-light text-champagne">
            <span className="text-5xl sm:text-6xl">{WEDDING_DATA.bride.name}</span>
            <span className="my-1 text-3xl italic text-gold sm:text-4xl">&amp;</span>
            <span className="text-4xl sm:text-5xl">{WEDDING_DATA.groom.name}</span>
          </h2>
        </Reveal>
      </div>

      {/* Couple image */}
      <div className="relative w-full">
        <img
          src="/images/couple-transparent.png"
          alt="Jayalekshmi & Al Ameen"
          width="768"
          height="1024"
          className="pointer-events-none mx-auto block w-full max-w-[min(92vw,28rem)] object-contain sm:max-w-[min(88vw,32rem)]"
          style={{ color: "transparent" }}
        />
      </div>

      {/* Date at very bottom */}
      <div className="relative z-10 bg-deep-burgundy pb-10 pt-4">
        <Reveal>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-ivory/70">
            {WEDDING_DATA.shortDateLabel}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

function AudioPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3; // Volume: 30%
    audio.loop = true;  // Loop: true

    const playAudio = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          window.removeEventListener("pointerdown", playAudio);
          window.removeEventListener("touchstart", playAudio);
          window.removeEventListener("click", playAudio);
          window.removeEventListener("scroll", playAudio);
          window.removeEventListener("keydown", playAudio);
        })
        .catch(() => {});
    };

    // Autoplay on load
    playAudio();
    window.addEventListener("pointerdown", playAudio);
    window.addEventListener("touchstart", playAudio);
    window.addEventListener("click", playAudio);
    window.addEventListener("scroll", playAudio, { once: true });
    window.addEventListener("keydown", playAudio);

    return () => {
      window.removeEventListener("pointerdown", playAudio);
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      window.removeEventListener("keydown", playAudio);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/ameen.mp3"
        autoPlay
        loop
        preload="auto"
        playsInline
        aria-label="Background wedding music: ameen"
      />
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        title={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full border border-gold/60 bg-burgundy/90 text-gold shadow-lg shadow-burgundy/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-gold hover:bg-burgundy focus:outline-none"
      >
        {isPlaying ? (
          <span className="relative flex size-5 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </button>
    </>
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isOpen]);

  return (
    <main className="relative">
      <AudioPlayer />
      <Header />
      <Hero onOpenInvitation={() => setIsOpen(true)} />
      {isOpen && (
        <>
          <Invitation />
          <BlessedUnion />
          <Countdown />
          <Story />
          <Venue />
          <Footer />
        </>
      )}
    </main>
  );
}
