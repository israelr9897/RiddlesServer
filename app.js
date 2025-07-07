import http from "http";
import { getRiddels, addRiddleToDB, updateRiddle } from "./services/controlerApp.js";

const PORT = 3100;

const server = http.createServer(async (req, res) => {
    if(req.method.toUpperCase() === "GET" && req.url === "/riddle"){
        getRiddels(res);
    }else if(req.method.toUpperCase() === "POST" && req.url ===  "/riddles/addRiddle"){
        addRiddleToDB(req,res);
    }else if(req.method.toUpperCase() === "PUT" && req.url === "/riddles/updateRiddle"){
        updateRiddle(req, res);
    }
})

server.listen(PORT, () => {
    console.log("server runing on port:" + PORT);
})