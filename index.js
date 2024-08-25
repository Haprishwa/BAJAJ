const express = require("express");
const app = express();

app.use(express.json());

// Root endpoint
app.get("/", (req, res) => {
  res.send("Welcome to BFHL API");
});

app
  .route("/bfhl")
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highest_alphabet = "";

    for (const item of data) {
      if (!isNaN(item)) {
        numbers.push(item);
      } else if (item.length === 1 && isNaN(item)) {
        alphabets.push(item);
        if (
          !highest_alphabet ||
          item.toUpperCase() > highest_alphabet.toUpperCase()
        ) {
          highest_alphabet = item;
        }
      }
    }

    res.json({
      is_success: true,
      user_id: "Haprishwa",
      email: "haprishwa.21bce7206@vitapstudent.ac.in",
      roll_number: "21BCE7206",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highest_alphabet ? [highest_alphabet] : [],
    });
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});

