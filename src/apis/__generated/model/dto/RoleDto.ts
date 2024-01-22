export type RoleDto = {
  /**
   */
  "RoleRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
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
  /**
   */
  "RoleRepository/ROLE_MENU_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    menusView: Array<{
      id: string;
    }>;
  };
};
