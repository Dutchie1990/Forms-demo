import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting-form';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'Daniel',
    emailOffers: true,
    interfaceStyle: 'light',
    subscriptionType: 'Annual',
    notes: 'Some notes'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
