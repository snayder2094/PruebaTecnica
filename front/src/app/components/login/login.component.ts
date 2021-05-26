import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendApiService } from '../../services/backend-api.service';
import { NbToastrService, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin:string = 'slide-up';
  isSignin:string = '';
  formlogin: FormGroup;
  formSignin: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private backend: BackendApiService,
    private toastrService: NbToastrService
  ) {

    this.formSignin = formbuilder.group({
      Username: [null, Validators.required],
      Password: [null, Validators.required],
      Type: [null, Validators.required]
    })

    this.formlogin = formbuilder.group({
      Username: [null, Validators.required],
      Password: [null, Validators.required]
    })

  }

  ngOnInit(): void {

  }

  signUp(valid){
    const input = this.formSignin.value;
    if(valid){
      const User = {
        Username: input.Username,
        Password: input.Password,
        Type: input.Type
      }

      this.backend.signUp(User).subscribe((resp:any) => {
        this.showToast('User create','success', 'top-right', 3000);
        this.formSignin.reset();
        this.isSignin = 'slide-up';
        this.isLogin = '';
      }, error => {
        console.log(error)
        this.showToast('The user has not been created','danger', 'top-right', 3000);
      })
    }
  }

  login(valid) {
    const input = this.formlogin.value;
    if(valid){
      const login = {
        Username: input.Username,
        Password: input.Password
      }
      this.backend.login(login).subscribe((resp:any) => {
        let type = resp.data.type
        console.log(resp.data);

        localStorage.setItem("userData", JSON.stringify(resp.data))
        if(type == 1){
          this.router.navigate(['home-admin'])
        }
        if(type == 2) {
          this.router.navigate(['home'])
        }

        this.showToast('Welcome','success', 'top-right', 3000);


      }, error => {
        this.showToast('user or password is incorrect','danger', 'top-left', 3000);
      })
    }else {
      this.showToast('user or password is incorrect','danger', 'top-left', 3000);
    }
  }

  showToast(message:string, status: NbComponentStatus, position:any, duration:number) {

    this.toastrService.show(status, message, { status , position, duration });
  }


}
