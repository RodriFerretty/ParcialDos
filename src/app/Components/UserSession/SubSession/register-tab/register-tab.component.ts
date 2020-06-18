import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-tab',
  templateUrl: './register-tab.component.html',
  styleUrls: ['./register-tab.component.css']
})
export class RegisterTabComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { 
    this.registerForm = this.createFormGroup();
  }

  ngOnInit(): void { }

  onSubmit() {
    this.onRegister()
  }

  get model() {
    return this.registerForm.controls;
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  
  onRegister() {
    this.authService.SignUp(this.model.email.value, this.model.password.value, this.model.username.value).then((result) => {
      this.router.navigate(['login'])
    }).catch((error) => {
      window.alert(error.message)
    })
  }

}