const {app}=require("./App.js")

const {connectDB}=require('./db/dbConnect.js')

require('dotenv').config();

connectDB().then(()=>{
    app.on("error",(error)=>{
      console.log("ERRR:",error);
      throw error
    })
     app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is running at port: ${process.env.PORT}`);
     })
  })
  .catch((err)=>{
    console.log("MONGO db connection failed!!!",err);
  })
// Database connection

// API CREATION


// Schema creating for User model

// creating Endpoint for registering the user
const RegisterRoute=require("./routes/register.route.js");
app.use("/api/v1/user",RegisterRoute);

const AdminRoute=require("./routes/Admin.route.js");
app.use("/api/v1/admin",AdminRoute);

//creating endpoint for newCollection data
const ProductRoute=require("./routes/product.route.js");
app.use("/api/v1/product",ProductRoute);


// creating middleware to fetch user

//creating endpoint for adding products in cartdata
const CartRouter=require("./routes/Cart.route.js")
app.use("/api/v1/cart",CartRouter);
