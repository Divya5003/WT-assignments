document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculate").addEventListener("click", function () {
    var units = parseInt(document.getElementById("units").value);
    fetch("/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ units: units }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("result").innerHTML =
          "Electricity Bill: Rs. " + data.billAmount.toFixed(2);
      })
      .catch((error) => console.error("Error:", error));
  });
});
