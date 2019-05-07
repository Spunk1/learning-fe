你js看到哪了
刚刚把简单的看完把
ajax
等他崩溃看一下报错信息

这是我们公司之前提了一下 组长 说看能不能做一个页面自动生成的给 运营去配置
大概功能就是图片那

等NPM怎么
崩溃 上次不是崩溃了吗
现在版本号都打印不出来

是不是没装号啊  我记得上次我是 打印出来了的
等他崩溃看什么原因把

你先看看目录结构 随便看看 打印错误消息了 我再过来

ok

nodejs 就是 js 库是不是哦
不是

NODEJS 相当于 服务器JS 一种JS的运行时 使JS可以脱离浏览器环境运行

NPM NODEJS PACKAGE MANAGER 包管理器

hTTP-SErVER 就是 NODEJS写的一个命令行工具创建一个HTTP服务 不需要别的



ok

这是常见的跨域问题

因为我们访问的时 localhost
接口访问的时 其他域名下的

1. 解决方案 开代理 nginx

2. 如果只有测试会遇到 线上是同一个 可以修改浏览器配置

3. 如果线上环境就是两个域  解决方案你可以百度，这是常见知识点 面试经常靠

等一下我同步一下代码

nodeMODULES这个目录就是包

这是用到的包

这是我把公司公共JS拉出来单独打的包，不用管。也不要上传到其他地方ok

flexible。JS 是做响应式布局的 功能就是REM设计根节点的 font-size 原理是把浏览器视窗的宽度分为100份  720/100 * 10 = 72px - 根节点就是 72

这边就只用写设计图的实际px值就可以了 就会根据根节点的font-size进行变化 做到响应式 以后你可以再深入看一下

等一下 好像没穿好

刚才的问题是冲突了 紫色的 你修改的代码 然后从远程拉去过来 发现我也修改过，就会让选以哪一个修改为准

这是一个树结构 拍之后的写法 

// 这是没有拍平的
{
    root： {
        chilDS： 【
            {

            }
        】
    }
}

欧克？
ok

这边媒体库的管理比较简单 就是上传图片 等静态资源 然后增删修改 还有一个目录的功能 类似于相册 可以给你做

其他的都是 VU组件的写法 给你简单说一下 你不用这样写


这是一整个app 左边的菜单栏可以切换右边的面板显示内容 显示是第一个内容 页面制作 如果点击第二个 这一块全部都要换成 组建管理

页面制作的逻辑是这样

1. 有一个config文件 可以进行新建修改一个页面的配置信息

2. 改完之后保存

3. 页面嵌入了一个iframe用来预览页面

// 保存之后 父页面就会向子页面传递编辑好的config信息，子页面拿到信息进行页面的重建渲染

// qie zhong wen

// 前端源码大概就是这样

// 后台现在的版本也是用的nodejs

// 前端用到的数据现在是写的假数据

// 后台 没有用数据库 持久化数据用的文件系统
// 给你展示一下


// 这个表示没有登陆 

因为 数据库 持久化的数据我没有上传 所以这边没有账号 // haimei jiami

// yin wei mei you zuo zhu  ce

// luoji da gai jiu shi zhe yang

// ni ke yi xian kan yixia , wo wandian ba shi kou de wen ti gei nong shang qu ni zai xie

// haiyou yige wenti  ni xian zai lian de shi wo de git hub repo zheyang buxing

// gei ni shuo yi xia kai yuan dai ma gong xian liu cheng