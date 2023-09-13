// env file
require("dotenv").config();
const chalk = require('chalk');
const mongoose = require("mongoose");

const app = require("./app/app");
const routes = require("./app/routers")

// server port
const port = 4000 || process.env.PORT;

// database connection
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(chalk.green("Database connection successful!")))
  .catch((err) => console.log(chalk.red(err)));

// all routes
app.use("/api/v1",routes)

app.listen(port, function () {
  console.log()
  console.log(chalk.yellow(`/api/users`))
  console.log(chalk.yellow(`/api/services`))
  console.log(chalk.yellow(`/api/comments`))
  console.log(chalk.yellow(`/api/news`))
  console.log(chalk.yellow(`/api/testimonials`))
  console.log()
  console.log(`Server is running on http://localhost:${port}`);
});
