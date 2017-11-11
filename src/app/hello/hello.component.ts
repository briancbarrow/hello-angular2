import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  isActive = false;
  email = "hi";
  constructor() { }

  onSave($event) {
    $event.stopPropagation();
    console.log("Saved!!", $event)
  }

  onKeyUp() {
    console.log(this.email);
  }

  ngOnInit() {
  }

}
