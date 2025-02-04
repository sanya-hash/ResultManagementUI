import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService,private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['false', Validators.required]  
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const authRequest = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
        role: this.loginForm.get('role').value
      };

      this.loginService.login(authRequest)
        .subscribe(response => {
 this.toastr.success('Login successful');
 localStorage.setItem('token','dgjzfj')
 localStorage.setItem('role',response.role);
 localStorage.setItem('name',response.username);
 if(response.role=='teacher'){
          this.router.navigate(['/teacher/dashboard']);

 }else if(response.role=='student'){
            this.router.navigate(['/student/dashboard']);

 }
                   
        }, error => {
          console.error('Login failed:', error);
          this.toastr.error('Invalid login credentials');
        });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
