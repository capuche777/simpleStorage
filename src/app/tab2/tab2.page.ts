import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: any;

  constructor( private storage: StorageService ) {}

  getName = async () => {
    this.storage.get('nombre').then(
        res => this.name = res
    );
  }

}
