import express from "express";
import coordinateRouter from "./coordinates.js";

const routes = new express.Router();

routes.use('/coordenadas', coordinateRouter);

export default routes;
