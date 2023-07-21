import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShowLoading, UpdateUser } from './app.actions';
import { of } from 'rxjs';

export interface AppStateModel {
  loading: boolean;
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
}
