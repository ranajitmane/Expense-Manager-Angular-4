import { Component ,OnInit,NgModule } from '@angular/core'
import { Http, Response ,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
	selector : 'ExpenseList',
	templateUrl : './listexpense.components.html',
	styleUrls :['./listexpense.components.scss']
})

export class expenseListComponent implements OnInit{

	expenseList : any;
	interval;
	data;
	display='none';
	expenseName;
	expenseDescr;
	expenseAmount;
	modalData : any;
	selectedRow = 0 ;

	constructor(private http: Http,private router: Router) {

	}

	ngOnInit() {
		this.expenseListData();
// this.interval = setInterval(() => { 
	// this.expenseListData();	
// }, 5000);

}

DeleteTodo(index){
	this.expenseList.splice(index,1)
}

openModal(index){
	this.selectedRow = index+1;
	this.display='block'; 
	console.log(this.expenseList[index])
	this.modalData = this.expenseList[index];
	console.log(this.modalData.expenseName)
	this.expenseName=this.modalData.expenseName;
	this.expenseDescr=this.modalData.expenseDescr;
	this.expenseAmount=this.modalData.expenseAmount;
}

onCloseHandled(){
	this.display='none'; 
}

expenseListData() {
	var headers = new Headers({ 'Content-Type': 'application/json' });

	this.http.get('http://localhost:8080/listexpense', {
		headers: headers
	})
	.map((res:Response) => res.json())
	.do(data => {
		
		if(data.status){
		}else{
		}
	})
	.subscribe(
		data => this.expenseList=data.data,
		() => console.log('Authentication Complete')
		);
}

}