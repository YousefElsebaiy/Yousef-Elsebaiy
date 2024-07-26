window.addEventListener("load", () => {
    let load = document.querySelector(".load")
    load.classList.add("load-hidden")
    load.addEventListener("transitioned", () => {
        document.body.removeChild("load")
    })
})