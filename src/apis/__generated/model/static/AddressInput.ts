export interface AddressInput {
  latitude: number;
  longitude: number;
  address: string;
  details: string;
  province: string;
  city: string;
  district: string;
  phoneNumber: string;
  realName: string;
  top: boolean;
  id?: string | undefined;
}
