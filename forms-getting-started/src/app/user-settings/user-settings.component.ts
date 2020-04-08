import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting-form';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  originalUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = {...this.originalUserSettings};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    console.log('in onsubmit ', form.valid);
  }

  onBlur(field : NgModel){
    console.log('in blur: ', field.valid)

  }

}
