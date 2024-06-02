/*
imports van de elementen
 */
import {koksmes} from "./elementen";
import {groentenmes} from "./elementen";

/*
Reusable functions
 */
  const sluitItem = function (verborgen, zichtbaar) {
    zichtbaar.classList.remove("hidden");
    verborgen.classList.add("hidden");
  };

  /*
  Classes
   */
  class Item {
    #name;
    #img;
    #mes;
    constructor(name, img, mes) {
      this.#name = name;
      this.#img = img;
      this.#mes = mes;
    }
    getName() {
      return this.#name;
    }
    getImg() {
      return this.#img;
    }
  }

  class groenten extends Item {
    constructor(name, img, mes) {
      super(name, img, mes);
    }
  }

  class vlees extends Item {
    constructor(name, img, mes) {
      super(name, img, mes);
    }
  }

  class Inventory {
    #items = [];
    #startlocatie;
    constructor(items) {
      this.#items = items;
    }
    inventoryUpdate(inventory, locatie, inventoryVenster) {
      const slotsList = inventory.querySelector(".list-inv");
      const slots = slotsList.querySelectorAll(".inv-item");
      let i = 0;
      this.#items.forEach((item) => {
        let itemElement = document.createElement("img");
        itemElement.src = item.getImg();
        itemElement.alt = item.getName();
        slots[i].appendChild(itemElement);
        itemElement.addEventListener("click", () => {
          this.checkitem(item, itemElement, locatie, inventoryVenster);
        });
        i++;
      });
    }
    checkitem(item, itemElement, locatie, inventoryVenster) {
      //   console.log(item);
      //   console.log(itemElement);
      //   console.log(vleeslist[this.item1 - 1].getName());
      //   console.log(groetenlist[this.item2 - 1].getName());
      //   console.log(groetenlist[this.item3 - 1].getName());

      // werkt bijna enige probleem is da je niet meerdere groenten kunt plaatsen
      // werkt blijkbaar niet
      if (
        item.getName() === this.vleeslist[this.item1 - 1].getName() &&
        this.itemcount1 == 0
      ) {
        this.moveItem(item, itemElement, locatie, inventoryVenster);
        this.itemcount1 = 1;
      } else if (
        item.getName() === this.groentenlist[this.item2 - 1].getName() &&
        this.itemcount2 == 0
      ) {
        this.moveItem(item, itemElement, locatie, inventoryVenster);
        this.itemcount2 = 1;
      } else if (
        item.getName() === this.groentenlist[this.item3 - 1].getName() &&
        this.itemcount3 == 0
      ) {
        this.moveItem(item, itemElement, locatie, inventoryVenster);
        this.itemcount3 = 1;
      } else {
        console.log("Foute groente || groenten op bureau geclickt");
      }
      console.log("replace");
    }
    moveItem(item, itemElement, locatie, inventoryVenster) {
      sluitItem(inventoryVenster, this.#startlocatie);
      const itemSlot = document.createElement("button");
      locatie.appendChild(itemSlot);
      itemSlot.appendChild(itemElement);
    }
    setStartLocatie(startlocatie) {
      this.#startlocatie = startlocatie;
    }
  }

  class Fridge extends Inventory {
    vleeslist = [];
    groentenlist = [];
    item1;
    item2;
    item3;
    itemcount1 = 0;
    itemcount2 = 0;
    itemcount3 = 0;

    constructor(items, groentenlist, vleeslist) {
      super(items);
      this.groentenlist = groentenlist;
      this.vleeslist = vleeslist;
      super.setStartLocatie(keuken);
      super.inventoryUpdate(frigoInv, groentenplek, frigovenster);
      this.randomizer();
      this.update();
    }
    //het probleem nu is dat this.#item[i] is undefined aangezien het in een loop zit maar ik moet deze waarde hebben
    // maar ik heb geen idee hoe ik deze kan onthouden.

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
    }

    update() {
      const randomlijst = document.querySelector(".itemrandomlijst");
      const randomli1 = randomlijst.querySelector(".item1");
      const randomli2 = randomlijst.querySelector(".item2");
      const randomli3 = randomlijst.querySelector(".item3");
      randomli1.textContent = this.vleeslist[this.item1 - 1].getName();
      randomli2.textContent = this.groentenlist[this.item2 - 1].getName();
      randomli3.textContent = this.groentenlist[this.item3 - 1].getName();
    }
    checkitem(item, itemElement, locatie, inventoryVenster) {
      super.checkitem(item, itemElement, locatie, inventoryVenster);
    }
  }

  class Kast extends Inventory {
    constructor(items) {
      super(items);
      super.setStartLocatie(keukenzoom);
      super.inventoryUpdate(kastkeuken, fornuis, kastkeuken);
    }
    checkitem(item, itemElement, locatie, inventoryVenster) {
      super.moveItem(item, itemElement, locatie, inventoryVenster);
    }
  }

  /*
  Creating the food
   */
  const steak = new vlees(
    "steak",
    "./Images/fresh-red-meat-file-free-png.webp",
      [koksmes]
  );
  const kip = new vlees(
    "kip",
    "./Images/kisspng-roast-chicken-food-roasting-clip-art-chicken-roast-5b48ff6f35ccd8.0481672615315106392204-removebg-preview.png",
      [koksmes]
  );
  const bacon = new vlees(
    "bacon",
    "./Images/pngtree-cartoon-pork-decorative-illustration-image_1454021-removebg-preview.png",
      [koksmes]
  );

  //   const steak4 = new vlees(
  //     "steak",
  //     "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png"
  //   );

  const sla = new groenten(
    "sla",
    "./Images/184341742-verse-groene-sla-geïsoleerd-op-wit-removebg-preview.png",
      [koksmes, groentenmes]
  );

  const tomaat = new groenten(
    "tomaat",
    "./Images/8424339-tomaat-geisoleerde-enkele-eenvoudige-cartoon-illustratie-vector-removebg-preview.png",
      [koksmes, groentenmes]
  );

  const komkommer = new groenten(
    "komkommer",
    "./Images/kisspng-pickled-cucumber-vegetable-melon-clip-art-cucumber-5abc06278bb8c3.2746227815222717835723-removebg-preview.png",
      [koksmes, groentenmes]
  );

  const wortel = new groenten(
    "wortel",
    "./Images/carrot-illustration-with-leaf-png.webp",
      [koksmes, groentenmes]
  );

  const pan1 = new Item("pan", "./Images/pan_1.png");
  const pan2 = new Item("pan", "./Images/pan_2.png");
  const pan3 = new Item("vuile pan", "./Images/vuile_pan_1.png");
  const pan4 = new Item("snelkook pan", "./Images/snelkook_pan.png");
  const pan5 = new Item("tefal pan", "../Images/tefal_pan.png");
  const kookpot1 = new Item("kookpot", "./Images/kookpot_1.png");
  const kookpot2 = new Item("kookpot", "./Images/kookpot_2.png");
  const kookpot3 = new Item("kookpot", "./Images/kookpot_2.png");

  let inventoryList1 = [steak, kip, bacon, sla, tomaat, komkommer, wortel];
  let inventoryList2 = [
    pan1,
    pan2,
    pan3,
    pan4,
    pan5,
    kookpot1,
    kookpot2,
    kookpot3,
  ];
  let vleeslist = [steak, kip, bacon];
  let groetenlist = [sla, tomaat, komkommer, wortel];
  const fridge = new Fridge(inventoryList1, groetenlist, vleeslist);
  const closet = new Kast(inventoryList2);

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

/*
Exports
 */
export {steak, kip, bacon, sla, tomaat, komkommer, wortel} from "item";
export {pan1, pan2, pan3, pan4, pan5, kookpot1, kookpot2, kookpot3} from "item";
export {vleeslist, groetenlist} from "item";