import express from "express";
export const api = express.Router();
api.get("/data", (req, res) => {
    res.send("Hola mundo");
});
