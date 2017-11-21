const navBar = require("./navBar")
const productInterface = require("./productFactory")
const addProductsToDom = require("./productController")
const reviewFactory = require("./reviewFactory")

let shirt = productInterface.addProduct("Button Down Shirt", "Short-sleeve floral pattern", "$20", 100, "https://dl3f0afh5wl5f.cloudfront.net/media/catalog/product/cache/1/image/1024x576/0dc2d03fe217f8c83829496872af24a0/Y/V/YV7vuARdYs_The_Ultimate_WF_Floral_Button_Up.jpg", "clothes")
let lamp = productInterface.addProduct("4 ft. Floor Lamp", "Super Basic Paper Shade IKEA Floor Lamp", "$10", 1000, "http://www.ikea.com/PIAimages/0124285_PE280728_S5.JPG", "furniture")
let alexa = productInterface.addProduct("Echo Dot", "ALEXA!!", "$40", 25, "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5578/5578851_sa.jpg", "electronics")

let shirtReview1 = reviewFactory("This shirt was expensive and worth it! 5/5")
productInterface.addReview(shirt.id, shirtReview1)

let shirtReview2 = reviewFactory("Wildfang shirts make me look like the sexy butchy girl I've always strived to be! 5/5")
productInterface.addReview(shirt.id, shirtReview2)

let shirtReview3 = reviewFactory("Idk, I think I could just shop in the boys section for this 1/5")
productInterface.addReview(shirt.id, shirtReview3)

let lampReview1 = reviewFactory("Why does everyone have this lamp? 2.5/5")
productInterface.addReview(lamp.id, lampReview1)

let lampReview2 = reviewFactory("It provides light. 2.5/5")
productInterface.addReview(lamp.id, lampReview2)

let lampReview3 = reviewFactory("I have nothing positive or negative to say about this lamp. 2.5/5")
productInterface.addReview(lamp.id, lampReview3)

let alexaReview1 = reviewFactory("Is she really always listening? ?/5")
productInterface.addReview(alexa.id, alexaReview1)

let alexaReview2 = reviewFactory("It always lights up when I'm not talking to it... strange. 4/5")
productInterface.addReview(alexa.id, alexaReview2)

let alexaReview3 = reviewFactory("Skynet is real y'all")
productInterface.addReview(alexa.id, alexaReview3)

addProductsToDom()
