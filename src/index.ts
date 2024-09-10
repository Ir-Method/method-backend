import { controllersArray } from "./controllers";
import App from "./app";
require("dotenv").config()

new App(Number(process.env.PORT),controllersArray) 