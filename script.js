const Root = document.documentElement;
try {
  const Saved = localStorage.getItem("Theme");
  if (Saved) Root.dataset.theme = Saved;
} catch (E) {}

document.getElementById("ThemeToggle").addEventListener("click", () => {
  const IsDark = Root.dataset.theme === "dark" ||
    (!Root.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  Root.dataset.theme = IsDark ? "light" : "dark";
  try { localStorage.setItem("Theme", Root.dataset.theme); } catch (E) {}
});

document.getElementById("Year").textContent = new Date().getFullYear();
