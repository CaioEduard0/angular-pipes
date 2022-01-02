import { SettingsService } from './settings.service';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeExamplesComponent } from './pipe-examples/pipe-examples.component';
import { CamelCasePipe } from './camel-case.pipe';
import '@angular/common/locales/global/pt';
import { ArrayFilterPipe } from './array-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ImpureArrayFilterPipe } from './impure-array-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeExamplesComponent,
    CamelCasePipe,
    ArrayFilterPipe,
    ImpureArrayFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // { 
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'
    // }
    SettingsService, {
      provide: LOCALE_ID,
      deps: [ SettingsService ],
      useFactory: (settingsService: { getLocale: () => any; }) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
