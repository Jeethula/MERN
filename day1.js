// console.log("hi")

// let,const,var

// arrow function - var c(a,b)=>{return a-b}

// global - function in & out access
// local scope - inside the function

// for in -  index 
// for of -  value

// indexof - to find the index


// shift - inside 
// unshift - outside




// console.log("hi")
// const a=10    //const , let , var(function)
// function d()
// {
//     var xc="my"
//     console.log(xc)
// }
// d()
// var gh="h"



// function multply(factor)
// {
//     return function(a){
//     return a * 2
//     }
//  }
 
//  let res=multply(3)(5)
//  console.log(res)
//  var f=[1,2,3];
//  for (i of f)
//  {
//      console.log(i)
//  }
 
 
//  const str ="Tony stark"
//  const letter = 'n'
//  const index = str.indexOf(letter)
//  console.log(index)
//  console.log(str.split(''))
 
 
//  const fruits=[];
//  fruits.push('mango','apple','graphs')
//  console.log(fruits)
//  fruits.pop('apple')
//  console.log(fruits)
//  fruits.shift('graphs')
//  console.log(fruits)
//  fruits.unshift('apple')
//  console.log(fruits)
 
 
 
// var tr="new"
// var s=tr.split("").reverse().join("");
// console.log(s)



// const ar=['new','age','hi','hello'] ///slicing 
// {
//     console.log(ar.slice(1,3))
// }


// var my=['sri','scott']///splicing
// my.splice(1,0,'kanth')
// console.log(my)


// const arr=[1,2,3,4,56,7,7,5]
// arr.splice(-1,0,9,8,7,6,6,5)
// console.log(arr)





// var z="browser"
// var x=z.split("").reverse().join("");
// console.log(x)  /////
// if(z==x)  ///palindrome
// {
//     console.log("true")
// }
// else
// {
//     console.log("false")
// }




// const px=(str)=>{
//     return str.split("").reverse().join("")== str;
// }
// const result = px("madam")
// console.log(result)



// const titlecase=(str)=>{
//  const az=str.split(" ")
//  for(i=0;i<az.length;i++)
//  {
//      az[i]=az[i].charAt(0).toUpperCase()+az[i].slice(1)
//  }
//  return az.join(" ")
// }
// const result2 =titlecase("hello world")
// console.log(result2)






// const title=(str)=>{
//     const xx=str.split(" ") ///by using map function 
//     zx=xx.map(ele=>(ele.replace(ele[0],ele[0].toUpperCase())))
//     return zx.join(" ")
// }
// const ress=title("hello world")
// console.log(ress)




// const tit=(str)=>
// {
//     return str.replace('h',(match)=>match.toUpperCase())
// }
// const sa=tit("hello hi")
// console.log(sa)



// const anagram=(str1,str2)=>{
//     let s1=str.split(" ").sort().join(" ");
//     let s2=str.split(" ").sort().join(" ");
//     return(s1==s2)
// }
// const ans=anagram('silent','listen')
// console.log(ans)



// var j=1;
// function xxx(){
//     if(j<=5)
//     {
//         console.log(xxx)
//         j++
//     }
//     for(i=1;i<=5;i++){
//     setTimeout(xxx,i*3000)}
// }










 console.log("hi")
 const a=10    //const , let , var(function)
 function d()
 {
     var xc="my"
     console.log(xc)
 }
 d()
 var gh="h"



 function multply(factor)
 {
     return function(a){
     return a * 2
     }
  }
 
  let res=multply(3)(5)
  console.log(res)
  var f=[1,2,3];
  for (i of f)
  {
      console.log(i)
  }
 
 
  const str ="Tony stark"
  const letter = 'n'
  const index = str.indexOf(letter)
  console.log(index)
  console.log(str.split(''))
 
 
  const fruits=[];
  fruits.push('mango','apple','graphs')
  console.log(fruits)
  fruits.pop('apple')
  console.log(fruits)
  fruits.shift('graphs')
  console.log(fruits)
  fruits.unshift('apple')
  console.log(fruits)
 
 
 
 var tr="new"
 var s=tr.split("").reverse().join("");
 console.log(s)



const ar=['new','age','hi','hello'] ///slicing 
 {
     console.log(ar.slice(1,3))
 }


 var my=['sri','scott']///splicing
 my.splice(1,0,'kanth')
 console.log(my)


 const arr=[1,2,3,4,56,7,7,5]
 arr.splice(-1,0,9,8,7,6,6,5)
 console.log(arr)





 var z="browser"
 var x=z.split("").reverse().join("");
 console.log(x)  /////
 if(z==x)  ///palindrome
 {
     console.log("true")
 }
 else
{
     console.log("false")
 }




 const px=(str)=>{
     return str.split("").reverse().join("")== str;
 }
 const result = px("madam")
 console.log(result)



 const titlecase=(str)=>{
     const az=str.split(" ")
  for(i=0;i<az.length;i++)
  {
      az[i]=az[i].charAt(0).toUpperCase()+az[i].slice(1)
  }
  return az.join(" ")
 }
 const result2 =titlecase("hello world")
 console.log(result2)






 const title=(str)=>{
     const xx=str.split(" ") ///by using map function 
     zx=xx.map(ele=>(ele.replace(ele[0],ele[0].toUpperCase())))
     return zx.join(" ")
 }
 const ress=title("hello world")
 console.log(ress)




 const tit=(str)=>
 {
     return str.replace('h',(match)=>match.toUpperCase())
 }
 const sa=tit("hello hi")
 console.log(sa)



 const anagram=(str1,str2)=>{
     let s1=str.split(" ").sort().join(" ");
     let s2=str.split(" ").sort().join(" ");
     return(s1==s2)
 }
 const ans=anagram('silent','listen')
 console.log(ans)



 var j=1;
 function xxx(){
     if(j<=5)
     {
         console.log(xxx)
          j++
     }
     for(i=1;i<=5;i++){
     setTimeout(xxx,i*3000)}
 }