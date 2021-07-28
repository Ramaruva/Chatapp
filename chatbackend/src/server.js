const express = require("express")

const app = express()

const start =async()=>
{
      app.listen(2244,()=>
      {
          console.log("Rocket launched at 2244")
      })
}

module.exports=start