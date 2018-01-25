import { Component } from '@angular/core';
import { Http, Response ,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

import { CommonService } from '../services/commonservice.components'


@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers : [CommonService]
})

export class loginComponent {


	RegisterView: boolean = false;
	loginData : any;
	username	 ;	
	password ;
	email ;
	mobile ;
	regSuccess: boolean = false;
	errMsg: boolean = false;
	timer: any;
	registerData : any ;

	constructor(private http: Http,private router: Router,private CommonService : CommonService) {

	}

	toggleMenu() {
		this.RegisterView = !this.RegisterView;
	}

	/*Login user*/

	login(){

		this.loginData = {
			email : this.email ,
			password : this.password 
		}

		this.CommonService.BackendService('http://localhost:8080/login',this.loginData)
		console.log(this.CommonService.Success);
		

		if(this.CommonService.Success){
			this.router.navigate(['/expense-manager']);
		}else{
			this.router.navigate(['/login']);
		}
	}


	/*Register user*/
	register() {
		this.registerData = {
			username : this.username ,
			password : this.password ,
			email : this.email,
			mobile : this.mobile
		}

		console.log(this.registerData);

		var headers = new Headers({ 'Content-Type': 'application/json' });
		
		return this.http.post('http://localhost:8080/register',this.registerData, {
			headers: headers
		})
		.map((res:Response) => res.json())
		.do(data => {
			if(data.data){
				this.regSuccess = true;
			  clearTimeout(this.timer);
			    this.timer = setTimeout(() => {
			        this.regSuccess = false;
			    }, 3000);
			}else{
				this.router.navigate(['/register']);
			}
		})
		.subscribe(
			data => data,
			() => console.log('Register Complete')
			);
	}
}
