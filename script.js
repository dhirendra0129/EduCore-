const banners = [
  { title: "🔴 LIVE Class 1-10 Batch", desc: "All Subjects | Notes + Videos + Tests", price: "₹899/-" },
  { title: "📘 Entrance Exam Special", desc: "Mock Tests + PYQs + Doubt Sessions", price: "₹699/-" },
  { title: "🎯 Practice Booster", desc: "Chapter-wise Quizzes for all Classes", price: "Free" }
];

let current = 0;
const bannerEl = document.getElementById('banner');

function updateBanner() {
  const b = banners[current];
  bannerEl.innerHTML = `<h3>${b.title}</h3><p>${b.desc}</p><div class="price">${b.price}</div>`;
  current = (current + 1) % banners.length;
}

setInterval(updateBanner, 3000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
