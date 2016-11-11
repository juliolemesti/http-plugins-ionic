import { NgModule } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { HttpModule, HttpPluginsToken } from '@ramonornela/http';
import { LoadingIonicPlugin } from './loading-ionic';
import { NoConnectionPlugin } from './no-connection';

@NgModule({
  imports: [
    HttpModule.initialize(true)
  ],
  providers: [
    { provide: HttpPluginsToken, useClass: LoadingIonicPlugin, deps: [ LoadingController ], multi: true },
    { provide: HttpPluginsToken, useClass: NoConnectionPlugin, multi: true }
  ]
})
export class HttpPluginsIonicModule {
}
