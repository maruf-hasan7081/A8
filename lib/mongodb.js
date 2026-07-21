import "server-only";
import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/leaf-and-lore";
const databaseName = process.env.MONGODB_DB_NAME ?? "leaf_and_lore";
export const mongoClient = global.mongoClient ?? new MongoClient(uri);
if (process.env.NODE_ENV !== "production") {
    global.mongoClient = mongoClient;
}
export const database = mongoClient.db(databaseName);
