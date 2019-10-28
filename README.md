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



色々参考
・ここいいかも
https://github.com/kamilmysliwiec/universal-nest
