export interface RoleSpec {
  name?: string | undefined;
  id?: string | undefined;
  ids?: Array<string> | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
}
