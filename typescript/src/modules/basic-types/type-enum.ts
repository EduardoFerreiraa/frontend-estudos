export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING, // default = 0
    DELIVERED = "Entregue",
    CANCELED = "Cancelado",
  }

  console.log(OrderStatus);
  console.log(OrderStatus.CANCELED);
  // console.log(OrderStatus[0]);

  enum OrderStatus {
    WAITINGFORPAYMENT = 500,
    SENT = "Enviado",
  }

  function changeOrderStatus(newsStatus: OrderStatus): void {
    if (newsStatus === OrderStatus.SENT) {
      // ... PARA ENVIAR UM EMAIL PARA O CLIENTE
      console.log("Novo Status: ", newsStatus);
    }
  }

  changeOrderStatus(OrderStatus.SENT);
};
