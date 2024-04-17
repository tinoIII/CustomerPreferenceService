let src;
(function (_src) {
  let Test;
  (function (_Test) {
    var User = src.Types.CustomTypes.User;
    var Days = src.Types.Enums.Days;
    var PreferenceType = src.Types.Enums.PreferenceType;
    const users = _Test.users = [{
      Id: "test1",
      FirstName: "John",
      LastName: "Doe",
      NotificationPreference: {
        PreferenceType: PreferenceType.Daily
      },
      ContactDetails: {
        Number: 1,
        Email: "email"
      }
    }, {
      Id: "test2",
      FirstName: "Tom",
      LastName: "Doe",
      NotificationPreference: {
        PreferenceType: PreferenceType.Monthly,
        Date: 14
      },
      ContactDetails: {
        Number: 1,
        Email: "email"
      }
    }, {
      Id: "test3",
      FirstName: "Dom",
      LastName: "Doe",
      NotificationPreference: {
        PreferenceType: PreferenceType.Weekly,
        Days: [0, 1]
      },
      ContactDetails: {
        Number: 1,
        Email: "email"
      }
    }, {
      Id: "test4",
      FirstName: "Dom",
      LastName: "Doe",
      NotificationPreference: {
        PreferenceType: PreferenceType.Weekly,
        Date: 10
      },
      ContactDetails: {
        Number: 1,
        Email: "email"
      }
    }];
    const dates = [new Date(Date.UTC(2024, 1, 14)), new Date(Date.UTC(2024, 1, 15)), new Date(Date.UTC(2024, 1, 16))];
  })(Test || (Test = _src.Test || (_src.Test = {})));
})(src || (src = {}));