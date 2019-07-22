import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-forecast-login',
    templateUrl: './forecast-login.component.html',
    styleUrls: ['./forecast-login.component.css'],
})

export class ForecastLoginComponent implements OnInit {
    loginForm: FormGroup;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['admin'],
            password: ['admin']
        });

        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/admin';
    }

    get credencials() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.authenticationService.login(this.credencials.username.value, this.credencials.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = 'Can\'t login.';
                });
    }

}
