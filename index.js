
var fser="aditya";
var fass="123456";
var succ1=false;
var err="<h4>=>incorrect password </h4>";
var suc="<h4 style='color:blue;'> Congrats! I lose :( </h4>";
$("#Clear").click(function(){
  $(".logs").empty();
})

$("#loginbtn").click(function(){
  var fuser=fser;
  var fpass=fass;
  var user=$("#user").val();
  var pass=$("#pass").val();
  var temp=0;
  try{
    temp=Number(pass);
    fuser=encodeuser(fuser);
    fpass=endcodepass(fpass);
    console.log(fpass);
  }
  catch(err){
    $(".logs").append(err);
  }
  if(user===fuser && temp===fpass){
    $(".logs").append(suc);
    if(succ1===false)
    $(".logs").append("<h2 style='color:blue;'>but wait ! hehe try to login again, Welcome to level 2</h2>")
    fass=localStorage.getItem("hehe");
    succ1=true;
  }
  else{
    $(".logs").append(err);
  }
})


function encodeuser(user){
  var string="";
  for(var i=0;i<user.length;i++){
    string+=String(user.charCodeAt(i));
  }
  return string;
}
function endcodepass(pass){
  var pas=0;
  for(var i=0;i<pass.length;i++){
    pas+=Number(pass.charAt(i));
  }
  return pas%2;
}
