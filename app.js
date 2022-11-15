// let form = document.getElementById("generate-form")
let qr = document.getElementById("qrcode")

let button = document.querySelector("button")

function onGenerate (e) {
    e.preventDefault()

    clearQR()

    let url  = document.getElementById("url").value
    let size = document.getElementById("size").value

    if(url == "") {
        alert("please put url")
    }else {
        showSpinner()
        setTimeout(() => {
            hideSpinner()
            generatedQRCode(url , size)

            setTimeout(()=>{

                let saveImg = qr.querySelector("img").src

                saveBtn(saveImg)

            } , 100)
        }, 1000);
    }
}

function clearQR() {
    qr.innerHTML = ""

    let saveBtn = document.getElementById("save-link")
    if(saveBtn) saveBtn.remove()
}

function saveBtn (saveImg) {
    let aTag = document.createElement("a")
    aTag.download = "QR CODE"
    aTag.id = "save-link"
    aTag.href = saveImg 
    aTag.classList = "bg-red-500 hover:bg-red-700 shadow m-auto rounded text-white font-bold w-1/3 my-3 py-4"
    aTag.innerText = "download image "
    document.getElementById("generated").append(aTag)
}

function generatedQRCode (url , size) {
    let qrcode = new QRCode(qr , {
        text : url , 
        width : size , 
        height : size , 
    })
}

function hideSpinner() {
    document.getElementById("spinner").style.display = "none"
}

function showSpinner () {
    document.getElementById("spinner").style.display = "block"
}

hideSpinner()

// form.addEventListener("submit" , onGenerate)

button.addEventListener("click" , onGenerate)