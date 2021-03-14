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
const shadeA=[];
const shadeB=[];
const shadeC=[];
const shadeD=[];


function onMonthChange(){
  var value=document.getElementById("month").value;
  console.log(" Month change : ", value);
  var daySelect=document.getElementById("day");
 
  if(value=="0"||value==="2"||value=="4"||value=="6"||value=="7"||value=="9"||value=="11"){
    // 31 days 
    var opt= document.createElement("option");
    var newOption;
    var index=1;
    daySelect.options = null;
    newOption=null;

    // create and add new options 
    for (var i=0; i<31; i++) {
        newOption = document.createElement("option"); 
        newOption.value = index;
        newOption.text="Day "+index;
        try { 
          daySelect.add(newOption); 
            } 
        catch (e) { 
          daySelect.appendChild(newOption);
            } 
            index++;
    }
    

  
      console.log("Days 31 selected")

  }else if(value=="1"){
    //feb 29days
    var newOption;
    var index=1;
    daySelect.options = null;
    newOption=null;

    // create and add new options 
    for (var i=0; i<28; i++) {


        newOption = document.createElement("option"); 
        newOption.value = index;
        newOption.text="Day "+index;
        try { 
          daySelect.add(newOption); 
            } 
        catch (e) { 
          daySelect.appendChild(newOption);
            } 
            index++;
    }
    console.log("Days 28 selected")


  }else{
    //30 days 
    var opt= document.createElement("option");
    var newOption;
    var index=1;
    daySelect.options = null;
    newOption=null;

    // create and add new options 
    for (var i=0; i<30; i++) {


        newOption = document.createElement("option"); 
        newOption.value = index;
        newOption.text="Day "+index;
        try { 
          daySelect.add(newOption); 
            } 
        catch (e) { 
          daySelect.appendChild(newOption);
            } 
            index++;
    }
    console.log("Days 30 selected")

  }


}
  //for milk production function
  function submitMilkProduction(){
    console.log("submitting milk production");

    var shade=document.getElementById("shed").value;
    if (shade=="0"){
      console.log("At shade A");
      var Month=document.getElementById("month").value;
      var day=document.getElementById("day").value;
      var days_production= document.getElementById("milk").value;
      console.log(" day: ", day, " Month: ", Month, "Production: ", days_production);



    }else if(shade=="1"){
      console.log("At shade B");


    }else if(shade=="2")
    {
      console.log("At shade C");

    }else{
      console.log("At shade D");

    }
    console.log( "Shade selected : ", shade)
  }
  function calculate(){

    consolen.log("Caculating production");
    
  }