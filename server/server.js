const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const authUserRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const confirmationRoute = require("./routes/confirmation");
const projectRoutes = require("./routes/project");
const tenderRoutes = require("./routes/tender");
const verifyRoutes = require("./routes/verify");
const profileRoute = require("./routes/profile");
const azureRoute = require("./routes/azure");
const AnnouncementRoutes = require("./routes/announcement")

app.use("/api", authUserRoutes);
app.use("/api",userRoutes);
app.use("/api",projectRoutes);
app.use("/api",tenderRoutes);
app.use("/api", confirmationRoute);
app.use("/api", verifyRoutes);
app.use("/api", profileRoute);
app.use("/api", azureRoute);
app.use("/api", AnnouncementRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on PORT", 3000);
  }
});
