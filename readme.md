# Microlog

![screenshot](https://f.cloud.github.com/assets/1410106/2313997/6a424516-a310-11e3-98f3-0b08946d0170.png)

1. ~50 sloc
2. Ничего лишнего
3. Очень простой
4. Умеет в предопределенное форматирование в стиле express.logger;
5. Умеет выводить в логгере названия файлов и дату
6. Умеет логи в духе `printf` — `log.info('%d port', port);`
7. Умеет в цвета, приучен к переменной окружения `NOCOLOR`
8. Приучен к переменной окружения `NOLOG`
9. Возвращает текст сообщения в runtime. `var message = log.info('my message'); message === 'my message' // true`;
10. Ничего лишнего


### Установка

```
npm i -S microlog
```

### Синтаксис

```
var log = require('microlog')(module, ':type: [:module] :message', true /* Логировать загрузку */);
```


```
var log = require('microlog')(module);
log.info('Express listen %s host and %d port', config.get('HOST'), config.get('PORT'));
log.error('Get error message: %message', message);
log.debug('Shit! Shit! Shit!11')
```

### Форматирование

- `:type` — тип сообщения (`info`, `debug`, `error`)
- `:module` – название модуля (если есть)
- `:message` — тело логируемого сообщения


### Идеи

1. `log level`
2. транспорты в стиле express-middlewares