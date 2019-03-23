function triangletracker() {
  var triangle[];
  var triangle =.push(parseINt(prompt("key in the first side of the triangle", )));
  if (triangle[1] === triangle[2] && triangle[2] === triangle[3]){
    alert("it is an equileteral triangle");
  }
  document.getElementById("button").addEventListener('click', triangleTracker);
}
