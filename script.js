function program2()
{
  var varOne= document.getElementById("value1").value;
  var varTwo= document.getElementById("value2").value;
  let obj = {a:varOne,b:varTwo};
  callByReference(obj) 
  document.write("After Swapping USING ");
  document.write("<br>");
  document.write("CALL BY REFERENCE");
  document.write("<br>");
  document.write("Number 1 :" + obj.a );
  document.write("<br>");
  document.write("Number 2 :\n" +obj.b);

function callByReference(obj) { 
    console.log("PASS BY REFERENCE")
    console.log("\n")
    console.log("Before Swapping"); 
    console.log(obj);
    
    var temp=obj.a ; 
    obj.a=obj.b;
    obj.b=temp;
    console.log("After Swapping");
     console.log(obj);
    
  } 

}
