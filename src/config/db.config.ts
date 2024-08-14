import mongoose, { Mongoose } from "mongoose";

// ITS DAMN FREE TIER SO DONT GIVE A S*** IF U ABUSE IT OR NOT (UR NOT WHITELISTED ANYWAY)
const connectionStr = `mongodb+srv://mongodb_user:db%40123321@tutorial-cluster.abplr.mongodb.net/short-url`;

const connectToDB = async () => {
  const connection = await mongoose.connect(connectionStr);

  connection.connection
    .on("connected", () => {
      console.log("Connected to MongoDB");
    })
    .on("error", (err) => {
      console.error("Error connecting to MongoDB", err);
    });
};

export { connectToDB };
