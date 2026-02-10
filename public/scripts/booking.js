document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault(); // stop page reload

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    lessonType: document.getElementById("lessonType").value
  };

  fetch("http://localhost:3000/book-lesson", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      alert("Lesson booked!");
    })
    .catch(() => {
      alert("Something went wrong");
    });
});

fetch("http://localhost:3000/book-lesson", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name,
    email,
    date,
    time,
    lessonType
  })
})
.then(res => res.json())
.then(data => {
  alert("Lesson booked!");
})
.catch(err => {
  alert("Booking failed");
});
