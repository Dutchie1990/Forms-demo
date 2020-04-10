import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting-form';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  PostUserSettingsForm(userSettings: UserSettings) :Observable<any>{
    
    return this.http.post('https://putsreq.com/D9fjZPgD0nNz8usik4Gg',userSettings);
    
    //return of(userSettings);
  }

}
