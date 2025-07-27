// 1. Create a const object project to store information shown in the video

const product = {
    title : "Parker Ball Point Pen",
    rating : 4.2,
    isDealOfTheDay : true,
    mrp : 285,
    offer : 5,
    price : 270
}

console.log(product)

// Better approaches to do this

// Option 1: Calculate after object creation
// const product = {
//     title: "Parker Ball Point Pen",
//     rating: 4.2,
//     isDealOfTheDay: true,
//     mrp: 285,
//     offer: 5
// };
// product.price = product.mrp - (product.mrp * product.offer) / 100;

// Option 2: Use a function
// const createProduct = (mrp, offer) => ({
//     title: "Parker Ball Point Pen",
//     rating: 4.2,
//     isDealOfTheDay: true,
//     mrp,
//     offer,
//     price: mrp - (mrp * offer) / 100
// });

// const product = createProduct(285, 5);

// Option 3: Use a getter
// const product = {
//     title: "Parker Ball Point Pen",
//     rating: 4.2,
//     isDealOfTheDay: true,
//     mrp: 285,
//     offer: 5,
//     get price() {
//         return this.mrp - (this.mrp * this.offer) / 100;
//     }
// };


// 2. Create a const object project to store information shown in the video

const user = {
    userName : "sidharth_2003",
    post : 195,
    followers : 200,
    following : 214,
    accountName : "Sidharth Agarwal",
    category : "Developer",
    bio : "I am sidharth agarwal a developer"
}