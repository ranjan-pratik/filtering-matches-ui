import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Match} from '../domain/match';
import {Filter} from '../domain/filters';

import { environment } from '../../environments/environment';

export class AllFiltersVO  {
    constructor(public appliedFilters: Filter[]) {}
}

@Injectable()
export class MatchService {
    baseUrlRoot = environment.baseUrlRoot;
    baseUrlAllMatches = this.baseUrlRoot + '/filters/allMatches';
    baseUrlFilteredMatches = this.baseUrlRoot + '/filters/filteredMatches';

    constructor(private http: HttpClient) {}

    getMatches() {
        return this.http.get<any>(this.baseUrlAllMatches)
            .toPromise()
            .then(res => <Match[]> res.matches)
            .then(data => data);
    }

    getFilteredMatches(listOfFilters: Filter[]) {
        const headers = { 'Content-Type': 'application/json' };
        const myJsonString =  JSON.stringify(new AllFiltersVO(listOfFilters));
        console.log(new AllFiltersVO(listOfFilters));
        console.log(myJsonString);
        return this.http.post<any>(this.baseUrlFilteredMatches,
            myJsonString, { headers })
            .toPromise()
            .then(res => <Match[]> res.matches)
            .then(data => data);
    }
}
