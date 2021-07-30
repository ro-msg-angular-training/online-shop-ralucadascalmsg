import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Credentials } from '../credentials';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreModule } from '@ngrx/store';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  user1!: Observable<User>;
  userForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)});
  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router, ) { }

  ngOnInit(): void {
  }

  logIN(): void{
    const credential: Credentials={username: this.onSubmit().get('username')?.value,
                                 password: this.onSubmit().get('password')?.value};
    this.user1= this.authService.login(credential);    
    //store.dispatch(this.authService.login(credential));                           
  }

  onSubmit():FormGroup{
    return this.userForm;
   }
}
