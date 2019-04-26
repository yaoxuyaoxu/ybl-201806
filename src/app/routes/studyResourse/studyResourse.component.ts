import { Component , OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
@Component({
  selector: 'studyResource',
  templateUrl: './studyResourse.component.html',
  styles: [`
    .studyResourseBanner_w{
      width: 100%;
      margin-top: 44px;
      background: url("../../../assets/img/studyResourseBanner_w.jpg") no-repeat center top;
    }
    .studyResourseBanner{
      width: 1200px;
      height: 450px;
      margin: 0 auto;
      background: url("../../../assets/img/studyResoursebanner.jpg") no-repeat center top;
    }
    .studyResourse_resourse{
      width: 1200px;
      margin: 0 auto;
      font-size: 18px;
      line-height: 62px;
      padding-top: 50px;
      border-bottom: 1px solid #f0f0f0;
    }
    .studyResourse_resourse i{
      display: inline-block;
      width: 4px;
      height: 18px;
      margin-right: 10px;
      background: #f76e24;
      vertical-align: middle;
    }
    .studyResourse_Suport{
      padding: 0;
      width: 1200px;
      margin: 0 auto;
      list-style: none;
      overflow: hidden;
    }
    .studyResourse_Suport li{
      margin-top: 45px;
      float: left;
      width: 600px;
      overflow: hidden;
    }
    .ant-avatar-circle{
      font-size: 24px;
    }
    .studyResourse_circle{
      float: left;
      color:#f56a00; 
      background-color:#fde3cf;
      width: 100px; 
      height: 100px; 
      font-size: 20px; 
      border-radius: 50%; 
      text-align: center;
      overflow: hidden;
    }
    .studyResourse_title{
      float: left;
      width: 370px;
      line-height: 80px;
      font-size: 14px;
      color: #434343;
      padding-left: 36px;
    }
    .studyResourse_more{
      float: left;
      border-radius: 5px;
      border: 1px solid #f76e24;
      color: #f76e24;
      margin-top: 28px;
      text-align: center;
    }
    .studyResourse_more:hover{
      background: #f76e24;
      color: #fff;
    }
    .buttonMore{
      background:none;
      padding:4px 15px;
    }
    ::ng-deep .vertical-center-modal {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ::ng-deep .vertical-center-modal .ant-modal {
      top: 0;
    }
    .ant-btn-primary{
      background: none;
    }
  `]
})
export class StudyResourseComponent implements OnInit{
  resourse: any;
  content: any;
  content1: any;
  content2: any;
  content3: any;
  content4: any;
  connect: any;
  private: any;
  title: any;
  show: boolean;
  loginData: any;
  onOff: boolean = false;

  ResourseDataPay: any = [
    {
       img: '../../../assets/img/dpzhuanrang.jpg',
       ResourseName : '店铺转让' ,
       ResourseTitle : '淘宝天猫店铺转让',
       ResourseContent: '一、店伯乐成立于2012年，7年来专业从事店铺转让，已有20000多个店铺成功转让，并且无一纠纷',
       ResourseContent1: '二、1对1vip服务：全程陪同过户，专业人员带领办手续，严格审查店铺资质和手续',
       ResourseContent2: '三、法务支援服务：定点法律顾问，纠纷第一时间协助处理',
       ResourseContent3: '四、店铺20项严格审查，按需匹配平台担保交易，全程资金管理，买卖双方更放心',
       ResourseContent4: '五、权威机构的认可  中国电子商务协会常务理事单位',
       ResourseConnect : '有需要店铺转让或者购买天猫，淘宝店，京东，等同学可直接联系QQ：2085210960  联系电话：17760332383',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/taoke.jpg',
       ResourseName : '淘客推广' ,
       ResourseTitle : '大淘客资源',
       ResourseContent: '一、全网流量分发，通过采集群、社群、微信、微博、短视频达人、行业导购站为商家推广。曾是华美月饼2小时11万单的主推者，目前实力淘客界前3',
       ResourseContent1: '二、要求：           天猫和黄冠店优先',
       ResourseContent2: '三、DSR不能三项飘绿，综合评估产品基础销量因素的影响因素',
       ResourseContent3: '',
       ResourseContent4: '',
       ResourseConnect : '需要大淘客合作的同学加资源部秋枫微信：taobaobf',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/pingjia.jpg',
       ResourseName : '中差评维护' ,
       ResourseTitle : '中差评处理',
       ResourseContent: '一、中差评处理      中差评修改每个10元 ，买家返现和软件费用需要店主承担。',
       ResourseContent1: '二、修改成功收费，      主要以电话回访沟通形式解决。不限数量。',
       ResourseContent2: '',
       ResourseContent3: '',
       ResourseContent4: '',
       ResourseConnect : '有需要的同学可直接联系微信：taobaobf（备注优伯乐VIP）',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/tisheng.jpg',
       ResourseName : '提升dsr' ,
       ResourseTitle : '提升动态分',
       ResourseContent: '一、DSR提升  ：     提升动态评分  每个id仅收取1.5元  自动好评以及没有回访过的不收费 ，先服务后收费。',
       ResourseContent1: '二、通过电话回访收到宝贝还没有评价的买家 ， 引导给出好评 ， 避免中差评的出现。',
       ResourseContent2: '',
       ResourseContent3: '',
       ResourseContent4: '',
       ResourseConnect : '有需要的同学可直接联系微信：taobaobf（备注优伯乐VIP）',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/dianxiaomi.jpg',
       ResourseName : '售前客服外包' ,
       ResourseTitle : '智能客服',
       ResourseContent: '金牌客服团队（明规则 懂营销 快速响应不流失）工作时间8:30-24:00 全班客服 白班客服 夜班客服 活动客服 专席定制客服  真正的百人团队 专业售前 售后客服托管。 ',
       ResourseContent1: '优势：  ',
       ResourseContent2: '1.专业度高  7*16小时在线 全年无休  2.降低运营成本。  能为店铺节省30%的成本 ',
       ResourseContent3: '3.不空岗 拥有百人售前团  4.低风险 有严格的管理和筛选制度，客服稳定，绝对让您放心。 ',
       ResourseContent4: '5.月结算  省时省力，服务按月到期结算。 6.数据实时监控 实时刷新跟踪客服绩效。监管无忧。 客服外包在诸多服务商中，我们不敢自夸最优秀；深知服务无止境，唯有多用一分心。',
       ResourseConnect : '有需要的同学可直接联系微信：taobaobf（备注优伯乐VIP）',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/fuxianzhibo.jpg',
       ResourseName : '浮现直播' ,
       ResourseTitle : '开通店铺直播',
       ResourseContent: '开通浮现的优势：浮现就是指商家的直播信息到时会有机会展示到淘宝直播的版块里的，没有开通浮现就没有机会展示， ',
       ResourseContent1: '一、开通店铺直播的优势',
       ResourseContent2: '1、维护老顾客。     2、增加店铺人气。       3、为店铺流量增加一个渠道。       4、节省雇佣主播的服务费跟佣金 ',
       ResourseContent3: '二、开通条件',
       ResourseContent4: '开通淘宝卖家达人直播许可条件（没有违规，满足1个钻）可以开通，个别特殊行业（比如内衣、房产）不能开通，开通失败的话会全部退款',
       ResourseConnect : '需要同学加微信：taobaobf',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/paishe.jpg',
       ResourseName : '专业拍摄+设计+视频制作 ' ,
       ResourseTitle : '拍摄视频设计',
       ResourseContent: ' ',
       ResourseContent1: '',
       ResourseContent2: ' ',
       ResourseContent3: '',
       ResourseContent4: '',
       ResourseConnect : '有需要的同学可直接联系微信：taobaobf（备注优伯乐VIP）',
       typeOf : 'vip',
       visible: ''
    },
    
    {
       img: '../../../assets/img/daiyunying.jpg',
       ResourseName : '【代运营】' ,
       ResourseTitle : '【代运营】',
       ResourseContent: '1、减少投资成本： 若是要自己招建一个运营团队，成员工资大概要2~3万，然后其他办公场所、设备等等又要差不多2~3万，这就差不多要花6万块了，而如果将店铺托管给淘宝代运营公司，只需要付出2~3万的服务费即可。',
       ResourseContent1: '　2、节省时间：淘宝代运营负责店铺的管理、装修、推广等等，而我们自己只需要负责进货发货，然后相关对接、跟进就好，这将为我们省下很大的时间来处理其他问题。       ',
       ResourseContent2: '3、避免运营出错：淘宝代运营公司的运营团队一般来说都会具备2~3年的各类目实际操作经验，能够很好的处理店铺运作中出现的各种问题。而如果我们自己组建一个运营团队，可能需要1~2个月的磨合时间，这期间也许会出现意见不统一、操作不到位等等杂七杂八的问题，导致店铺业绩一直停滞。 ',
       ResourseContent3: '4、处理售后问题：淘宝代运营公司人员充足，可以很好的处理售后带来的一系列问题       ',
       ResourseContent4: '',
       ResourseConnect : '需要同学加文斌老师QQ：2847796674',
       typeOf : 'vip',
       visible: ''
    },
    {
       img: '../../../assets/img/maijiaxiu.jpg',
       ResourseName : '【买家秀】 平台高颜值网红/模特/学生/白领/宝妈任你选，服务内容买家秀加视频秀' ,
       ResourseTitle : '【买家秀】',
       ResourseContent: '1、目前使用过的卖家反馈还可以，所以提供给大家参考使用。如有使用反馈或者建议，可以联系微信：taobaobf',
       ResourseContent1: '　2、该买家秀平台仅做送拍（产品送给模特）、寄拍（产品退还寄回）。如有其他形式请向学校老师反馈。www.baiwanxiu.com   需要邀请码才能注册。邀请码为：10082',
       ResourseContent2: ' ',
       ResourseContent3: '    ',
       ResourseContent4: '',
       ResourseConnect : '',
       typeOf : 'vip',
       visible: ''
    }
  ];
  ResourseTool: any =[
    {     
      img: '../../../assets/img/ruyi.jpg',
      ResourseName : '如意营销' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '6个月-【5星银牌淘拍档打折应用】第二件半价/买一赠一/拍下XX元/拍下减XX/限时X折/超级 满就送/拍下自动改价/搜索显示原价或折扣价/部分虚拟宝贝支持/个性包邮/限购/抹零 /多买多优惠/一键手机详情 ',
     
      ResourseConnect : '有需要的同学可联系七剑老师'
    },
    {     
      img: '../../../assets/img/yidong.jpg',
      ResourseName : '移动旺店 高级版' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '3个月-2011无线电商大赛3等奖，专享app下载支持： 自动评价，差评拦截， 标题优化， 打 单发货，自动上下架，自动橱窗全能店铺管理',
     
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: ''
    },
    {     
      img: '../../../assets/img/quanneng.jpg',
      ResourseName : '全能无线' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '会员互动营销，无线流量、无线抽奖送彩票',
     
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: ''
    },
    {     
      img: '../../../assets/img/huishenghuiying.jpg',
      ResourseName : '会声会影&狸窝' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '资料区下载',
     
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: '下载链接: https://pan.baidu.com/s/1XcXTa-hP2xkP64ZnJtDTzA 密码: yf6h'
    },
    {     
      img: '../../../assets/img/siwei.jpg',
      ResourseName : '思维导图激活版' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '资料区下载',
     
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: '安装链接: https://pan.baidu.com/s/1W5dVHKdHAucPWqVEt0DPMg 密码: 4653'
    },
    {     
      img: '../../../assets/img/pojieban.jpg',
      ResourseName : 'PS破解版' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '资料区下载',
      
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: '安装链接: https://pan.baidu.com/s/1iVIgkLMFLu9Zp4AIOE7OnA 密码: dk6q'
    },
    {     
      img: '../../../assets/img/PSsucaiziti.jpg',
      ResourseName : 'ps字体下载' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '资料区下载',
      
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: '安装链接: https://pan.baidu.com/s/1XFNMRfVku_hokncC82SZFw 密码: y3fr'
    },
    {     
      img: '../../../assets/img/koutu.jpg',
      ResourseName : 'ps扣白底图网址' ,
      ResourseTitle : 'vip赠送',
      ResourseContent: '资料区下载',
     
      ResourseConnect : '有需要的同学可联系七剑老师',
      visible: 'https://www.gaoding.com/koutu'
    },
  ];
  ResourseFree: any = [
    {
      img: '../../../assets/img/dianzhentan.jpg',
      ResourseName : '店侦探&看店宝' ,
      ResourseTitle : '进群领取',
      ResourseContent: 'http://baidu.kandianbao.com/    在线安装 查看类目 的插件 店侦探安装地址：    http://chajian.kandianbao.com/',
     
      ResourseConnect : '有需要的同学可联系助教老师（助教cc：2366854614）',
      visible: ''
    },
    {
      img: '../../../assets/img/taohuoyuan.jpg',
      ResourseName : '淘货源' ,
      ResourseTitle : '进群领取',
      ResourseContent: '',
     
      ResourseConnect : '有需要的同学可联系助教老师（助教cc：2366854614）',
      visible: ''
    },
    {
      img: '../../../assets/img/top20w.jpg',
      ResourseName : 'top20w词表' ,
      ResourseTitle : '进群领取',
      ResourseContent: '',
     
      ResourseConnect : '有需要的同学可联系助教老师（助教cc：2366854614）',
      visible: ''
    },
    {
      img: '../../../assets/img/meigong.jpg',
      ResourseName : '上万款美工psd素材合集' ,
      ResourseTitle : '进群领取',
      ResourseContent: '【百度网盘下载链接】： 链接:https://pan.baidu.com/s/1vpUOGLHIlm9l4siILa0S0Q  密码:hvnx',
     
      ResourseConnect : '有需要的同学可联系助教老师（助教cc：2366854614）',
      visible: ''
    },
  ];
  ResourseGood: any = [
    {
      img: '../../../assets/img/mihoutao.jpg',
      ResourseName : '【猕猴桃代发区】' ,
      ResourseTitle : 'VIP资源',
      ResourseContent: '',
     
      ResourseConnect : '有需要的同学可联系知知老师（QQ：1976986938）',
      visible: ''
    }
  ]
  constructor(private http: HttpClient) {}

  isVisibleMiddle = false;

  showModalMiddle( a, b , c, d ,e , f, g ,h): void {
    this.isVisibleMiddle = true;
    this.content = a;
    this.content1 = b;
    this.content2 = c;
    this.content3 = d;
    this.content4 = e;
    this.connect = f;
    this.title = g;
    this.private = h;
    if (this.loginData.authorities == null || this.loginData.authorities == 'ROLE_USER' || this.loginData.authorities == '' ) {
      this.show = false;
    }else{
      this.show = true;
    }
  }

  handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
  
  showDetail(){
    this.onOff = true;
  }
  hide(){
    this.onOff = false;
    return false;
  }

  ngOnInit(){
    const title = new HttpParams().set('category.in', 'CATEGORY1');
    this.http.get('/api/articles',  { params: title }).subscribe(res => {
        this.resourse = res;
        console.log(121212)
        console.log(this.resourse);
      },
      err => {
        console.log(err);
      });

      this.http.get('/api/account').subscribe(res => {
        this.loginData = res;
      },
        err => {
          console.log(err);
        });
  }
}
