import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { expValidator } from '../custom/expvalidator';
@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  oboardingForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.oboardingForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      age: new FormControl('', [Validators.required, Validators.min(23), Validators.max(45)]),
      pan: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      exp: new FormControl('', [Validators.required, expValidator]),
      emailid: new FormControl('', [Validators.required, Validators.email]),
      address: this.fb.group({
        addressLine1: new FormControl('', [Validators.required]),
        addressLine2: new FormControl('', []),
        city: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required])
      }),
      pastExp: this.fb.array([
        this.buildForm()
      ])
    });
  }

  buildForm() {
    return this.fb.group({
      employerName: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    })
  }

  addEmployer() {
    const pastExp = this.oboardingForm.controls['pastExp'] as FormArray;
    pastExp.push(this.buildForm());
  }

  removeEmployer(i: number) {
    const pastExp = this.oboardingForm.controls['pastExp'] as FormArray;
    pastExp.removeAt(i);
  }

  addEmployee() {
    console.log(this.oboardingForm.value);
    this.oboardingForm.reset();
  }

}
