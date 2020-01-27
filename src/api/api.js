
//  authenticated user
export const loginApi = new Promise((resolve) => {
    setTimeout(()=> {
        const backendData = {
            data: [],
            isauthenticated: true
        }
        resolve(backendData)
    },2000)
}).catch(e => console.error(e))

//  user registration
export const singupApi = new Promise((resolve) => {
    setTimeout(()=> {
        const backendData = {
            isregistered: true
        }
        resolve(backendData)
    },2000)
}).catch(e => console.error(e))

