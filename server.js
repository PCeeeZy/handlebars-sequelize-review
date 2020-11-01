//  dependencies
const express = require('express');

const apiRoutes = require('./routes/apiRoutes');

// create an instance of express
const app = express();

// either heroku or localhost
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(apiRoutes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });  