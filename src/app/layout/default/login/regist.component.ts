import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user-module';
import { NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'register',
  template: `
<div class="register" style= "padding-top: 100px">
  <h3>欢迎来到优伯乐电商</h3>
  <form #f="ngForm" (ngSubmit)="onSubmit(UserData.nickName,UserData.qq)">
    <table>
      <tr>
        <td>请输入用户名 ：</td> 
        <td>
            <input id="login" name="login" class="form-control"
                 [(ngModel)]="UserData && UserData.nickName" #name="ngModel" placeholder="用户名由英文和数字组成">
        </td>
      </tr>   
      <tr>
        <td>请输入QQ号 ：</td>
        <td>
          <input id="qq" name="qq" class="form-control"
               [(ngModel)]="UserData && UserData.qq" #name="ngModel" >
        </td>
      </tr>
          
      <tr> 
        <button>提交</button>
        
      </tr>
    </table>
  </form>
</div>
  `,
  styles: [`
  .register{
    width: 700px;
    margin: 0 auto;
  }
  .register h3{
     text-align: center;
     font-size: 36px;
   }
  table{
    display: block;
    text-align: center;
    background: #f1f1f1;
    border-radius: 5px;
    padding: 50px 200px;
    margin-bottom: 100px;
  }
  table tr{
    display: block;
    padding: 10px;
  }
    button{
      width: 164px;
      font-size: 18px;
      line-height: 36px;
      padding: 2px 46px;
      border-radius: 10px;
      background: #f76e24;
      color: #fff;
      border: none;
    }
  `]
})
export class RegistComponent implements OnInit {
  UserData: any;
  regist: any;
  logincheck: boolean;
  PatternEail: any;
  CurrentUrl: any;
  BackUrl: any;
  TokenId: any;
  constructor(
    private routeInfo: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) { }

  connectIndex(){

  }

  onSubmit( a, d) {
    // this.PatternEail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // if (this.UserData.qq == null || this.UserData.nickName == null || this.UserData.mobile == null || this.UserData.email == null) {
      // alert('您的信息填写的不完整')
      // return false;
    // } else if (!(this.PatternEail.test(this.UserData.email ))) {
      // alert('您的邮箱格式不正确')
      // return false;
    // } else {
      if(d!=""){
        const login = new HttpParams().set('login', d).set('password', '123456').set('qq', d).set('qqOpenId', this.UserData.qqOpenId).set('nickName',a);
        this.http.get('/api/register', { params: login }).subscribe(res => {
          this.regist = res;
          alert('注册成功')
          localStorage.removeItem('token');
          this.BackUrl = localStorage.getItem('url'); 
          console.log( this.BackUrl) 
          this.TokenId = localStorage.setItem('token', 'Bearer' + ' ' + this.regist.id_token); 
          window.location.href= this.BackUrl;
        },
          err => {
            console.log(err);
          });
        // this.router.navigate([ this.BackUrl]);
        
        // this.router.navigate(['index']);
    // }
      }else{
        alert("您输入的QQ号码有误")
        return false;
      }
  }

  ngOnInit() {
    this.http.get('/api/account').subscribe(res => {
      this.UserData = res;
    });
  }
}
