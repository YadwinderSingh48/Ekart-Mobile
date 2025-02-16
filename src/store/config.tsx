import { Platform } from "react-native";

 
 export const BASE_URL = Platform.OS === 'android' ? 
        'http://10.0.2.2:3000' :
        'http://localhost:3000'


//For Physical Devices
//User your network IP or Hosted URL
// export const BASE_URL = 'http://192.168.29.88:3000'
