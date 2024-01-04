import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private loginService: LoginService) { }

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
          console.log('Login successful:', response);
        }, error => {
          console.error('Login failed:', error);
        });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
