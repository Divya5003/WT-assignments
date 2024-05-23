const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.post("/calculate", (req, res) => {
  const units = req.body.units;
  let totalAmount = 0;
  if (units <= 50) {
    totalAmount = units * 3.5;
  } else if (units <= 150) {
    totalAmount = 50 * 3.5 + (units - 50) * 4;
  } else if (units <= 250) {
    totalAmount = 50 * 3.5 + 100 * 4 + (units - 150) * 5.2;
  } else {
    totalAmount = 50 * 3.5 + 100 * 4 + 100 * 5.2 + (units - 250) * 6.5;
  }

  res.json({ billAmount: totalAmount });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
