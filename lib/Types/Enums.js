let src;
(function (_src) {
  let Types;
  (function (_Types) {
    let Enums;
    (function (_Enums) {
      let PreferenceType = /*#__PURE__*/function (PreferenceType) {
        PreferenceType[PreferenceType["Never"] = 0] = "Never";
        PreferenceType[PreferenceType["Daily"] = 1] = "Daily";
        PreferenceType[PreferenceType["Weekly"] = 2] = "Weekly";
        PreferenceType[PreferenceType["Monthly"] = 3] = "Monthly";
        return PreferenceType;
      }({});
      _Enums.PreferenceType = PreferenceType;
      let Days = /*#__PURE__*/function (Days) {
        Days[Days["Sunday"] = 0] = "Sunday";
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuesday"] = 3] = "Tuesday";
        Days[Days["Wednesday"] = 4] = "Wednesday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        return Days;
      }({});
      _Enums.Days = Days;
    })(Enums || (Enums = _Types.Enums || (_Types.Enums = {})));
  })(Types || (Types = _src.Types || (_src.Types = {})));
})(src || (src = {}));