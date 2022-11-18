class PFHHelpersHandlerDateTimeIndex {
    private _dateConstructor: Date;

    private _day: number;
    private _month: number;
    private _year: number;

    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    public constructor() {
        this._dateConstructor = new Date();

        this._day = this._getFormat(this._dateConstructor.getDate());
        this._month = this._getFormat(this._dateConstructor.getMonth() + 1);
        this._year = this._getFormat(this._dateConstructor.getFullYear());

        this._hours = this._getFormat(this._dateConstructor.getHours());
        this._minutes = this._getFormat(this._dateConstructor.getMinutes());
        this._seconds = this._getFormat(this._dateConstructor.getSeconds());
    }

    /**
     * To format a number
     * @param {any} value 
     * @returns formated number (00)
     */
    private _getFormat(value: any): number {
        try {
            if (value < 10) {
                value = "0" + value;

                return value;
            } else {
                return value;
            }
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To get the local date
     * @returns the local date (00.00.0000)
     */
    public getDate(): string {
        try {
            return this._day + "." + this._month + "." + this._year;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To get the local time
     * @returns the local time (00:00:00)
     */
    public getTime(): string {
        try {
            return this._hours + ":" + this._minutes + ":" + this._seconds;
        } catch (error: any) {
            throw error;
        }
    }

    /**
     * To get the local date an time
     * @returns the local date an time (00.00.0000 00:00:00)
     */
    public getDateTime(): string {
        try {
            return this._day + "." + this._month + "." + this._year + " " + this._hours + ":" + this._minutes + ":" + this._seconds; 
        } catch (error: any) {
            throw error;
        }
    }
}

export default PFHHelpersHandlerDateTimeIndex;