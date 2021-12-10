import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// initialize app
const app = express();
app.use(express.json());
dotenv.config({});

// cors
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/send", async (req, res) => {
  console.log(req.body);
  const output = `<h1>New Message</h1>
  <p>Sent by ${req.body.email}</p>
  <hr/>
  <p style="color:red" > The message is as follows :</p>
  <b><i>${req.body.message}</i></b>
  <br/>
  <img src="https://media-exp1.licdn.com/dms/image/C560BAQH83fMHe4Nu0A/company-logo_200_200/0/1612842554550?e=2159024400&v=beta&t=BTzKjhsE18y-YbKdxwvBTFCNFArVt-Casa8F5fqXUbw" alt="sn logo" />
  `;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.EMAIL_PASSWORD, // generated ethereal password
      },
    });

    // send mail with defined transport object
    transporter.sendMail(
      {
        from: `"Mail from SN Website" <${process.env.EMAIL}>`, // sender address
        to: `${process.env.EMAIL}`, // list of receivers
        subject: "New Mail From SN Website", // Subject line
        html: output, // html body
      },
      (error, success) => {
        if (error) {
          console.log(error);
        } else {
          res.status(200).json({ message: "email has been sent" });
          console.log("Email sent: " + success.response);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
