//Union type

let userId : string | number = "mfierg488493";
//userId = 1 ;

function displayUserId(userId:string | number):string | number{
    console.log("User id is : " + userId);
    return userId;
}

displayUserId(userId)

//Array using union 

const myArr : (string | number) [] =["one" , 1 , "two" ,2]

console.log(myArr);


