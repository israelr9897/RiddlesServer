export default function config(app){
    app.use("/riddles")
    app.use((req, res) =>{
        res.status(404).json({msg: "Route not find"})
      })
}