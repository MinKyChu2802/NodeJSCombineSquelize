import express, { Request, Response } from "express";
import cors from "cors";
import router from "./routes/userRouter";
import sequelize from "./config";

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

// middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api", router);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Tables created successfully.");
  })
  .catch((error) => {
    console.error("Unable to create tables: ", error);
  });

//port
const PORT = process.env.PORT || 4000;

//serve

app.listen(PORT, () => console.log("server is runing", PORT));
