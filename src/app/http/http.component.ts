import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const URL_API='https://jsonplaceholder.typicode.com/posts/';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(URL_API).subscribe(
      (datas) => console.log(datas),
      (error) => console.log(error)
    );
  }
  addPost(){
    let newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    const headers = new HttpHeaders().set('Autorization', 'Douaa')
    this.http.post(URL_API, newPost, {headers}).subscribe(
      (response) => console.log (response)
    )
  }

}
