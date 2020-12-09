import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  submitHandler(formValue) {
    console.log(formValue);

    this.itemService.createOffer(formValue)
    .then(res => {console.log(res); return res.json})
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
    
  }

  // getAll() {
  //   this.itemService.getAllOffers()
  //   .subscribe(res => {
  //     console.log(res)
  //   });
    
    
  // }

}
