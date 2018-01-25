import { Component ,OnInit,NgModule } from '@angular/core'
import { Http, Response ,Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
	selector : 'TodoList',
	templateUrl : './expense.component.html',
	styleUrls :['./expense.component.scss']
})

export class addexpenseComponent implements OnInit{


	TodoList : any;
	todos = [];
	TodoListNone = false;
	TodoName;
	name;
	ExpenseData : any;
	expenseName;
	expenseDescr;
	expenseAmount;
	 public data;
	Success: boolean = false;
	timer : any;

	constructor(private http: Http,private router: Router) {}
	
	 ngOnInit(): void {
       
    }

	addTodo(todoname) {
		this.TodoList = {
	        name: this.TodoName,
	        completed: false
	   	}

		if(this.TodoName == undefined || this.TodoName == ''){
					console.log('you not added any todolist');
		}else{
				this.TodoListNone = true;
				this.todos.push(this.TodoList)
				console.log(this.todos);
			}	
	}

	DeleteTodo(index){

		this.todos.splice(index,1)

		if(this.todos.length == 0) {
			this.TodoListNone = false;
		}
	}

	EditTodo(index) {
		console.log('editTodo',index)
		this.TodoName = this.todos[index].name;
	}


	/*Add Expense in database*/
	addExpense(){

		this.ExpenseData = {
			expenseName : this.expenseName,
			expenseDescr : this.expenseDescr,
			expenseAmount : this.expenseAmount
		}

		console.log('ExpenseData',this.ExpenseData)

		var headers = new Headers({ 'Content-Type': 'application/json' });
		
		this.http.post('http://localhost:8080/addexpense',this.ExpenseData, {
			headers: headers
		})
		.map((res:Response) => res.json())
		.do(data => {
			console.log(data.status)
			if(data.status){
				// this.router.navigate(['/expense-list']);
				this.Success=true;
				clearTimeout(this.timer);
			    this.timer = setTimeout(() => {
			        this.Success = false;
			    }, 3000);
			}else{
				this.Success = false;
			}
		})
		.subscribe(
			data => data,
			() => console.log('Authentication Complete')
			);
	}

}