const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
//conection 
//177.95.147.214





const conn = async () => {
    try{
            const dbConn = await mongoose.connect(
               `mongodb+srv://${dbUser}:${dbPassword}@cluster0.qpmzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
            )

            console.log('Conectou no banco!')

            return dbConn
    } catch(error){
                console.log(error)
    }
}


conn()


module.exports = conn

