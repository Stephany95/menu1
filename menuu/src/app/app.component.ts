import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string= '';
  numberOfPages:number;
  found:boolean = true;

  constructor (private httpClient: HttpClient){ }
    onNameKeyUp(event:any){
      this.name=event.target.value;
      this.found = false;
    } 
    getProfile(){
      this.httpClient.get('https://anapioficeandfire.com/api/books/1')
      .subscribe(
			(data:any[]) => {
			console.log(data);
		})
    }
}