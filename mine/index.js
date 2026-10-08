var arr = [];
function myfun(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
  
   let obj = {
    name: val1,
    rating: val2
   };
   arr.push(obj);
   console.log(arr);
}