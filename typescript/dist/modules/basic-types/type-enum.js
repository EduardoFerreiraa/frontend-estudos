export const bootstrap = () => {
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus["DELIVERED"] = "Entregue";
        OrderStatus["CANCELED"] = "Cancelado";
    })(OrderStatus || (OrderStatus = {}));
    console.log(OrderStatus);
    console.log(OrderStatus.CANCELED);
    // console.log(OrderStatus[0]);
    (function (OrderStatus) {
        OrderStatus[OrderStatus["WAITINGFORPAYMENT"] = 500] = "WAITINGFORPAYMENT";
        OrderStatus["SENT"] = "Enviado";
    })(OrderStatus || (OrderStatus = {}));
    function changeOrderStatus(newsStatus) {
        if (newsStatus === OrderStatus.SENT) {
            // ... PARA ENVIAR UM EMAIL PARA O CLIENTE
            console.log("Novo Status: ", newsStatus);
        }
    }
    changeOrderStatus(OrderStatus.SENT);
};
