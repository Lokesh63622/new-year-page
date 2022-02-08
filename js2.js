// let marker= {ink:'black', brand:'camlin', price:25}
// console.log(marker)
// console.log(marker.price)
// marker.ink=`blue`
// console.log(marker[`brand`])
// marker.shape=`cylinder`
// console.log(marker)
// delete marker.brand
// console.log(marker)
// let emp={eid:002,ename:`hitha`,sal:3000,
// details:{
//     dno:123,
//     city:`banglore`
// }
// }
// console.log(emp.details.city)
// const inventry={
//     pname:['parleg','goodday','hide seek','oreo','dark fentacy'],
//     price:[10,20,15,30,40]
// }
//task1
// inventry.pname.push('marry gold')
// inventry.price.push(50)
// //task2
// console.log(inventry)
// console.log(inventry.pname.length+"six biscets is there")
// //task3



// const kart={
//     pname:['mobile','power bank','head phone','watch'],
//     price:[10000,1500,1300,3000]
// }
// //task1
// let total = 0;
// let cd=(total,value) =>  total+value 

// let cd2 = kart.price.reduce(cd,0);

// console.log(cd2);
// //task2

// let fun1=(value)=> value*1.05

// let infla =kart.price.map(fun1);
// console.log(infla)
// //task3
// let even=(value)=>{
//     if(value.length%2==0)
//     return true
//     else
//     return false
// }
// let char=kart.pname.filter(even)
// console.log(char)

/////duplicate charecters count////
// function duplicateCharCount(str) {
		
// 	if(str) {
// 		var obj = {};
// 		for(let i = 0; i < str.length; i++) {
// 			if(obj[str[i]]){

// 				obj[str[i]] += obj[str[i]];
// 			}
            
//             else 

//             {
// 				obj[str[i]] = 1;
// 			}
// 		}
// 		console.log(obj);
// 	}
			
// }
//   duplicateCharCount("aabbdd");

////first not reapeting charecter///
// function firstNotRepeatingCharacter(s) {
//     for (let i = 0; i < s.length; i++) {
//         if(s.indexOf(s.charAt(i)) == s.lastIndexOf(s.charAt(i))) {
//             return s.charAt(i)
//         }
//     }
//     return 'llokesh'    
// }
// console.log(s)



// sort a string
// var str="amma"
// var v=str.split('')
// console.log(v.sort())


//replace the string
// var a=' lokesh'
// console.log(a.replace('lok' ,'mah'))

// reverse of a letter
// const reverse = function(string) {
//     return string.split(' ').map(function (item) {
//         return item.split('').reverse().join('');
//     }).join(' ');
// }
// console.log(reverse('i etah evol'))

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;

//     switch (str) {
//         case 'a':
//             count++;
//         case 'A':
//             count++
//         case 'e':
//         case 'E':
//         case 'i':
//         case 'I':
//         case 'o':
//         case 'O':
//         case 'u':
//         case 'U':
//             return 1;
//         default:
//             return 0;
//     }
// }
// console.log(findOccurrences())




//  var number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);


// var sum = eval('10*10+5');
// console.log(sum)


// var num = 8;
// var num = 10;
// console.log(num);


// console.log(3 + 4 + '5');


// var name = 'Hitha';
// age = 21;
// console.log(delete name);console.log(delete age);


// var numbers = [1, 2, 3, 4, 5];
// var [y] = numbers;
// console.log(y);

// for (let i = 1; i < 5; i++) {
// if (i === 3) continue;
// console.log(i); }


// var employeeId = '1234abe';
// (function(){
// console.log(employeeId);
// var employeeId = '122345';
// })();


// const fruit = ['banana', 'orange', 'apple']
// fruit.slice(0, 1)
// fruit.splice(0, 1)
// fruit.unshift('grape')
// console.log(fruit);


// var name = 'Mary Kom';
// var age = 21;
// console.log(Number.isNaN(name));
// console.log(Number.isNaN(age));
// console.log(isNaN(name));
// console.log(isNaN(age));


// function nums(a, b) {
// if (a > b) console.log('a is bigger');
// else console.log('b is bigger');
// return a + b; }
// console.log(nums(4, 2));
// console.log(nums(1, 2));


// var a = [1,2,3,4,5];
// console.log(a.slice(0,3))


// var a = [];
// a.unshift(1);
// a.unshift(22);
// a.shift();
// a.unshift(3,[4,5]);
// a.shift();
// a.shift();
// a.shift(); //.....?
// console.log(a)


// var values=[1,2,3,4]
// var ans=values.slice(1);
// console.log(ans);

// var sum=0;
// var arr = [10,15,20,30];
// arr.forEach(function myFunction(element)
// { sum= sum+element; });
//  console.log(sum);

//  var values=["one","two","Three"];
// var ans=values.shift(); console.log(ans);

// var arr=[1,2,3];
// var rev=arr.reverse(); console.log(rev);

let arr1=[10,20,30,40,50,60,80,90]
console.log(arr1);
console.log(arr1.slice(2,-2));
console.log(arr1);
console.log(arr1.splice(0,-5,100));
console.log(arr1);
console.log(arr1.splice(3,-5,'100'));
console.log(arr1);
console.log(arr1.join('#'));
console.log(arr1);
//console.log(arr1.join(#));
console.log(arr1);













