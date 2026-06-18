export const bootstrap = () => {
    const subtitle = document.getElementById("subtitle");
    subtitle.style.color = "green";
    /*
    if (subtitle) {
      subtitle.style.color = "red";
    }
    */
    // Define que a atribuição não será de um valor null ou undefined
    const getProducts = () => {
        return ["Smartphone", "Headset"];
    };
    const products = getProducts();
    products.map((item) => console.log(item));
};
