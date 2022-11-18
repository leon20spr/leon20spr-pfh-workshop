import * as typeorm from "typeorm";

import pfh from "../../pfh.index.js";

class PFHHelpersHandlerTypeORMIndex {
    private _activeConnection: typeorm.DataSource;

    public constructor() {
        this._activeConnection = undefined;
    }

    /**
     * To connect to the database
     */
    public async createConnection(entityArray: any[]): Promise<void> {
        try {
            if (this._activeConnection === undefined) {
                await typeorm.createConnection({
                    type: "mysql",
                    host: pfh.config.typeorm.host,
                    port: pfh.config.typeorm.port,
                    username: pfh.config.typeorm.username,
                    password: pfh.config.typeorm.password,
                    database: pfh.config.typeorm.database,
                    entities: entityArray
                }).then(async(result: any) => {
                    this._activeConnection = result;

                    await this._activeConnection.synchronize().then(() => {
                        pfh.helpers.console.log("helpers/utility", "The connection to the database could be established successfully!");
                    }).catch((error: Error) => {
                        throw error;
                    });
                }).catch((error: Error) => {
                    throw error;
                });
            } else {
                pfh.helpers.console.error("helpers/utility", "The connection to the database is already running!");
            }
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return a specific document
     * @param {string} repositoryName 
     * @param {any} criteria 
     * @returns One specific document
     */
    public async find(repositoryName: string, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.find({ where: criteria }).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To return all documents
     * @param {string} repositoryName 
     * @returns All documents
     */
    public async findAll(repositoryName: string): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.find().then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To insert a specific document
     * @param {string} repositoryName 
     * @param {any} criteria 
     */
    public async insert(repositoryName: string, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.insert(criteria).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To update a specific document
     * @param {string} repositoryName 
     * @param {typeorm.ObjectLiteral} id 
     * @param {any} criteria 
     */
    public async update(repositoryName: string, id: Array<typeorm.ObjectLiteral>, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.update(id, criteria).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To delete a document
     * @param {string} repositoryName 
     * @param {any} criteria 
     */
    public async delete(repositoryName: string, criteria: any): Promise<typeorm.ObjectLiteral> {
        try {
            return new Promise((resolve, reject) => {
                const repository = this._activeConnection.getRepository(repositoryName);

                repository.delete(criteria).then((result: any) => {
                    return resolve(result);
                }).catch((error: Error) => {
                    return reject(error);
                });
            }).catch((error: Error) => {
                throw error;
            });
        } catch (error: any) {
            throw error;
        }
    }
}

export default PFHHelpersHandlerTypeORMIndex;