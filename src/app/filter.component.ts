import {Component, Injectable, OnInit} from '@angular/core';
import { Match } from './domain/match';
import { MatchService } from './services/matchservice';
import {animate, state, style, transition, trigger} from '@angular/animations';

export class FilteredMatch implements Match {
    constructor(public display_name?, public age?, public favourite?, public height_in_cm?, public job_title?, public religion?) {}
}

@Component({
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
})
export class FilterInputComponent {

}

@Component({
    selector: 'app-root',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    providers: [MatchService],
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class FilterComponent implements OnInit {

    displayDialog: boolean;

    match: Match = new FilteredMatch();

    selectedMatch: Match;

    newMatch: boolean;

    matches: Match[];

    matchCols: any[];

    ageRangeValues: number[] = [0, 100];
    heightRangeValues: number[] = [120, 200];
    compatibilityRangeValues: number[] = [0, 1];

    constructor(private matchService: MatchService) { }

    ngOnInit() {

        this.matchService.getMatches().then(matches => this.matches = matches);

        this.matchCols = [
            { field: 'display_name', header: 'Name' },
            { field: 'age', header: 'Age' },
            { field: 'height_in_cm', header: 'Height' }
        ];
    }
}
