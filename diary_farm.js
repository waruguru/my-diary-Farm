// var e = document.getElementById("month");
// var month = e.options[e.selectedIndex].text;
// console.log("Selected month ", month)


// class maziwa {
//     constructor(day, shed, month, milk) {
//       this.day = day;
//       this.shed = shed;
//       this.month = month;
//       this.milk = milk;
//     }
//   }
//   var allProduct = [];
  
//   function milkProduct() {
//        var allProduct 
//     = new maziwa(document.getElementById("day").value,
//       document.getElementById("shed").value,document.getElementById("milk").value, document.getElementById("month").value);
  
//       allProduct.push(allProduct);
//     document.getElementById("day").value = "";
//     document.getElementById("shed").value = "";
//     document.getElementById("month").value = "";
//     document.getElementById("milk").value = "";

//     console.log("maziwa maziwa",maziwa)
//   }
//   const day=["Day1","Day2","Day3","Day4","Day5","Day6","Day7","Day8","Day9","Day10","Day11","Day12","Day13","Day14","Day15","Day16","Day17","Day18","Day19","Day20","Day21","Day22","Day23","Day24","Day25","Day26","Day27","Day28","Day29","Day30","Day31"]
 Array.from(document.querySelector("#month").options).forEach(function(option_element){
   let option_text=option_element.text;
   let option_value=option_element.value;
   let is_option_selected=option_element.selected;
  console.log('Option Text :' +option_text );
  console.log('Option Value :' +option_value );
  console.log('Option Selected :' +(is_option_selected==true  ?'Yes': 'No') );
  console.log("\n\r");
 });
const day=["Day1","Day2","Day3","Day4","Day5","Day6","Day7","Day8","Day9","Day10","Day11","Day12","Day13","Day14","Day15","Day16","Day17","Day18","Day19","Day20","Day21","Day22","Day23","Day24","Day25","Day26","Day27","Day28","Day29","Day30","Day31"];
const shed=["Shed A","Shed B","Shed C","Shed D"];
const month=["January","February","March","April","May","June","July","August","September","December"];
