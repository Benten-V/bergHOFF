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
        constructor(items = null) {
            this.#items = items;
        }
        fridgeupdate(){
            const slotsList = document.querySelector(".list-frigo");
            const slots = slotsList.querySelectorAll(".frigo-item");
            let i = 0;
            this.#items.forEach(item => {

            });
        }
    }
})()