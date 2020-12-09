import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  numbers = [1,2,3,4,5,6];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit(): void {
  }

}
