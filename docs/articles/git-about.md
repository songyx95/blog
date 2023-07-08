# Git的注意点

## 解决Git提交到GitHub，每次都要输入用户名和密码问题
1. ` GitHub `默认是https的关联方式，如果用这种方式关联的远程仓库，每次提交都得输入用户名和密码，可以修改为 `SSH` 的关联方式

``` js
git remote -v //查看clone 地址
```
不出意外的话，应该是查看到
> origin https://github.com/xxx/xxx.git (fetch)  
> origin https://github.com/xxx/xxx.git (push)

2. 移除 `https` 的方式，换成 ` ssh ` 方式
``` js
git remote rm origin //第一步移除

git remote add origin ssh地址 //第二步重新关联SSH方式，git@github.com:用户名/仓库名.git
```
3. 查看push方式是否修改成功：
```
git remote -v
```

4. 重新提交一下
```
git push -u origin master
```

::: tip
参考资料：<https://www.cnblogs.com/sky6862/p/7992736.html>
:::