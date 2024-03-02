import { Router } from "express";
import routesProduct from "./producto.routes.js";

const routes = Router();

routes.use('/producto', routesProduct)

export default routes;