import { createAction, props } from '@ngrx/store';
import { Resizable } from '../interfaces/resizable';

export const setResizable = createAction('[Resizable Component] Set', props<{resizable: Resizable}>());
