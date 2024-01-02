import axios from "axios";
import { useEmailStore } from "store/useSyncedEmailStore";

export const POSTUser = async (email) => {
  try {
    const response = await axios.post(
      "https://question-pineone.koyeb.app/user",
      email
    );
    console.log("POSTUser:", response.data);
  } catch (error) {
    console.error("Error saving item:", error);
  }
};

export const GETUser = async (email) => {
  try {
    const response = await axios.get(
      `https://question-pineone.koyeb.app/users?email=${email}`
    );
    console.log("GETUser:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving item:", error);
  }
};

export const POSTDisclosureItem = async (item) => {
  try {
    const response = await axios.post(
      "https://question-pineone.koyeb.app/inquiry",
      item
    );
    console.log("POSTDisclosureItem:", response.data);
  } catch (error) {
    console.error("Error saving item:", error);
  }
};

export const GETDisclosureItems = async () => {
  try {
    const email = useEmailStore.getState().email;
    const response = await axios.get(
      `https://question-pineone.koyeb.app/inquiry/user?email=${
        email || "sample@sample.com"
      }`
    );
    console.log("GETDisclosureItems:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export const DELETEDisclosureItem = async (id) => {
  try {
    const response = await axios.delete(
      `https://question-pineone.koyeb.app/inquiry/${id}`
    );
    console.log("DELETEDisclosureItem:", response.data);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

/* export const POSTDisclosureItem = async (item) => {
  try {
    const response = await axios.post("/mock/api/disclosure-items", item);
    console.log("POSTDisclosureItem:", response.data);
  } catch (error) {
    console.error("Error saving item:", error);
  }
};

export const GETDisclosureItems = async () => {
  try {
    const response = await axios.get("/mock/api/disclosure-items");
    console.log("GETDisclosureItems:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

export const DELETEDisclosureItem = async (key) => {
  try {
    const response = await axios.delete(`/mock/api/disclosure-items/${key}`);
    console.log("DELETEDisclosureItem:", response.data);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
 */
