console.log("wo shi xxb")

const request = new XMLHttpRequest()

request.open('GET', '/style.css')

request.onload = () => {
    console.log(request.response);
    const style = document.createElement('style')
    style.textContent = request.response
    // style.innerHTML = request.response
    document.head.appendChild(style)
    console.log("成功了")
}
request.onerror = () => {
    console.log("失败了");
}
request.send()


const req2 = new XMLHttpRequest()
req2.open('GET', "/2.js")
req2.onload = () => {
    const script = document.createElement('script')
    script.innerHTML = req2.response
    document.body.appendChild(script)

}
req2.onerror = () => {
}
req2.send()


const req3 = new XMLHttpRequest()
req3.open('GET', '2.html')
req3.onreadystatechange = () => {
    if (req3.readyState === 4 && req3.status === 200) {
        const div = document.createElement('div')
        div.innerHTML = req3.response
        document.body.appendChild(div)
    }
}

req3.send()


getXML.onclick = () => {
    const req4 = new XMLHttpRequest();
    req4.open('GET', '/2.xml')

    req4.onreadystatechange = () => {
        if (req4.readyState === 4) {
            if (req4.status >= 200 && req4.status < 300) {
                const dom = req4.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    req4.send()
}


getJSON.onclick = () => {
    const req5 = new XMLHttpRequest()
    req5.open('GET', '/2.json')
    req5.onreadystatechange = () => {
        if (req5.status === 200 && req5.readyState === 4) {
            console.log(req5.response)
            let ob1 = JSON.parse(req5.response)

            myName.textContent = ob1.name
        }
    }
    req5.send()
}