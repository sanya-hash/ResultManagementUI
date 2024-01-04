import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      conPassword: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: [false, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user = {
        username: this.registrationForm.get('username').value,
        email: this.registrationForm.get('email').value,
        password: this.registrationForm.get('password').value,
        confirmPassword: this.registrationForm.get('conPassword').value,
        role: this.registrationForm.get('role').value
      };

      this.registerService.registerUser(user)
        .subscribe(response => {
          window.alert("Registration successful!");
          console.log('Registration successful');
        }, error => {
          console.error('Registration failed');
        });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
}

}