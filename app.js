console.log("loaded")


setInterval(refreshBrowserInstance,1000)


async function refreshBrowserInstance(){
    const response = await fetch('https://ecourse.cpe.ku.ac.th/exceed07/api/estimate')
    const data = await response.json()
    const estroom1 = document.querySelector("#est-room1")
    const estroom2 = document.querySelector("#est-room2")
    const estroom3 = document.querySelector("#est-room3")

    estroom1.innerText = `Estimated Waiting Time ${data['estimate']['1'].toFixed(2)} minutes`
    estroom2.innerText = `Estimated Waiting Time ${data['estimate']["2"].toFixed(2)} minutes`
    estroom3.innerText = `Estimated Waiting Time ${data['estimate']['3'].toFixed(2)} minutes`

    const room1 = await fetch("https://ecourse.cpe.ku.ac.th/exceed07/api/get/1")
    const room2 = await fetch("https://ecourse.cpe.ku.ac.th/exceed07/api/get/2")
    const room3 = await fetch("https://ecourse.cpe.ku.ac.th/exceed07/api/get/3")

    // const room11 = await room1.json()
    // const room22 = await room2.json()
    // const room33 = await room3.json()

    // const start1 = document.querySelector("#start-room1")
    // const start2 = document.querySelector("#start-room2")  
    // const start3 = document.querySelector("#start-room3")      

    // start1.innerText = `Started Using: ${room11['result']['time']}`
    // start2.innerText = `Started Using: ${room22['result']['time']}`
    // start3.innerText = `Started Using: ${room33['result']['time']}`
}