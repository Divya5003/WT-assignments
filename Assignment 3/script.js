$(document).ready(function () {
  $("#searchIntegerBtn").click(function () {
    const integerArray = $("#integerArrayInput").val().split(",").map(Number);
    const searchTerm = parseInt(prompt("Enter the integer to search for:"));
    const foundIndex = integerArray.indexOf(searchTerm);
    if (foundIndex !== -1) {
      $("#integerResult").text(
        `Integer ${searchTerm} found at index ${foundIndex}.`
      );
    } else {
      $("#integerResult").text(`Integer ${searchTerm} not found in the array.`);
    }
  });

  $("#sortIntegerBtn").click(function () {
    const integerArray = $("#integerArrayInput").val().split(",").map(Number);
    const sortedArray = integerArray.sort((a, b) => a - b);
    $("#integerResult").text(`Sorted Array: ${sortedArray.join(", ")}`);
  });

  $("#searchEntityBtn").click(function () {
    const entitiesArray = $("#namedEntitiesInput").val().split(",");
    const searchTerm = prompt("Enter the named entity to search for:");
    const found = entitiesArray.includes(searchTerm);
    if (found) {
      $("#entityResult").text(
        `Named entity "${searchTerm}" found in the array.`
      );
    } else {
      $("#entityResult").text(
        `Named entity "${searchTerm}" not found in the array.`
      );
    }
  });
});
