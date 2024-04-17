import { User, DailyNotificationList } from '../Types/CustomTypes';
import { PreferenceType } from '../Types/Enums';
import { getFormattedDateString, getIncrementedDate } from './Dates';
import { increment } from './Utils';

export const getDailyNotificationListForDates = (index: number, date: Date, users: User[], report: DailyNotificationList[]): DailyNotificationList[] => {

    if (report.length === 90) {
        return createPrefererenceReport(getIncrementedDate(date, index), users, report);
    } else {
        return getDailyNotificationListForDates(increment(index), date, users, createPrefererenceReport(getIncrementedDate(date, index), users, report));
    }
}

const createPrefererenceReport = (date: Date, users: User[], report: DailyNotificationList[]): DailyNotificationList[] => {
    return report.concat([
        {
            Day: getFormattedDateString(date),
            UserDetails: filterCustomersByDate(date, users)
        }
    ])
}

const filterCustomersByDate = (date: Date, users: User[]): User[] => users.filter(x => shouldNotifyCustomerOnDate(x, date));

const shouldNotifyCustomerOnDate = (user: User, date: Date) => user.NotificationPreference.Date == date.getDate()
    || user.NotificationPreference.Days?.includes(date.getDay())
    || user.NotificationPreference.PreferenceType == PreferenceType.Daily;