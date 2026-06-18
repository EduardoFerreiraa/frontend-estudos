export const bootstrap = (): void => {
  const zipCodeMask = (value: string): string => {
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");
    return value;
  };

  const zipCode = zipCodeMask("10000000"); //100000-000
  console.log(zipCode);

  // const zipCode = zipCodeMask("10000000"); //100000-000
  // console.log(zipCode);
};
