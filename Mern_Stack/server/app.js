const express=require("express")


const app=express()

const port=3000


app.get("/"  , (req,res)=>{


    let data={
        message:"Hello, World karan i am jugal sharma",
        timestamp:new Date().toISOString(),
        age:6969453456465564,
        gender:"maled"
    }

    res.send(data)
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})



