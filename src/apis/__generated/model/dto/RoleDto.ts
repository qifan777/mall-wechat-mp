export type RoleDto = {
  "RoleRepository/SIMPLE_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
  };
  "RoleRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    menusView: Array<{ id: string }>;
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
