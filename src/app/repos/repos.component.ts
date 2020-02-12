import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  userName: string;
  listOfRepo: any[];
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.userName = localStorage.getItem('memberName');
    this.listOfRepo = [];
    this.loadRepos();
  }

  loadRepos() {
    this.memberService.getAllRepos(this.userName).subscribe((res) => {
      if (res) {
        console.log(res, 'dddd');
        this.listOfRepo = res;
      }
    })
  }

}
