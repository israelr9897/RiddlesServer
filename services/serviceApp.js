import { readFileToRiddles, writeRiddleInDB } from "../DAL/DALriddles.js";

async function getRiddels(res){
    let resRiddle;
        try {
            resRiddle = await readFileToRiddles();
        } catch (err) {
            res.writeHead(500, { "content-type": "application/json" });
            res.end(JSON.stringify({ err: "Faild read data." }));
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(resRiddle));
}
async function addRiddleToDB(req,res){
    const budy = [];
    req.on("data", (chunk)=> {
        budy.push(chunk);
    })
    req.on("end", async ()=> {
        if(req.method === "POST" && req.headers['content-type'] === 'application/json'){
            const data = JSON.parse(Buffer.concat(budy).toString());
            const riddels = await readFileToRiddles();
            data.id = riddels.length +1;
            riddels.push(data);
            writeRiddleInDB(riddels);
            // res.end(JSON.stringify(data))
            res.end("The riddle added successfully!");
        }
        else{
            res.end("Unsupported request")
        }
    })
    req.on("eror", err => {
        console.error("request error:" + err)
        res.writeHead(500, {'content-type':'application/json'})
    })
}

export {getRiddels, addRiddleToDB}