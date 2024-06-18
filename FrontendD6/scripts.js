// function showMsg() {
//   alert("Alert");
// }

// function showLog() {
//   console.log("Log MSG");
// }

// function writeHTML() {
//   document.write("Test javascript");
// }

// function Home(msg) {
//   let home = msg;
//   document.getElementById("Home").innerHTML = home;
//   console.log(home);
// }

// function Alert() {
//   alert("Check alert from javascript file");
// }
// // Home("Park");

// // Alert();
// // Home("Pruke");

// function checkGrade(num) {
//   if (num >= 80) {
//     return (document.getElementById("grade").innerHTML = "A");
//   } else if (num >= 50) {
//     return (document.getElementById("grade").innerHTML = "B");
//   } else if (num < 50) {
//     return (document.getElementById("grade").innerHTML = "C");
//   }
// }

// function checkGradeWithSwitch(num) {
//   let grade;
//   switch (true) {
//     case num >= 80:
//       grade = "A";
//       break;
//     case num >= 50:
//       grade = "B";
//       break;
//     case num < 50:
//       grade = "C";
//       break;
//     default:
//       grade = "Undefine Grade Please enter point I will Calculate later";
//   }
//   return (document.getElementById("grade").innerHTML = grade); // if return grade you must use console.log instead of call function in HTML file
// }

// console.log(checkGradeWithSwitch(88));

// let rand;
// let min = 5;
// let max = 500;
// for (let i = 1; i <= 20; i++) {
//   rand = Math.floor(Math.random() * 350) + 1;
//   if (rand < min) {
//     rand = min;
//   } else if (rand > 500) {
//     rand = max;
//   }
//   if (rand >= 300) {
//     console.log("Rand >= 300");
//     break;
//   }
//   //   document.write("<br>" + rand);
//   console.log(rand);
// }

// ออกมากสุด 500 น้อยสุด 5 loop 20 รอบ
// isNan ส่งกลับเป็น true ถ้าไม่ใช่ตัวเลข
// let inputElement1 = document.getElementById("text01"); // ตัวอักษร
// let inputElement2 = document.getElementById("text02"); // ตัวเลข
// let buttonElement = document.getElementById("btn");

// let buttonElement = document.getElementById("btn");
// buttonElement.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("out_put").innerHTML = "Hello World";
// }
// function checkForm(event) {
//   event.preventDefault();
//   let inputElement1 = document.getElementById("text01").value; // ตัวอักษร
//   let inputElement2 = document.getElementById("text02").value; // ตัวเลข
//   if (isNaN(inputElement1) && inputElement1 != "") {
//     console.log(inputElement1);
//   } else {
//     alert(" Input 1 กรุณาป้อนเฉพาะตัวอักษรและต้องไม่เป็นค่าว่าง");
//     return false;
//   }
//   if (!isNaN(inputElement2) && inputElement2 != "") {
//     console.log(inputElement2);
//   } else {
//     alert(" Input 2 กรุณาป้อนเฉพาะตัวเลขและต้องไม่เป็นค่าว่าง");
//     return false;
//   }
// }

// let arr = [];
// let rand;
// let min = 10;
// let max = 300;
// for (let i = 1; i <= 5; i++) {
//   rand = Math.floor(Math.random() * 250) + 1;
//   if (rand < min) {
//     rand = min;
//   } else if (rand > 300) {
//     rand = max;
//   }
//   arr.push(rand);
//   arr.sort((a, b) => a - b);
// }
// console.log(arr);

// let arr1 = [];
// let min1 = 1;
// let max1 = 3;
// let rand1;

// for (let i = 1; i <= 3; i++) {
//   rand1 = Math.floor(Math.random() * (max1 - min1 + 1) + min1);
//   if (rand1 == 1) {
//     rand1 += min1;
//   }
//   arr1.push(rand1);
// }

// let arr2 = [];
// let min2 = 1;
// let max2 = 3;
// let rand2;

// for (let i = 1; i <= 3; i++) {
//   rand2 = Math.floor(Math.random() * (max2 - min2 + 1) + min2);
//   if (rand2 == 2) {
//     rand2 += min1;
//   }
//   arr2.push(rand2);
// }

// let arr3 = arr1.concat(arr2);
// console.log("Array 1 without 1 :", arr1);
// console.log("Array 2 without 2 :", arr2);
// console.log("Array 3  = Array1 + Array2 :", arr3);

function inputNumber(event) {
  event.preventDefault();

  let input1 = document.getElementById("text01").value;
  let input2 = document.getElementById("text02").value;
  let input3 = document.getElementById("text03").value;
  let rand;
  let arr = [];
  let tableElement = document.getElementById("table");
  if (input1 != 5) {
    alert("Input 1 ต้องเป็น 5 เท่านั้น");
  }
  if (!input2 >= 10 && input2 <= 20) {
    alert("Input 2 ต้องอยู่ระหว่าง 10 และ 20");
  }
  if (input3 != 100) {
    alert("Input 1 ต้องเป็น 100 เท่านั้น");
  }

  for (let i = 1; i <= input1; i++) {
    rand = Math.floor(Math.random() * (input3 - input2 + 1) + input2);
    arr.push(rand);
  }
  arr.sort((a, b) => a - b);

  for (let j = 1; j <= input1; j++) {
    rand = Math.floor(Math.random() * (input3 - input2 + 1) + input2);
    let tr = document.createElement("tr");

    let tdno = document.createElement("td");
    tdno.innerText = j;
    tr.appendChild(tdno);

    let tdvalue = document.createElement("td");
    tdvalue.innerText = rand;
    tr.appendChild(tdvalue);

    tableElement.appendChild(tr);
  }
  console.log(arr); //  ได้ Array แล้ว
}
