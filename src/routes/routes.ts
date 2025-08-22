export const prefix = "/";

export const routes = {
  default: prefix,
  
  // Auth routes
  login: prefix + "login",
  signup: prefix + "signup",

  // Main routes
  main: prefix + "main",
  
  // Product categories
  ss: prefix + "ss",
  fw: prefix + "fw", 
  pants: prefix + "pants",
  tshirt: prefix + "t-shirt",
  sale: prefix + "sale",
  collection: prefix + "collection",
  community: prefix + "community",
  
  // Additional pages
  products: prefix + "products",
};
