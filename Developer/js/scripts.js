const languages = ["HTML" , "CSS" , "JavaScript" , "Swift" , "Java" , "PHP"];
const needed_languages = 3;


    console.log("مرحبا بك في برنامج توظيف المبرمجين")
let name = prompt("ما اسمك ؟");
let age = parseInt(prompt(" كم عمرك ؟"));
let experience =prompt("كم سنوات الخبره ؟");
let skill =prompt('اللغه التي تجيدها؟');


for (let i=1; i <=languages.length; i++){

         console.log(i+ ". " + languages[i-1]);
}



if(
    age > 25 &&
    age < 40 &&
    experience>3 &&
    //  هنا يرفض اللغه رقم اثنان لسبب ما
    (skills==needed_languages)
){
    console.log("تم قبولك");
}else{
    console.log("تم رفضك");
}


let tempratures =[ 39 , 60 , 88 , 101];

let temprature =[];

function logger(tempratures){ 
    for(let i=0; i<tempratures.length; i++){
        resultarray.push(parseInt((tempratures[i]-32) * (5 / 9 )));
    }
    return resultarray;
}

function toCel(tempratures){
    for(let i=0; i<tempratures.length; i++){
        resultarray.push(tempratures[i]-32 * (5/9));
    }
         return resultarray
}


let hot=[];
let minvalue=30

function hottestDays (tempratures , minvalue ){
    for(let i=0; i<tempratures.length; i++){
        if(tempratures[i] > minvalue){

        hot.push(tempratures[i]);
    }
    }
    return hot;
}






// let quizes = prompt(" your quizes grades ?");

// let midterm = prompt(" your midterm grades ?");

// let finals = prompt(" your final exam grades ?");

// let oral = prompt(" your oral grades ?");



let quize= document.getElementById.quizes.value;
let middterm= document.getElementById.middterm.value;
let final= document.getElementById.finals.value;
let oraal= document.getElementById.oral.value;

let total=( quize+middterm+final+oraal);


// let total=(document.getElementById.quizes.value + document.getElementById.midterm.value +document.getElementById.finals.value + document.getElementById.oral.value );


if( total >= 90){
    document.getElementById.score.innerHTML=("you got A")
}else 

if(total >= 90){
    document.getElementById.score.innerHTML=("you got A");
}else if (total >= 80){
    document.getElementById.score.innerHTML=("you got B");
}else if ( total>=70){
    document.getElementById.score.innerHTML=("you got C");
}else if(total >= 60){
    document.getElementById.score.innerHTML= ("you got D");
}else{
    document.getElementById.score.innerHTML= ("you got F");
}



// if(total >= 90){
//     console.log(" you got A");
// }else if (total >= 80){
// console.log("you got B");
// }else if ( total>=70){
//     console.log("you got C");
// }else if(total >= 60){
//     console.log("you got D");
// }else{
//     console.log("you got F");
// }

switch(total) {
    case "total >= 90":
        console.log(" you got A");
      break;
    case "total >= 80":
        console.log("you got B");
      break;
      case "total>=70":
        console.log("you got C");
        break;
        case "total >= 60":
            console.log("you got D");
            break;
    default:
        console.log("you got F");
  }