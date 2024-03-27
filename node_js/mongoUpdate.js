const dbConnect= require('./mongodb')

const updateData=async ()=>{
    let db = await dbConnect();
    let result = await db.updateOne(
        { name:'max 5'},
        {
            $set:{name:'max pro 5', price:1000}
        }
        )
    console.log(result)

}

updateData();