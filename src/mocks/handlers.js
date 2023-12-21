import { http } from "msw";
import {
  addDisclosureItem,
  clearDisclosureItems,
  deleteDisclosureItem,
  getDisclosureItems,
} from "./disclosureStore";

const postHandler = http.post("/api/disclosure-items", async ({ request }) => {
  const newItem = await request.json();
  addDisclosureItem(newItem);
  return new Response(JSON.stringify(newItem), {
    status: 201,
  });
});

const getHandler = http.get("/api/disclosure-items", () => {
  const items = getDisclosureItems();
  return new Response(JSON.stringify(items));
});

const deleteHandler = http.delete(
  "/api/disclosure-items/:key",
  ({ params }) => {
    deleteDisclosureItem(params.key);
    return new Response(null, { status: 204 });
  }
);

const clearHandler = http.delete("/api/disclosure-items", () => {
  clearDisclosureItems();
  return new Response(null, { status: 204 });
});

export const handlers = [getHandler, postHandler, deleteHandler, clearHandler];
