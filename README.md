订阅地址：
https://gitee.com/Swz082421/adblock/raw/master/filter.txt

- 使用了一些强拦截规则

从代码仓库下载单个文件的URL
=
github中
-
- 方式一：
raw.gitubusercontent.com/用户名/仓库名/分支名/文件路径
- 方式二：
github.com/用户名/仓库名/raw/分支名/文件路径

gitee.com中
-
- gitee.com/用户名/仓库名/raw/分支名/文件路径


广告规则语法:
-
- \*   =>  任意字符
---

- ||  =>  https:// 或者 http://   
- 后接一个路径时
- 拦截该路径下的所有单个文件,
- 但不拦其子文件夹下的单个文件
---

- ^   =>  / 或者 :  
也用来分隔域名结尾和$  
例如
||example.com^$image
___

- $   =>  内容修饰符  
例如
- $image  =>  拦截图片
- $~image =>  除了图片都拦截
- $script =>  拦截script标签
- $~script => 除了script标签都拦截
- $3p =>  拦截第三方请求
- $domain=指定域名 => 拦截来自指定域名的请求
- $denyallow=指定域名 =>  放行来自指定域名的请求
---

- \#\#  =>  后接CSS选择器  
例如  
###id  
##.class  
##div  
拦截被该CSS选择器选中的元素