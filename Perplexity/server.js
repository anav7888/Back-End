import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";
import { testAI } from "./src/services/ai.service.js";

const PORT = process.env.PORT || 3000

testAI();


connectDB()
    .catch((err) => {
        console.error("MONGO connection failed:", err);
        process.exit(1);
    });



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
