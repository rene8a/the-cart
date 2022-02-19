import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { FilterComponent } from './filter.component';

@NgModule({
  exports: [FilterComponent],
  declarations: [FilterComponent],
  imports: [CommonModule, MatCheckboxModule, MatDividerModule],
})
export class FilterModule {}
