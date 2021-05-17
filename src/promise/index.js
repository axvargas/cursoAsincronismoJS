const sthWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Everythin' good!")
        } else {
            reject("Upsi dupsi!")
        }
    })
}

sthWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error))



const sthWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 2000);
        } else {
            const error = new Error("Upsi dupsi!")
            reject(error)
        }
    })
}

sthWillHappen2()
    .then(response => console.log(response))
    .then(()=> console.log('Hello bro'))
    .catch((error)=> console.log(error))


Promise.all([sthWillHappen(), sthWillHappen2()])
    .then(response => {
        console.log("Array of results", response)
    })
    .catch(error =>{
        console.log(error)
    })