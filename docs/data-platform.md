相关链接：

[数据矩阵](http://dp.sankuai.com/pagemanage/settings/#/app) 
[SDK接入](http://docs.sankuai.com/doc/mx/analytics-docs/ios/)
[美团流量矩阵](http://dp.sankuai.com/webview?url=http://docs.sankuai.com/doc/mx/analytics-docs/web/)

[Env环境信息规范](http://wiki.sankuai.com/pages/viewpage.action?pageId=310765199)


#灵犀数据平台接入

在项目中引入灵犀SDK，其中，`channel-name`替换成数据组给的频道名称（例如鹈鹕配送为pelican，需额外申请），`app-name`参数必须替换成需要统计的应用名称（鹈鹕配送为pelican）。

```
 <script>
        // 种子代码 下载地址: https://analytics.meituan.com/source/seed.js
        !function(e,n,t,o){function r(){return o?o:/\b(mobile|iphone|htc)\b/gi.test(d)?"mobile":"web"}var a=window,i=document,c="_MeiTuanALogObject";if(a[c]=t,!a[t]){var s=function(){return s.q.push(arguments),s};s.q=s.q||[],s.v=n,s.l=+new Date,s.C=o,a[t]=a[t]||s;var u=i.getElementsByTagName("head")[0],l=i.createElement("script"),d=navigator.userAgent.toLocaleLowerCase(),f=r(),$="";$=e.length-3===e.indexOf(".js")?e:["//",e,"/source/",n,"/",f,".","js"].join(""),l.defer=l.async=!0,l.charset="utf-8",l.src=$,l.onload=l.onerror=function(){},u.appendChild(l)}}("analytics.meituan.com","stable","Analytics","");
        // 以上Analytics字符串为导出到window上的函数，该函数为全局函数可在页面JS代码初始化时调用

		 // 设置应用名称，设置appnm将成为页面默认的appnm，建议每个页面都设置
		 // appnm为全局共享，如果多处设置，将会覆盖appnm。
		 // 如果你的页面嵌入Native App，建议设置为App的名称
		 Analytics('config', 'appnm', 'app-name'); 
        
        //设置应用频道名称与uid
		 Analytics('use', 'channel-name', /* optional */ {uid: 'user-id'}); 
		
		 // 发送pv，其中"page_id"为页面名称，你应该为你的每一个页面起一个唯一的名称
		 Analytics('send', 'pv', 'page_id'); 
    </script>
```

#项目中统计PV

在引入SDK的过程中，已经将接口Analytics挂到window中，因此可以在项目中进行引用：

```
$rootScope.$on('$stateChangeStart', function (event, toState) {
    if($window.Analytics) {
        $window.Analytics('send', 'pv', toState);
    }
});
```
#区分测试与正式环境

在配置文件中，维护运行环境标识，并进行设置：

```
$scope.app = {
	platform: 'Debug',
	//platform: 'Release' 正式环境进行切换
};
// 设置平台环境
Analytics('set', {subcid: $scope.app.platform});
```

#数据查看

##查询平台

[数据查询平台](http://stat.sankuai.com/stat/view/xlsmaker?city=0&f=123)

- 数据源：`DW_PRESTO_DB_CONNECT_URL`
- 数据表：`log.data_sdk_pelican`
- 具体字段：
	- `subcid`：`Debug`表示测试环境，`Release`表示正式环境
	- `nm`：事件名称。`mge`是埋点，`MPT`是页面追踪，`report`是制动上报
	- `val_cid `：页面名称
	- `val_val `：页面路由
	- `uid `：用户名称
	- `dt `：日期YYYYMMDD
	
##查询语句
###查询所有日志

```
select *
	from log.data_sdk_pelican 
	where ct='www' 
```

###查询日志限制数目

```
select *
	from log.data_sdk_pelican 
	where ct='www' 
	limit 30
```

###查询某天按生成时间排列的关键日志

```
select _mt_datetime,nm,val_cid, val_val, uid,subcid, dt 
	from log.data_sdk_pelican 
	where ct='www'AND dt='20160608' ORDER BY _mt_datetime 
```

###查询某个模块的PV

```
select COUNT(*) 
	from log.data_sdk_pelican 
    where ct='www' 
    AND dt='20160608'
    AND val_cid = '骑手申诉'
```

###查询某个模块的UV

```
select COUNT(DISTINCT uid) 
	from log.data_sdk_pelican 
    where ct='www'
    AND dt='20160608'
    AND val_cid = '骑手申诉'
```

###查询所有页面的UVPV

```
select val_cid,count(*) UV,sum(data) PV
	from 
	(select val_cid,uid,count(*) data
		from log.data_sdk_pelican
		where ct ='www'
		and dt ='20160608'
		group by val_cid,uid)
	group by val_cid
```