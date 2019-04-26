import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'AfterTest',
  templateUrl: './AfterclassTest.component.html',
  styleUrls: ['./AfterclassTest.component.less'],
})
export class AfterclassTestComponent implements OnInit {
  question: any;
  answer: any;
  UserChoose: any;
  daan: any;
  clicked = [];
  UserClicked = [];
  setUserChoose = 0;
  junior: boolean = true;
  middle: boolean = false;
  senior: boolean = false;
  right: boolean = false;
  Checked: boolean = false;

  constructor(
    private http: HttpClient,
  ) { }

  tabs = [
    {
      active: true,
      name: '新手测试',
      icon: 'anticon anticon-form',
      type: 'JUNIOR'
    },
    {
      active: false,
      name: '进阶测试',
      icon: 'anticon anticon-bar-chart',
      type: 'INTERMEDIATE'
    },
    {
      active: false,
      name: '精英测试',
      icon: 'anticon anticon-schedule',
      type: 'SENIOR'
    }
  ];
  testJunior() {
    const courseSelectsub = new HttpParams().set('category.equals', 'SENIOR').set('size', '10');
    this.http.get('/api/questions', { params: courseSelectsub }).subscribe(res => {
      this.question = res;
      this.question.forEach(item => {
        item.options.forEach(option => {
          option.label = option.title;
        });
      });
      
    },
      err => {
        console.log(err);
      });
  }
  // testJunior(testType) {
  //   const courseSelectsub = new HttpParams().set('category.equals', testType).set('size', '10');
  //   this.http.get('/api/questions', { params: courseSelectsub }).subscribe(res => {
  //     this.question = res;
  //     this.question.forEach(item => {
  //       item.options.forEach(option => {
  //         option.label = option.title;
  //       });
  //     });
      
  //   },
  //     err => {
  //       console.log(err);
  //     });
  // }
  valuecnt = [];
  SingleClick(index, SingleClicked, current) {
    // if (this.clicked[index] ==) {
    //
    // }
    this.clicked[index] = SingleClicked;
    console.log(this.clicked);
    console.log(15);

    // this.clicked.push( SingleClicked, );
  }
  UserClick() {
    this.Checked = true;
    console.log(this.question);
    console.log(1000);
    this.question.forEach(item => {
      item.options.forEach(option => {
        this.daan = option;
        if(option.isAnswer == true && option.checked == true){
          this.setUserChoose =  this.setUserChoose + 5;
        }
      });
    });
    this.http.post('/api/questions/answers', {
      "optionIds": [this.daan.id],
    });
        console.log(1414);
        console.log(this.daan.id);
  }

  log(value: object[]): void {
    console.log(value);
     
  }
  hide(){
    this.Checked= false;
    this.setUserChoose=0;
  }
  ngOnInit() {
    this.testJunior()

    const testDefault = new HttpParams().set('category.equals', 'SENIOR').set('size', '20');
    this.http.get('/api/questions', { params: testDefault }).subscribe(res => {
      this.question = res;

      this.question.forEach(item => {
        item.options.forEach(option => {
          option.label = option.title;
        });
      });
      console.log(this.question);
      
    },
      err => {
        console.log(err);
      });
  }
}
