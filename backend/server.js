const fs = require("fs")
const util = require('util');
const log_stdout = process.stdout;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const path = __dirname + '/app/views/';

const app = express();

app.use(express.static(path));

var corsOptions = {
  origin: "http://10.184.0.26:8081" //change this based on ENV IP
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
// NON-Development Purpose
 db.sequelize.sync();

// Development Purpose
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

console.log = function(d) { //
  log_stdout.write(util.format(d) + '\n');
};

var access = fs.createWriteStream('./access.log');
process.stdout.write = process.stderr.write = access.write.bind(access);
