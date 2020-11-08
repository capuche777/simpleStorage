import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  nameForm = new FormGroup({
    name: new FormControl()
  });

  constructor( private storage: StorageService ) {}

  save = () => {
    this.storage.set('nombre', this.nameForm.value.name).then(
        res => console.log(res)
    );
  }
}
