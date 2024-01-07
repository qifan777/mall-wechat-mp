export type MenuDto = {
  "MenuRepository/MENU_TREE_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    path: string;
    orderNum?: number;
    menuType: string;
    icon?: string;
    parentId?: string;
    children: Array<{
      id: string;
      createdTime: string;
      editedTime: string;
      name: string;
      path: string;
      orderNum?: number;
      menuType: string;
      icon?: string;
      parentId?: string;
      children: Array<{
        id: string;
        createdTime: string;
        editedTime: string;
        name: string;
        path: string;
        orderNum?: number;
        menuType: string;
        icon?: string;
        parentId?: string;
      }>;
    }>;
  };
  "MenuRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    name: string;
    path: string;
    orderNum?: number;
    menuType: string;
    icon?: string;
    parentId?: string;
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
