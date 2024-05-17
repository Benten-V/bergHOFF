"use strict";
(function () {
  const frigo = document.querySelector(".keuken-img-frigo");
  const keuken = document.querySelector(".main-keuken");
  const frigovenster = document.querySelector(".main-frigo");
  const closeFrigo = document.querySelector(".close-frigo");
  const microgolf = document.querySelector(".keuken-img-micro");
  const diepvries = document.querySelector(".keuken-img-diepvries");
  const diepvriesvenster = document.querySelector(".main-diepvries");
  const closeDiepvries = document.querySelector(".close-diepvries");
  const slaapkamerdeur = document.querySelector(".slaapkamer-deur");
  const mainsection = document.querySelector(".main-section");
  const slaapkamerterug = document.querySelector(".slaapkamer-terug");
  const zoom = document.querySelector(".zoom");
  const keukenzoom = document.querySelector(".main-keuken-zoom");
  const terugkeuken = document.querySelector(".terug-zoom");
  const kast = document.querySelector(".keuken-zoom-img-kast");
  const kastkeuken = document.querySelector(".main-kast");
  const closekast = document.querySelector(".close-kast");
  // frigo.addEventListener('click', () => openFrigo());


document.addEventListener("DOMContentLoaded", function() {
    fetchLeaderboard();
});

async function fetchLeaderboard() {
    try {
        const response = await fetch('fetch_leaderboard.php');
        const data = await response.json();

        const leaderboardTable = document.getElementById('leaderboardTable');
        leaderboardTable.innerHTML = '';
        
        data.forEach((entry, index) => {
            const row = leaderboardTable.insertRow();
            row.insertCell(0).textContent = index + 1;
            row.insertCell(1).textContent = entry.PlayerName;
            row.insertCell(2).textContent = entry.Score;
            row.insertCell(3).textContent = entry.DateAchieved;
        });
    } catch (error) {
        console.error('Error fetching leaderboard', error);
    }
}
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
  closeDiepvries.addEventListener("click", () =>
    sluitItem(diepvriesvenster, keuken)
  );
  slaapkamerdeur.addEventListener("click", () => openItem(mainsection, keuken));
  slaapkamerterug.addEventListener("click", () =>
    openItem(keuken, mainsection)
  );
  zoom.addEventListener("click", () => openItem(keuken, keukenzoom));
  terugkeuken.addEventListener("click", () => openItem(keukenzoom, keuken));
  kast.addEventListener("click", () => openItem(keukenzoom, kastkeuken));
  closekast.addEventListener("click", () => openItem(kastkeuken, keukenzoom));
    class Item {
        #name;
        #img;
        constructor(name, img) {
            this.#name = name;
            this.#img = img;
        }
        getName() {
            return this.#name;
        }
        getImg() {
            return this.#img;
        }
    }
    class Inventory {
        #items = [];
        constructor(items) {
            this.#items = items;
            this.fridgeupdate();
        }
        fridgeupdate() {
            const slotsList = document.querySelector(".list-inv");
            const slots = slotsList.querySelectorAll(".inv-item");
            let i = 0;
            this.#items.forEach((item) => {
                let itemElement = document.createElement("img");
                itemElement.src = item.getImg();
                itemElement.alt = item.getName();
                slots[i].appendChild(itemElement);
                itemElement.addEventListener("click",() => this.moveItem(this.#items[i], itemElement));
                i++;
            });
        }
        moveItem(item, itemElement){
            sluitItem(frigovenster,keuken);
            const groentenList = document.querySelector(".groenten");
            const itemSlot = document.createElement("div");
            groentenList.appendChild(itemSlot);
            itemSlot.appendChild(itemElement);
        }
    }
    const steak = new Item(
        "steak",
        "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png"
    );
    const steak2 = new Item(
        "steak",
        "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png"
    );
    const steak3 = new Item(
        "steak",
        "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png"
    );
    const steak4 = new Item(
        "steak",
        "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png"
    );

    let inventoryList = [steak, steak2, steak3, steak4];
    const fridge = new Inventory(inventoryList);
})();
