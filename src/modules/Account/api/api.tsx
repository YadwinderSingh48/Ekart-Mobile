import { BASE_URL } from "@store/config"
import axios from "axios"

export const loginOrSignup = async (phone: string, address: string) => {
  try {
    const res = await axios.post(`${BASE_URL}/login/login`, {
      phone,
      address
    })
    return res.data.user
  } catch (error) {
    console.log("Login or Signup error", error)
    return null
  }
}

export const getOrderByUserId = async (userId: string) => {
  console.log("getOrderByUserId", userId)
    try {
      const res = await axios.get(`${BASE_URL}/order/${userId}`)
      return res.data.orders
    } catch (error) {
      console.log("Order Error", error)
      return []
    }
  }
  
