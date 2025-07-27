import { db } from "../DB/dbPlayers.js";

export async function getPlayersDB() {
  return await db.from("players").select();
}

export async function getPlayerByNameDB(username) {
  const { data, error } = await db
    .from("players")
    .select()
    .eq("username", username)
    .single();
  if (error) {
    throw error;
  }
  return data;
}

export async function getFiveWinPlayersDB() {
  const { data, error } = await db
    .from("players")
    .select("*")
    .order("lowestTime", { ascending: true })
    .limit(5);
  if (error) {
    throw error;
  }
  console.log(data);
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
