import axios from "axios";

export const POSTDisclosureItem = async (item) => {
  try {
    const response = await axios.post("/api/disclosure-items", item);
    console.log("POSTDisclosureItem:", response.data);
  } catch (error) {
    console.error("Error saving item:", error);
  }
};

export const GETDisclosureItems = async () => {
  try {
    const response = await axios.get("/api/disclosure-items");
    console.log("GETDisclosureItems:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export const DELETEDisclosureItem = async (key) => {
  try {
    const response = await axios.delete(`/api/disclosure-items/${key}`);
    console.log("DELETEDisclosureItem:", response.data);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
