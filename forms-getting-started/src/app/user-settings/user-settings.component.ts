import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting-form';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';

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
  postError = false;
  postErrorMessage = '';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any) {
    console.log('error ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.name;
    console.log(this.postErrorMessage);
  };


  onSubmit(form : NgForm){
    console.log('in onsubmit ', form.valid);
    
    if (form.valid){
    this.dataService.PostUserSettingsForm(this.userSettings)
    .subscribe(result => console.log('succes: ',result),
                error => this.onHttpError(error)                
    );}
    else{
      this.postError = true;
      this.postErrorMessage = "Please fix above errors"
    }
  }
  onBlur(field : NgModel){
    console.log('in blur: ', field.valid)   
  };

}
