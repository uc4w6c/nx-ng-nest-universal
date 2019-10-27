import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { OverlayModule } from '@servrox/animations-lib';

import { HttpClientModule }    from '@angular/common/http';
import { HelloApiService } from './hello-api.service';
import { HeroesComponent } from './heroes/heroes.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    OverlayModule,
    HttpClientModule,
    AppRoutingModule // これが入ると動かなくなる
  ],
  providers: [HelloApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
