export type InviterDto = {
  "InviterRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    code: string;
    qrCode?: string;
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
