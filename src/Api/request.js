import axios from "axios"

const request = async (path, data, method) => {
    try {
        const option = {
            method: method,
            url: `https://react-http-fb420-default-rtdb.firebaseio.com/${path}`,
            headers: { 'Content-Type': 'application/json'}
        }
        if (method == 'GET') {
            option['params'] = data
        }
        else {
            option['data'] = data
        }
        const res = await axios(option)
        return res

    } catch (error) {
        console.log(error);
    }

}


export const getRequest = (path, data) => request(path, data, 'GET')

export const postRequest = (path, data) => request(path, data, 'POST')

export const deleteRequest = (path,data)=> request(path,data,"DELETE")

export const updateRequest = (path,data)=> request(path,data,"PUT")
