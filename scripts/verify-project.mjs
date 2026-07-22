import { readFile } from "node:fs/promises";

const requiredFields = [
  "id",
  "title",
  "author",
  "description",
  "category",
  "available_quantity",
  "image_url",
];
const allowedCategories = new Set(["Story", "Tech", "Science"]);

const books = JSON.parse(await readFile(new URL("../data/books.json", import.meta.url), "utf8"));
const errors = [];

if (!Array.isArray(books)) errors.push("books.json must contain a JSON array.");
if (books.length !== 12) errors.push(`Expected 12 books, found ${books.length}.`);

const ids = new Set();
for (const [index, book] of books.entries()) {
  const label = `Book ${index + 1}`;
  const keys = Object.keys(book).sort();
  const expectedKeys = [...requiredFields].sort();
  if (JSON.stringify(keys) !== JSON.stringify(expectedKeys)) {
    errors.push(`${label} must contain exactly: ${requiredFields.join(", ")}.`);
  }
  if (!book.id || ids.has(book.id)) errors.push(`${label} has a missing or duplicate id.`);
  ids.add(book.id);
  for (const field of ["title", "author", "description", "image_url"]) {
    if (typeof book[field] !== "string" || !book[field].trim()) {
      errors.push(`${label}.${field} must be a non-empty string.`);
    }
  }
  if (!allowedCategories.has(book.category)) {
    errors.push(`${label}.category must be Story, Tech, or Science.`);
  }
  if (!Number.isInteger(book.available_quantity) || book.available_quantity < 0) {
    errors.push(`${label}.available_quantity must be a non-negative integer.`);
  }
  try {
    const url = new URL(book.image_url);
    if (url.protocol !== "https:") errors.push(`${label}.image_url must use HTTPS.`);
  } catch {
    errors.push(`${label}.image_url must be a valid URL.`);
  }
}

if (errors.length) {
  console.error("Project data verification failed:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log("Project data verification passed: 12 valid books across Story, Tech, and Science.");
