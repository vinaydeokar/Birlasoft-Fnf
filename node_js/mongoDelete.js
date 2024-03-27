const dbConnect = require('./mongodb');

const deleteData=async ()=>{
let db = await dbConnect();
let result = await db.deleteMany({name:'max 7'})
console.log(result)
}
 
deleteData();