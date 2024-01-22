export type DictDto = {
  /**
   */
  "DictRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    keyId: number;
    keyName: string;
    keyEnName: string;
    dictId: number;
    dictName: string;
    dictEnName: string;
    orderNum: number;
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
