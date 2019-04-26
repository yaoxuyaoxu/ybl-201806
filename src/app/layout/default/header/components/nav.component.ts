import { Component } from '@angular/core';
@Component({
  selector: 'header-nav',
  template: `
    <ul nz-menu [nzMode]="'horizontal'" class="top_nav">
      <li nz-menu-item><a target="_blank" [routerLink]="['/index']" [routerLinkActive]="['active']"> 首页</a></li>
      <li nz-menu-item> <a target="_blank" [routerLink]="['/StudyMap']" [routerLinkActive]="['active']"> 14天成长计划</a></li>
      <li nz-menu-item> <a target="_blank" [routerLink]="['/StudyResourse']" [routerLinkActive]="['active']"> 淘宝资源</a></li>
      <li nz-menu-item>
        <nz-dropdown>
          <a nz-dropdown>
            课程中心<i class="anticon anticon-down"></i>
          </a>
          <ul nz-menu nzSelectable>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/CourseCenter']">免费课程</a>
            </li>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/ExcellentCourse']">精品课程</a>
            </li>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/CourseCenter']">VIP课程</a>
            </li>
            <li nz-menu-item>
              <a>学员分享</a>
            </li>
          </ul>
        </nz-dropdown>
      </li>
      <li nz-menu-item>
        <nz-dropdown>
          <a nz-dropdown>
            学员互动<i class="anticon anticon-down"></i>
          </a>
          <ul nz-menu nzSelectable>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/OfflineCommunication']">问答交流</a>
            </li>
            <li nz-menu-item>
              <a>干货分享</a>
            </li>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/AfterTest']">精英认证</a>
            </li>
          </ul>
        </nz-dropdown>
      </li>
      <li nz-menu-item>
        <nz-dropdown>
          <a nz-dropdown>
            关于我们<i class="anticon anticon-down"></i>
          </a>
          <ul nz-menu nzSelectable>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/OfflineCommunication']">线下交流</a>
            </li>
           
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/aboutUs']">VIP服务</a>
            </li>
            <li nz-menu-item>
              <a target="_blank" [routerLink]="['/aboutUs']">优伯乐介绍</a>
            </li>
          </ul>
        </nz-dropdown>
      </li>
      <li nz-menu-item><a target="_blank" [routerLink]="['/Personal']" [routerLinkActive]="['active']">  个人中心</a></li>
     
    </ul>
  `,
  styles: [
    `
      
    `
  ],
})
export class HeaderNavComponent {}
