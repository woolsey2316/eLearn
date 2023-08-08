const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");
const courses = require("./routes/api/course");
const exams = require("./routes/api/exam");
const dashboard = require("./routes/api/dashboard");
const activities = require("./routes/api/activity");
const instructors = require("./routes/api/instructor")
const tasks = require("./routes/api/task")
const cors = require("cors");
const app = express();
const corsConfig = {
  credentials: true,
  origin: "http://localhost:3000",
};
app.use(cors(corsConfig));
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
// DB Config
const db = require("./config/keys").mongoURI;
console.log("database: ", db)
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/courses", courses);
app.use("/api/activities", activities);
app.use("/api/exams", exams);
app.use("/api/dashboard", dashboard);
app.use("/api/instructors", instructors);
app.use("/api/tasks", tasks);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
