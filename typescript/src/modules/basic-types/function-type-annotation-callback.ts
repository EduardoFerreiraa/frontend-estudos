//TODO CARTItem
type CartItem = {
  id: number;
  price: number;
};

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  addresses: Address[];
};

//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

//TODO criar variável do tipo ShoppingCart contendo CartItem
const shoppingCart: ShoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 1070, price: 300 },
    { id: 3000, price: 500 },
  ],
};

const addresses: Address[] = [
  { cep: "38405-094", default: false },
  { cep: "38405-093", default: false },
  { cep: "38405-092", default: true },
];

const customer: Customer = {
  addresses: addresses,
};

// --

let getPrincipalAddress: (c: Customer) => Address | undefined;

getPrincipalAddress = function (customer: Customer): Address | undefined {
  return customer.addresses.find((address) => address.default);
};

// --
type ApplyDiscountFn = (total: number, discount: number) => number;

const applyDiscount: ApplyDiscountFn = (
  total: number,
  discount: number,
): number => {
  return total - total * discount;
};

type CalculateTotalFn = (sC: ShoppingCart, callback: ApplyDiscountFn) => number;

let calculateTotal: CalculateTotalFn = function (
  shoppingCart: ShoppingCart,
  applyDiscount: ApplyDiscountFn,
): number {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return applyDiscount(total, 0.1);
};

const total = calculateTotal(shoppingCart, applyDiscount);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

const principalAddress = getPrincipalAddress(customer);

if (principalAddress !== undefined) {
  console.log(principalAddress);
}

export { calculateTotal, getPrincipalAddress };
