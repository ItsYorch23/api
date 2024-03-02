import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const product = new ProductController
console.log(product);



const routesProduct = Router();

routesProduct.get("/", product.getProduct)
routesProduct.post("/", product.postProduct)


export default routesProduct;