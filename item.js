'use strict';
(function () {
    class Item{
        #name;
        #img;
        constructor(name, img) {
            this.#name = name;
            this.#img = img;
        }
        getName(){
            return this.#name;
        }
        getImg(){
            return this.#img;
        }
    }
    class Inventory{
        #items = [];
        constructor(items) {
            this.#items = items;
            this.fridgeupdate();
        }
        fridgeupdate(){
            const slotsList = document.querySelector(".list-frigo");
            const slots = slotsList.querySelectorAll(".frigo-item");
            let i = 0;
            this.#items.forEach(item => {
                let itemElement = document.createElement("img");
                itemElement.src = item.getImg();
                itemElement.alt = item.getName();
                slots[i].appendChild(itemElement);
            });
        }
    }
    const steak = new Item("steak", "./Images/plastic-water-bottle-empty-e170N24-600-removebg-preview.png");
    let inventoryList = [steak];
    const fridge = new Inventory(inventoryList);
})()