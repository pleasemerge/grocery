export const products = [
  { id: 1, group_id: 1, name: 'Mango Beverage', country: 'USA', rating: 4, price: 8, discount: 5, discountedPrice: 8, img: `${process.env.BASE_URL}img/products/mango_beverage.png`, hot: true, trending: true, stock: 25 },
  { id: 2, group_id: 4, name: 'Milk', country: 'USA', rating: 3, price: 30, discount: 5, discountedPrice: 20, img: `${process.env.BASE_URL}img/products/milk.png`, hot: false, trending: true, stock: 15 },
  { id: 3, group_id: 4, name: 'Fresh Honey', country: 'Canada', rating: 5, price: 50, discount: 0, discountedPrice: 40, img: `${process.env.BASE_URL}img/products/fresh_honey.png`, hot: true, trending: true, stock: 2 },
  { id: 4, group_id: 9, name: 'Beef Steak', country: 'Brazil', rating: 3, price: 15, discount: 0, discountedPrice: 15, img: `${process.env.BASE_URL}img/products/meat.jpg`, trending: false, stock: 10 },
  { id: 5, group_id: 1, name: 'Orange Beverage', country: 'USA', rating: 5, price: 30, discount: 0, discountedPrice: 20, img: `${process.env.BASE_URL}img/products/orange_beverage.png`, hot: false, trending: true, stock: 5 },
  { id: 6, group_id: 8, name: 'Body Lotion', country: 'India', rating: 5, price: 30, discount: 5, discountedPrice: 20, img: `${process.env.BASE_URL}img/products/body_lotion.png`, hot: true, trending: true, stock: 1 },
  { id: 7, group_id: 6, name: 'Fresh tomatoes', country: 'USA', rating: 4, price: 5, discount: 5, discountedPrice: 5, img: `${process.env.BASE_URL}img/products/tomato.jpg`, hot: true, trending: true, stock: 25 },
  { id: 8, group_id: 5, name: 'Oranges', country: 'USA', rating: 5, price: 9, discount: 0, discountedPrice: 7, img: `${process.env.BASE_URL}img/products/oranges.jpg`, hot: true, trending: true, stock: 8 },
  { id: 9, group_id: 4, name: 'Camembert', country: 'USA', rating: 3, price: 20, discount: 10, img: `${process.env.BASE_URL}img/products/camembert.png`, hot: false, trending: true, stock: 5 }
]

export const productGroups = [
  { name: 'Beverages', id: 1, hash_name: 'beverages', img: `${process.env.BASE_URL}img/products/orange_beverage.png` },
  { name: 'Snacks', id: 3, hash_name: 'snacks', img: `${process.env.BASE_URL}img/products/snacks.jpg` },
  { name: 'Breakfast & Dairy', id: 4, hash_name: 'breakfast_dairy', img: `${process.env.BASE_URL}img/products/milk.png` },
  { name: 'Fruits', id: 5, hash_name: 'fruits_vegetables', img: `${process.env.BASE_URL}img/products/oranges.jpg` },
  { name: 'Vegetables', id: 6, hash_name: 'fruits_vegetables', img: `${process.env.BASE_URL}img/products/tomato.jpg` },
  { name: 'Meat', id: 9, hash_name: 'meat', img: `${process.env.BASE_URL}img/products/meat.jpg` },
  { name: 'Health and Beauty', id: 10, hash_name: 'health_and_beauty', img: `${process.env.BASE_URL}img/products/body_lotion.png` }
]