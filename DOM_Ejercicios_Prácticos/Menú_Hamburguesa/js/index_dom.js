import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shotcuts } from "./dom/teclado.js";

const d=document;

d.addEventListener("DOMContentLoaded", (e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarm-clock.mp3", "#activar-alarma","#desactivar-alarma");
    countdown(
        "countdown",
        "2022-01-13 00:00:00",
        "Feliz Cumpleaños!!!!!!"
    );
})

d.addEventListener("keydown",e=>{
    shotcuts(e);
    moveBall(e,".ball",".stage"); 
})
 