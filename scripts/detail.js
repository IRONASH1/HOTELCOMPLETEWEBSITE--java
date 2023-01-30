function calc() {
  //Calculate here no of days

  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  const dateOne = new Date(d1);
  const dateTwo = new Date(d2);
  const time = Math.abs(dateTwo - dateOne);
  const days = Math.ceil(time / (1000 * 60 * 60 * 24));

  // take her no of adults
  var adults = document.getElementById("adults").value;

  var total = adults * days * "1000";

  document.getElementById("output").value = total;
}


