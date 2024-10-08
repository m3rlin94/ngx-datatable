import { Directive, TemplateRef } from '@angular/core';
import { RowDetailContext } from '../../types/public.types';

@Directive({
  selector: '[ngx-datatable-row-detail-template]'
})
export class DatatableRowDetailTemplateDirective<TRow = any> {
  static ngTemplateContextGuard<TRow>(
    directive: DatatableRowDetailTemplateDirective<TRow>,
    context: unknown
  ): context is RowDetailContext<TRow> {
    return true;
  }
}
