import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component ({
  selector: 'app-loginright',
  template: `
    <div class="banner_right">
      <nz-avatar nzText="U" style="color:#f56a00; background-color:#fde3cf;"></nz-avatar>
      <p class="welcome">欢迎来到优伯乐电商！</p>
      
      <div *ngIf="!logged">
        <a href="http://taobaojy.com:8081/api/account/qq?redUrl={{CurrentUrl}}" class="btnbtn-primarybtn-block banner_login" >学员登录</a>
        <a href="http://taobaojy.com:8081/api/account/qq?redUrl={{CurrentUrl}}" class="banner_login banner_logon">注册好礼<span class="new">新人专享</span> </a>
        <div class="login">
          <a href="http://taobaojy.com:8081/api/account/qq?redUrl={{CurrentUrl}}" class="QQ_login"><img src="../../../../assets/img/qqlogin.jpg"> <span>QQ登录</span></a>
          <a href="http://118.24.41.60/api/account/qq?redUrl={{CurrentUrl}}" class="QQ_login"><img src="../../../../assets/img/weixinlogin.jpg"> <span>微信登录</span></a>
        </div>
        <p class="mobile_login">
          <i class="anticon anticon-mobile"></i>
          <a target="_blank" href="http://taobaojy.com:8081/api/account/qq?redUrl={{CurrentUrl}}" > 手机登录  /  手机注册</a>
        </p>
      </div>
      <div *ngIf="logged">
        <p class="loginName">{{loginDataAll.nickName}}</p>
        <a class="banner_login banner_logon" (click)="logout()">退出 </a>
      </div>
    </div>
    <!--[routerLink]="['/register']"-->
    
  `,
  styles: [`
    :host ::ng-deep .ant-avatar {
      display: block;
      margin:16px auto 0;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      font-size: 50px;
      font-weight: bold;
      line-height: 80px;
    }
    .loginName{
      text-align: center;
      font-size: 20px;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .banner_login{
      display: block;
      width: 178px;
      height: 42px;
      margin: 12px auto 0;
      border: 1px solid #ff7e00;
      font-size: 18px;
      line-height: 42px;
      text-align: center;
      border-radius: 5px;
    }
  `]
})
export class BannerRightComponent implements OnInit{
  logged: boolean;
  loginDataAll: any;
  CurrentUrl: any;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  logout() {
    localStorage.removeItem('token');
    this.http.get('/api/account').subscribe(res => {
      this.loginDataAll = res;
      if (this.loginDataAll.login == 'anonymoususer'){
        this.logged = false;
      }else {
        this.logged = true;
      }
    });
    this.router.navigate(['index']);
  }
  ngOnInit() {
    this.CurrentUrl = encodeURIComponent(window.location.href)
    this.http.get('/api/account').subscribe(res => {
      this.loginDataAll = res;
      if (this.loginDataAll.login == 'anonymoususer') {
        this.logged = false;
      }else {
        this.logged = true;
      }
    });

    this.router.navigate(['index']);
  }
}
