//Arrays

let number : number [] = [12,45,67,21]

console.log(number);

console.log(number[0])
console.log(number[1])
console.log(number[2])
console.log(number[3])

console.log(number.length)

for(let i=0;i<number.length;i++)
{
    console.log(number[i]);
}

number.push(32);
console.log(number);

number.push();
console.log(number);

number.unshift(87)
console.log(number)

number.shift();
console.log(number);

number.forEach((value)=>{
    console.log(value);
})
