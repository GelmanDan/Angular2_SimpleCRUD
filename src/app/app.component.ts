import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.service';
import { Artical } from './artical';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
    
    title = 'app works!';
    artical: Artical;
    
    constructor(privagette httpService: HttpService){}
    
    ngOnInit(){
        this.httpService.getData().subscribe((artical: Response) => this.artical = artical.json);    
    }
    
    
}
