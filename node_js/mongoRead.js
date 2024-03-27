const dbConnect= require('./mongodb');

// dbConnect().then((resp)=>{                    // we can use promises to handle promises return by dbConnect() and find({name:'nord'}).toArray()
// resp.find({name:'nord'}).toArray().then((data)=>{
// console.log(data)
// })
// })

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'m 40'}).toArray();
   console.log(data)
}

main()