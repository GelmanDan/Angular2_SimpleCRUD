import { Component, OnInit, SecurityContext, Pipe } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from './http.services';
import { Artical } from './artical';

import { DomSanitizer,SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
    
    title = 'app works!';
    articals: Artical;
    
     constructor(private httpService: HttpService, private sanitizer: DomSanitizer){}
    
    
    
    ngOnInit(){
        this.httpService.getData().subscribe((data: Response) => this.articals = data.json());  
        console.log("data.json succeseful download");
    }
    
    
}
