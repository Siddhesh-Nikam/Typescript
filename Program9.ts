//void

// function myfun(a:number,b:number):void{
//     console.log("Sum is : " , a+b)
// }

// myfun(10,11);

////////////////////////////////////////////

//never

// function myfun1():never {
//     throw new Error("This is an error");
// }

//unknown

function myFun2(){
    return "this is value";
}

let value : unknown = myFun2();
let value1 : any = myFun2();
console.log(value1.toUpperCase());
//console.log(value.toUpperCase()); //ERROR

let valueInString : string = value as string;
console.log(valueInString.toUpperCase())

