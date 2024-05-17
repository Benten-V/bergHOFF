"use strict";
(function () {
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

  class groenten extends Item {
    constructor(name, img) {
      super(name, img);
    }
  }

  class vlees extends Item {
    constructor(name, img) {
      super(name, img);
    }
  }
  class Inventory {
    #items = [];
    vleeslist = [];
    groentenlist = [];
    item1;
    item2;
    item3;

    constructor(items, groentenlist, vleeslist) {
      this.#items = items;
      this.fridgeupdate();
      this.groentenlist = groentenlist;
      this.vleeslist = vleeslist;
      this.randomizer();
      this.update();
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
        itemElement.addEventListener("click", () =>
          this.moveItem(this.#items[i], itemElement)
        );
        i++;
      });
    }
    moveItem(item, itemElement) {
      sluitItem(frigovenster, keuken);
      const groentenList = document.querySelector(".groenten");
      const itemSlot = document.createElement("div");
      groentenList.appendChild(itemSlot);
      itemSlot.appendChild(itemElement);
    }
    randomizer() {
      this.item1 = Math.round(Math.random() * (this.vleeslist.length - 1) + 1);
      this.item2 = Math.round(
        Math.random() * (this.groentenlist.length - 1) + 1
      );
      let x = Math.round(Math.random() * (this.groentenlist.length - 1) + 1);
      if (this.item2 === x && x >= 2) {
        this.item3 = x - 1;
      } else if (this.item2 === x) {
        this.item3 = x + 1;
      } else {
        this.item3 = x;
      }
      console.log(this.item1, this.item2, this.item3);
      return this.item1, this.item2, this.item3;
    }

    update() {
      const randomlijst = document.querySelector(".itemrandomlijst");
      const randomli1 = randomlijst.querySelector(".item1");
      const randomli2 = randomlijst.querySelector(".item2");
      const randomli3 = randomlijst.querySelector(".item3");
      randomli1.textContent = vleeslist[this.item1 - 1].getName();
      randomli2.textContent = groetenlist[this.item2 - 1].getName();
      randomli3.textContent = groetenlist[this.item3 - 1].getName();
    }
  }
  const steak = new vlees(
    "steak",
    "./Images/fresh-red-meat-file-free-png.webp"
  );
  const kip = new vlees(
    "kip",
    "./Images/kisspng-roast-chicken-food-roasting-clip-art-chicken-roast-5b48ff6f35ccd8.0481672615315106392204-removebg-preview.png"
  );
  const beacon = new vlees(
    "beacon",
    "./Images/pngtree-cartoon-pork-decorative-illustration-image_1454021-removebg-preview.png"
  );
  //   const steak4 = new vlees(
  //     "steak",
  //     "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png"
  //   );

  const sla = new groenten(
    "sla",
    "./Images/184341742-verse-groene-sla-geïsoleerd-op-wit-removebg-preview.png"
  );

  const tomaat = new groenten(
    "tomaat",
    "./Images/8424339-tomaat-geisoleerde-enkele-eenvoudige-cartoon-illustratie-vector-removebg-preview.png"
  );

  const komkommer = new groenten(
    "komkommer",
    "./Images/kisspng-pickled-cucumber-vegetable-melon-clip-art-cucumber-5abc06278bb8c3.2746227815222717835723-removebg-preview.png"
  );

  const wortel = new groenten(
    "wortel",
    "./Images/carrot-illustration-with-leaf-png.webp"
  );

  let inventoryList = [steak, kip, beacon, sla, tomaat, komkommer, wortel];
  let vleeslist = [steak, kip, beacon];
  let groetenlist = [sla, tomaat, komkommer, wortel];
  const fridge = new Inventory(inventoryList, vleeslist, groetenlist);

  //   class itemrandomizer {
  //     lijst = [];
  //     vleeslist = [];
  //     groentenlist = [];
  //     item1;
  //     item2;
  //     item3;
  //     constructor(lijst, groentenlist, vleeslist) {
  //       this.lijst = lijst;
  //       this.groentenlist = groentenlist;
  //       this.vleeslist = vleeslist;
  //     }

  //     randomizer() {
  //       this.item1 = Math.round(Math.random() * (this.vleeslist.length - 1) + 1);
  //       this.item2 = Math.round(
  //         Math.random() * (this.groentenlist.length - 1) + 1
  //       );
  //       let x = Math.round(Math.random() * (this.groentenlist.length - 1) + 1);
  //       if (this.item2 === x && x >= 2) {
  //         this.item3 = x - 1;
  //       } else if (this.item2 === x) {
  //         this.item3 = x + 1;
  //       } else {
  //         this.item3 = x;
  //       }
  //       console.log(this.item1, this.item2, this.item3);
  //       return this.item1, this.item2, this.item3;
  //     }

  //     update() {
  //       const randomlijst = document.querySelector(".itemrandomlijst");
  //       const randomli1 = randomlijst.querySelector(".item1");
  //       const randomli2 = randomlijst.querySelector(".item2");
  //       const randomli3 = randomlijst.querySelector(".item3");
  //       randomli1.textContent = vleeslist[this.item1 - 1].getName();
  //       randomli2.textContent = groetenlist[this.item2 - 1].getName();
  //       randomli3.textContent = groetenlist[this.item3 - 1].getName();
  //     }
  //     test() {
  //       console.log(tester);
  //     }
  //   }

  //   const itemRandomizer = new itemrandomizer(
  //     inventoryList,
  //     groetenlist,
  //     vleeslist
  //   );
  //   itemRandomizer.randomizer();
  //   const itemscijfers = itemRandomizer.update();
})();
