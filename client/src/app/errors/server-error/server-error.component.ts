import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
error: any;
  // we can only access the state of router inside constructor not inside OnInit()
  constructor(private router : Router) 
  {
    const navigation = router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.error;
   }

  ngOnInit(): void {
  }

}
