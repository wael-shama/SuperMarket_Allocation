// Implement Logic and Rules Here

function FindCell(shelves, products, productId, quantity) {
    // Check if the product exists in the system
    if (!(productId in products)){
        return { "FoundCell": false}
    }

    // var arr = [];
    // Check if it exists in a cell
    for (var pos = 0; pos < products[productId].length; i++) {
        let row = products[productId][pos][0]
        let col = products[productId][pos][1]
        //  If yes check if not maximum
        if (shelves[row][col].capacity + quantity <= shelves[row][col].maximumCapacity){
            shelves[row][col].capacity = shelves[row][col].capacity + quantity;
            return { "FoundCell": true, "cell": [row,col]}
        }
        //  If maximum search for another one with same product
    }

    // If not Found continue
    
    // If not exists search for a matched cell
    // Loop to initialize 2D array elements.
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
    

            if (shelves[i][j].CellType == productType && shelves[i][j].capacity == 0){
                //          If yes check if not maximum
                //                      If not maximum return cell  
                
                if (shelves[i][j].capacity + quantity <= shelves[i][j].maximumCapacity){
                    shelves[i][j].capacity = shelves[i][j].capacity + quantity;
                    products[productId].add([row,col])
                    return { "FoundCell": true, "cell": [row,col]}
                }
            }

        }
    }

    // If not found return not found
    return { "FoundCell": false}
    
}
