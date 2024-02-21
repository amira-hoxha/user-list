import { UserProps } from "../components/User/User";
import { UserPostProps } from "../components/UserPost/UserPost";
import axiosInstance from "./apiService";

export async function fetchUsers(): Promise<UserProps[]> {
  try {
    const response = await axiosInstance.get("/users"); // Make a GET request to '/endpoint' relative to the base URL
    return response.data.users; // Return the data to the caller
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors that occur during the request
    throw error; // Rethrow the error to the caller
  }
}

export async function fetchUserPosts(id: number): Promise<UserPostProps[]> {
  try {
    const response = await axiosInstance.get(`/posts/user/${id}`); // Make a GET request to '/endpoint' relative to the base URL
    return response.data.posts;
    // Return the data to the caller
  } catch (error) {
    console.error("Error fetching data:", error); // Log any errors that occur during the request
    throw error; // Rethrow the error to the caller
  }
}
