import { ObjectId } from "mongodb";
import { db } from "../DB/dbRiddles.js";

export async function getRiddlesDB() {
  try {
    return db.collection("Riddles").find().toArray();
  } catch (error) {
    throw error;
  }
}

export async function getRiddlesByIdDB(Id) {
  try {
    return db.collection("Riddles").find({ _id: new ObjectId(Id) });
  } catch (error) {
    throw error;
  }
}

export async function insertRiddleDB(riddle) {
  try {
    return db.collection("Riddles").insertOne(riddle);
  } catch (error) {
    throw error;
  }
}

export async function updateRiddleDB(Id, riddle) {
  try {
    return db
      .collection("Riddles")
      .updateOne({ _id: new ObjectId(Id) }, { $set: riddle });
  } catch (error) {
    throw error;
  }
}

export async function deleteRiddleDB(Id) {
  try {
    return db.collection("Riddles").deleteOne({ _id: new ObjectId(Id) });
  } catch (error) {
    throw error;
  }
}
