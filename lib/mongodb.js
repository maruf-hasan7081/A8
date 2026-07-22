import "server-only";
import { MongoClient } from "mongodb";

const isBuildMode = process.env.NEXT_PHASE === "phase-production-build";
const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/leaf-and-lore";
const databaseName = process.env.MONGODB_DB_NAME ?? "leaf_and_lore";

let mongoClient = null;
let database = null;

if (!isBuildMode) {
  mongoClient = global.mongoClient ?? new MongoClient(uri);

  if (process.env.NODE_ENV !== "production") {
    global.mongoClient = mongoClient;
  }

  database = mongoClient.db(databaseName);
}

export { mongoClient, database };
