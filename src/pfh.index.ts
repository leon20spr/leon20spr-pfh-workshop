import express from "express";
import twig from "twig";

import PFHConfigIndex from "./pfh.config.js";
import PFHHelpersIndex from "./pfh-helpers/helpers.index.js";

class PFHIndex {
    public config: typeof PFHConfigIndex;
    public helpers: PFHHelpersIndex;

    public constructor() {
        this.helpers = new PFHHelpersIndex();
        this.config = PFHConfigIndex;
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