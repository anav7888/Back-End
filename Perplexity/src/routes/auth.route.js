import { Router } from "express";
import { register, verifyEmail, login, getMe  } from "../controllers/auth.controller.js";
import { registerValidator,loginValidator } from "../controllers/validators/auth.validator.js";
import {authUser} from "../middleware/auth.middleware.js";

const authRouter = Router();

/**
 * @routes POST /api/auth/register
 * @desc Register a new user
 * @access Public
 * @body { user: {id,username,email,}, token}
 */
authRouter.post("/register", registerValidator, register)

/**
 * @routes POST /api/auth/login
 * @desc Login user and return JWT token
 * @access Public
 * @body { email,password }
 */
 authRouter.post("/login", loginValidator, login)

 /**
 * @routes Get /api/auth/get-me
 * @desc Get current logged in user's details
 * @access Private
 */
authRouter.get("/get-me", authUser , getMe)

/**
 * @routes Get /api/auth/Verify-email
 * @desc vrify user email
 * @access Public
 * @body { token}
 */
authRouter.get("/verify-email", verifyEmail)




export default authRouter