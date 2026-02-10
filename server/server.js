const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Lesson booking server is running");
});

// Port setup (IMPORTANT for deployment)
const PORT = process.env.PORT || 3000;


const bookings = [];
app.post("/book-lesson", (req, res) => {
  const { name, email, date, time, lessonType } = req.body;

  // Validation
  if (!name || !email || !date || !time || !lessonType) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Prevent double booking
  const conflict = bookings.find(
    booking => booking.date === date && booking.time === time
  );

  if (conflict) {
    return res.status(409).json({ error: "Time slot already booked" });
  }

  const newBooking = {
    id: bookings.length + 1,
    name,
    email,
    date,
    time,
    lessonType
  };

  bookings.push(newBooking);

  res.status(201).json({
    message: "Lesson booked successfully",
    booking: newBooking
  });
});

app.get("/bookings", (req, res) => {
  res.json(bookings);
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
