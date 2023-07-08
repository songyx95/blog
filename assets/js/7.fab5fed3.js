(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{359:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git的注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git的注意点"}},[t._v("#")]),t._v(" Git的注意点")]),t._v(" "),a("h2",{attrs:{id:"解决git提交到github-每次都要输入用户名和密码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决git提交到github-每次都要输入用户名和密码问题"}},[t._v("#")]),t._v(" 解决Git提交到GitHub，每次都要输入用户名和密码问题")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("GitHub")]),t._v("默认是https的关联方式，如果用这种方式关联的远程仓库，每次提交都得输入用户名和密码，可以修改为 "),a("code",[t._v("SSH")]),t._v(" 的关联方式")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git remote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("v "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查看clone 地址")]),t._v("\n")])])]),a("p",[t._v("不出意外的话，应该是查看到")]),t._v(" "),a("blockquote",[a("p",[t._v("origin https://github.com/xxx/xxx.git (fetch)"),a("br"),t._v("\norigin https://github.com/xxx/xxx.git (push)")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("移除 "),a("code",[t._v("https")]),t._v(" 的方式，换成 "),a("code",[t._v("ssh")]),t._v(" 方式")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git remote rm origin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第一步移除")]),t._v("\n\ngit remote add origin ssh地址 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//第二步重新关联SSH方式，git@github.com:用户名/仓库名.git")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("查看push方式是否修改成功：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote -v\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("重新提交一下")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git push -u origin master\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("参考资料："),a("a",{attrs:{href:"https://www.cnblogs.com/sky6862/p/7992736.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/sky6862/p/7992736.html"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);