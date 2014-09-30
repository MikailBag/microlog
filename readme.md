# Microlog

[![Build Status](https://travis-ci.org/shuvalov-anton/microlog.svg)](https://travis-ci.org/shuvalov-anton/microlog)
[![Code Climate](https://codeclimate.com/github/shuvalov-anton/microlog/badges/gpa.svg)](https://codeclimate.com/github/shuvalov-anton/microlog)
[![Coverage Status](https://coveralls.io/repos/shuvalov-anton/microlog/badge.png?branch=master)](https://coveralls.io/r/shuvalov-anton/microlog?branch=master)

Micro server-side logger for nodejs. ~50 sloc

![screenshot](https://f.cloud.github.com/assets/1410106/2313997/6a424516-a310-11e3-98f3-0b08946d0170.png)

Why to use?

- Very simle
- ~50 sloc
- Support express like formattings
- Support to add timestamps to logs
- Support to add filenames to logs
- Support `printf` like logging: `log.info('%d port', port)`
- Support colorful logs and `NOCOLOR` env variable that is so useful in some cases
- Support `NOLOG` env variable
- Log methods returns messages to runtime too
- Very simple

## Install

```
npm i -S microlog
```

## Usege

```js
var log = require('microlog')(Object module, [String format], [Boolean logOnRequire]);
```

- `module` — node.js module link
- `format` — express like formatting string
- `logOnRequire` — write `init` messages to logs

Example:

```
var log = require('microlog')(module);
log.info('Express listen %s host and %d port', config.get('HOST'), config.get('PORT'));
log.error('Get error message: %message', message);
log.debug('Shit! Shit! Shit!11')
```

### Formatings

- `:type` — message type: `info`, `debug`, `error`
- `:module` – module name if it exists
- `:message` — message body


### Todo

1. Log levels
2. Transports support
