var a = 10;
var b = 20;
var c = 50;
var d = 70;

if(a==b) {
console.log("b is less than c");

} else if (d < c) {
console.log("d is less than c");

// }
var a = 10;
var b = 10;
var allowed = true;

if (a == b) {
    if (allowed == true) {
        console.log("allowed");
    } else {
        console.log("not allowed")

    }
} 

if (a == b) {
 if (allowed == true){
    console.log("allowed")
 }
}
if (a == b && allowed == true) {
    console.log("allowed");
}

if (a == b || allowed == true) {
    console.log("allowed");
}
var a = 10;
var a = 10;

if (a == b) {
    if (allowed == true){
       console.log("allowed")
    }
   }
   if (a == b && allowed == true) {
       console.log("allowed");
   }
   
   if (a == b || allowed == true) {
       console.log("not allowed");
   }
   var a = 10;
   var b = 10;
   var allowed = true;
   
   if (a == b) {
       if (allowed == true) {
           console.log("allowed");
       } else  {
           console.log("not allowed")
   
       }
   }

var a = 10;
var b = 10;
var allowed = true;

if (a == b) {
    if (allowed == true) {
        console.log("allowed");
    } else {
        console.log("not allowed")

    }
}

var math = +prompt ("enter your math marks");
var urdu = +prompt ("enter your urdu marks");
var eng = +prompt ("enter your eng marks");
var che = +prompt ("enter your che marks");
var phy = +prompt  ("enter your phy marks");
 
var percentage = [(math+urdu+eng+che+phy)/400]*100;
console.log(percentage);

if (percentage<50){
console.log("you ");
}
else if(percentage<50 && percentage>60){
    console.log("your grade is b fair ");
}


else if(percentage<60 && percentage>70){
    console.log("your grade is b+ good");
}


else if(percentage<70 && percentage>80){
    console.log("your grade is very good");
}

else if(percentage<80 && percentage>90){
    console.log("your grade is A+ perfect");
}

else{
    console.log("your get 1st position!")
}

var foods = ["biryani","qorma","nihari","karahai","nalli nihari"]
foods[2] = "daal chawal";
foods[4] = "chicken";
console.log(foods)


var b = [1,2,3,4,5,6,7,8,9];
 var c = b.splice(2,3, "abc","xyz","cvb","cbc","ty" );
console.log(b);

for (var i = 10; i < 120; i++) {
    console.log("i");
}

