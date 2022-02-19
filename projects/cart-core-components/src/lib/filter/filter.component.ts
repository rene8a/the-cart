import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { FilterConfig } from './interfaces/filter-config';
import { FilterConfigDetail } from './interfaces/filter-config-detail';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'ccc-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filterConfigs: FilterConfig[];

  @Output() filterChange = new EventEmitter<FilterConfig[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(filterConfig: FilterConfig, filterConfigDetail: FilterConfigDetail, checkboxEvent: MatCheckboxChange): void {
    const currentDetail = this.filterConfigs.find(fc => fc.id === filterConfig.id)
      .elements.find(fcd => fcd.id === filterConfigDetail.id);
    currentDetail.isChecked = checkboxEvent.checked;

    this.filterChange.emit(this.filterConfigs);
  }

}
