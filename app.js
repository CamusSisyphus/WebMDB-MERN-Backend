// const express = require('express')
import express from "express";

import cors from "cors";

import "dotenv/config";
import session from "express-session";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import LikesRoutes from "./likes/routes.js";

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));
const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.use(express.json());
UserRoutes(app);
LikesRoutes(app);

app.listen(4000);
