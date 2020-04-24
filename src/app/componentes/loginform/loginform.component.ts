import { Component, OnInit } from '@angular/core';
import { MockForm } from 'src/assets/mock-data';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = MockForm;
  title = 'dynamic-forms';
}
