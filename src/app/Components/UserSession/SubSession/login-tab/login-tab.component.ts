import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.css']
})
export class LoginTabComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
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
    this.authService.SignIn(this.model.email.value, this.model.password.value).then((result) => {
      console.log("Result: ", result)
      this.router.navigate(['home'])
    }).catch((error) => {
      window.alert(error.message)
    })
  }

}
