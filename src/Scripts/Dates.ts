export const getDate = (year: number, month: number, day: number): Date => new Date(Date.UTC(year, month, day));
export const getFormattedDateString = (date: Date) => date.toDateString();
export const getIncrementedDate = (date: Date, increment: number) => getDate(date.getFullYear(), date.getMonth(), date.getDate() + increment);