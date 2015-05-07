/*
 * ConsoleHelper consoleHelper.js
 * https://github.com/timwilkbrandt/console-helper
 * Author: Tim Wilk Brandt
 * Version: 1.1
 * CreateDate: 2015-3-24
 * ModifyData: 2015-5-7
 */
 

var consoleLogger = (function () {

    function consoleLogger(timerIsActive, timerLabel, mode) {

        this.timerIsActive = timerIsActive;
        this.timerLabel = timerLabel;
        this.mode = mode;

        if (timerIsActive) { console.time(timerLabel); }
    }

    /*
    data: object being logged.
    logType: 0 log, 1 debug, 2 error, 3 dir-javascript, 4 dir-xml, 5 trace, 6 warn, 7 assert.
    timeStampLabel: label used for the time stamp, e.g.: 'enter init method'
    */
    consoleLogger.prototype.log = function (data, logType, timeStampLabel) {

        try {

            if (logType == null) {

                //use the initialized value
                logType = this.mode;

            }

            switch (logType) {
                case 0:
                    console.log(data);
                    break;

                case 1:
                    console.debug(data);
                    break;

                case 2:
                    console.error(data);
                    break;

                case 3:
                    console.dir(data);
                    break;

                case 4:
                    console.dirXml(data);
                    break;

                case 5:
                    console.trace(data);
                    break;

                case 6:
                    console.warn(data);
                    break;

                case 7:
                    console.assert(data);
                    break;
            }

            if (timeStampLabel != null && timeStampLabel.length > 0) {
                console.timeStamp(timeStampLabel);
            }


        } catch (e) {
            //console not supported by current browser version.
        }

    }.bind(this);

    consoleLogger.prototype.clear = function () {
        console.clear();
    };

    consoleLogger.prototype.destroy = function () {

        var _this = this;

        if (_this.timerIsActive) { console.timeEnd(_this.timerLabel); }

        consoleLogger = null;

    };

    return consoleLogger;

})();




