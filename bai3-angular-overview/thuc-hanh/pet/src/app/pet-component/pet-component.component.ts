import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet-component',
  templateUrl: './pet-component.component.html',
  styleUrls: ['./pet-component.component.css']
})
export class PetComponentComponent implements OnInit {
  petName = 'puppie';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';

  constructor() {
  }

  updateName(name): void {
    this.petName = name;
  }

  updateImage(image): void {
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}
