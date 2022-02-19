import { createAction, props } from '@ngrx/store';
import { MenuConfig } from 'projects/cart-core-components/src/lib/menu/config/menu-config';

export const setSelectedMenuIndex = createAction(
  '[MenuConfig Component] Set',
  props<{ menuConfig: MenuConfig[] }>()
);