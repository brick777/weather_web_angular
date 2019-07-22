import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements CanActivate {

    private baseUrl = 'http://localhost:8080/forecasts/management/authentication';

    constructor(private http: HttpClient, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
        return false;
    }

    login(username: string, password: string) {
        localStorage.setItem('currentUser', username);
        localStorage.setItem('currentPass', password);
        return this.http.post<any>(`${this.baseUrl}`, {username, password})
            .pipe(map(user => {
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentPass');
    }
}
