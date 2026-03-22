import { body, validationResult } from "express-validator";


const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    res.status(400).json(
        {
            errors: errors.array()
        }
    )
}


export const registerValidation = [
    body("username").isString().withMessage("username must be string"),
    body("email").isEmail().withMessage("email should be valid email address"),
    body("password").custom((value)=>{
        if(value.lenght < 6){
            throw new Error("password should be at least 6 char...")
        }
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/
        if(!passwordRegex.test(value)){
            throw new Error("password should contain one uppercase letter and one number")
        }
        return true
    }).withMessage("password should be at least 6 character one number one uppercase letter"),
    validate
]