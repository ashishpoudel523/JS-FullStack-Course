import axios from "axios";

//create an api instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

// Use the api instance to make requests
async function getUserData() {
  const resource = "/users"
  try {
    const response = await api.get(resource);
    return response.data;
  } catch (err) {
    console.log({ err });
    throw err;
  }
}

const createUser = async (payload) => {
  const resource = "/posts"
  try {
    console.log({ payload })
    const response = await api.post(resource, payload)
    return response.data
  } catch (e) {
    console.log({ e })
    throw e
  }
}

export { getUserData, createUser };
