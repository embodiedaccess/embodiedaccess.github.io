const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("[data-nav-menu]");
const googleInterestFormUrl = "https://docs.google.com/forms/tbd_here:)";

document.querySelectorAll("[data-interest-link]").forEach((link) => {
  link.setAttribute("href", googleInterestFormUrl);
});

document.querySelectorAll("a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

  link.setAttribute("target", "_blank");
  const relValues = new Set((link.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
  relValues.add("noopener");
  if (href.startsWith("http")) relValues.add("noreferrer");
  link.setAttribute("rel", [...relValues].join(" "));
});

const contactReveal = document.querySelector("[data-contact-reveal]");
const contactTrigger = document.querySelector("[data-contact-trigger]");
const copyStatus = document.querySelector("[data-copy-status]");

async function copyText(value) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      return;
    } catch (error) {
      // Fall back for local preview contexts where Clipboard API is blocked.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.append(textArea);
  textArea.focus();
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) {
    throw new Error("Copy command failed");
  }
}

if (contactReveal && contactTrigger) {
  const closeContactReveal = () => {
    contactReveal.classList.remove("is-open");
    contactTrigger.setAttribute("aria-expanded", "false");
  };

  contactTrigger.addEventListener("click", () => {
    const isOpen = contactReveal.classList.toggle("is-open");
    contactTrigger.setAttribute("aria-expanded", String(isOpen));
    if (copyStatus) {
      copyStatus.textContent = isOpen ? "Choose an email to copy." : "";
    }
  });

  contactReveal.addEventListener("mouseleave", () => {
    closeContactReveal();
    if (contactReveal.contains(document.activeElement) && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });

  contactReveal.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeContactReveal();
      contactTrigger.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!contactReveal.contains(event.target)) {
      closeContactReveal();
    }
  });

  document.querySelectorAll("[data-email-user][data-email-domain]").forEach((button) => {
    const email = `${button.dataset.emailUser}@${button.dataset.emailDomain}`;
    const label = button.querySelector(".email-name")?.textContent || "Email";
    button.addEventListener("click", async () => {
      try {
        await copyText(email);
        contactReveal.classList.add("is-open");
        contactTrigger.setAttribute("aria-expanded", "true");
        if (copyStatus) {
          copyStatus.textContent = `Copied ${label}'s email.`;
        }
      } catch (error) {
        if (copyStatus) {
          copyStatus.textContent = "Copy failed. Hover or focus the card to view the address.";
        }
      }
    });
  });
}

function setHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  if (!navToggle || !navMenu || !header) return;
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  header.classList.remove("menu-open");
  document.body.classList.remove("nav-open");
}

if (navToggle && navMenu && header) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    header.classList.toggle("menu-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

window.addEventListener("load", () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
