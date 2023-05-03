import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsApiUrl = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f615340b7ab94d648f3db1636ae5911d";

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.newsApiUrl).subscribe(
      response => {
        console.log("RESPONSE");
        console.log(response);
      }
    );
  }


  ngOnInit(): void {

  }

}
