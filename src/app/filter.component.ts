import {Component, OnInit} from '@angular/core';
import {Match} from './domain/match';
import {AgeFilter, CompatibilityFilter, HasImageFilter, HeightFilter, IsFavouriteFilter, IsInContactFilter, DistanceInKmFilter} from './domain/filters';
import {MatchService} from './services/matchservice';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {StringIsNotNullStrategy, PositiveNumberStrategy, IsTrueStrategy, NumberBetweenBoundsStrategy} from './domain/strategies';

export class FilteredMatch implements Match {
    constructor(public display_name?, public age?, public favourite?, public height_in_cm?, public job_title?, public religion?) {}
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

    hasImageValue: any;
    isInContactValue: any;
    isFavouriteValue: any;
    ageRangeValues: number[] = [18, 95];
    ageCheckValue: any;
    heightRangeValues: number[] = [135, 210];
    heightCheckValue: any;
    compatibilityRangeValues: number[] = [1, 99];
    compatibilityCheckValue: any;
    distRangeValue = 30;
    distanceCheckValue: any;

    constructor(private matchService: MatchService) { }

    ngOnInit() {

        this.matchService.getMatches().then(matches => this.matches = matches);
        console.log(this.matches);

        this.matchCols = [
            { field: 'display_name', header: 'Name' },
            { field: 'age', header: 'Age' },
            { field: 'height_in_cm', header: 'Height' }
        ];
    }
    handleApplyFilters() {
        this.matches = [];
        const allFilters = [];
        let buff = '[';
        if (this.hasImageValue) {
            const hasImageStrategy = new StringIsNotNullStrategy(
                 this.hasImageValue);
            allFilters.push(new HasImageFilter(hasImageStrategy));
            buff = buff.concat('{ hasImageValue:', this.hasImageValue, ' },');
        }
        if (this.hasImageValue != null && !this.hasImageValue) {
            alert ('not case');
            const hasImageStrategy = new StringIsNotNullStrategy(
                this.hasImageValue);
            // allFilters.push(new HasImageFilter(hasImageStrategy));
            buff = buff.concat('{ hasImageValue:', this.hasImageValue, ' },');
        }
        if (this.isInContactValue) {
            const isInContactStrategy = new PositiveNumberStrategy(
                 this.isInContactValue);
            allFilters.push(new IsInContactFilter( isInContactStrategy));
            buff = buff.concat('{ isInContactValue:', this.isInContactValue, ' },');
        }
        if (this.isInContactValue != null && !this.isInContactValue) {
            alert ('not case');
            const isInContactStrategy = new PositiveNumberStrategy(
                this.isInContactValue);
            //allFilters.push(new IsInContactFilter( isInContactStrategy));
            buff = buff.concat('{ isInContactValue:', this.isInContactValue, ' },');
        }
        if (this.isFavouriteValue) {
            const isFavouriteStrategy = new IsTrueStrategy(
                 this.isFavouriteValue);
            allFilters.push(new IsFavouriteFilter( isFavouriteStrategy));
            buff = buff.concat('{ isFavouriteValue:', this.isFavouriteValue, ' },');
        }
        if (this.isFavouriteValue != null && !this.isFavouriteValue) {
            alert ('not case');
            const isFavouriteStrategy = new IsTrueStrategy(
                this.isFavouriteValue);
            //allFilters.push(new IsFavouriteFilter( isFavouriteStrategy));
            buff = buff.concat('{ isFavouriteValue:', this.isFavouriteValue, ' },');
        }
        if (this.compatibilityCheckValue) {
            const compatibilityBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                 this.compatibilityRangeValues[0], this.compatibilityRangeValues[1]);
            allFilters.push(new CompatibilityFilter(compatibilityBetweenBoundsStrategy));
            buff = buff.concat('{ compatibilityCheckValue:', this.compatibilityCheckValue, ' },');
        }
        if (this.ageCheckValue) {
            const ageBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                this.ageRangeValues[0], this.ageRangeValues[1]);
            allFilters.push(new AgeFilter(ageBetweenBoundsStrategy));
            buff = buff.concat('{ ageCheckValue:', this.ageCheckValue, ' },');
        }
        if (this.heightCheckValue) {
            const heightBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                 this.heightRangeValues[0], this.heightRangeValues[1]);
            allFilters.push(new HeightFilter(heightBetweenBoundsStrategy));
            buff = buff.concat('{ heightCheckValue:', this.heightCheckValue, ' },');
        }
        if (this.distanceCheckValue) {
            const distanceBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                this.distRangeValue, 300);
            allFilters.push(new DistanceInKmFilter(distanceBetweenBoundsStrategy));
            buff = buff.concat('{ distanceCheckValue:', this.distanceCheckValue, ' },');
        }
        // alert(buff);
        this.matchService.getFilteredMatches(allFilters).then(matches => this.matches = matches);
        console.log('return values :' + this.matches);
       //  this.matches = results.slice();

    }
    handleClearFilters() {
        this.hasImageValue = null;
        this.isInContactValue = null;
        this.isFavouriteValue = null;
        this.ageRangeValues = [18, 95];
        this.ageCheckValue = false;
        this.heightRangeValues = [135, 210];
        this.heightCheckValue = false;
        this.compatibilityRangeValues = [1, 99];
        this.compatibilityCheckValue = false;
        this.distRangeValue = 30;
        this.distanceCheckValue = false;
        this.matchService.getFilteredMatches([]).then(matches => this.matches = matches);
    }
}
