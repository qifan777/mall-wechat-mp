export type AddressDto = {
  "AddressRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
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
    creator: {
      id: string;
      phone: string;
      nickname: string;
    };
    editor: {
      id: string;
      phone: string;
      nickname: string;
    };
  };
};
