import { SortDirection } from './sort-direction.type';
import { TableColumnProp } from './table-column.type';

export interface SortPropDir {
  dir: SortDirection | 'desc' | 'asc';
  prop: TableColumnProp;
}
