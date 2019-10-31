import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptorService } from './interceptors/universal-interceptor.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    // 追加してみる → 変わらなかった
    // BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  bootstrap: [AppComponent],
  /*
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptorService,
      multi: true
    },
  ]
  */
})
export class AppServerModule {}
