import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { tap} from 'rxjs';
import { ForwardRefHandling } from '@angular/compiler';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken = ('23456789999999999990');
      let modifiedrequest=request.clone({
          method:'',
          body:{product:'redmi note 11'},
         headers:new HttpHeaders({
          Authorization: `Bearer ${authToken}`,
         })
      })
      console.log('request interceptor');

    return next.handle(modifiedrequest).pipe(
     catchError((e:any)=>{
      if( e.status==0)
      console.log('invalid error')
      return throwError('modified error message')
     })
    )
  }
}

