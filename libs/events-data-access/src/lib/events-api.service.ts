import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Rx";
import {IEvent} from "@angular-events/interfaces";

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllEvents(): Observable<IEvent[]> {
    return this.httpClient.get<IEvent[]>('http://localhost:3333/api/events');
  }
}
