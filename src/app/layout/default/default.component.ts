import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouteConfigLoadStart,
  NavigationError,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { MenuService, SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
})
export class LayoutDefaultComponent {
  isFetching = false;

  constructor(
    router: Router,
    private routeInfo: ActivatedRoute,
    private _message: NzMessageService,
    public menuSrv: MenuService,
    public settings: SettingsService,
  ) {
    console.log(11111111111);
    console.log(router);
    console.log(routeInfo);
    this.routeInfo.queryParams.subscribe((params) => {
      var dataurl = params;
      if (dataurl.code) {
        localStorage.setItem('token', 'Bearer' + ' ' + dataurl.code);
        // this.http.get('/api/account').subscribe(res => {
        //   this.loginData = res;
        //   if (this.loginData.login == null) {
        //     this.router.navigate(['register']);
        //   }
        // },
        //   err => {
        //     console.log(err);
        //   });
      }
    });
    // scroll to top in change page
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
        console.log(router);

      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      // setTimeout(() => {
      //   // scroll.scrollToTop();
      //   // this.isFetching = false;
      // }, 100);
    });
  }
}
