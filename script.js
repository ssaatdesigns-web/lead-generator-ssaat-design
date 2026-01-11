const form = document.getElementById("leadForm");
const statusEl = document.getElementById("status");
document.getElementById("year").textContent = new Date().getFullYear();

/*
  This version stores leads using a simple mailto fallback:
  - It does NOT reliably capture leads automatically.
  - It opens the user's email client with the details prefilled.

  Next step (recommended): connect this form to Google Sheets or Formspree.
*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const payload = Object.fromEntries(data.entries());

  const subject = encodeURIComponent("Early Access Request - RealEstateAI CAD");
  const body = encodeURIComponent(
`Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone || "-"}
Role: ${payload.role}
Project: ${payload.project || "-"}`
  );

  // Replace with your email
  const to = "youremail@example.com";

  statusEl.textContent = "Opening your email app to send the request...";
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

  form.reset();
});
