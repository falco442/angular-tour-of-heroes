import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Hero} from "../hero";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/assets/heroes.json');
  }
}
