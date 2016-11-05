var EnumEx = (function () {
    function EnumEx() {
    }
    EnumEx.getNamesAndValues = function (e) {
        return EnumEx.getNames(e).map(function (n) { return ({ name: n, value: e[n] }); });
    };
    EnumEx.getNames = function (e) {
        return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "string"; });
    };
    EnumEx.getValues = function (e) {
        return EnumEx.getObjValues(e).filter(function (v) { return typeof v === "number"; });
    };
    EnumEx.getObjValues = function (e) {
        return Object.keys(e).map(function (k) { return e[k]; });
    };
    return EnumEx;
}());
//// 練習 boolean
var a = true;
var b = 1 < 2;
//// 練習 number
var c = 5.2;
var d = +"1";
//// 練習 string
var e = "john";
var f = 5 + "";
var h = "Hello " + e;
//// 練習 Enum
var SizeEnum;
(function (SizeEnum) {
    SizeEnum[SizeEnum["XL"] = 0] = "XL";
    SizeEnum[SizeEnum["L"] = 1] = "L";
    SizeEnum[SizeEnum["M"] = 2] = "M";
    SizeEnum[SizeEnum["S"] = 3] = "S";
})(SizeEnum || (SizeEnum = {}));
//// Enum 轉數字
d = SizeEnum.XL;
console.log(EnumEx.getNames(SizeEnum), "names");
console.log(EnumEx.getValues(SizeEnum), "values");
console.log(EnumEx.getNamesAndValues(SizeEnum), "names and values");
//// Enum 轉文字
e = SizeEnum[SizeEnum.XL];
//// 練習 any
var g = 1;
g = "test";
g = [];
