import express from "express";
import StudentRouter from "./src/routes/student.router.js";
import mult  from "./src/routes/mult.math.router.js";
import div  from "./src/routes/div.math.router.js";
import sum  from "./src/routes/sum.math.router.js";
import res  from "./src/routes/res.math.router.js";
import { PORT } from "./src/configs/environment.js";

const app = express();

app.use(express.json());

app.use("/reviews", reviewsRouter);
app.use("/", StudentRouter);



app.listen(PORT, () => {
	console.log(`Server started on ${PORT}`);
});
