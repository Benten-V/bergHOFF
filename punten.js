class punten {
  punten = 0;
  minPunten = 0;
  Constructor() {}
  plusPunten(punt) {
    this.punten += punt;
  }
  resetPunten() {
    this.punten = 0;
  }
  minPunten(punt) {
    this.punten -= punt;
    this.minPunten += 1;
  }
  showPunten() {
    return this.punten;
  }
  showMinPunten() {
    return this.minPunten;
  }
}
export { punten };
