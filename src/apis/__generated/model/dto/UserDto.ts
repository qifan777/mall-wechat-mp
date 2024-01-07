export type UserDto = {
  "UserRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    phone: string;
    password: string;
    nickname: string;
    avatar?: string;
    gender?: string;
    rolesView: Array<{
      id: string;
      name: string;
    }>;
  };
};
