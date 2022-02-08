// // let fruit=[`apple`,`mango`,`orenge`]
// // for (let i=0;i<fruit.length;i++){
// //     if(fruit[i].charAt(0).toLowerCase()=a||e||i||o||u)
// //     console.log(i)
// // }

// let b=prompt("enter the food name")
// let dish=[`dhosa`,`edli`,`poori`]
//  if(b=dish[0]&&dish[1]&&dish[2]){
//      console.log(b)
//  }
//  else{
//      console.log("it is no                                                                                                                                                               t available")
//  }

// let num =[`1`,`2`,`3`,`3`,`4`,`4`,`5`];
// let uniqeNumber=[...new Set(num)];
// console.log(uniqeNumber);
// console.log(num.length=0)
///arry example//
// var arr=[`read`,`sing`,`cycling`,`dirnk`,`ride`,`race`,`eat`,`cook`,`code`]
// arr.includes(`read`)
// console.log(arr)
// console.log(`----------------------------------------------------------`)

// arr.pop()
// console.log(arr)
// console.log(`----------------------------------------------------------`)
// arr.push(`circet`)
// console.log(arr)
// console.log(`----------------------------------------------------------`)
// arr.shift()
// console.log(arr)
// console.log(`----------------------------------------------------------`)
// arr.unshift(`play`)
// console.log(arr)
// console.log(`----------------------------------------------------------`)
// arr.includes(`play`)
// console.log(arr)
// console.log(`----------------------------------------------------------`)
// var hob=[`read`,`sing`,`cycling`,`dirnk`,`ride`,`race`,`eat`,`cook`,`code`]
// console.log(hob.includes(`play`,4));
// var num=[2,3,4,5,6,7]
// num.splice(2,2,50)
// console.log(num)
// num.splice(0,2,10)
// console.log(num)
// var num1=[2,3,4,5,6,7]
// num1.join('+')
// console.log(num1.join(""))
// num1.forEach(element => {
    // });

// var num=[`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`]
// num.forEach((value,index) => {
//     console.log(value*50)
//     console.log(index)
    
// });

//remove a specific element in an array
//  var num=[2,3,4,5,6,7]
// console.log(num.splice(2,1))

//insert a number to arry
// var num=[`2`,`3`,`4`,`5`,`6`,`7`]
//  num.unshift(`10`)
// console.log(num)

//cheak it is an  arry or not
//  var num=[`2`,`3`,`4`,`5`,`6`,`7`]
//  var a=Array.isArray(num)
//  console.log(a)

//empty an array
// let num =[`1`,`2`,`3`,`3`,`4`,`4`,`5`];
// console.log(num.length=0)
// console.log(num)
//add element to start of an arry
//  var num=[`2`,`3`,`4`,`5`,`6`,`7`]
//   num.unshift(`10`)
//  console.log(num)

 //random items of an arry




// let num =[`1`,`2`,`3`,`3`,`4`,`4`,`5`];
// let uniqeNumber=[...new Set(num)];
//  console.log(uniqeNumber);


// var a=[10,20,30,40]
// function higerOrder(fun)
// {
//     let b[];
//     for (let i=0; i<a.length;i++)
//     {
//         b[i]=fun(a[i]);
 
//     }
//     return b;
// }
// console.log(higerOrder());

// let fun=(value)=>
// {
//     return value/3;
// }

var arr = [10,20,30,40];
console.log(arr);
function higherOrder()
{
 var b=[];

 for (let index = 0; index < arr.length; index++) 
 {
 b[index] = arr[index]+5;
 }
 return b;
}
 var k= higherOrder()
console.log(k);


// console.log("------------- or -------------------");

// let fun = (value) => { return value%2==0};

// function higherOrder1(fun)
// {
//  let b=[];






var arr1=k.filter((element)=>{
    if(element%2==0)
    return true
    else
    return false
})
console.log(arr1)

//  for (let index = 0; index < arr.length; index++) 
//  {
//  b[index] = fun(arr[index]);
//  }
//  return b;
// }
// console.log(higherOrder1(fun));

// console.log("------------- or -------------------");



// function action(task, a,b,c){
//     var res =cb(a,b,c);
//     return res;
// var cb=function(a,b,c){return a+b+c}
// var res1=action(cb,20,30,40);



//map////
// var test=[10,20,30,40,50]
// let fun=(element)=>{
//     return element=element+2
// }
// var test2=test.map(fun)
// console.log(test)
// console.log(test2)

//filter//
// var test2=[10,20,30,40,50]
// let test1=test2.filter((element)=>{
//     if (element%2==0)
//     return true
//     else
//     return false
// })
// console.log(test1)
















// function opretion( a,b,c, task){
//     var res =task(a,b,c);
//     return res;

// }
// var res1=opretion(10,20,30,function(a,b,c){
//     return a+b+c;
// })

// console.log(res1)

