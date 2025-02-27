import { BASE_URL } from "@store/config"
import axios from "axios"


export const fetchCategoriesData = async () => {
    const response = await axios.get(`${BASE_URL}/category`);
    console.log("api called ", response)
    return response?.data?.categories;
}