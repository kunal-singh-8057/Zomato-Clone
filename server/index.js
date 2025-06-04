require("dotenv").config();
const express = require("express");
const app = require("../server/App/app");
const PORT = process.env.PORT;
const ConnectDB = require("../server/Utils/db");
const userRouter = require("../server/Routes/userRoutes");
const productRoutes = require("../server/Routes/ProductRoutes");
const admineRoutes = require("../server/Routes/AdmineRoutes");
const contactRoutes = require("../server/Routes/contactRoutes");
const blogRoutes = require("../server/Routes/BlogRoutes");
const directRoutes = require("../server/Routes/DirectRoutes");
const orderRouter = require("../server/Routes/OrderRoutes");
const paymentRoutes = require("../server/Routes/PaymentRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieparser = require("cookie-parser");




app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}));
app.use(cookieparser());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1",userRouter);
app.use("/api/v1",productRoutes);
app.use("/api/v1",contactRoutes);
app.use("/api/v1",admineRoutes);
app.use("/api/v1",blogRoutes);
app.use("/api/v1",directRoutes);
app.use("/api/v1",orderRouter);
app.use("/api/v1",paymentRoutes);


ConnectDB();

app.listen(`${PORT}`,()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})