import { FilterConfigDetail } from './filter-config-detail';

export interface FilterConfig {
  id: number | string;
  header: string;
  elements: FilterConfigDetail[];
}
