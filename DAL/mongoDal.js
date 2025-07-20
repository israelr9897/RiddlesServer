import { ObjectId } from "mongodb";
import { db } from "../DB/db.js";

export async function getRiddlesDB() {
  return db.collection("Riddles").find().toArray();
}

export async function getRiddlesByIdDB(Id) {
  return db.collection("Riddles").find({ _id: new ObjectId(Id) });
}

export async function insertRiddleDB(riddle) {
  try {
    db.collection("Riddles").insertOne(riddle);
  } catch (error) {
    return error;
  }
}

export async function updateRiddleDB(Id, riddle) {
  try {
    db.collection("Riddles").updateOne({ _id: new ObjectId(Id) }, {$set: riddle});
  } catch (error) {
    return error;
  }
}

export async function deleteRiddleDB(Id) {
  try {
    db.collection("Riddles").deleteOne({ _id: new ObjectId(Id) });
  } catch (error) {
    return error;
  }
}
