const doSth = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve("Everythin' good w/ ASYNC!")
            }, 3000)
            : reject(new Error("Test Error"))
    })
}

const doSthAsync = async () => {
    const sth = await doSth()
    console.log(sth)
}

console.log("Before")
doSthAsync()
console.log("After")

const anotherFunction = async() =>{
    try {
        const sth = await doSth()
        console.log(sth)
    } catch (error) {
        console.log(error)
    }
}

console.log("Before2")
anotherFunction()
console.log("After2")