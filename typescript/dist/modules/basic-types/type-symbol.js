export const bootstrap = () => {
    const title = Symbol("HOME");
    const pageTitle = Symbol("HOME");
    /*
    if (title == pageTitle) {
      console.log("Sim, HOME é igual a HOME");
    } else {
      console.log("Não são iguais")
    }
    */
    const titleSymbol = Symbol("title");
    const Page = {
        title: "HOME",
        [titleSymbol]: "Página principal",
    };
    console.log(Page.title);
    console.log(Page[titleSymbol]);
    console.log(Page);
};
