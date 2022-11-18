import express from "express";
import twig from "twig";

import PFHConfigIndex from "./pfh.config.js";
import PFHHelpersIndex from "./pfh-helpers/helpers.index.js";

import { PFHInterfaceComponent } from "./pfh-interfaces/interface.component.js";

class PFHIndex {
    public config: typeof PFHConfigIndex;
    public helpers: PFHHelpersIndex;

    private _componentArray: any[];
    private _entityArray: any[];
    private _routerArray: any[];

    private _express: express.Application;

    public constructor() {
        this.helpers = new PFHHelpersIndex();
        this.config = PFHConfigIndex;

        this._componentArray = [];
        this._entityArray = [];
        this._routerArray = [];

        this._express = express();
    }

    /**
     * To import all components
     */
    private async _importComponents(): Promise<void> {
        try {
            await import("./pfh-components/component-home/home.index.js");
        } catch (error: any) {
            throw error;
        }
    } 

    /**
     * To initialize a component
     * @param {any} component 
     */
    public async initializeComponent(component: PFHInterfaceComponent): Promise<void> {
        try {
            this._componentArray.push(component);

            if (component.entities) {
                component.entities.forEach((entity: any) => {
                    this._entityArray.push(entity);
                });
            }

            if (component.routers) {
                component.routers.forEach((router: any) => {
                    this._routerArray.push(router);
                });
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * To start the application
     */
    public async startApplication(): Promise<void> {
        try {
            await this._importComponents();
            await this.helpers.typeorm.createConnection(this._entityArray);

            this._componentArray.forEach((component: PFHInterfaceComponent) => {
                if (component.name) {
                    this.helpers.console.component(component.name);
                } else {
                    this.helpers.console.warning("pfh/index", "Please make sure that all components are named!");
                }
            });

            this._express.listen(this.config.express.port, () => {
                this.helpers.console.log("pfh/index", "The application could be started successfully!");
            });

            this._express.engine("twig", twig.__express);

            this._express.set("view-engine", "twig");
            this._express.set("view-options", "twig");

            this._express.set("twig options", {
                allow_async: true,
                strict_variables: false
            });

            this._express.set("views", "./src/pfh-views");

            this._express.use(express.static("./src/pfh-static"));
            this._express.use(express.urlencoded({
                extended: true
            }));

            this._express.use(this._routerArray);
        } catch (error: any) {
            throw error;
        }
    }
}

const pfh = new PFHIndex();

export default pfh;

pfh.startApplication();