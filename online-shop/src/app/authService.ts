import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from './credentials';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,) { }
    user1!: User;
    error = '';
    
    login(credentials: Credentials): Observable<User>
    {
        this.http.post<User>('http://localhost:3000/login',credentials)
        .subscribe(user => {
                  this.user1=user;
                  this.router.navigate(['/list-of-products']);
                  },
            error => {
                this.error = error;
            });
      return this.http.post<User>('http://localhost:3000/login',credentials);
    }

    getcurrentUser(): User {
          return this.user1;
    }
}