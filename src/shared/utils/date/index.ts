/**
 * Получение дня в формате "день месяц" или "Сегодня"
 *
 * @param {string} date
 * @returns {string}
 */
export const getDay = (date: string): string => {
  const dateObject = new Date(date);
  const today = new Date();

  const isToday =
    dateObject.getDate() === today.getDate() &&
    dateObject.getMonth() === today.getMonth() &&
    dateObject.getFullYear() === today.getFullYear();

  if (isToday) {
    return 'Сегодня';
  }

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const day = dateObject.getDate();
  const month = months[dateObject.getMonth()];

  return `${day} ${month}`;
};

/**
 * Получение времени в формате "часы:минуты"
 *
 * @param {string} date
 * @returns {string}
 */
export const getTime = (date: string): string => {
  const dateObject = new Date(date);

  const hours = dateObject.getHours().toString().padStart(2, '0');
  const minutes = dateObject.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};
