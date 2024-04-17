export const getDate = (year, month, day) => new Date(Date.UTC(year, month, day));
export const getFormattedDateString = date => date.toDateString();
export const getIncrementedDate = (date, increment) => getDate(date.getFullYear(), date.getMonth(), date.getDate() + increment);