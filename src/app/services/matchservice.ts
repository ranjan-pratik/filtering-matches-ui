import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Match} from '../domain/match';
import {Filter} from '../domain/filters';

@Injectable()
export class MatchService {

    constructor(private http: HttpClient) {}

    filteredMatches: Match[];

    getMatches() {
        return this.http.get<any>('assets/data/matches.json')
            .toPromise()
            .then(res => <Match[]> res.matches)
            .then(data => data);
    }

    getFilteredMatches(listOfFilters: Filter[]) {
        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        const myJsonString = JSON.stringify(listOfFilters);
        console.log(listOfFilters);
        console.log(myJsonString);
        alert(myJsonString);
        this.http.post<any>('assets/data/matches.json',
            myJsonString, { headers })
            .subscribe(data =>  this.filteredMatches = data.matches,
                error => console.error('There was an error!', error)
            );
        return this.filteredMatches;
    }
}
