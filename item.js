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
                itemElement.innerHTML = `src=${this.item.getImg()} alt=${this.item.getName()}`;
                slots[i].appendChild(itemElement);
            });
        }
    }
    const steak = new Item("steak", "./Images.fresh-red-meat-file-free-png.webp");
    let inventoryList = [steak];
    const fridge = new Inventory(inventoryList);
})()