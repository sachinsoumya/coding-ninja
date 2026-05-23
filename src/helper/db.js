import mongoose from "mongoose";
import {User} from "@/models/user";

export const connectToDB = async () => {
  try {
    const { connections } = await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: "Task_manager",
    });

    // console.log(connections);

    console.log("Connected to DB successfully");

    // const user1 = new User({
    //   name: "Soumya",
    //   email: "soumya@gmail.com",
    //   password: "123456",
    //   about: "Sachin is a full-stack web developer",
    // });

    // await user1.save();
    // console.log("user is created");
    // console.log("Connected to the host:" , connections[0].host);
  } catch (err) {
    console.log("Error while connecting to Db", err);
  }
};
