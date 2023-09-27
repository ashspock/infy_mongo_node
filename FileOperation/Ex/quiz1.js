// let add = (operand1, operand2) => operand1 + operand2;
// console.log( add(10,"30") ); // "1030"

let isconfirmed = confirm("Do you own a BMW"); // ReferenceError: confirm is not defined
if(isconfirmed){
    console.log("You are Rich");
}else{
    console.log("Don't Worry, you will soon buy BMW");
}
