// birinci ededleri sonra emeli yazmaq lazimdir
//   function accountsAct(a,b,c){
//     switch (c){
//         case "+":
//             console.log(Number(a)+Number(b));
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//             console.log(a*b);
//             break;
//         case "/":
//             console.log(a/b);
//             break;        
//     }
// }
// accountsAct(prompt(), prompt(), prompt());



//b) 
// var name=prompt("Adı daxil edin:");
// function personInput(){
// return name;
// }
// console.log(name);

// var surname=prompt("Soyadı daxil edin:");
// function personInput(){
// return surname;
// }
// console.log(surname + " " + name);
// var fathername=prompt("Atasının adını daxil edin:");
// function personInput(){
// return fathername;
// }
// console.log(name[0]+ "." + surname + " " +fathername);




//c) 
// function numInput(num) {
//     var say = 1;
//     if (num < 50) {
//         for (i = 0; i < num; i++) {
//             if (i % 3 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
//     else if (num >= 50 && num <= 100) {
//         for (i = 0; i < num; i++) {
//             if (i % 5 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
//     else if (num > 100) {
//         for (i = 0; i < num; i++) {
//             if (i % 8 == 0) {
//                 console.log(say);
//                 say += 1;
//             }
//         }
//     }
// }
//     numInput(prompt());