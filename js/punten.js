class punten {
  punten = 0;
  minPuntenCount = 0;
  Constructor() {
    this.punten = 0;
    this.minPuntenCount = 0;
  }

  plusPunten(punt) {
    this.punten += punt;
  }

  minPunten(punt) {
    this.punten -= punt;
    this.minPuntenCount += 1;
  }

  resetPunten() {
    this.punten = 0;
  }

  showPunten() {
    return this.punten;
  }
  showMinPunten() {
    return this.minPuntenCount;
  }
}

const puntenInstance = new punten();
export { puntenInstance as Punten };
