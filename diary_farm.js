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

var total=0;

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
    var total_production= document.getElementById("total");

    var shade=document.getElementById("shed").value;
    if (shade=="0"){
      console.log("At shade A");
      var Month=document.getElementById("month").value;
      var day=document.getElementById("day").value;
      var days_production= document.getElementById("milk").value;
      console.log(" day: ", day, " Month: ", Month, "Production: ", days_production);

      var valueToPush = { }; // or "var valueToPush = new Object();" which is the same
      valueToPush["month"] =Month;
      valueToPush["day"] = day;
      valueToPush["production"] = days_production;
      shadeA.push(valueToPush);
      window.localStorage.setItem('shadeA', JSON.stringify(shadeA));
      var shade_a_production=document.getElementById("shade_a");
      shade_a_production.innerHTML=days_production.toString();
      total=Number(total)+Number(days_production);
      total_production.innerHTML=total.toString();
      var days_production= document.getElementById("milk").value='';
 


      console.log(" pushed values into array ", shadeA);

    }else if(shade=="1"){
      console.log("At shade B");
      var Month=document.getElementById("month").value;
      var day=document.getElementById("day").value;
      var days_production= document.getElementById("milk").value;
      console.log(" day: ", day, " Month: ", Month, "Production: ", days_production);

      var valueToPush = { }; // or "var valueToPush = new Object();" which is the same
      valueToPush["month"] =Month;
      valueToPush["day"] = day;
      valueToPush["production"] = days_production;
      shadeA.push(valueToPush);
      window.localStorage.setItem('shadeB', JSON.stringify(shadeB));
      var shade_a_production=document.getElementById("shade_b");
      shade_a_production.innerHTML=days_production.toString();
      total=Number(total)+Number(days_production);
      total_production.innerHTML=total.toString();
      var days_production= document.getElementById("milk").value='';

    }else if(shade=="2")
    {
      console.log("At shade C");
      var Month=document.getElementById("month").value;
      var day=document.getElementById("day").value;
      var days_production= document.getElementById("milk").value;
      console.log(" day: ", day, " Month: ", Month, "Production: ", days_production);

      var valueToPush = { }; // or "var valueToPush = new Object();" which is the same
      valueToPush["month"] =Month;
      valueToPush["day"] = day;
      valueToPush["production"] = days_production;
      shadeA.push(valueToPush);
      window.localStorage.setItem('shadeC', JSON.stringify(shadeC));
      var shade_a_production=document.getElementById("shade_c");
      shade_a_production.innerHTML=days_production.toString();
      total=Number(total)+Number(days_production);
      total_production.innerHTML=total.toString();
      var days_production= document.getElementById("milk").value='';

    }else{
      console.log("At shade D");
      var Month=document.getElementById("month").value;
      var day=document.getElementById("day").value;
      var days_production= document.getElementById("milk").value;
      console.log(" day: ", day, " Month: ", Month, "Production: ", days_production);

      var valueToPush = { }; // or "var valueToPush = new Object();" which is the same
      valueToPush["month"] =Month;
      valueToPush["day"] = day;
      valueToPush["production"] = days_production;
      shadeD.push(valueToPush);
      window.localStorage.setItem('shadeD', JSON.stringify(shadeD));
      var shade_a_production=document.getElementById("shade_d");
      shade_a_production.innerHTML=days_production.toString();
      total=Number(total)+Number(days_production);
      total_production.innerHTML=total.toString();
      var days_production= document.getElementById("milk").value='';

    }
    console.log( "Shade selected : ", shade)
  }
  function calculate(){

    console.log("Caculating shade A ");
    // weekly calculation
    var total_=0;

    for ( var i=0; i<=shadeA.length; i++){
      var day = shadeA[i];
      if(!day==undefined||! day==''){
     var   dict={}
     dict=day;
        console.log("Caculating shade A day ", day);
          console.log("Caculating shade A day i production ", dict['production']);
          total_=Number(total_)+Number(dict['production']);

        

      }

      var shade_a_week=document.getElementById("shade_a_week");
      shade_a_week.innerHTML=(total_/7).toString();
  
    // total_=Number(total_)+Number(shadeA[i]);
     
    var total_b=0;

    for ( var i=0; i<=shadeB.length; i++){
      var day = shadeB[i];
      if(!day==undefined||! day==''){
     var   dict={}
     dict=day;
        console.log("Caculating shade B day ", day);
          console.log("Caculating shade B day i production ", dict['production']);
          total_=Number(total_b)+Number(dict['production']);

        

      }

      var shade_b_week=document.getElementById("shade_b_week");
      shade_b_week.innerHTML=(total_b/7).toString();
    }
    console.log("Caculating production  total ", total_);

    console.log("Caculating production ");




  }}
  function onDayChange(){
    total=0;
    document.getElementById("shade_b").innerHTML='';
    document.getElementById("shade_d").innerHTML='';
    document.getElementById("shade_c").innerHTML='';
    document.getElementById("shade_a").innerHTML='';
    document.getElementById("total").innerHTML='';




  }