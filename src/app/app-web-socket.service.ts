import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class AppWebSocketService {
  public readonly webSocketSubject = webSocket('http://localhost:5001');
}
