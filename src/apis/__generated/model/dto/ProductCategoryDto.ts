export type ProductCategoryDto = {
  "ProductCategoryRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    image: string;
    description: string;
    sortOrder?: number;
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
