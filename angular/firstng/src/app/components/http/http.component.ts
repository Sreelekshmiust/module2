import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpClientModule
} from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit{

  private url:string = "https://jsonplaceholder.typicode.com/todos";
  private data:any;
  //every http request in angular is asynchronous - xhr - ajax call
  //cause - it cause page navigation
  //basically every http request on web is synchronous whereas, in angular every http request is asynchronous

  constructor( private http:HttpClient){

  }
  ngOnInit(): void {
    console.log("oninit method...");

    this.http.get(this.url)
      .subscribe((resData)=>{
        this.data=resData;
        console.log(this.data);
      });
    //throw new Error('Method not implemented.');
  }

}
