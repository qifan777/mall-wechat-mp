export interface AddressSpec {
  address?: string;

  city?: string;

  creator?: AddressSpec_TargetOf_creator;

  details?: string;

  district?: string;

  id?: string;

  latitude?: number;

  longitude?: number;

  maxCreatedTime?: string;

  maxEditedTime?: string;

  minCreatedTime?: string;

  minEditedTime?: string;

  phoneNumber?: string;

  province?: string;

  realName?: string;

  top?: boolean;
}

export interface AddressSpec_TargetOf_creator {
  id?: string;
}
