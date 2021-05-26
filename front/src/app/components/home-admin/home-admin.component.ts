import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {

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
    this.backend.dataApiAdmin().subscribe((resp:any) => {
      this.dataApi = resp.data.content.top
      this.userName = resp.data.user.name
    })
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['login'])
  }
}
