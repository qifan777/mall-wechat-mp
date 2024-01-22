export interface ProductCategorySpec {
  image?: string | undefined;
  sortOrder?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  parentId?: string | undefined;
  id?: string | undefined;
  minCreatedTime?: string | undefined;
  maxCreatedTime?: string | undefined;
  minEditedTime?: string | undefined;
  maxEditedTime?: string | undefined;
}
