import pfh from "../../pfh.index.js";

import { PFHComponentHomeRouter } from "./home.router.js";

class PFHComponentHomeIndex {
    name = "home";
    entities = [];
    routers = [ PFHComponentHomeRouter ];
}

pfh.initializeComponent(new PFHComponentHomeIndex());