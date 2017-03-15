import {ngModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddComponent } from './component';

@NgModule({
    imports: [BrowserModule],
    declrations: [AddComponent],
    bootstrap: [ AddComponent ]
})
export class AddModule {}