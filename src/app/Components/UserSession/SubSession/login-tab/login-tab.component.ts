import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.css']
})
export class LoginTabComponent implements OnInit {

  contactForm: FormGroup;

  constructor() {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void { 
    this.contactForm = this.createFormGroup();
  }

  get model() {
    return this.contactForm.controls;
  }
  get email() {
    return this.contactForm.get('email')
  }

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.onSignIn()
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onSignIn() {
    
  }

}
