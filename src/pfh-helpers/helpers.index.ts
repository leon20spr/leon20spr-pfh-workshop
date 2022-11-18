import PFHHelpersHandlerDateTimeIndex from "./helpers-handlers/handler.datetime.js";
import PFHHelpersHandlerConsoleIndex from "./helpers-handlers/handler.console.js";

import PFHHelpersHandlerTypeORMIndex from "./helpers-handlers/handler.typeorm.js";

class PFHHelpersIndex {
    public datetime: PFHHelpersHandlerDateTimeIndex;
    public console: PFHHelpersHandlerConsoleIndex;

    public typeorm: PFHHelpersHandlerTypeORMIndex;

    public constructor() {
        this.datetime = new PFHHelpersHandlerDateTimeIndex();
        this.console = new PFHHelpersHandlerConsoleIndex();

        this.typeorm = new PFHHelpersHandlerTypeORMIndex();
    }
}

export default PFHHelpersIndex;