import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
const courses=[
    new Course(1,'混合应用开发',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(2,'web开发二',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",23,100),
    new Course(3,'HTMLCSS',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",20,98),
    new Course(4,'软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",10,90),
    new Course(5,'2018级信息素养实践',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",0,12),
    new Course(6,'2018级计算机导论','http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130',1,396),
    new Course(7,'2017级数据结构','http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130',4,401),
    new Course(8,'软件学院18级新生训练营','http://usercontent.edu2act.cn/media/team/18-07-09/3ydhisn3DM8PR9hNY9vCjA.jpg?imageView2/1/w/230/h/130',0,78),
    new Course(9,'2017级暑期训练营','http://usercontent.edu2act.cn/media/team/18-07-09/J3LxZ5cMMP9JFjGuDbSsh8.png?imageView2/1/w/230/h/130',13,92),
    new Course(10,'2016级操作系统','http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130',7,398),
    new Course(11,'软件过程','http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130',1,2),
    new Course(12,'2017级网络原理','http://usercontent.edu2act.cn/media/team/18-03-07/BGWzBhRgmujgPmLn4efeFd.png?imageView2/1/w/230/h/130',10,395)
]
app.get('/api',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    req.params;
    res.json(courses.find((ele)=>ele.id==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});



class kecheng{
    constructor(
        public kechengid:number,
        public images:string,
        public kechengName:string,
        public kechengjianjie:string,
        public keshi:number,
        public kechengperson:number,
        public videosrc:string
    ){}
}
const kechengs=[
    new kecheng(1,'http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190','Github开源之旅','完成本课程，能够达到以下目标：实名注册GITHUB账户，能够在github上搜索资料',24,3734,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new kecheng(2,'http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190','CSS3基础','CSS3在以前的基础上增加了诸多新的选择器以及新的样式',12,2315,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new kecheng(3,'http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190','HTML5基础','HTML5是最新的一项web标准，在原有HTML4的基础上定义了一些新的标签和新的javasripet Api',12,2310,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new kecheng(4,'http://usercontent.edu2act.cn/media/cs/16-09-22/Qrnx7yH2tp7mGGLSdbhWHc.png?imageView2/1/w/320/h/190','网页制作与开发','本课程利用线上与线下相结合的授课方式,以网页开发主流软件Dreamweaver为工具，交给学生',42,1572,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new kecheng(5,'http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190','web自动化测试','说明了本课程的前置课程是Selenium IDE WEB自动化测试入门（上），建议大家完成上篇课程的学习并亲自动手完成上篇课程中演示的几个自动化测试案例，再此基础上再学习本课程。其次，总结了上篇中大家已经学习的知识和技能，并预告中篇课程要讲解的6个主题。',13,1397,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new kecheng(6,'http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190','扩展的ICONIX软件过程实践','2016是VR元年，这一观点早已在计算机互联网行业中流行开来，与VR先关的各种分析研究',12,2269,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new kecheng(7,'http://usercontent.edu2act.cn/media/cs/16-09-08/DTAweqRQeVWst8N8RmH3pe.png?imageView2/1/w/320/h/190','产品交互设计那些事','本课程是和学员一起探讨交流关于产品设计和交互设计的一些经验教训，结合具体案例讲解了',5,1084,"http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new kecheng(8,'http://usercontent.edu2act.cn/media/cs/16-09-02/SKFDejikkVQYmQJePPMCPk.png?imageView2/1/w/320/h/190','ProcessOn绘制流程图','ProcessOn是国内比较有名的图形设计分享社区，有着强大的在线制图功能，本次课程主要介绍',4,3053,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new kecheng(9,'http://usercontent.edu2act.cn/media/cs/16-09-02/zv88bojNGWP9zZcThYAhS.png?imageView2/1/w/320/h/190','项目管理平台Redmine','本课程讲解了项目管理平台Redmine的安装部署，管理员维护，普通用户使用，和其他类型平台',8,4423,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new kecheng(10,'http://usercontent.edu2act.cn/media/cs/16-08-01/iJtYTtv5arCC2fxXujFTST.png?imageView2/1/w/320/h/190','jQuery','jQuery是web前端开发的常用技术，本课程将从理论基础+实战演练两方面对jQuery相关内容进行',19,2044,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new kecheng(11,'http://usercontent.edu2act.cn/media/cs/16-07-14/zuW3YV2EzoSoEbxVmDyrK9.png?imageView2/1/w/320/h/190','墨刀入门','本课程重点讲解一款在线快速原型设计工具-墨刀的使用方法和操作技巧',4,4898,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4'),
    new kecheng(12,'http://usercontent.edu2act.cn/media/cs/16-07-14/xmNYMwmnb3awZEQtycxAyN.png?imageView2/1/w/320/h/190','界面原型设计','通过课课程的学习能够了解何为界面，用户界面发展的过程，界面设计方法',5,2592,'http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4')

]
app.get('/api',(req,res)=>{
    res.json(kechengs);
});
app.get('/api/kechengs',(req,res)=>{
    res.json(kechengs);
});
app.get('/api/kechengs/:kechengid',(req,res)=>{
    req.params;
    res.json(kechengs.find((ele)=>ele.kechengid==req.params.kechengid));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(kechengs);
});



class jiaru{
    constructor(
        public id:number,
        public jiaruName:string,
        public images:string,
        public task:number,
        public person:number
    ){}
}
const jiarus=[
    new jiaru(1,'混合应用开发',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90),
    new jiaru(2,'web开发二',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",23,100),
    new jiaru(3,'HTMLCSS',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",20,98)
]
app.get('/api',(req,res)=>{
    res.json(jiarus);
});
app.get('/api/jiarus',(req,res)=>{
    res.json(jiarus);
});
app.get('/api/jiarus/:id',(req,res)=>{
    req.params;
    res.json(jiarus.filter((ele)=>ele.id==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(jiarus);
});



class sheqv{
    constructor(
        public sheqvid:number,
        public Name:string,
        public images:string,
        public person:string,
        public yuedu:number,
        public pinglun:number,
        public jianjie:string
    ){}
}
const sheqvs=[
    new sheqv(1,'web开发（二）——函数',"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg","刘秀梅  2018-10-11",1162,4,"（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。"),
    new sheqv(2,'类定义关键字详解',"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg","3-张鑫源 2018-10-9",90,0,"JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就是全类公有。（共有的类变量与对象无关，只和类有关）。"),
    new sheqv(3,'数据结构——线性表的经典应用',"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/3RtZyjoCHuFQSyZCWgr2o5.jpg","杨伟彬  2018-10-8",200,18,"1. 一元多项式的表示和相加 在数学上，一个一元多项式\(P_{n}(x)\)可升序写成：\(P_{n}(x) = p_{0}+p_{1}x^1+p_{2}x^2+...++p_{n}x^n\)它由n+1个系数唯一确定。"),
    new sheqv(4,"栈和队列之间的相互转化","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/ZVukV3kKu2r8b9ezbbc5VA.jpg","7-李建涛 2018-10-1",55,2,"需要两个队列data，help，因为队列是先进先出，想要模拟栈的结构，每次取栈顶的元素也就相当于取队列中队尾的元素,需将最后一个元素前面的先取走，才能取到最后一个元素，")

 
]
app.get('/api',(req,res)=>{
    res.json(sheqvs);
});
app.get('/api/sheqvs',(req,res)=>{
    res.json(sheqvs);
});
app.get('/api/sheqvs/:sheqvid',(req,res)=>{
    req.params;
    res.json(sheqvs.find((ele)=>ele.sheqvid==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(sheqvs);
});

app.listen(8000);