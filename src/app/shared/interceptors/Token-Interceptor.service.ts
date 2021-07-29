import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { SharedService } from "../shared.service";


@Injectable()
export class LoginTokenInterceptor implements HttpInterceptor{
    
    constructor(private injector: Injector){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        let sharedService=this.injector.get(SharedService);

        let tokanizedreq=req.clone({
            setHeaders:{
                'Content-Type' : 'application/json; charset=utf-8',
                'Accept'       : 'application/json',
                'Authorization': `Brarer ${sharedService.getStorageService().getLocal().retrieve('token')}`
            }
        })
        return next.handle(tokanizedreq);
    }

}