import axios from "axios";

export const login = async (data)=>{
    const options = {
        url: "/api/auth/login",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: data
      };
let res = await axios(options)
return res
}
export const register = async (data)=>{
    const options = {
        url: "/api/auth/register",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: data
      };
let res = await axios(options)
return res
}