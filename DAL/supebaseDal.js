import { db } from "../DB/dbPlayers.js";

export async function getPlayersDB() {
  return await db.from("players").select();
}

export async function getPlayerByIdDB(id) {
  const { data, error } = await db
    .from("players")
    .select()
    .eq("id", id)
    .single();
  if (error) {
    throw error;
  }
  return data;
}

export async function signupPlayerDB(player) {
  const { data, error } = await db
    .from("players")
    .insert(player)
    .select()
    .single();
  if (error) {
    throw error;
  }
  return data;
}

export async function updatePlayerDB(id, data) {
  return db
    .from("players")
    .update({ lowestTime: Number(data.time) })
    .eq("id", id);
}
