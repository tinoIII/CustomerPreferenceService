import { PreferenceType } from "../Types/Enums.js";
import { getFormattedDateString, getIncrementedDate } from "./Dates.js";
import { increment } from "./Utils.js";
export const getDailyNotificationListForDates = (index, date, users, report) => {
  if (report.length === 90) {
    return createPrefererenceReport(getIncrementedDate(date, index), users, report);
  } else {
    return getDailyNotificationListForDates(increment(index), date, users, createPrefererenceReport(getIncrementedDate(date, index), users, report));
  }
};
const createPrefererenceReport = (date, users, report) => {
  return report.concat([{
    Day: getFormattedDateString(date),
    UserDetails: filterCustomersByDate(date, users)
  }]);
};
const filterCustomersByDate = (date, users) => users.filter(x => shouldNotifyCustomerOnDate(x, date));
const shouldNotifyCustomerOnDate = (user, date) => user.NotificationPreference.Date == date.getDate() || user.NotificationPreference.Days?.includes(date.getDay()) || user.NotificationPreference.PreferenceType == PreferenceType.Daily;