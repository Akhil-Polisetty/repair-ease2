import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
import RuserModel from "./model/RuserModel.js";
import Cookies from "js-cookie";

let email_glob;


const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())
// const connectToDb = async () => {
//   try {
//     if (!isConnected) {
//       await mongoose.connect("mongodb://localhost:27017/test");
//       console.log("connection established");
//       db = mongoose.connection.db;
//       users = db.collection("Dummy");
//       isConnected = true;
//     }

//     if (db) {
//       console.log("DB present");
//     } else {
//       console.log("DB is absent");
//     }
//     return;
//   } catch (error) {
//     console.log("Connection not established due to ", error);
//   }
// };


mongoose.connect("mongodb://localhost:27017/test")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.post("/register", async (req, res) => {
  try {
    console.log("entered register page")
    const { name, email, password } = req.body;
    const existingUser = await RuserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already registered" });
    }
    console.log("no error up to server 58")
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = {
      u_name:name,
      email_id:email,
      passkey: hashedpassword,
    };
    console.log("new user is ",newUser)
    await RuserModel.create(newUser);
    console.log("after succesfully inserting")
    res.status(200).json({ message: "Registration Completed" });
  } catch (error) {
    console.log("Error Occurred at server 69: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



app.post("/update_prof", async (req, res) => {
  try {
    console.log("entered register page")
    const { name, email, phone,city } = req.body;
    const existingUser = await RuserModel.findOne({ email });
    // if (existingUser) {
    //   return res.status(409).json({ message: "User already registered" });
    // }
    console.log("no error up to server 58")
    // const hashedpassword = await bcrypt.hash(password, 10);
    // const newUser = {
    //   u_name:name,
    //   phn_no:phone,
    //   city:city
    // };
    // console.log("new user is ",newUser)
    RuserModel.findOneAndUpdate({email_id:email},{$set:{u_name:name,phn_no:phone,city:city}},{new:true})
    .then(updatedDoc=>{
      console.log(updatedDoc)
    })
    .catch(error =>{
      console.log("error at server 98");
    });
    console.log("after succesfully inserting")
    res.status(200).json({ message: "Registration Completed" });
  } catch (error) {
    console.log("Error Occurred at server 69: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});




app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("emial is ",email)
    console.log("pass is ",password)
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await RuserModel.findOne({ email_id:email });
    console.log("the user is ",existingUser)
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // if(existingUser.passkey!==password)
    // {
    //   console.log("invalid credentials")
    //   return res.status(401).json({ message: "Invalid credentials" });

    // }

    bcrypt.compare(password, existingUser.passkey, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      });
    email_glob=email;
    console.log("emial at signin is ",email_glob)
    Cookies.set('email',email)
    const token = jwt.sign({ id: existingUser.name }, "hellosuck", { expiresIn: '1h' });
      const expirationDate = new Date(Date.now() + 3600000);
      res.cookie("token", token, { expires:expirationDate, httpOnly: true });
      console.log("Token stored:", token); // Log the token for debugging
      // res.status(200).json({ message: "Login Successful" });
      return res.status(200).json({message:"token created",token});
  }
   catch (error) {
    console.log("Error Occurred at dummyserv 102: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get('/getUsering', (req, res) => {
  // const email_cookie = Cookies.get("email");
  // if (!email_cookie) {
  //   console.log("cookie not found");
  //   return res.status(400).json("Email cookie not found");
  // }
    const email_cookie = Cookies.get('email')
    console.log("the cookie is ",email_cookie)
    console.log("email at getusering is ",email_glob)
    RuserModel.findOne({ email_id:email_glob})
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json("User not found");
      }
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

const verifyUser = async (req,res,next)=>
{
  try
  {
    const token = req.cookies.token;
    if(!token)
    {
      return res.json({status:false,message:"no token"})
    }
    const decoded=jwt.verify(token,"hellosuck");
    next();
  }
  catch(e)
  {
    return res.json(e);
  }
}

app.get('/auth/verify',verifyUser,(req,res)=>
{
  return res.json({status:true,message:"authorized"});
})

app.get('/auth/logout',(req,res)=>
{
  res.clearCookie('token')
  res.clearCookie('email')
  return res.json({status:true})
})

app.listen(7000, () => {
  console.log("Server running on port 7000");
});
