export const bootstrap = () => {
    const input = document.querySelector(".inputText");
    const video = document.querySelector("#video");
    input.addEventListener("click", (event) => {
        console.log("Input clicado");
    });
    console.log("Filho de: ", input.parentNode);
    console.log("Element: ", input.id, input.className, input.tagName);
    console.log("Arrastável: ", input.draggable);
    console.log("Input: ", input.value);
    console.log("Vídeo: ", video.volume);
};
