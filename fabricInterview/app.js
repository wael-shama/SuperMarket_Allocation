const express = require('express')
const app = express();

const logic = require('./logic');
// const { CellType } = require('./models/cell');
// const { Product } = require('./models/product');

const Cell = require('./models/cell').Cell;
const CellType = {
	ChiledProducts: "cooling",
	HazardousProducts: "hazardous",
    ChilledAndHazardous: "coolingAndHazardous",
    Default: "default"
}
const Product = require('./models/product').Product;
// const ProductType = require('./models/product').ProductType;



// map where the products are found in the shelves
const products = new Map();



const MILK = new Product("milk", CellType.ChiledProducts)
const YOGURT = new Product("yogurt", CellType.ChiledProducts)
const CHEESE = new Product("cheese", CellType.ChiledProducts)

const INSULIN = new Product("insulin", CellType.Default)
const STAINREMOVAL = new Product("stainRemoval", CellType.Default)
const BLEACH = new Product("bleach", CellType.Default)

const BAMBA = new Product("bamba", CellType.Default)
const BREAD = new Product("bread", CellType.Default)
const PASTA = new Product("pasta", CellType.Default)
const SALT = new Product("salt", CellType.Default)
const APPLE = new Product("apple", CellType.Default)


// const ProductTypes = {
// 	ChiledProducts: ["milk", "yogurt", "cheese", "insulin"],
// 	HazardousProducts: ["bleach", "stainRemoval", "insulin"],
//     OtherProducts: ["bread", "pasta", "salt", "bamba", "apple"]
// }

products.set(BREAD, [[3,3]]);
products.set(BLEACH, [[0,1]]);
products.set(BAMBA, [[0,9]]);

products.set(MILK, [])
products.set(INSULIN, [])
products.set(YOGURT, [])
products.set(CHEESE, [])

products.set(PASTA, [])
products.set(SALT, [])
products.set(APPLE, [])

products.set(STAINREMOVAL, [])



let shelves = [];
let row = 10;
let col= 10;

// Loop to initialize 2D array elements.
for (var i = 0; i < row; i++) {
    shelves[i]=[];
    for (var j = 0; j < col; j++) {
        shelves[i][j] = new Cell(CellType.Default, 0);
        if (j == 9){
            shelves[i][j] = new Cell(CellType.HazardousProducts, 0);
        }
    }
}


shelves[0][1] = new Cell(CellType.Default, 3, BREAD);
shelves[0][9] = new Cell(CellType.HazardousProducts, 8, BLEACH);
shelves[3][3] = new Cell(CellType.Default, 5, BAMBA);

shelves[7][7] = new Cell(CellType.ChiledProducts, 0);
shelves[8][8] = new Cell(CellType.ChiledProducts, 0);
shelves[7][8] = new Cell(CellType.ChiledProducts, 0);
shelves[8][7] = new Cell(CellType.ChiledProducts, 0);
shelves[9][7] = new Cell(CellType.ChiledProducts, 0);
shelves[9][8] = new Cell(CellType.ChiledProducts, 0);

shelves[7][9] = new Cell(CellType.ChilledAndHazardous, 0);
shelves[8][9] = new Cell(CellType.ChilledAndHazardous, 0);
shelves[9][9] = new Cell(CellType.ChilledAndHazardous, 0);




app.use('/alocateCell', (req,res) =>{
    // TODO
    const id = req.params.productId;
    const quantity = req.params.quantity;

    const cell = logic.FindCell(shelves, products, productId, quantity);
    res.status(200).json(cell);
}
)

app.listen(3000, () =>{
    console.log("Server is Running on Port 3000");
})