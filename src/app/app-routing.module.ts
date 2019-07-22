import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForecastViewComponent} from './forecast-view/forecast-view.component';
import {ForecastManagementComponent} from './forecast-management/forecast-management.component';
import {ForecastLoginComponent} from './forecast-login/forecast-login.component';
import {AuthenticationService} from './services/authentication.service';

const routes: Routes = [
    {
        path: '',
        component: ForecastViewComponent
    },
    {
        path: 'admin',
        component: ForecastManagementComponent,
        canActivate: [AuthenticationService]
    },
    {
        path: 'login',
        component: ForecastLoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
