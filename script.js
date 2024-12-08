document.getElementById("showAd").addEventListener("click", function () {
  // Iklan akan dimuat ketika tombol diklik
  const adScript = document.createElement("script");
  adScript.src = "//niphaumeenses.net/vignette.min.js";
  adScript.setAttribute("data-zone", "8621206");
  adScript.setAttribute("data-sdk", "show_8621206");
  document.body.appendChild(adScript);
  alert("Iklan sedang dimuat...");
});
