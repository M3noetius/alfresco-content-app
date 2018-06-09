import { createSelector } from '@ngrx/store';
import { AppStore, AppState } from '../states/app.state';

export const selectApp = (state: AppStore) => state.app;
export const selectHeaderColor = createSelector(selectApp, (state: AppState) => state.headerColor);
export const selectAppName = createSelector(selectApp, (state: AppState) => state.appName);
export const selectLogoPath = createSelector(selectApp, (state: AppState) => state.logoPath);
export const selectedNodes = createSelector(selectApp, (state: AppState) => state.selectedNodes);
