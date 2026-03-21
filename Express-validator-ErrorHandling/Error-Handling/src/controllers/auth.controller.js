// export async function registerUser(req,res,next){
//     try{
//         throw new Error("encounter a error while registering new user");
//     }catch (err) {
//         next(err)
//     }

// }

// export async function registerUser(req,res,next){
//     try {
//         throw new Error("Passowrd is so weak")
//     } catch (err){
//         err.status = 400
//         next(err)
//     }
// }

export async function registerUser(req,res,next){
    try{
        throw new Error("User already exists with same email ")
    }catch(err){
        err.status = 409
        next(err)
    }
}