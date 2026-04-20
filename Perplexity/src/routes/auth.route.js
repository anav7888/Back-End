import { Router } from "express";
import { register, verifyEmail } from "../controllers/auth.controller.js";
import { registerValidator } from "../controllers/validators/auth.validator.js";

const authRouter = Router();

/**
 * @routes POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { user: {id,username,email,}, token}
 */

authRouter.post("/register", registerValidator, register)


/**
 * @routes Get /api/auth/Verify-email
 * @desc vrify user email
 * @access Public
 * @body { token}
 */
authRouter.get("/verify-email", verifyEmail)


/**
 * @routes POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email,password }
 */

authRouter.post("/login", loginValidator, login)

export default authRouter