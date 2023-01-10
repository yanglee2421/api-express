# 为 ADG 和 UBO 收集的一些拦截规则

## 订阅地址：

- [本规则](https://raw.githubusercontent.com/Swz0321/AdGuard/master/public/index.txt)
- [AdGuard 中文](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_224_Chinese/filter.txt)
- [AdGuard 移动](https://raw.githubusercontent.com/AdguardTeam/FiltersRegistry/master/filters/filter_11_Mobile/filter.txt)

## 从代码仓库下载单个文件的 URL

- github 中：raw.gitubusercontent.com/用户名/仓库名/分支名/文件路径

- gitee.com 中：gitee.com/用户名/仓库名/raw/分支名/文件路径

## 规则语法:

### 转义字符

| 字符     | 含义                                         |
| -------- | -------------------------------------------- |
| `*`      | 任意字符                                     |
| `\| \|`  | https:// 或者 http://                        |
| `/route` | 该路径下的所有文件（不包含子文件夹中的文件） |
| `^`      | `/` 或者 `:`也用来分隔域名结尾和`$`          |
| `$`      | 内容修饰符                                   |

### 内容修饰符用法

| 用法                  | 含义                   |
| --------------------- | ---------------------- |
| `$image`              | 拦截图片               |
| `$~image`             | 除了图片都拦截         |
| `$script`             | 拦截 script 标签       |
| `$~script`            | 除了 script 标签都拦截 |
| `$3p`                 | 拦截第三方请求         |
| `$domain=指定域名`    | 拦截来自指定域名的请求 |
| `$denyallow=指定域名` | 放行来自指定域名的请求 |

### 元素拦截

- 语法：域名`##`css 选择器

```
baidu.com##div
```

- 特殊伪类：`:contains()`

```css
/*
配匹`innerText`中含有指定内容的元素，建议配上子元素选择器和正则一起用
*/
div > div:contains(/要配匹的字符/)
```

## 服务器

- src 中的文件是一个 express 服务器
- 在自动引入失败的情况下，可用以下命令开启服务器再引入
- http://127.0.0.1/public/index.txt

```powershell
npm run build
npm run preview
```
