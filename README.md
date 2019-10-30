AngularとNest.jsを利用したSSR/BFFのテスト用プロジェクト
https://github.com/servrox/nx-ng-nest-universalをcloneした。

npm run serve


・clientのcomponent作成
nx-ng-nest-universal/apps/ng-test-app/src/appで、
ng generate component heroes --module=app.module.ts


進捗メモ
・2019/10/28
app.module.tsからRouterModuleを削除することでRoutingが動いた
が、サーバ・クライアントそれぞれでレンダリングしているようにみえる

・2019/10/30
SSR側の処理を待たずに次に進む理由がここにありそう
でもエラーになったから無理だった。。。
https://www.reddit.com/r/angular/comments/aep5dz/angular_universal_server_side_rendering_with_http/

npm install @gorniv/ngx-transfer-http --save
npm install @gorniv/ngx-universal --save
をやってみた。transfer-httpは間違えた。違いはわからん。。。


色々参考
・ここいいかも
https://github.com/kamilmysliwiec/universal-nest
