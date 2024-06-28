import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { map } from "rxjs/operators";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url == 'https://admin.tirgo.io/api/users/uploadImage') {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${AuthenticationService.jwt}`,
        },
      });
    }
    else {
      req = req.clone({
        setHeaders: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json; charset=utf-8',
          'Authorization': `Bearer ${AuthenticationService.jwt}`,
        },
      });
    }
   
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }));
  }
}
