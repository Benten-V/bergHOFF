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
