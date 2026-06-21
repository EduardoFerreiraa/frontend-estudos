export const bootstrap = () => {
    // fetch para um end-point de uma API
    const response = [
        { id: "324e3q2rfd3r324", movie: "Cinderella Man" },
        { id: "qwrdewqerf", song: "Ideologia" },
        { id: "qwewq1234", song: "Azul da Cor do Mar" },
    ];
    function showItems(items) {
        const body = document.querySelector("body");
        if (body instanceof HTMLBodyElement) {
            items.map((item) => {
                const itemElement = document.createElement("div");
                if ("song" in item) {
                    itemElement.textContent = item.song;
                    itemElement.style.background = "seagreen";
                }
                else if ("movie" in item) {
                    itemElement.textContent = item.movie;
                    itemElement.style.background = "cadetblue";
                }
                body.appendChild(itemElement);
            });
        }
    }
    showItems(response);
};
