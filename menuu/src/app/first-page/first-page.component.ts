import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  name:string= '';
  numberOfPages:number;
  found:boolean;

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
        }
	)
    }

    ngOnInit() {
    }
}