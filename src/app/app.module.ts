import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NzMenuBaseService } from 'ng-zorro-antd/core';
import en from '@angular/common/locales/en';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzStepsModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, NzMenuBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
