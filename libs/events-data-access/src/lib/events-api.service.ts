import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Event} from "../../../../apps/events-server/api/src/app/events/event.entity";
import {Observable} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class EventsApiService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllEvents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:3333/api/events');
  }
}
