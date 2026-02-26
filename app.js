document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#cta-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    alert("Welcome to Atarnity! We’ll wire this up to a real flow next.");
  });
});
