# Microlog

    var log = require('microlog')(module, ':type: [:module] :message', true /* Логировать загрузку */);

1. ~50 sloc
2. Ничего лишнего
3. Очень простой
4. Умеет в предопределенное форматирование в стиле express.logger;
5. Умеет выводить в логгере названия файлов и дату
6. Умеет логи в духе `printf` — `log.info('%d port', port);`
7. Умеет в цвета (и планирует научиться на писать лишнего при перенаправлении stdout в файл)
8. Возвращает текст сообщения в runtime. `var message = log.info('my message'); message === 'my message' // true`;
9. Не умеет, но планирует научиться в `log level`.
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