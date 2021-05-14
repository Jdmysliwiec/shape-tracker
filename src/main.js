$(document).ready(function() {
  $("form#triangle-checker-form").submit(function(event) {
    event.preventDefault();
    const length1 = $("input#length1").val();
    const length2 = $("input#length2").val();
    const length3 = $("input#length3").val();
    const triangle = new Triangle(length1, length2, length3);
    const response = triangle.checkType();
    $("#response").append("<p>" + response + "</p>");
  });
});