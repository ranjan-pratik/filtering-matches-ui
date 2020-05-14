import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../domain/match';

@Injectable()
export class MatchService {

    constructor(private http: HttpClient) {}

    getMatches() {
        return this.http.get<any>('assets/data/matches.json')
            .toPromise()
            .then(res => <Match[]> res.matches)
            .then(data => data);
    }
}
