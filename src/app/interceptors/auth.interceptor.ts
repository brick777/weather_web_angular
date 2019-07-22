import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = localStorage.getItem('currentUser');
        const currentPass = localStorage.getItem('currentPass');
        const authdata = window.btoa(currentUser + ':' + currentPass);
        if (currentUser && currentPass && authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${authdata}`
                }
            });
        }

        return next.handle(request);
    }
}
