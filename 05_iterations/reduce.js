let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr = myArr.reduce((acc, num)=>{return acc + num},0)
console.log(newArr);

let newArr2 = myArr.reduce(function (acc, curval) {
    console.log(`${acc} + ${curval} = ${acc+curval}`);
    return acc + curval
}, 0)
console.log(newArr2);

let newArr3 = myArr.reduce((acc, num)=> acc + num, 0)
console.log(newArr3);

let newArr4 = myArr.reduce((acc, num)=> (acc + num), 0)
console.log(newArr4);

let myArr2 = [
  {
    "product_id": "SKU-34987",
    "name": "Wireless Ergonomic Mouse",
    "price": 35.99,
    "quantity": 1,
    "type": "Electronics",
    "brand": "ErgoTech",
    "color": "Black",
    "is_digital": false,
    "discount_applied": false
  },
  {
    "product_id": "SKU-90123",
    "name": "Bamboo Cutting Board Set",
    "price": 29.99,
    "quantity": 1,
    "type": "Kitchenware",
    "brand": "GreenLiving",
    "size": "Medium",
    "material": "Bamboo",
    "stock_status": "in_stock"
  },
  {
    "product_id": "SKU-56789",
    "name": "Premium High-End Coffee Beans",
    "price": 18.50,
    "quantity": 2,
    "type": "Food & Beverage",
    "brand": "Roasters Choice",
    "size": "12 oz",
    "roast_level": "Medium-Dark",
    "origin": "Colombia"
  },
  {
    "product_id": "SKU-11223",
    "name": "4K Smart LED TV",
    "price": 499.99,
    "quantity": 1,
    "type": "Electronics",
    "brand": "Visionary",
    "size": "55-inch",
    "in_cart_since": "2025-09-08"
  },
  {
    "product_id": "SKU-44556",
    "name": "Organic Cotton T-Shirt",
    "price": 15.00,
    "quantity": 3,
    "type": "Apparel",
    "brand": "EcoWear",
    "size": "Large",
    "color": "Grey",
    "available_in_other_sizes": true
  },
  {
    "product_id": "SKU-66778",
    "name": "Noise-Cancelling Headphones",
    "price": 129.99,
    "quantity": 1,
    "type": "Electronics",
    "brand": "SoundBliss",
    "color": "Silver",
    "warranty_included": true
  },
  {
    "product_id": "SKU-88990",
    "name": "Stainless Steel Water Bottle",
    "price": 24.95,
    "quantity": 4,
    "type": "Accessories",
    "brand": "HydraFlow",
    "size": "24 oz",
    "color": "Teal",
    "engraving_option": true
  },
  {
    "product_id": "SKU-10203",
    "name": "Yoga Mat",
    "price": 45.00,
    "quantity": 1,
    "type": "Fitness",
    "brand": "ZenithFit",
    "size": "Standard",
    "color": "Purple"
  },
  {
    "product_id": "SKU-30405",
    "name": "Digital E-book: The Future of AI",
    "price": 9.99,
    "quantity": 1,
    "type": "Digital Product",
    "brand": null,
    "size": "Download",
    "is_digital": true,
    "format": "PDF"
  },
  {
    "product_id": "SKU-50607",
    "name": "Leather Wallet",
    "price": 55.00,
    "quantity": 1,
    "type": "Accessories",
    "brand": "UrbanCarry",
    "color": "Brown",
    "material": "Full-Grain Leather"
  },
  {
    "product_id": "SKU-70809",
    "name": "LED Desk Lamp",
    "price": 39.99,
    "quantity": 1,
    "type": "Home Goods",
    "brand": "Luminary",
    "color": "White",
    "features": ["3-way dimming", "USB port"]
  },
  {
    "product_id": "SKU-90101",
    "name": "Men's Running Shoes",
    "price": 89.99,
    "quantity": 1,
    "type": "Footwear",
    "brand": "Velocity",
    "size": "US 10.5",
    "color": "Black/Red"
  },
  {
    "product_id": "SKU-20304",
    "name": "Portable Bluetooth Speaker",
    "price": 75.00,
    "quantity": 1,
    "type": "Electronics",
    "brand": "AcoustiX",
    "color": "Blue",
    "battery_life_hours": 12
  },
  {
    "product_id": "SKU-40506",
    "name": "Ceramic Soup Mug",
    "price": 8.99,
    "quantity": 6,
    "type": "Kitchenware",
    "brand": "Cozy Kitchen",
    "size": "20 oz",
    "color": "Ivory"
  },
  {
    "product_id": "SKU-60708",
    "name": "Gardening Gloves",
    "price": 12.50,
    "quantity": 2,
    "type": "Tools",
    "brand": "GreenThumb",
    "size": "One Size Fits All",
    "material": "Canvas",
    "is_returnable": true
  },
  {
    "product_id": "SKU-80900",
    "name": "Subscription: Monthly Coffee",
    "price": 25.00,
    "quantity": 1,
    "type": "Subscription",
    "brand": "Roasters Choice",
    "billing_cycle": "Monthly",
    "is_digital": true,
    "promotion": "First month 50% off"
  },
  {
    "product_id": "SKU-11002",
    "name": "Pet Bed",
    "price": 65.99,
    "quantity": 1,
    "type": "Pet Supplies",
    "brand": "FuzzyFriends",
    "size": "Medium",
    "color": "Brown"
  },
  {
    "product_id": "SKU-32004",
    "name": "Weighted Blanket",
    "price": 79.99,
    "quantity": 1,
    "type": "Home Goods",
    "brand": "CalmSleep",
    "weight_lbs": 15,
    "color": "Charcoal"
  },
  {
    "product_id": "SKU-53006",
    "name": "Action Camera",
    "price": 199.99,
    "quantity": 1,
    "type": "Electronics",
    "brand": "AdventureCam",
    "features": ["Waterproof", "4K Video"],
    "bundled_accessories": ["Extra battery", "Mount"]
  },
  {
    "product_id": "SKU-74008",
    "name": "Graphic Novel: The Last City",
    "price": 19.99,
    "quantity": 1,
    "type": "Books & Media",
    "brand": "CityScape Comics",
    "is_digital": false,
    "format": "Hardcover",
    "author": "J. P. Morgan"
  }
]

let newArr5 = myArr2.reduce((acc, curPrice)=>acc+curPrice.price, 0)
console.log(Math.ceil(newArr5));

