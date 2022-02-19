import { createAction, props } from '@ngrx/store';
import { FilterConfig } from '../interfaces/filter-config';

export const setFilterCheck = createAction('[FilterConfig Component] Set', props<{filterConfig: FilterConfig[]}>());
