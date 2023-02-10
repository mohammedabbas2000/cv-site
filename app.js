const express = require('express');
const path = require('path');

const app = express();

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Define your experience and education
let experience = [
  {
    title: "technical support",
    company: "HOT",
    description: "A technical support representative who gives help to those who have a problem on the Internet."
  },
];

let education = [
  {
    degree: "Bachelor of Software Engineer",
    institution: "SCE collage",
    year: 2023
  },
  {
    degree: "course AWS tools devops",
    institution: "new midea College",
    year: 2022
  }
];

// Define the routes
app.get('/', (req, res) => {
  res.render('index', { experience, education });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
