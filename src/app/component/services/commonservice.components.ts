import { Injectable } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import {Router} from '@angular/router'

@Injectable()
export class CommonService {

    Success	: boolean = false;

    constructor(private http: Http,private router: Router) {
        
    }

    BackendService(url,data){
		
        var headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http.post(url,data, {
			headers: headers
		})
		.map((res:Response) => res.json())
		.do(data => {
				console.log('CommonService')
			if(data.status=true){
				console.log('data')
				this.Success = true;
				this.router.navigate(['/expense-manager']);
			}else{
                console.log('not data');
				this.Success = false;
				this.router.navigate(['/login']);
			}
		})
		.subscribe(
			data => data,
			() => console.log('common service')
			);
    }
}