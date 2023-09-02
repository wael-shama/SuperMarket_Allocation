export default class Product {
    constructor(id, type, height= 10, width=10) {
      this.id = id
      this.type = type;
      this.height = height;
      this.width = width;
    }
}

// const ProductType = {
// 	ChiledProducts: ["milk", "yogurt", "cheese", "insulin"],
// 	HazardousProducts: ["bleach", "stainRemoval", "insulin"],
//     OtherProducts: ["bread", "pasta", "salt", "bamba", "apple"]
// }

// export {Product};