const express = require('express');
const app = express();
// Configuration
const PORT = process.env.PORT || 3000;

///Route
app.get('/', (req, res) => {
  res.send('hello world');
})


// // Routes
// app.get('/', (req, res) => {
//   res.render('index.ejs', {
//     currentUser: req.session.currentUser
//   });
// });
///listening
app.listen (PORT, () => console.log('auth happening on port' , PORT))