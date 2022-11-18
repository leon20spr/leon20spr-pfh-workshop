import express from "express";
import twig from "twig";

import PFHHelpersIndex from "./pfh-helpers/helpers.index";

class PFHIndex {
    public helpers: PFHHelpersIndex;

    public constructor() {
        this.helpers = new PFHHelpersIndex();
    }

    /**
     * To start the application
     */
    public async startApplication(): Promise<void> {
        try {
            
        } catch (error: any) {
            throw error;
        }
    }
}

const pfh = new PFHIndex();

export default pfh;

pfh.startApplication();