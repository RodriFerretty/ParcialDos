import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-tab',
  templateUrl: './register-tab.component.html',
  styleUrls: ['./register-tab.component.css']
})
export class RegisterTabComponent implements OnInit {
  registerForm: FormGroup;

  constructor() { 
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
   
  }

}