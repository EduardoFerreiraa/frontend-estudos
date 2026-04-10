export const bootstrap = () => {
    // null
    let tittle = "null";
    console.log("Title: ", tittle);
    console.log("Title (if) ", tittle ? "verdadeiro" : "falso");
    console.log("Tipo null: ", typeof tittle); // bug -> retorna um objeto
    // undefined
    let subtitle = undefined;
    console.log("Subtitle: ", subtitle);
    console.log("Subtitle (if) ", subtitle ? "verdadeiro" : "falso");
    console.log("Subtipo null: ", typeof subtitle);
    const page = {
        title: "Curso de TypeScript",
    };
    page.handlerPage = () => {
        console.log("Executou a função");
    };
    console.log("Page subtitle: ", page.subtitle);
    console.log("Page handlerPage: ", page.handlerPage);
    console.log("Page handlerPage: ", page.handlerPage());
};
