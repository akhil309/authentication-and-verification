import { Component, OnInit } from '@angular/core';
import { UserService} from './../../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  returnUrl: string;
  error = '';

  constructor(private userService: UserService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  token : string;
  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/login';
  }

  verifyEmail(){
    this.token= this.activatedRoute.snapshot.queryParamMap.get('token');
    this.userService.verifyEmail(this.token).subscribe({
      next: () => {
        this.router.navigate([this.returnUrl]);
    },
    error: error => {
        this.error = error;
    }

      })
  }
}
