import axios from "axios"

export const SignUp = async (data) => {
    console.log("Form Data Sent:", data);
    try {
        const response = await axios.post("https://agrolink.onrender.com/register", data)
    return response.data
    

    // console.log(response, "from signup")
    } catch (error) {
        console.log(error, " from js")
        
    }

}


