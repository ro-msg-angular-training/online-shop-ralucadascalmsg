import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../credentials';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient,
        private route: ActivatedRoute,
        private router: Router,) { }
    user!: User;
    error = '';
    
    login(credentials: Credentials): Observable<User>
    {
        return this.http.post<User>(`${environment.apiUrl}/login`, credentials).pipe(
            map((res: User) => this.user = res));
       
    }

    getcurrentUser(): User {
          return this.user;
    }
}