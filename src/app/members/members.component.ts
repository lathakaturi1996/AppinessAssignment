import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  allMembers: any[];
  totalUsers: any[];
  constructor(private memberService: MemberService,
    private router: Router) { }

  ngOnInit() {
    this.allMembers = [];
    this.getListOfUsers();
  }

  // Used to get the all the users from the user service.
  getListOfUsers() {
    this.memberService.getAllUsers().subscribe((res) => {
      if (res) {
        this.allMembers = res;
        this.totalUsers = res;
      }
    })
  }


  goToMemberRepo(memberName) {
    localStorage.setItem('memberName', memberName);
    this.router.navigateByUrl('/repo');
  }


  search(term) {
    if (term == '') {
      this.allMembers = this.totalUsers
    } else {
      this.allMembers = this.totalUsers.filter((res) => {
        if (res.login.toLowerCase().includes(term)) {
          return res;
        }
      })
    }
  }

}
