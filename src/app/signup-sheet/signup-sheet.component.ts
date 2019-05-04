import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {SubmissionInputFields} from './submission-input-fields.enum';
import {CustomErrorService} from '../custom-error.service';


@Component({
  selector: 'app-signup-sheet',
  templateUrl: './signup-sheet.component.html',
  styleUrls: ['./signup-sheet.component.scss']
})
export class SignupSheetComponent implements OnInit {
  options: FormGroup;
  constructor(private fb: FormBuilder, private cs: CustomErrorService) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  signUpForm: FormGroup;
  private firstNameMsg = '';
  private lastNameMsg = '';
  private emailMsg = '';
  private validationMsg = {
    required: 'Name is required',
    minlength: 'Name Must be at least 3 characters.'
  };
  private emailValidationMessages = {
    required: 'Email Address is required',
    email: 'Please enter a valid email address.'
  };


  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
    const firstNameControl = this.signUpForm.get(SubmissionInputFields.firstName);
    firstNameControl.valueChanges.pipe(debounceTime(1000)).
    subscribe(() => this.setOrClearMessage(firstNameControl, SubmissionInputFields.firstName));

    const lastNameControl = this.signUpForm.get(SubmissionInputFields.lastName);
    lastNameControl.valueChanges.pipe(debounceTime(1000)).
    subscribe(() => this.setOrClearMessage(lastNameControl, SubmissionInputFields.lastName));

    const emailControl = this.signUpForm.get(SubmissionInputFields.email);
    emailControl.valueChanges.pipe(debounceTime(1000)).
    subscribe(() => this.setOrClearMessage(emailControl, SubmissionInputFields.email));
  }

  save() {
    console.log(this.signUpForm);
    console.log('Saved: ' + JSON.stringify(this.signUpForm.value));
  }


  /*
  Set message is used as a call back function in ngOnInit.
   */
  setOrClearMessage(c: AbstractControl, fieldName: SubmissionInputFields) {
    if ((c.touched || c.dirty) && c.errors) {
     this.setMessage(c, fieldName);
    } else {
      this.clearMessage(fieldName);
    }
  }

 private setMessage(c: AbstractControl, fieldName: SubmissionInputFields) {
    switch (fieldName) {
      case(SubmissionInputFields.firstName): {
        this.firstNameMsg = '';
        console.log('ERROR: ' + Object.keys(c.errors));
        this.firstNameMsg = Object.keys(c.errors).map(
          key => this.firstNameMsg += this.validationMsg[key]).join(' ');
        break;
      }
      case(SubmissionInputFields.lastName): {
        this.lastNameMsg = '';
        this.lastNameMsg = Object.keys(c.errors).map(
          key => this.lastNameMsg += this.validationMsg[key]).join(' ');
        break;
      }
      case(SubmissionInputFields.email): {
        this.emailMsg = '';
        this.emailMsg = Object.keys(c.errors).map(
          key => this.emailMsg += this.emailValidationMessages[key]).join(' ');
        break;
      }
      default: {
        this.firstNameMsg = '';
        this.lastNameMsg = '';
        this.emailMsg = '';
      }
    }
  }

  private clearMessage(fieldName: SubmissionInputFields) {
    switch (fieldName) {
      case(SubmissionInputFields.firstName): {
        this.firstNameMsg = '';
        break;
      }
      case(SubmissionInputFields.lastName): {
        this.lastNameMsg = '';
        break;
      }
      case(SubmissionInputFields.email): {
        this.emailMsg = '';
        break;
      }
      default: {
        this.firstNameMsg = '';
        this.lastNameMsg = '';
        this.emailMsg = '';
      }
    }
  }


}
