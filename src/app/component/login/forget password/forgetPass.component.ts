import { Component } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Component({
  templateUrl: './forgetPass.component.html',
  styleUrls: ['./forgetPass.component.scss']
})
export class forgetPassCompoent {
 constructor(private http: Http,private router: Router) {

	}

  forgetEmail ;
  forgetEmailData :any;
  forgetSuccess	: boolean = false;
  timer: any;

  forgetPass() {
  	console.log(this.forgetEmail)
  		this.forgetEmailData = {
  			email :this.forgetEmail
  		}
  		var headers = new Headers({ 'Content-Type': 'application/json' });
		
		return this.http.post('http://localhost:8080/forgetpass',this.forgetEmailData, {
			headers: headers
		})
		.map((res:Response) => res.json())
		.do(data => {
				console.log('sdsdsadas')
			if(data.status=true){
				console.log('data')
				this.forgetSuccess = true;
			  clearTimeout(this.timer);
			    this.timer = setTimeout(() => {
			        this.forgetSuccess = false;
			    }, 3000);
			}else{
				console.log('not data')
				this.router.navigate(['/forget-password']);
			}
		})
		.subscribe(
			data => data,
			() => console.log('forget password Complete')
			);
  }
}
