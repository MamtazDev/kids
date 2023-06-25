import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  Center,
  CheckIcon,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";

const CurrencyCalculator = () => {
  const [service, setService] = React.useState("");

  return (
    <View>
      <Text>CurrencyCalculator page</Text>
    </View>
  );
};

export default CurrencyCalculator;

const styles = StyleSheet.create({});











// const nodemailer = require("nodemailer");




// const addOrderByUser = async (req, res) => {
//   const orderAmount = parseInt(req.body.price);
//   const newhistory = new History({
//     products: [req.body],
//     user: req.params.id,
//     // userId: req.params.id,
//   });

//   const newWallet = new Wallet({ products: [req.body] });
//   const user = await Admin.findOne({ _id: req.params.id });

//   const admin = await Admin.findOne({ role: "admin" });
//   const seller = await Admin.findOne({ name: req.body.seller });

//   // console.log(newhistory);

//   // wallet create hobe , user amount kombe, history add hbe

//   const newNotification = new Notificatin({
//     title: "Order",
//     amount: orderAmount,
//     userName: user?.name,
//     userId: req.params.id,
//     productName: req.body.title,
//     productId: req.body._id,
//   });

//   try {
//     if (user.wallet >= orderAmount) {
//       await Admin.updateOne(
//         { _id: req.params.id },
//         {
//           $inc: { wallet: -orderAmount },
//         }
//       );
//       await Admin.updateOne(
//         { name: req.body.seller },
//         {
//           $inc: { wallet: orderAmount },
//         }
//       );
//       await newhistory.save();
//       await newWallet.save();
//       await newNotification.save();

//       // await newWallet.insertOne(req.body);
//       // await newhistory.save();
//       // await newWallet.save();

//       // email send start
//       const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//           user: "apnrEmial@gmail.com",
//           pass: "apnr_email_password",
//         },
//       });

//       const mailOptions = {
//         from: "apnrEmial@gmail.com",
//         to: [admin.email, seller.email],
//         subject: "Order Purchased",
//         html: `<h2>Yahooooo!</h2>
//               <p>${user.name} purchased ${req.body.title} from ${req.body.store}</p>
//             `,
//       };

//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.error(error);
//           res.send("Error sending email");
//         } else {
//           console.log("Email sent: " + info.response);
//           res.send("Email sent successfully");
//         }
//       });

//       // email send END

//       res.status(200).send({
//         message: "Order Added Successfully",
//         status: 200,
//       });
//     } else if (user.wallet === 0 || user.wallet < orderAmount) {
//       res.status(400).send({
//         message: "You dont have sufficient balance in your wallet",
//         status: 400,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       message: error.message,
//       status: 500,
//     });
//   }
// };

// module.exports = {
//   addOrderByUser
// };
