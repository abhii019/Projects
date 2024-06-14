
import User from "../model/user.js";

export const signupuser =async(request, response)=>{
  try{
const userdata = request.body;
const newUser = new User(userdata);
 await newUser.save();

 return response.status(200).json({msg :"signup succesful"})

  }catch(error){
    return response.status(500).json({msg :" Error while signup "})

  }
}