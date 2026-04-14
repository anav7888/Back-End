import { Router } from "express";
import { register } from "../controllers/auth.controller.js";
import { registerValidator } from "../controllers/validators/auth.validator.js";

const authRouter = Router();

/**
 * @routes POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { user: {id,username,email,}, token}
 */

authRouter.post("/register", registerValidator, register )


// authRouter.get("/verify-email")

export default authRouter