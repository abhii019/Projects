
import mongoose from "mongoose"

export const Connection = async()=>{
  const URL = 'mongodb://abhiyergude2002:190502@ac-iugab8s-shard-00-00.uiooew2.mongodb.net:27017,ac-iugab8s-shard-00-01.uiooew2.mongodb.net:27017,ac-iugab8s-shard-00-02.uiooew2.mongodb.net:27017/?ssl=true&replicaSet=atlas-j64lck-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

    try{
     await mongoose.connect(URL , {useNewURLParser:true});
     console.log("database connected succesfully");
    }catch(error){
    console.log("errr while connecting")
    }
}