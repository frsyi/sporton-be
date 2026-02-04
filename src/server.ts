import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT || "5001";
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://fahmarosyi_db_user:user123@myapp-cluster.ecmjxx9.mongodb.net/sporton?appName=myapp-cluster";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
