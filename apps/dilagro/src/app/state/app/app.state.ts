import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Login, ShowLoading, UpdateUser } from './app.actions';
import { of, tap } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

export interface AppStateModel {
  loading: boolean;
  access_token?: string;
  user?: {
    email: string;
  };
}

@State<AppStateModel>({
  name: 'app',
  defaults: { loading: false },
})
@Injectable({ providedIn: 'root' })
export class AppState {
  @Selector() static loading(state: AppStateModel) {
    return state.loading;
  }

  @Selector() static email(state: AppStateModel) {
    return state.user?.email;
  }

  constructor(private authService: AuthService) {}

  @Action(ShowLoading)
  showLoading(
    { patchState }: StateContext<AppStateModel>,
    { loading }: ShowLoading
  ) {
    return patchState({ loading });
  }

  @Action(UpdateUser)
  updateUser(
    { patchState }: StateContext<AppStateModel>,
    { user }: UpdateUser
  ) {
    if (user.email) {
      return patchState({ user: { email: user.email } });
    } else {
      return of();
    }
  }

  @Action(Login)
  login(
    { patchState }: StateContext<AppStateModel>,
    { username, password }: Login
  ) {
    return this.authService.signIn(username, password).pipe(
      tap((response) => {
        const { access_token } = response;
        patchState({ access_token });
      })
    );
  }
}
