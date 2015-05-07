# console-helper

Javascript wrapper class for the console.log functionality

## Code Example
```js
        var logger = new consoleLogger(true, 'start logging', 1);
        logger.log('log msg 0', 0, 'enter init');
        logger.log('debug msg 1', 1, 'enter init');
        logger.log('error msg 2', 2, 'enter init');
        logger.log('trace msg 5', 5, 'enter init');
        logger.log('warn msg 6', 6, 'enter init');
        logger.clear();
        logger.destroy()
```

## Motivation
Wanted to make a wrapper for the console object in order to leverage it in a uniform
robust fashion

## Installation

Simply reference the JS file accordingly in your html.

## API Reference

###Properties

```
-timerIsActive
type: bool
description: Determines if a timer will be used for the instance of the logger.
```

```
-timerLabel
type: string
description: Label for the timer. Used to identify the timer.
```

```
-mode
type: string
description: Sets the logging level. Note: Can be overwritten within the invokation of
individual log transactions.
```

###Methods

```
-log function()
type: method
description: calls console.log. Adds a timestamp to the log transaction.
parameters: data - the item to be logged; logType - the log level, note if none is 
supplied then the mode property is used; timeStampLabel - label for your timestamp.
```

```
-clear function()
type: method
description: calls console.clear.
```

```
-destroy function()
type: method
description: ends the timer.
```

## License

MIT
