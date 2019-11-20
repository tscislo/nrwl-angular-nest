import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllEvents() {
    return this.httpClient.get('http://localhost:3333/api/events');
  }
}
