import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShowLoading } from './app.actions';

export interface AppStateModel {
  loading: boolean;
  email: string;
  token?: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: { loading: false, email: 'hrandika@hotmail.com' },
})
@Injectable({ providedIn: 'root' })
export class AppState {
  @Selector() static loading(state: AppStateModel) {
    return state.loading;
  }

  @Selector() static email(state: AppStateModel) {
    return state.email;
  }

  @Action(ShowLoading)
  showLoading(
    { patchState }: StateContext<AppStateModel>,
    { loading }: ShowLoading
  ) {
    return patchState({ loading });
  }
}
