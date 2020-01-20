# ブログテンプレート＆knowledgeサイト
<a href="https://aso-takahiro.github.io/cms/">フロントURL</a>

## 概要
* SPAでブログサイトを実装することができる、CMS.jsを使用する。
* 今後CMS.jsを使用したサイトを量産したいので、テンプレートの制作ついでにknowledgeを書き連ねた学習サイト的な立ち位置の内容を記載したい。

### 仕様
* CMS.js
* Github
* Bootstrap
* StackEdit
  
ブランチ：gh-pages

### 初期構造
```
root
　┣━ css/
　┃　　┗━ **.css
　┣━ js/
　┃　　┗━ **.js
　┣━ layouts/
　┃　　┗━ **.html
　┣━ pages/
　┃　　┗━ **.md
　┣━ posts/
　┃　　┗━ **.md
　┣━ .gitignore
　┣━ README.md
　┗━ index.html
```

## 投稿手順
~~### 使用ツール~~  
~~<a href="https://stackedit.io/">StackEdit</a>  
┗ md形式のファイルを簡単にアップすることができる。~~

~~1. リンク先のページがStackEdit~~  
~~2. 最上部にある「START WRITING」をクリック~~  
~~3. エディターが開く＆テンプレートソースが入っている~~  
~~4. いい感じに記入する~~  
~~5. 【公開手順】~~  
~~6. 右サイドにある「PUBLISH」から該当するアカウントを選択する~~  

~~【PUBLISH】~~  
~~- Blogger~~  
~~- Dropbox~~  
~~- GitHub~~  
~~- GitLab~~  
~~- Google Drive~~  
~~- WordPress~~  
~~- Zendesk~~  

~~7. フォームの内容を埋める~~  

~~| 項目 | 設定内容 |~~  
~~---|:---|~~  
~~epository URL |https://github.com/<自分のGitHubアカウント~~  
~~<repository名> |~~  
~~ile path|記事は「posts」フォルダ内に格納します。被らない任意の ~~  ~~ァイル名でOK|~~  
~~ranch|GitHub pages を公開するBranchにする |~~  
~~emplate |Markdown形式のまま投稿するため「Plain text」|~~  

~~8. OK~~

~~* 画像の件はGooleフォトなので別の方法を考えたい~~

コミットメッセージなどが滅茶苦茶になるため、StackEditは一旦使用しない。

### デザインについて
今回は初期状態からBootstrapが使える「Bootstrap Starter」というテーマを元に作成している。  
テーマはこちら -> <a href="https://chrisdiana.dev/cms.js-themes/">Free CMS.js Themes</a>  
簡易的なブログサイトを作るだけなので、当面の間はテーマを変更する予定はない。多少カスタマイズはすると思う。