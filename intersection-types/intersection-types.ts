interface StreetAddress{
  lot: number;
  block: number;
  street: string;
}

interface CityAddress{
  city: string;
  province: string;
}

// Multiple types in one
// Get all the type features
type fullAddressResponse = StreetAddress & CityAddress;

const addressHandler = (address: fullAddressResponse): string => {
  return `${address.lot} ${address.block} ${address.street}, ${address.city} ${address.province}`;
}