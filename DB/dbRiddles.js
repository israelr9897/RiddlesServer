import { config } from "dotenv";
import { MongoClient, Db} from "mongodb";
config();

const client = new MongoClient(process.env.DB_CONNECTIN);

/**
 * @type {Db | null}
*/
let db;

export async function Connect() {
    if (!db) {
        await client.connect();
        db = client.db("RiddleGame");
        console.log("connect to mongoDB");
    }
}

Connect()

export {db};