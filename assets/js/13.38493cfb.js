(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{371:function(s,t,a){s.exports=a.p+"assets/img/gitReset.c69036ba.png"},418:function(s,t,a){"use strict";a.r(t);var e=a(26),i=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" Git")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ～/.ssh\nssh-keygen -t rsa -C "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zhangjiayu@newlink.com"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册ssh-key,生成密钥 填写你的邮箱地址,将生成的公钥配置到gitlab中")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入自定义key的文件名，我这里加的是id_rsa_zjy,这个名字可以自定义")]),s._v("\nssh-add -K ~/.ssh/id_rsa_zjy "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将上述生成的自定义 ssh-key 添加到ssh-agent")]),s._v("\nssh-add -l "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加成功之后可以查看一下是否把 id_rsa_zjy 添加进去了")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T git@gitlab.newlink.com "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试 ssh 是否连通")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用指令"}},[s._v("#")]),s._v(" 常用指令")]),s._v(" "),e("ul",[e("li",[s._v("git config --global user.email \"zhangjy@newlink.com\": 添加全局配置邮箱（ 去掉'–-global',则为当前仓库配置 ）")]),s._v(" "),e("li",[s._v("git config --global user.name \"zhangjiayu\": 添加全局配置用户名（ 去掉'–-global',则为当前仓库配置 ）")]),s._v(" "),e("li",[s._v("git config --list: git查看配置信息")]),s._v(" "),e("li",[s._v("git init: 初始化仓库（把目录变成Git可以管理的仓库）")]),s._v(" "),e("li",[s._v("git remote add origin git@gitlab.newlink.com:ty_fe/czb-wechat-mp.git: 配置远程仓库地址")]),s._v(" "),e("li",[s._v("git remote -v: 查看远程仓库地址")]),s._v(" "),e("li",[s._v("git clone ***: 克隆代码")]),s._v(" "),e("li",[s._v("git add .: 将修改的内容添加到暂存区")]),s._v(" "),e("li",[s._v('git commit -m "feat: ***": 提交本次修改代码并注释')]),s._v(" "),e("li",[s._v("git commit --amend（有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。 此时，可以运行带有 --amend 选项的提交命令来重新提交）")]),s._v(" "),e("li",[s._v("git pull (origin ***): 拉取代码到本地（git fetch + git merge）")]),s._v(" "),e("li",[s._v("git push (origin ***): 推送代码到远程（git push -f -u origin dev: 强制push到对应的远程分支）")]),s._v(" "),e("li",[s._v("git push origin dev:dev => 推送本地dev分支到远程dev分支，没有则创建远程dev分支")]),s._v(" "),e("li",[s._v("git merge dev: 合并分支（将dev分支的修改合并到当前分支上）")]),s._v(" "),e("li",[s._v("git rebase: 变基（可以合并多次commit，修改commit，没有merge记录）")]),s._v(" "),e("li",[s._v("git branch: 查看本地分支（-r: 远程分支/-a: 所有分支）")]),s._v(" "),e("li",[s._v("git branch ***: 新建分支")]),s._v(" "),e("li",[s._v("git checkout ***: 切换分支")]),s._v(" "),e("li",[s._v("git checkout -b ***: 新建分支并切换")]),s._v(" "),e("li",[s._v("git branch -D ***: 删除本地分支")]),s._v(" "),e("li",[s._v("git push origin :dev: 删除远程dev分支")]),s._v(" "),e("li",[s._v("git branch --set-upstream-to=origin/<分支> <本地分支>: 为本地分支创建远程对应分支跟踪信息")]),s._v(" "),e("li",[s._v("git status: 查看当前仓库状态")]),s._v(" "),e("li",[s._v("git stash: 把工作区的修改暂时贮藏起来")]),s._v(" "),e("li",[s._v("git stash list: 查看贮藏记录")]),s._v(" "),e("li",[s._v("git stash pop: 把工作区贮藏的修改还原（所有分支公用一个stash栈）")]),s._v(" "),e("li",[s._v("git diff: 查看当前修改尚未add的代码记录（也可查看指定文件 git diff test.txt）")]),s._v(" "),e("li",[s._v("git log: 查看日志（可以加上参数  --pretty=oneline，只会显示版本号和提交时的备注信息）")]),s._v(" "),e("li",[s._v("git reflog: 查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）")]),s._v(" "),e("li",[s._v("git log -n 1: 查看最后一次提交记录")]),s._v(" "),e("li",[s._v("git log -n 1 --stat: 查看最后一次提交所有更改的文件")]),s._v(" "),e("li",[s._v("git log -n 1 -p: 查看最后一次提交所有更改的细节")]),s._v(" "),e("li",[s._v("git reset HEAD: 回退到当前版本（也可在后面加文件名，回退某个文件）")])]),s._v(" "),e("blockquote",[e("p",[s._v("如我们git add 一个文件，然后发现添加了错误的内容，此时我们只是做了add 操作，就是将修改了内容添加到了暂存区，还没有执行commit，所以还没有生成版本号，当前的版本号对应的内容，还是你add之前的内容，所以我们只需要将代码回退到当前版本就行。")])]),s._v(" "),e("ul",[e("li",[s._v("git checkout -- ***.js: 还原某个文件的修改（工作区的修改也没了；如果该文件在工作区中被删除，该指令可以重新检出）")]),s._v(" "),e("li",[s._v("git reset --hard HEAD^: 退回上一个版本（HEAD~1、HEAD~2: 上一个版本、上上个版本 递推）")]),s._v(" "),e("li",[s._v("git reset --hard HEAD@{1}: 回退到指定版本（reset后，目标版本之后的版本不见了）（HEAD@{1} 可替换为 5位数版本号）")])]),s._v(" "),e("h4",{attrs:{id:"git-reset-hard-和没有-hard的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-reset-hard-和没有-hard的区别"}},[s._v("#")]),s._v(" git reset --hard 和没有--hard的区别:")]),s._v(" "),e("ol",[e("li",[s._v("先add,不进行commit操作，add后\na. 执行 git reset HEAD: 只对暂存区起效果，不对工作区的内容起效果(add 的内容由暂存区转为工作区)\nb. 执行 git reset --hard HEAD: add 的内容和工作区的修改完全消失")]),s._v(" "),e("li",[s._v("add，并commit后\na. 执行 git reset HEAD^: 和没commit一样，保留工作区修改\nb. 执行 git reset --hard HEAD^: add 的内容和工作区的修改完全消失\n"),e("img",{attrs:{src:a(371),alt:"gitReset"}})])]),s._v(" "),e("blockquote",[e("p",[s._v("版本回退的另一种方式 "),e("code",[s._v("revert")])])]),s._v(" "),e("blockquote",[e("p",[s._v("这种方式不会把版本往前回退，而是生成一个新的版本。你之前操作的提交记录也会被保留下来")])]),s._v(" "),e("p",[s._v("操作步骤如下：")]),s._v(" "),e("ol",[e("li",[s._v("找到你误提交之前的版本号")]),s._v(" "),e("li",[s._v("git revert -n 版本号")]),s._v(" "),e("li",[s._v("git commit -m xxxx 提交")]),s._v(" "),e("li",[s._v("git push 推送到远程")])]),s._v(" "),e("p",[s._v("OK，版本还原了，通知其他人更新一下代码吧")]),s._v(" "),e("h2",{attrs:{id:"git-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-tag"}},[s._v("#")]),s._v(" git tag")]),s._v(" "),e("h3",{attrs:{id:"_1-什么是tag-什么时候应该创建一个tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是tag-什么时候应该创建一个tag"}},[s._v("#")]),s._v(" 1. 什么是tag？什么时候应该创建一个tag？")]),s._v(" "),e("ul",[e("li",[s._v("项目的版本管理中，每当一个release版本发布时，需要做一个纪录，以便以后需要的时候能查找特定的版本，这时候就用到tag这个功能。")]),s._v(" "),e("li",[s._v("Git中的tag指向一次commit的id，通常用来给开发分支做一个标记，如标记一个版本号。")])]),s._v(" "),e("h3",{attrs:{id:"_2-tag和branch的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-tag和branch的区别"}},[s._v("#")]),s._v(" 2. tag和branch的区别")]),s._v(" "),e("ul",[e("li",[s._v("branch是分支；tag是分支上的一个里程碑，一个点；")]),s._v(" "),e("li",[s._v("tag就是一个只读的branch；一般为每一个可发布的里程碑版本打一个tag；")]),s._v(" "),e("li",[s._v("简单说比如branch有1.0，1.1等，其中1.0分支里可以有1.0.1，1.0.2这些tag；")]),s._v(" "),e("li",[s._v("tag就像是一个里程碑一个标志一个点；branch是一个新的征程一条线；")]),s._v(" "),e("li",[s._v("tag是静态的，branch要向前走；")]),s._v(" "),e("li",[s._v("稳定版本备份用tag，新功能多人开发用branch（开发完成后merge到master）。")])]),s._v(" "),e("h3",{attrs:{id:"_3-tag常用指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-tag常用指令"}},[s._v("#")]),s._v(" 3. tag常用指令")]),s._v(" "),e("ul",[e("li",[s._v("3.1 打tag")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v0.1.0 -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"release 0.1.0 version"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("ul",[e("li",[s._v("git tag 是命令")]),s._v(" "),e("li",[s._v("-a v0.1.0 是增加名为v0.1.0的标签("),e("code",[s._v("a")]),s._v(" 即annotated的缩写，指定标签类型)")]),s._v(" "),e("li",[s._v("-m 后面跟着的是标签的注释(说明信息会保存在标签对象中)")])])]),s._v(" "),e("p",[e("strong",[s._v("打标签的操作发生在我们commit修改到本地仓库之后。")])]),s._v(" "),e("ul",[e("li",[s._v("3.2 提交tag\n"),e("strong",[s._v("将v0.1.0标签提交到git服务器")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m “fixed some bugs”\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v0.1.0 -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"release 0.1.0 version"')]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin v0.1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("解释：通常的git push不会将标签对象提交到git服务器，我门需要进行显示的操作。")]),s._v(" "),e("ul",[e("li",[s._v("3.3 提交标签到远程服务器上")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin -tags\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("ul",[e("li",[s._v("普通的git push不会推送标签到服务器端，我门需要进行显示的操作 -- git push origin [tagname]。")]),s._v(" "),e("li",[s._v("–tags参数表示提交所有tag至服务器端。")])])]),s._v(" "),e("ul",[e("li",[s._v("3.4 查看tag")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解释：列出当前仓库的所有标签")]),s._v(" "),e("ul",[e("li",[s._v("3.5 切换tag"),e("br"),s._v(" "),e("strong",[s._v("切换标签与切换分支命令相同")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tagname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解释：切换标签后处于一个空的分支上，即\"You are in 'detached HEAD' state\"")]),s._v(" "),e("ul",[e("li",[s._v("3.6 列出符合模式的tag")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -l "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v1.0.*'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.7 查看tag版本信息")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show v0.1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.8 补打tag"),e("br"),s._v(" "),e("strong",[s._v("给指定的commit打标签")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v0.1.0 49e0cd22f6bd9510fe65084e023d9c4316b446a6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解释：打标签不必要在HEAD之上，也可在之前的版本上打，这需要你知道某个提交对象的校验和，通过git log命令获取。")]),s._v(" "),e("ul",[e("li",[s._v("3.9 删除tag"),e("br"),s._v(" "),e("strong",[s._v("误打或需要修改标签时，需要先将标签删除，再打新标签")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -d v0.1.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("3.10 删除远端服务器的tag")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin :refs/tags/v0.1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("解释：参数 "),e("code",[s._v("-d")]),s._v(" 即delete的缩写，意为删除其后指定的标签")]),s._v(" "),e("p",[s._v("注：Git中不能真的检出一个标签，因为他们并不能像分支一样来回移动。如果想要工作目录与仓库中特定地标签版本完全一致，可以使用"),e("font",{attrs:{color:"red"}},[s._v("git checkout -b [分支名] [标签名]")]),s._v("在特定地标签上创建一个新分支。例如：")],1),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b version1 v1.0.0\nSwitched to a new branch "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'version1'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"git-stash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-stash"}},[s._v("#")]),s._v(" git stash")]),s._v(" "),e("ul",[e("li",[s._v('git stash save "***": 执行存储时，添加备注，方便查找，只有git stash 也要可以的，但查找时不方便识别。')]),s._v(" "),e("li",[s._v("git stash list: 查看stash了哪些存储")]),s._v(" "),e("li",[s._v("git stash show: 显示做了哪些改动，默认show第一个存储，如果要显示其他存贮，后面加stash@{$num}，比如第二个 git stash show stash@{1}")]),s._v(" "),e("li",[s._v("git stash show -p: 显示第一个存储的改动，如果想显示其他存存储，命令：git stash show  stash@{$num}  -p ，比如第二个：git stash show  stash@{1}  -p")]),s._v(" "),e("li",[s._v("git stash apply: 应用某个存储,但不会把存储从存储列表中删除，默认使用第一个存储,即stash@{0}，如果要使用其他个，git stash apply stash@{$num} ， 比如第二个：git stash apply stash@{1}")]),s._v(" "),e("li",[s._v("git stash pop: 恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}")]),s._v(" "),e("li",[s._v("git stash drop stash@{$num}: 丢弃stash@{$num}存储，从列表中删除这个存储")]),s._v(" "),e("li",[s._v("git stash clear: 删除所有缓存的stash")])]),s._v(" "),e("p",[s._v("说明:"),e("font",{attrs:{color:"red"}},[s._v("新增的文件，直接执行stash是不会被存储的")])],1),s._v(" "),e("h2",{attrs:{id:"最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[s._v("#")]),s._v(" 最后")]),s._v(" "),e("p",[s._v("记住，在 Git 中任何 已提交 的东西几乎总是可以恢复的。 甚至那些被删除的分支中的提交或使用 --amend 选项覆盖的提交也可以恢复 （阅读 数据恢复 了解数据恢复）。 然而，任何你未提交的东西丢失后很可能再也找不到了。")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/weixin_38080573/article/details/89042794",target:"_blank",rel:"noopener noreferrer"}},[s._v("mac下配置多个ssh-key并添加到gitlab"),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);