function triTracker() {
  var triangle1 = parseInt(prompt("key in first side of the triangle"));
  var triangle2 = parseInt(prompt("key in the second side of the triangle"));
  var triangle3 = parseInt(prompt("key in third side of the triangle"));

  var trip = function(triangle1,triangle2,triangle3) {
  return triangle1 + triangle2 > triangle3 && triangle1 + triangle3 > triangle2 && triangle2 + triangle3 > triangle1;
  }
  if (trip( triangle1,triangle2,triangle3) && triangle1 === triangle2 && triangle1 === triangle3 && triangle2 === triangle3)  {
    alert ("It is an equilateral triangle.")
  }
  else if (trip(triangle1,triangle2,triangle3) && triangle1 === triangle2 || triangle2 === triangle3 || triangle3 === triangle1){
    alert ("It is an isosceles triangle.")
  }
  else if (trip(triangle1,triangle2,triangle3) && triangle1 !== triangle2 && triangle2 !== triangle3 && triangle3 !== triangle1){
   alert("It is a scalene triangle.")
  }
  else {
    alert("Not a triangle.")
  }

}
