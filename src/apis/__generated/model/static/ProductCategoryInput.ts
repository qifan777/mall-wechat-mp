export interface ProductCategoryInput {
  name: string;
  parentId?: string | undefined;
  image?: string | undefined;
  description: string;
  sortOrder?: number | undefined;
  id?: string | undefined;
}
