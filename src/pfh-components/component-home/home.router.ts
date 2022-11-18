import express from "express";

export const PFHComponentHomeRouter = express.Router();

PFHComponentHomeRouter.get("/", (request, response) => {
    try {
        response.render("views-home/home.index.twig", {
            title: "Home"
        });
    } catch (error: any) {
        throw error;
    }
});