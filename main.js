import {
  closeDiepvries,
  closeFrigo, closekast,
  diepvries,
  diepvriesvenster,
  frigo,
  frigovenster, kast, kastkeuken,
  keuken, keukenzoom, mainsection,
  slaapkamerdeur, slaapkamerterug, terugkeuken, zoom
} from "./js/elementen";

const openItem = function (verborgen, zichtbaar) {
  verborgen.classList.add("hidden");
  zichtbaar.classList.remove("hidden");
};
const sluitItem = function (verborgen, zichtbaar) {
  zichtbaar.classList.remove("hidden");
  verborgen.classList.add("hidden");
};
frigo.addEventListener("click", () => openItem(keuken, frigovenster));
closeFrigo.addEventListener("click", () => sluitItem(frigovenster, keuken));
diepvries.addEventListener("click", () => openItem(keuken, diepvriesvenster));
closeDiepvries.addEventListener("click", () => sluitItem(diepvriesvenster, keuken));
slaapkamerdeur.addEventListener("click", () => openItem(mainsection, keuken));
slaapkamerterug.addEventListener("click", () => openItem(keuken, mainsection));
zoom.addEventListener("click", () => openItem(keuken, keukenzoom));
terugkeuken.addEventListener("click", () => openItem(keukenzoom, keuken));
kast.addEventListener("click", () => openItem(keukenzoom, kastkeuken));
closekast.addEventListener("click", () => openItem(kastkeuken, keukenzoom));

document.addEventListener("DOMContentLoaded", function () {
  fetchLeaderboard();
});

async function fetchLeaderboard() {
  try {
    const response = await fetch("fetch_leaderboard.php");
    const data = await response.json();

    const leaderboardTable = document.getElementById("leaderboardTable");
    leaderboardTable.innerHTML = "";

    data.forEach((entry, index) => {
      const row = leaderboardTable.insertRow();
      row.insertCell(0).textContent = index + 1;
      row.insertCell(1).textContent = entry.PlayerName;
      row.insertCell(2).textContent = entry.Score;
      row.insertCell(3).textContent = entry.DateAchieved;
    });
  } catch (error) {
    console.error("Error fetching leaderboard", error);
  }
}
