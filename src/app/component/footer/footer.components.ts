import { Component } from '@angular/core';


@Component({
  selector:'footer',
  templateUrl:'./footer.components.html',
  styleUrls : ['./footer.components.scss']
})

export class Footer {
  date = new Date();
}