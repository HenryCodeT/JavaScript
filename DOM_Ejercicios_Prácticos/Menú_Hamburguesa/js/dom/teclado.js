const d = document;

export function shotcuts(e) {
    console.log(e.type);
    console.log(e.key);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);
    console.log(e);
    if (e.key==="a"&&e.altKey) {
        alert("haz lanzado una alerta con el tecldo")
    }
    if (e.key==="c"&&e.altKey) {
        confirm("haz lanzado una confirmacion con el tecldo")
    }
    if (e.key==="p"&&e.altKey) {
        prompt("haz lanzado un aviso con el tecldo")
    }
}