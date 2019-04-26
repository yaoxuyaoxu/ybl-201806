import { Component } from '@angular/core';

@Component({
  selector: "recommendCourse",
  template: `
    <div>
      <nz-card style="width:876px; overflow:hidden;">
        <img style=" display:block; float: left;" width="380" height="200" alt="example" src="../../../../assets/img/PayCourse.jpg"/>
        <div class="RecommendCourse_R">
          <p class="Course_Title">【精品课】引流教程 - 小宇</p>
          <p class="Course_Content">小宇老师4年淘宝电商经验2014年销售额达到800万。授课风趣幽默，
            见解独到，对学员问题总能第一时间回复和处理。</p>
          <p class="Recommendcourse_Price">￥399<span>1011人已经看过</span></p>
        </div>
      </nz-card>
      <Course></Course>
    </div>
  `,
  styles: [`
   .RecommendCourse_R{
     float: left;
     vertical-align: top;
     padding-left: 16px;
     width: 410px;
   }
    .Course_Title{
      font-size: 16px;
      line-height: 32px;
      color: #333;
    }
    .Course_Content{
      font-size: 14px;
      line-height: 28px;
      color: #999;
    }
    .Recommendcourse_Price{
      color: #ff7e00;
      font-size: 44px;
      line-height: 44px;
      padding-top: 28px;
      margin-bottom: 0;
    }
   .Recommendcourse_Price span{
     display: inline-block;
     float: right;
     font-size: 14px;
     line-height: 44px;
     color: #999;
   }
  `]
})
export class RecomendedCourseComponent {

}
