import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Match} from '../domain/match';
import {Filter} from '../domain/filters';

export class AllFiltersVO  {
    constructor(public appliedFilters: Filter[]) {}
}

@Injectable()
export class MatchService {

    constructor(private http: HttpClient) {}

    getMatches() {
        return this.http.get<any>('http://localhost:8081/MatchFilter/filters/allMatches')
            .toPromise()
            .then(res => <Match[]> res.matches)
            .then(data => data);
    }

    getFilteredMatches(listOfFilters: Filter[]) {
        const headers = { 'Content-Type': 'application/json' };
        const myJsonString =  JSON.stringify(new AllFiltersVO(listOfFilters));
        console.log(new AllFiltersVO(listOfFilters));
        console.log(myJsonString);
        return this.http.post<any>('http://localhost:8081/MatchFilter/filters/filteredMatches',
            myJsonString, { headers })
            .toPromise()
            .then(res => <Match[]> res.matches)
            .then(data => data);
    }
}
