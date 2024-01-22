export type ProductCategoryDto = {
  /**
   */
  "ProductCategoryRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    parentId?: string | undefined;
    image?: string | undefined;
    description: string;
    sortOrder?: number | undefined;
    creator: {
      id: string;
      phone: string;
      nickname?: string | undefined;
    };
    editor: {
      id: string;
      phone: string;
      nickname?: string | undefined;
    };
  };
};
