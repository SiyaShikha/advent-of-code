export class Memory {
  #data;
  constructor(initialData) {
    this.#data = [...initialData];
  }

  getCellValue(cellNumber) {
    return this.#data[cellNumber];
  }

  getPointerValue(cellNumber) {
    return this.#data[this.#data[cellNumber]];
  }

  setCellValue(resultCell, value) {
    this.#data[resultCell] = value;
  }

  getData() {
    return this.#data;
  }
}
