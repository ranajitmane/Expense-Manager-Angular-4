import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http'


import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { loginComponent} from './component/login/login.component';
import { addexpenseComponent} from './component/addexpense/expense.component';
import { forgetPassCompoent} from './component/login/forget password/forgetPass.component';
import { Footer } from './component/footer/footer.components';
import { expenseListComponent } from './component/listexpense/listexpense.components';


@NgModule({ 
  declarations: [
    AppComponent,HomeComponent,Footer,loginComponent,addexpenseComponent,forgetPassCompoent,expenseListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,
    RouterModule.forRoot([
      { path:'home',component:HomeComponent},
      { path:'login',component:loginComponent},
      { path:'expense-manager',component:addexpenseComponent},
      { path:'expense-list',component:expenseListComponent},
      { path:'forget-password',component:forgetPassCompoent },
      { path:'**',component:loginComponent }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
