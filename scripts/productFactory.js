console.log("product factory")

const idMaker = function* () {
    let id = 1
    while (true) {
        yield id
        id ++
    }
}

const idGenerator = idMaker()
let productStore = []


const productFactory = (title, description, price, quantity, image, catagory) => {
     const newProduct = Object.create(null, {
        "id": {
            value: idGenerator.next().value,
            enumerable: true
        },
        "title": {
            value: title,
            enumerable: true
        },
        "description": {
            value: description,
            enumerable: true
        },
        "price": {
            value: price,
            enumerable: true
        },
        "quantity": {
            value: quantity,
            enumerable: true
        },
        "image": {
            value: image,
            enumerable: true
        },
        "catagory": {
            value: catagory,
            enumerable: true
        },
        "reviews": {
            value: []
        }
    })
    productStore.push(newProduct)
    return newProduct
}
const theThingToExport = Object.create(null, {
    "productStore": {
        get: () => productStore
    },
    "addProduct": {
        value: productFactory
    },
    "addReview": {
        value: function(productId, productReview) {
            // needs to find product object by referencing productId

            const product = productStore.find(product => product.id === productId)
            product.reviews.push(productReview)
            console.log(product)
        }
    }
})

module.exports = theThingToExport