export class ShowLoading {
  public static readonly type = '[App] ShowLoading';
  constructor(public loading: boolean) {}
}

export class UpdateUser {
  public static readonly type = '[App] UpdateUser';
  constructor(public user: firebase.default.User) {}
}

export class Login {
  public static readonly type = '[App] Login';
  constructor(public username: string, public password: string) {}
}
