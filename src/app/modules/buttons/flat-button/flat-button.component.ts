import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-button',
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent implements OnInit {

  showSocialMediaButtons: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
