import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const {connections} = await mongoose.connect(process.env.MONGO_DB_URI, {
      dbName: " TaskManager",
    });

    console.log(connections);


    console.log("Connected to DB successfully");
    console.log("Connected to the host:" , connections[0].host);
  } catch (err) {
    console.log("Error while connecting to Db", err);
  }
};
