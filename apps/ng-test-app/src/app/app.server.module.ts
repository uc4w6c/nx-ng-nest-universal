import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    // 追加してみる → 変わらなかった
    // BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
