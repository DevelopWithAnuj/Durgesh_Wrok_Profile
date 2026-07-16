// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const iconOpen = document.getElementById("iconOpen");
const iconClose = document.getElementById("iconClose");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});
document.querySelectorAll("#mobileMenu a").forEach((a) =>
  a.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  }),
);

// Scroll reveal (light, respects prefers-reduced-motion via CSS)
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-q");
  const ans = item.querySelector(".faq-a");
  const icon = item.querySelector(".faq-icon");
  btn.addEventListener("click", () => {
    const isOpen = ans.style.maxHeight && ans.style.maxHeight !== "0px";
    document
      .querySelectorAll(".faq-a")
      .forEach((a) => (a.style.maxHeight = "0px"));
    document
      .querySelectorAll(".faq-icon")
      .forEach((i) => (i.style.transform = "rotate(0deg)"));
    if (!isOpen) {
      ans.style.maxHeight = ans.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
    }
  });
});

// Contact form (demo only)
const sendMail = document.getElementById("contact-form");

sendMail.addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-success");

  status.innerHTML = "Sending...";

  emailjs
    .sendForm("service_j5xvcqc", "template_yudikxc", this)

    .then(() => {
      status.innerHTML = "✅ Message sent successfully.";

      sendMail.reset();
    })

    .catch((error) => {
      console.error(error);

      status.innerHTML = "❌ Failed to send message.";
    });
});


// Projects data — electrical only, plumbing appears only inside New Construction section above
const projects = [
  {
    title: "3 BHK House Complete Wiring",
    category: "houses",
    categoryLabel: "🏠 Houses",
    location: "Gomti Nagar, Lucknow",
    work: "Full house wiring & switchboard installation",
    desc: "Rewired and fitted a new 3 BHK independent house with modern switch panels.",
    icon: "🏠",
  },
  {
    title: "New Build Electrical Rough-In",
    category: "builders",
    categoryLabel: "🏗 Builder Projects",
    location: "Sushant Golf City, Lucknow",
    work: "Conduit laying & wiring rough-in during construction",
    desc: "Coordinated with the builder's site team for first-fix electrical work.",
    icon: "🏗",
  },
  {
    title: "Retail Shop Electrical Setup",
    category: "shops",
    categoryLabel: "🏪 Shops",
    location: "Aminabad, Lucknow",
    work: "Lighting, display circuits & safety switch panel",
    desc: "Complete electrical fit-out for a clothing retail shop.",
    icon: "🏪",
  },
  {
    title: "Architect-Specified Lighting",
    category: "houses",
    categoryLabel: "🏠 Houses",
    location: "Hazratganj, Lucknow",
    work: "Layered lighting circuits & dimmer switches",
    desc: "Executed a lighting plan specified by the project architect.",
    icon: "💡",
  },
  {
    title: "Small Office Electrical Fit-Out",
    category: "commercial",
    categoryLabel: "🏢 Small Commercial",
    location: "Indira Nagar, Lucknow",
    work: "Workstation wiring, lighting & backup circuit",
    desc: "Set up electrical circuits for a small office including backup power.",
    icon: "🏢",
  },
  {
    title: "Duplex House Full Rewiring",
    category: "houses",
    categoryLabel: "🏠 Houses",
    location: "Jankipuram, Lucknow",
    work: "Complete rewiring & new distribution board",
    desc: "Brought an older duplex house up to current safety standards.",
    icon: "⚡",
  },
  {
    title: "Row House Electrical for New Construction",
    category: "builders",
    categoryLabel: "🏗 Builder Projects",
    location: "Vrindavan Yojana, Lucknow",
    work: "Electrical layout & installation across 4 houses",
    desc: "Completed electrical rough-in for a row of houses for the same developer.",
    icon: "🏗",
  },
  {
    title: "Café Electrical Setup",
    category: "shops",
    categoryLabel: "🏪 Shops",
    location: "Hazratganj, Lucknow",
    work: "Kitchen equipment wiring & lighting circuits",
    desc: "Handled full electrical fit-out meeting commercial kitchen safety needs.",
    icon: "☕",
  },
  {
    title: "Coaching Institute Electrical Work",
    category: "commercial",
    categoryLabel: "🏢 Small Commercial",
    location: "Mahanagar, Lucknow",
    work: "Classroom lighting & switchboard installation",
    desc: "Installed lighting and power points across five classrooms.",
    icon: "🏫",
  },
];

const grid = document.getElementById("projectGrid");
function renderProjects(filter) {
  grid.innerHTML = "";
  projects
    .filter((p) => filter === "all" || p.category === filter)
    .forEach((p) => {
      const card = document.createElement("div");
      card.className =
        "reveal in bg-white rounded-xl2 overflow-hidden border border-navy/10 shadow-card";
      card.innerHTML = `
        <div class="h-40 bg-navy flex items-center justify-center text-5xl">${p.icon}</div>
        <div class="p-5">
          <span class="text-[11px] font-heading font-semibold text-spark uppercase tracking-wide">${p.categoryLabel}</span>
          <h3 class="font-heading font-bold text-navy mt-1.5 leading-snug">${p.title}</h3>
          <p class="text-xs text-ink/50 mt-2">📍 ${p.location}</p>
          <p class="text-xs text-ink/50 mt-1">🔧 ${p.work}</p>
          <p class="text-sm text-ink/60 mt-2">${p.desc}</p>
        </div>`;
      grid.appendChild(card);
      io.observe(card);
    });
}
renderProjects("all");

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("active-filter", "bg-navy", "text-white");
      b.classList.add("bg-white", "text-navy", "border", "border-navy/15");
    });
    btn.classList.add("active-filter", "bg-navy", "text-white");
    btn.classList.remove("bg-white", "border", "border-navy/15");
    renderProjects(btn.dataset.filter);
  });
});
document.querySelectorAll(".reveal").forEach((el) => {
  io.observe(el);
});
