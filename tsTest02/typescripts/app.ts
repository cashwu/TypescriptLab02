
class EnumEx {
    static getNamesAndValues<T extends number>(e: any) {
        return EnumEx.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }

    static getNames(e: any) {
        return EnumEx.getObjValues(e).filter(v => typeof v === "string") as string[];
    }

    static getValues<T extends number>(e: any) {
        return EnumEx.getObjValues(e).filter(v => typeof v === "number") as T[];
    }

    private static getObjValues(e: any): (number | string)[] {
        return Object.keys(e).map(k => e[k]);
    }
}


//// 練習 boolean

var a: boolean = true;
var b: boolean = 1 < 2;

//// 練習 number
var c: number = 5.2;
var d: number = +"1";

//// 練習 string
var e: string = "john";
var f: string = 5 + "";
var h: string = `Hello ${e}`;

//// 練習 Enum
enum SizeEnum {
    XL,
    L,
    M,
    S
}



//// Enum 轉數字
d = SizeEnum.XL;

console.log(EnumEx.getNames(SizeEnum), "names");
console.log(EnumEx.getValues(SizeEnum), "values");
console.log(EnumEx.getNamesAndValues(SizeEnum), "names and values");



//// Enum 轉文字
e = SizeEnum[SizeEnum.XL];


//// 練習 any
var g: any = 1;
g = "test";
g = [];
