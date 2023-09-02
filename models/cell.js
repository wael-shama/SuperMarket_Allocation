export default class Cell {
    constructor(type, capacity , product = null ,maximumCapacity = 10, height= 10, width=10) {
        this.type = type; // TODO: two types
        this.product = product;
        this.capacity = capacity;
        this.maximumCapacity = maximumCapacity;
        this.height = height;
        this.width = width;
    }
}
