## 订阅地址：

https://raw.githubusercontent.com/Swz0321/AdGuard/master/public/index.txt

---

- 本规则的元素屏蔽主要使用`:contains()`伪类，移动端的 AdGuard（非浏览器插件）对`:contains()`伪类的支持似乎存在问题，建议还是使用 kiwi 浏览器或 Firefox 移动版配合 AdGuard 插件使用

## 从代码仓库下载单个文件的 URL

github 中：

- 方式一：

raw.gitubusercontent.com/用户名/仓库名/分支名/文件路径

- 方式二：

github.com/用户名/仓库名/raw/分支名/文件路径

gitee.com 中：

- gitee.com/用户名/仓库名/raw/分支名/文件路径

---

## 广告规则语法:

- `*` => 任意字符

---

- `||`表示 https:// 或者 http://
- 后接一个路径时
  - 拦截该路径下的所有单个文件,
  - 但不拦其子文件夹下的单个文件

---

- `^` 表示 `/` 或者 `:`  
  也用来分隔域名结尾和`$`  
  例如
  `||example.com^$image`

---

- `$` 表示 内容修饰符  
  例如：
  - $image => 拦截图片
  - $~image => 除了图片都拦截
  - $script => 拦截 script 标签
  - $~script => 除了 script 标签都拦截
  - $3p => 拦截第三方请求
  - $domain=指定域名 => 拦截来自指定域名的请求
  - $denyallow=指定域名 => 放行来自指定域名的请求

---

- 域名`##`网页元素
- `:contains()`

配匹`innerText`中含有指定内容的元素，建议配上子元素选择器和正则一起用

```css
div > div:contains(/要配匹的字符/)
```
