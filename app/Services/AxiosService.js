

// @ts-ignore
export const sandboxApi = axios.create({

    // NOTE accepts weather, quotes, images, tobycomon/todos
    baseURL: "https://bcw-sandbox.herokuapp.com/api/",
    
    timeout: 8000
})