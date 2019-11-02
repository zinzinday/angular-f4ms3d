import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  banking = [
    {id: 1, name: 'HSBC'},
    {id: 2, name: 'City Bank'}
  ];

  onDelete(item: { id: number, name: string }) {
    console.log(item);
  }
}
