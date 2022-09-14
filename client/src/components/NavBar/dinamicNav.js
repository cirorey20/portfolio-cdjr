export function showMenu() {
    let list = document.getElementById("navbar-default").classList
    console.log("Abrir", list.contains("hidden"))
    if (window.innerWidth < 768) {
        console.log("")
    }
    if (list.contains("hidden")) {
        list.remove("hidden")
        console.log("Abrir", list)
    } else {
        list.add("hidden")
        console.log("Cerrar")
    }
}