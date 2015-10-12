//Total Jewelry

function log(msg){
      document.getElementById("log").innerHTML += msg + "<br/>";
}

var LOGIC_TO_USE = "not",
    jewelry_data = {
    jewelry_prices:[90, 95 , 80],
    total:0,
    };


function toggleLogic(){
  if (LOGIC_TO_USE == "adjusted"){
    LOGIC_TO_USE = "not"
  }else{
    LOGIC_TO_USE = "adjusted"
  }
}



function sum(semester_object){
  for(var x = 0; x < semester_object.jewelry_prices.length; x++){
    if(typeof semester_object.jewelry_prices[x] == "number"){
      semester_object.total += semester_object.jewelry_prices[x];
    }
  }
return(semester_object);
}

function avg(semester_object, sum_function){
  var semester_object = sum_function(semester_object);
  semester_object.grade = semester_object.total/ semester_object.jewelry_prices.length;
  return(semester_object);
}






if(LOGIC_TO_USE === "adjusted"){
sum(jewelry_data);
}else{
  sum(jewelry_data);
}
log(jewelry_data.total);




( function( $ ) {
$( document ).ready(function() {
// Cache the elements we'll need
var menu = $('#cssmenu');
var menuList = menu.find('ul:first');
var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
menu.on('click', '#responsive-tab', function(){
	listItems.slideToggle('fast');
	listItems.addClass('collapsed');
});
});
} )( jQuery );



