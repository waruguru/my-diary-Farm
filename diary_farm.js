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
const month=["January","February","March","April","May","June","July","August","September","October","November","December"];
const numberOf31Days=[30];
const numberOf27Days=[28];
const numberOf30Days=[29];


function onMonthChange(){
  var value=document.getElementById("month").value;
  console.log(" Month change : ", value);
  var daySelect=document.getElementById("day");
  if(value===0||value===2||value===4||value===6||value===7||value===9||value===11){
    // 31 days 
    index=0;
    for(element in numberOf31Days){
      var opt= document.createElement("option");
      opt.text="DAY "+index+1;
      opt.value=index;
    
      daySelect.appendChild(opt);
      index++;

    }


  }else if(value===1){
    //feb 29days


  }else{
    //30 days 


  }



}
1,4 +81,9 @@ input{
  background-color: hsl(219, 39%, 60%);
  width: 100%;
  height: 42px;
}

#alert{
  color: rgb(255, 108, 108);
  margin-top: 85px;
}
7 index.html
@@ -38,7 +38,7 @@ <h3>Income Estimates</h3>

    <div class="input-field">
      <label for="period">Period (days)</label>
      <input class="time" list="time" name="time" id="period" value="0"/>
      <input class="time" list="time" name="time" id="period"/>
      <datalist id="time">
        <option value="Weekly"></option>
        <option value="Monthly"></option>
@@ -49,10 +49,11 @@ <h3>Income Estimates</h3>
    <input
      class="button"
      type="button"
      value="Generate"
      onclick="display(); incomeOverTime(rate(), time()); leapYear();"
      value="Generate report"
      onclick="display();"
    />