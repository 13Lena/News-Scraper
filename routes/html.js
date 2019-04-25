var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });
}
// Save Note when user clicks the "save note" button

function saveNote(id) {
  // POST request to save note text (body) for specific article
  $.ajax({
      method: "POST",
      url: "/notes/" + id,
      data: {
          // Value taken from note textarea
          body: $("#notesText" + id).val()
      }
  })
  .then(function(data) {
      // Log response
      console.log(data);
  });

  // clear input textarea for note
  $("#notesText" + id).val("");
}