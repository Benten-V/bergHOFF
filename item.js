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
        i++;
      });
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
  const fridge = new Inventory(inventoryList);

  class itemRandomizer {
    lijst = [];
    vleeslist = [];
    groentenlist = [];
    item1;
    item2;
    item3;
    constructor(lijst, groentenlist, vleeslist) {
      this.lijst = lijst;
      this.groentenlist = groentenlist;
      this.vleeslist = vleeslist;
    }

    randomizer() {
      this.item1 =
        Math.random() * (this.vleeslist.length - 1 - 1) +
        this.vleeslist.length -
        1;
      this.item2 =
        Math.random() * (this.groentenlist.length - 1 - 1) +
        this.groentenlist.length -
        1;
        let x = Math.random() * (this.groentenlist.length - 1 - 1) +
        this.groentenlist.length -
        1;
        if ()
    }
  }
})();
