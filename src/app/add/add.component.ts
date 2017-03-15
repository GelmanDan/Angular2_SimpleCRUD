import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    
    newArtical(newtitle: HTMLInputElement, newbody: HTMLInputElement,newdate: HTMLInputElement){
        console.log(newtitle.value);
        return false;    
    }
    
    constructor() { }

  ngOnInit() {
  }

}
