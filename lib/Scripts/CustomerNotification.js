let src;
(function (_src) {
  let Scripts;
  (function (_Scripts) {
    let CustomerNotification;
    (function (_CustomerNotification) {
      var User = src.Types.CustomTypes.User;
      var DailyNotificationList = src.Types.CustomTypes.DailyNotificationList;
      var PreferenceType = src.Types.Enums.PreferenceType;
      const getCustomersForRange = (index, dates, users, report) => {
        if (index == dates.length - 1) {
          return createPrefererenceReport(dates[index], users, report);
        } else {
          return getCustomersForRange(increment(index), dates, users, createPrefererenceReport(dates[index], users, report));
        }
      };
      const createPrefererenceReport = (date, users, report) => {
        return report.concat([{
          Day: date,
          Users: filterCustomersByDate(date, users)
        }]);
      };
      const filterCustomersByDate = (date, users) => users.filter(x => shouldNotifyCustomerOnDate(x, date));
      const shouldNotifyCustomerOnDate = (user, date) => user.NotificationPreference.Date == date.getDate() || user.NotificationPreference.Days?.includes(date.getDay()) || user.NotificationPreference.PreferenceType == PreferenceType.Daily;
      const increment = val => val + 1;
    })(CustomerNotification || (CustomerNotification = _Scripts.CustomerNotification || (_Scripts.CustomerNotification = {})));
  })(Scripts || (Scripts = _src.Scripts || (_src.Scripts = {})));
})(src || (src = {}));