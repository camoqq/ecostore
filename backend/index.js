const express = require("express");
const db = require("./config/connection");
const getUsers = require("./routes/userRoutes");
const getProducts = require("./routes/productRoutes");
const getOrders = require("./routes/orderRoutes");
const funcs = require("./middleware/errorMiddleware");
const PORT = 5000;
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: ["https://ecostore-ten.vercel.app"],
    methods: ["POST", "GET", "UPDATE"],
    credentials: true,
  })
);

app.get("/", async (req, res) => {
  res.send("index");
});

//cookie parser middleware will allow me to access req.cookies.jwt in the authMiddleware
app.use(cookieParser());
app.use("/users", getUsers);
app.use("/products", getProducts);
app.use("/orders", getOrders);

app.use(funcs.notFound);
app.use(funcs.errorHandler);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running....");
//   });
// }

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});
