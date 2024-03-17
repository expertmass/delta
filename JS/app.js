// let color="Red";

// if(color=="Red"){
//     console.log("Stop");
// }
// if(color=="Green"){
//     console.log("You Can go");
// }
// if(color=="Yellow"){
//     console.log("Ready for stop");
// }

// let size="";
// if(size=="XL"){
//     console.log("250 Rs")
// } else if(size=="L"){
//     console.log("200 Rs");
// }
//  else if(size=="M"){
//     console.log("150 Rs");
// }
//  else if(size=="S"){
//     console.log("100 Rs");
// }
//  else {
//     console.log("Ask to customer");
// }

// Day 2 Practice question

// Q1

// let num=100;
// if(num%10==0){
//     console.log("Good Number");
// }else{
//     console.log("Bad Number");
// }

// Q2
// let name=prompt("Enter your Name");
// let Age=prompt("Enter your Age");
// alert(`${name} is ${Age} Year old`);

//Q3

// let quarter=prompt("Enter number 1 To 4 to see quarter of month");

// switch(parseInt(quarter)){
// case 1:
//     console.log("January");
//     console.log("Febuary");
//     console.log("March");
//     break;
// case 2:
//     console.log("April");
//     console.log("May");
//     console.log("June");
//     break;
// case 3:
//     console.log("July");
//     console.log("Aug");
//     console.log("Sept");
//     break;
// case 4:
//     console.log("Oct");
//     console.log("Nov");
//     console.log("Dece");
//     break;
//     default: alert("Wrong choice");
// }


//Q4


// let str ="AamAdami";
// if((str[0]=="A" || str[0]=="a") && str.length>5){
//     alert("Golden String");

// }else{
//     alert("Not a Golden String");
// }


// Q5


// let a=300;
// let b=44;
// let c=500;
// if(a>b && b>c){
//     alert("a is largest");
// } else if(b>a){
//     alert("b is largest");
// }else{
//     alert("c is largest");
// }

// Q6

// let num1="12328";
// let num2="12328";
// if((num1[num1.length-1]==num2[num2.length-1])){
//     alert("last digits is same");
// }else{
//     alert("Not same");
// }

//day 3

// Q1

// let arr= [7, 9, 0, -2] ;
// let n=3
// let ans=arr.splice(0,n);
// console.log(ans);

// Q2
// let arr=[7,9,0,-2];
// let n=3;
// arr.splice(0,1);
// console.log(arr);

// Q3
// let str="hello";
// if(str==""){
//     console.log("String is blank");
// }else{
//     console.log("String is not blank");
// }

// 2nd method 

// let str = prompt("Enter a string");
// if(str==""){
//         alert("String is blank");
//     }else{
//         alert("Succes !!String is not blank");
//     }

// Q4
// let str="PraVeeN";
// let idx=4;
// if( str[idx]==str[idx].toLowerCase()){
//     console.log("charter is lowercase ");
// }else{
//     console.log("charter is not lowercase ");
// }

// Q5

// let str="  Praveen  ";
// console.log(str);
// console.log(str.trim());

// Q6

// let arr=[1,2,3,4,5];
// alert(arr.indexOf(3));

// for loop

// for(let i=1; i<=50; i++){
//     console.log(i);
// }

//odd num

// for(let i=1; i<=15; i++){
//     if(i%2!=0){
//         console.log(`${i} Number is odd `)
//     }
//     else{
//         console.log(`${i} Number is Even`);
//     }
// }

//even num
// let n=prompt("enetr which number  you want table")
// for(let i=1; i<=10; i++){
//     console.log(i*n);
// }

//Itrate on array

// let fruits =["mango", "graps", "papaya", "orange", "apple"];
// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// let heros=[["ironman","thor","loki"],["flash","superman","batman"]];

// for(let i=0 ; i<heros.length; i++){
//     console.log(heros[i]);
//     for(let j=0; j<heros[i].length; j++){
//         console.log(heros[i][j]);
//     }
// }


//for of loop

// let fruits=["mango", "apple", "litchi","orange"];

// for(fruit of fruits){
//     // console.log(fruit);
// }


// for(char of "PRAVEEN"){
//     console.log(char);
// }

// let heros=[["ironman","thor","loki"],["flash","superman","batman"]];

// for(hero of heros){
//     console.log(hero);
//     for(hero1 of hero){
//         console.log(hero1);
//     }
// }

//Q1 delete all occurances

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log(arr);
// let num=prompt("what you want to delete");
// for( let i=0; i<arr.length; i++){

//     if(arr[i]==num){
//         arr.splice(i,1);
//     }


// }
// console.log(arr);

// q2 
// let number = 287152;
// let count =0;
// let copy=number;
// while(copy > 0){
//     count++;
//     copy=Math.floor(copy/10);

// }
// console.log(count);

//Q3
// let number = 287152;
// let sum =0;
// let copy=number;
// while(copy > 0){

//    let digit=(copy%10);
//    sum+=digit;
//    copy=Math.floor(copy/10);

// }
// console.log(sum);

//Q4

// let n=5;
// let f1=1;

// for(let i=1; i<=5; i++){
//     f1=f1*i;
// }
// console.log(f1);

//Q4

// let arr= [2,3,4,5,67,8];
// let largest=0
// for(let i=0; i<arr.length; i++){
//     if(largest<arr[i] ){
//         largest=arr[i];
//     }
// }
// console.log(largest);

// Obj litrals
// const student={
//     name: "Praveen",
//     RollNo: 73,
//     Branch: "CSE"
// }
// console.log(student);

// const delhi={
//     PublicPlace: "anandVihar",
//     Metro:["anandVihar", "Rajghat"]
// }
// console.log(delhi);

//post litrals

// const post={
//     userName:"@expert_mass_",
//     content: "My Name Is Praveen Kumar Bhardwaj",
//     likes:270,
//     repost:5,
//     tag:["@harshit","@garima","@vikash"]
// }
// post.repost=20;
// post.gender;
// post.gender="male"; 
// console.log(post);
// console.log(post["repost"]);
// ;

// nested obj litrals 

// const classInfo = {
//     aman: { marks: 700, city: "Aayodhya" },
//     Praveen: { marks: 600, city: "Narora" },
//     Harhit: { marks: 500, city: "Lucknow" }
// }
// // console.log(classInfo);
// classInfo.Harhit.city="Ayodhya";
// classInfo.Harhit.marks=700;
// classInfo.aman.marks=500;
// classInfo.aman.city="Pune";
// console.log(classInfo);

// //nested array object
// const classInfo = [
//     { marks: 700, city: "Aayodhya" },
//     { marks: 600, city: "Narora" },
//     { marks: 500, city: "Lucknow" }
// ]
// console.log(classInfo[0]);
// console.log(classInfo[0].marks);
// classInfo[0].marks=699;
// console.log(classInfo[0].marks);

// const car={Name: "Maruti", Modal: 800, colot:"red"};
// alert([car.Name]);

// const Person={Name: "Praveen", Age:21, city:"lucknow"};
// // alert([Person.city]);
// Person.city="Bulandshahr";
// // alert([Person.city]);
// Person.Number;
// Person.Number=6397520489;
// alert([Person.Number]);



//function

// function hello(){
//     console.log("Praveen");
// }

// function sum(){
//     let a= parseInt(prompt("Emetr First Number"));
//     let b= parseInt(prompt("Emetr Second Number"));
//     let c= a+b;
//     alert(`The sum is ${c}`);
// }


// function seires(){
//     for(let i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// seires();


// function dice(){
//     let ran= Math.floor(Math.random()*6)+1;
//     console.log(ran);
// }
// dice();

// function avrage(a,b,c){
//     let avg=(a+b+c)/3;
//     document.getElementById("hello").value=avg;
// }
// avrage(2,3,4);

// function Sum(n){
//       let sum=0;
//       for(let i=1; i<=n;i++){
//         sum+=i;
        
//     }return sum;
   
      
// }

// let str=["hi", " Praveen", " kumar"];

// function concat(str){
//     let result="";
//     for(let i=0; i<str.length;i++){
//         result += str[i];
//     }return result;
// }

// function Greetmsg(fun , count){
//     for(let i=0; i<count; i++){
//         fun();
//     }
// }
// let greet= function(){
//     console.log("Namste");
// }
// Greetmsg(greet,2000);

// let calculator={
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
//     div: function(a,b){
//         return a/b;
//     }
// }

// let info={name:"Praveen",
// age:21,
// eng:75,
// math:57,
// hin:75,
// getAvg(){
//     let avg=(this.eng+this.math+this.hin)/3;
//     alert(avg);
// }}

// const sum= (a,b)=>{
// console.log(a+b);
// }
// const cube =(n) =>{
//     return n*n*n;
// }

// let info=[{
//     name:"Praveen",
//     age:21,
//     mark:65,
// },
// { name:"Nikit",
// age:22,
// mark:75,
// },
// {
//     name:"Harshit",
//     age:20,
//     mark:60,
// }];

// info.forEach((student) => {
//     console.log(student.name);
//     console.log(student.age)
// });

// let gpa= info.map((el) =>{
//     return el.mark/10;
// })


// let ans=[1,2,3,4,5,6,7,8];

// // let filted= ans.filter((el)=>{
// //     return el<5;
// // })
// [1,2,3,4,5,6,7,8].every((el)=>{
//     return el%2==0;
// });

// let ans=[1,2,3,4];

// let finalres= ans.reduce((res,el)=> res+el);
// console.log(finalres);

// let ans=[2,3,8,120,33,4,55];

// let max=ans.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

// let para1=document.createElement('p');
// para1.innerText="Hey i'm Red Para1 ";
// document.querySelector('body').append(para1);
// para1.classList.add('red');

// let h3=document.createElement('h3');
// h3.innerText="Hey i m blue heading";
// document.querySelector('body').append(h3);
// h3.classList.add('blue');


//div creation

// let div=document.createElement('div');
// let h1=document.createElement('h1');
// let para2=document.createElement('p');

// h1.innerText="I am in the div";
// para2.innerText="me too";
// div.append(h1);
// div.append(para2);

// document.querySelector('body').prepend(div);
// // div.classList.add('box');


// let inp=document.createElement('input');
// inp.placeholder="username";
// document.querySelector('body').append(inp);
// let button=document.createElement('button');
// button.innerText="click me";
// button.id="btn";
// document.querySelector('body').append(button);
// btn.classList.add('blue');


// let h1=document.createElement('h1');
// h1.innerHTML="<u>Dom Practies</u>";
// document.querySelector('body').append(h1);

// let p=document.createElement('p');
// p.innerHTML="Praveen <strong>kumar </strong> bhardwaj";
// document.querySelector('body').append(p);

// let btn=document.querySelector('button');
// console.dir(btn);
// btn.onclick=function(){
//     alert("Namste duniya");
// }

// let btns= document.querySelectorAll("button");

// for(btn of btns){
//     // // btn.onclick=namste;
//     // btn.addEventListener("click",namste);
//     // btn.addEventListener("click",hello);
//     btn.addEventListener("dblclick",hello);
// }

// function namste(){
//     alert("hii");
// }
// function hello(){
//     alert("hello");
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was  clicked");
// });

// let div= document.querySelector(".box");

// div.addEventListener("mouseenter",function(){
//     console.log("mouse inside the div");
// });

// let btn= document.querySelector("button");
// let h1= document.querySelector("h1");
// let p= document.querySelector("p");
// let h2= document.querySelector("h2");

// function changecolor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener("click", changecolor);
// h1.addEventListener("click", changecolor);
// p.addEventListener("click", changecolor);
// h2.addEventListener("click", changecolor);

// let btn=document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("clicked");
// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("clicked");
// });

// let inp=document.querySelector("input");
// inp.addEventListener("keydown", function(){
//     // console.log(event);
//     console.log("clicked");
// });

let frm=document.querySelector("form");

frm.addEventListener("submit",function(event){
 event.preventDefault();

 let inp=document.querySelector("input");
console.dir(inp);
console.log(inp.value);
   
});


