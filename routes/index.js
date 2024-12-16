import express from "express";
import noteRoute from './note.route.js'

// routes

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
unProtectedRouter.use("/note", noteRoute);

export { protectedRouter, unProtectedRouter };