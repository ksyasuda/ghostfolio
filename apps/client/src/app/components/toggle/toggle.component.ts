import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToggleOption } from '@ghostfolio/common/types';

@Component({
  selector: 'gf-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnChanges, OnInit, AfterViewInit {
  @ViewChild('toggleContainer', { static: false }) toggleContainer: ElementRef;

  public static DEFAULT_DATE_RANGE_OPTIONS: ToggleOption[] = [
    { label: $localize`Today`, value: '1d' },
    { label: $localize`5D`, value: '5d' },
    { label: $localize`1W`, value: '1w' },
    { label: $localize`1M`, value: '1m' },
    { label: $localize`3M`, value: '3m' },
    { label: $localize`6M`, value: '6m' },
    { label: $localize`YTD`, value: 'ytd' },
    { label: $localize`1Y`, value: '1y' },
    { label: $localize`3Y`, value: '3y' },
    { label: $localize`5Y`, value: '5y' },
    { label: $localize`WTD`, value: 'wtd' },
    { label: $localize`Max`, value: 'max' }
  ];

  @Input() defaultValue: string;
  @Input() isLoading: boolean;
  @Input() options: ToggleOption[];

  @Output() change = new EventEmitter<Pick<ToggleOption, 'value'>>();

  public deviceType: string;
  public optionFormControl = new FormControl<string>(undefined);

  public constructor() {}

  public ngOnInit() {}

  public ngOnChanges() {
    this.optionFormControl.setValue(this.defaultValue);
  }

  public onValueChange() {
    this.change.emit({ value: this.optionFormControl.value });
  }

  public ngAfterViewInit() {
    if (window.innerWidth < 768) {
      this.toggleContainer.nativeElement.style.overflowX = 'scroll';
      this.toggleContainer.nativeElement.style.height = '3rem';
    }
  }
}
