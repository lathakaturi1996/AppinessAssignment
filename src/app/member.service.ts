import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get(url);
  }

  getAllRepos(name): Observable<any> {
    const url = `${environment.apiUrl}/users/${name}/repos`;
    return this.http.get(url);
  }
}