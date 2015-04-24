/*
 * ConsoleHelper consoleHelper.js
 * https://github.com/timwilkbrandt/console-helper
 * Author: Tim Wilk Brandt
 * Version: 1.0
 * CreateDate: 2015-3-24
 * ModifyData: 2015-3-24
 */
 
function consoleHelper(timerIsActive, timerLabel, mode){

    this.timerIsActive = timerIsActive;
    this.timerLabel = timerLabel;
    this.mode = mode;

    if(timerIsActive){console.time(timerLabel);}
};

/*
data: object being logged.
logType: 0 log, 1 debug, 2 error, 3 dir-javascript, 4 dir-xml, 5 trace, 6 warn, 7 assert.
timeStampLabel: label used for the time stamp, e.g.: 'enter init method'
*/
consoleHelper.prototype.log = function (data, timeStampLabel, logType) {

try	{

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


}catch(e){
//console not supported by current browser version.
}

}.bind(this);

consoleHelper.prototype.clear = function(){	
    console.clear();  };

consoleHelper.prototype.destroy = function(){

    if(this.timerIsActive){console.timeEnd(this.timerLabel);}

    consoleHelper = null;

}.bind(this);



