export interface InviteHistorySpec {
  id?: string;

  inviter?: InviteHistorySpec_TargetOf_inviter;

  maxCreatedTime?: string;

  maxEditedTime?: string;

  minCreatedTime?: string;

  minEditedTime?: string;

  status?: number;
}

export interface InviteHistorySpec_TargetOf_inviter {
  id?: string;
}
