import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private backend: BackendApiService,
    private route: Router
  ) { }
  loading = true;
  dataApi:any = [];
  userName:string = ''
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.backend.dataApi().subscribe((resp:any) => {
      this.dataApi = resp.data.content.top
      this.userName = resp.data.user.name
    })
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['login'])
  }
}
