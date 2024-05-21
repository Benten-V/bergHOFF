"use strict";
(function () {
  class Punten {
    punten;
    Constructor() {}
    pluspunten(punt) {
      this.punten += punt;
    }
    resetpunten() {
      this.punten = 0;
    }
    minpunten(punt) {
      this.punten -= punt;
    }
  }
});
