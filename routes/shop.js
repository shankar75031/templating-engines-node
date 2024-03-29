const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");
const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    products: products,
    pageTitle: "Shop",
    path: "/shop",
    hasProducts: products.length > 0,
    activeShop: true,
    activeAddProduct: false,
    productCSS: true,
  });
});

module.exports = router;
