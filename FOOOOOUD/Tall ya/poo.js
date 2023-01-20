//6.
// const calculator={

//     plus: function(a,b){
        
//         return a+b;
//     },

//     minus: function(a,b){
        
//         return a-b;
//     },

//     times: function(a,b){
        
//         return a*b;
//     },

//     divide: function(a,b){
        
//         return a/b;
//     },

//     power: function(a,b){
        
//         return a**);
//     },

// };

// const NUm1=2;
// const NUm2=3;

// console.log(calculator.plus(NUm1,NUm2));
// calculator.minus(NUm1,NUm2);
// calculator.times(NUm1,NUm2);
// calculator.divide(NUm1,NUm2);
// calculator.power(NUm1,NUm2);

////////////////////////////////////////////

//7.

// const age =96;

// function calculateKrAge(age0fForeigner){

//     return age0fForeigner+2;
// }

// const krAge =calculateKrAge(age);
// console.log(krAge);


/////////////////////////////////////////////////

//8.
// const calculator={

//     plus: function(a,b){
        
//         return a+b;
//     },

//     minus: function(a,b){
        
//         return a-b;
//     },

//     times: function(a,b){
        
//         return a*b;
//     },

//     divide: function(a,b){
        
//         return a/b;
//     },

//     power: function(a,b){
        
//         return a**b;
//     },

// };

// const NUm1=2;
// const NUm2=3;

// //return 을 사용함으로써 상호보완적 예컨데, 플러스 리턴값을 마이너스에서 활용가능
// const PlusResut =calculator.plus(NUm1,NUm2);
// const MinusResut =calculator.minus(PlusResut,10);
// const TimesResut =calculator.times(10,MinusResut);
// const DivideResut =calculator.divide(TimesResut,PlusResut);
// const PowerResut =calculator.power(DivideResut,MinusResut);

// console.log(PlusResut);
// console.log(MinusResut);
// console.log(TimesResut);
// console.log(DivideResut);
// console.log(PowerResut);

//9.

const age=parseInt(prompt("HOw old are you?"));


if(isNaN(age)||age<0){

    console.log("please Rewrite, You must write positive number");
}

else if(age<18){
    console.log("You are too young");
}
else if(age>=18 && age<=50){
    console.log("Ok You can drink!");
}

else if(age>50 && age<=80){
    console.log("You should exercise");
}

else if(age>80){
    console.log("Ok you can do whatever");
}




