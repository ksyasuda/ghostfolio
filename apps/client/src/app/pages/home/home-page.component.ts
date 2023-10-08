import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@ghostfolio/client/services/user/user.service';
import { TabConfiguration, User } from '@ghostfolio/common/interfaces';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  host: { class: 'page has-tabs' },
  selector: 'gf-home-page',
  styleUrls: ['./home-page.scss'],
  templateUrl: './home-page.html'
})
export class HomePageComponent implements OnDestroy, OnInit {
  public deviceType: string;
  public tabs: TabConfiguration[] = [];
  public user: User;

  private unsubscribeSubject = new Subject<void>();

  public constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private deviceService: DeviceDetectorService,
    private userService: UserService
  ) {
    this.userService.stateChanged
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe((state) => {
        if (state?.user) {
          this.tabs = [
            {
              iconName: 'analytics-outline',
              label: $localize`Overview`,
              path: ['/home']
            },
            {
              iconName: 'wallet-outline',
              label: $localize`Holdings`,
              path: ['/home', 'holdings']
            },
            {
              iconName: 'reader-outline',
              label: $localize`Summary`,
              path: ['/home', 'summary']
            },
            {
              iconName: 'newspaper-outline',
              label: $localize`Markets`,
              path: ['/home', 'market']
            }
          ];
          this.user = state.user;

          this.changeDetectorRef.markForCheck();
        }
      });
  }

  public ngOnInit() {
    this.deviceType = this.deviceService.getDeviceInfo().deviceType;
  }

  public ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
