import pfh from "../../pfh.index.js";

class PFHHelpersHandlerConsoleIndex {
    /**
     * To format error log
     * @param {string} location 
     * @param {string} text 
     */
    public error(location: string, text: string) {
        try {
            console.log(`[${pfh.helpers.datetime.getTime()}] \x1b[31m[ERROR]\x1b[0m[${location}] ${text}`);
        } catch (error) {
            throw error;
        }
    }

    /**
     * To format log 
     * @param {string} location 
     * @param {string} text 
     */
     public log(location: string, text: string) {
        try {
            console.log(`[${pfh.helpers.datetime.getTime()}] \x1b[32m[LOG]\x1b[0m[${location}] ${text}`);
        } catch (error) {
            throw error;
        }
    }

    /**
     * To format warning log
     * @param {string} location 
     * @param {string} text 
     */
     public warning(location: string, text: string) {
        try {
            console.log(`[${pfh.helpers.datetime.getTime()}] \x1b[33m[WARNING]\x1b[0m[${location}] ${text}`);
        } catch (error) {
            throw error;
        }
    }

    /**
     * To format component log
     * @param {string} name 
     */
    public component(name: string) {
        try {
            console.log(`[${pfh.helpers.datetime.getTime()}] \x1b[32m[LOG]\x1b[0m[pfh/index] Component \x1b[32m${name} \x1b[0mloaded`);
        } catch (error) {
            throw error;
        }
    }
}

export default PFHHelpersHandlerConsoleIndex;