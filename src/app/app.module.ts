import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ForecastManagementComponent} from './forecast-management/forecast-management.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ForecastViewComponent} from './forecast-view/forecast-view.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForecastLoginComponent} from './forecast-login/forecast-login.component';
import {BasicAuthInterceptor} from './interceptors/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        ForecastManagementComponent,
        ForecastViewComponent,
        ForecastLoginComponent
    ],
    imports: [
        BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true}],
    bootstrap: [AppComponent]
})

export class AppModule {
}
