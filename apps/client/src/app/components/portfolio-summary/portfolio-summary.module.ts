import { GfValueComponent } from '@ghostfolio/ui/value';

import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PortfolioSummaryComponent } from './portfolio-summary.component';

@NgModule({
  declarations: [PortfolioSummaryComponent],
  exports: [PortfolioSummaryComponent],
  imports: [CommonModule, GfValueComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GfPortfolioSummaryModule {}
