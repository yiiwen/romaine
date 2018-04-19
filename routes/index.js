var express = require('express');
var router = express.Router();

var title = '广州油麦菜信息科技有限公司'

var handle = function(req,res,next){
  res.render('index', { 
    title: title,
    midTitle:{
      title:'网站建设案例',
      detail:'企业项目之间的合作让我们树立良好的口碑，丰富的项目经验使我们更加强大'
    },
    pricing:[
      {
        title : '高端网站建设',
        list:[
          {
            title:'企业网站建设',
            link:'javascript:void(0)'
          },
          {
            title:'品牌网站建设',
            link:'javascript:void(0)'
          },
          {
            title:'营销网站建设',
            link:'javascript:void(0)'
          },
          {
            title:'电子商务网站',
            link:'javascript:void(0)'
          },
        ],
        button:{
          title:'订购/了解更多',
          btnLink:'javascript:void(0)'
        }
      },{
        title : '软件设计与开发',
        list:[
          {
            title:'客户关系管理系统',
            link:'javascript:void(0)'
          },
          {
            title:'企业办公系统',
            link:'javascript:void(0)'
          },
          {
            title:'企业资源计划管理系统',
            link:'javascript:void(0)'
          },
          {
            title:'进销存系统',
            link:'javascript:void(0)'
          },
        ],
        button:{
          title:'订购/了解更多',
          btnLink:'javascript:void(0)'
        }
      },{
        title : '高端网站建设',
        list:[
          {
            title:'APP设计与开发',
            link:'javascript:void(0)'
          },
          {
            title:'H5设计与开发',
            link:'javascript:void(0)'
          },
          {
            title:'微信公众号',
            link:'javascript:void(0)'
          },
          {
            title:'小程序',
            link:'javascript:void(0)'
          },
        ],
        button:{
          title:'订购/了解更多',
          btnLink:'javascript:void(0)'
        }
      }
    ]
    })
  }

router.get('/', function(req,res,next){
  handle(req,res,next);
});

router.get('/index',function(req,res,next){
  handle(req,res,next);
});

router.get('/homeblog',function(req,res,next){
  res.render('homeBlog',{title:title});
})

module.exports = router;
