import { db } from "../DB/dbPlayers.js";

export async function getPlayersDB() {
  return await db.from("players").select();
}

export async function getPlayerByIdDB(id) {
  return await db.from("players").select().eq("id", id);
}

export async function addPlayerDB(player) {
  const { data } = await db.from("players").insert(player).select().single();
  return data;
}

export async function updatePlayerDB(id, data) {
  return db
    .from("players")
    .update({ lowestTime: Number(data.time) })
    .eq("id", id);
}
