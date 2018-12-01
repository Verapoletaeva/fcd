/**
 * Транспорт для общения с сервером
 *
 * Общение происходит с помощью серверных методов - методов бизнес логики
 *
 * На сервере методы описываются как js-модули возвращающие функцию.
 *
 * 1 метод бизнес логики = 1 файл в папке server/api/
 *
 * Название метода должно совпадать с названием файла (без расширения)
 * из директории server/api/
 *
 * @param {String} methodName Название метода бизнес логики
 * @param  {Любое количество любых аргументов} args
 */

const protocol = window.location.protocol;
const hostname = window.location.hostname;

export default async function query(methodName, ...args) {
  // Подставляем номер порта (OUTER_PORT) из конфигурационного файла,
  // чтобы в режиме разработки ходить за бизнес логикой на него
  const port = hostname == 'localhost' ? '' : OUTER_PORT;
  const address = `${protocol}//${hostname}${port}/api/${methodName}?${JSON.stringify(args)}`;
  const response = await fetch(address);
  const json = await response.json();
  if (json.error) {
    throw new Error(json.error);
  }
  return json.result;
}
