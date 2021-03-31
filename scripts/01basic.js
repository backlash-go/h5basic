let myHeading = document.querySelector("h1")
myHeading.textContent = "hello world"
setUserName()

function setUserName() {
    let myName = prompt('请输入你的名字')
    if (myName !== null) {
        alert(myName)
    }else{
        alert("false")
    }
}