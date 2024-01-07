export type InviteHistoryDto = {
  "InviteHistoryRepository/COMPLEX_FETCHER": {
    id: string;
    createdTime: string;
    editedTime: string;
    status: number;
    inviter: {
      id: string;
      nickname: string;
      avatar?: string;
    };
    invitee?: {
      id: string;
      nickname: string;
      avatar?: string;
    };
  };
};
