import type { Gender } from "../enums/";

export interface UserInput {
  phone: string;
  password: string;
  nickname?: string | undefined;
  avatar?: string | undefined;
  gender?: Gender | undefined;
  id?: string | undefined;
  roleIds: Array<string>;
}
