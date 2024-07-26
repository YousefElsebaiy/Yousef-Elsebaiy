let animation = bodymovin.loadAnimation({
    container: document.getElementsByClassName("right")[0],
    render: "svg",
    loop: true,
    autoplay: true,
    path: "../json/Animation - 1721822021638.json"
})
window.addEventListener("load", () => {
    let load = document.querySelector(".load")
    load.classList.add("load-hidden")
    load.addEventListener("transitioned", () => {
        document.body.removeChild("load")
    })
})