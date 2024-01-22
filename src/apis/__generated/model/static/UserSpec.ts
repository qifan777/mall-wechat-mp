import type { Gender } from "../enums/";

export interface UserSpec {
  avatar?: string | undefined;
  gender?: Gender | undefined;
  id?: string | undefined;
  phone?: string | undefined;
  nickname?: string | undefined;
  password?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
