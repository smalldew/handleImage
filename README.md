### handleImage

>背景：

```
因小程序包体积大小限制，我们会把图片资源，放到CDN上。
但是,CND还可能有缓存，所以我们需要把UI给的图片重命名。
以及为了更快速的加载CND图片，我们还需吧图片压缩一下，
于是，就有了这个既能压缩图片又能重命名的脚本。
```

>功能：

```
压缩图片与重命名图片
```


> 使用方法:

```
将要处理的图片放到‘handleBeforeImages’这个文件夹下（例：head.png）
并修改 package.json的config的vs为想要的前缀（例：1.0.0_icon_）
然后
- npm install (如已安装依赖库，忽略此命令)
- npm run hd 
处理后的图片会输出到‘handleAfterImages’这个文件夹下（文件名为：1.0.0_icon_head.png）
```
				
