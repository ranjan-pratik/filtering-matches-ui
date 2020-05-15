import {Component, OnInit} from '@angular/core';
import {Match} from './domain/match';
import {AgeFilter, CompatibilityFilter, HasImageFilter, HeightFilter, IsFavouriteFilter, IsInContactFilter, DistanceInKmFilter} from './domain/filters';
import {MatchService} from './services/matchservice';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HasImageStrategy, IsFavouriteStrategy, IsInContactStrategy, NumberBetweenBoundsStrategy} from './domain/strategies';

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

        this.matchCols = [
            { field: 'display_name', header: 'Name' },
            { field: 'age', header: 'Age' },
            { field: 'height_in_cm', header: 'Height' }
        ];
    }
    handleApplyFilters() {
        const allFilters = [];
        let buff = '[';
        if (this.hasImageValue) {
            const hasImageStrategy = new HasImageStrategy(
                'HasImageStrategy', 'StringStrategy', this.hasImageValue);
            allFilters.push(new HasImageFilter('photo', hasImageStrategy));
            buff = buff.concat('{ hasImageValue:', this.hasImageValue, ' },');
        }
        if (this.isInContactValue) {
            const isInContactStrategy = new IsInContactStrategy(
                'IsInContactStrategy', 'NumericStrategy', this.isInContactValue);
            allFilters.push(new IsInContactFilter('contact', isInContactStrategy));
            buff = buff.concat('{ isInContactValue:', this.isInContactValue, ' },');
        }
        if (this.isFavouriteValue) {
            const isFavouriteStrategy = new IsFavouriteStrategy(
                'IsFavouriteStrategy', 'BooleanStrategy', this.isFavouriteValue);
            allFilters.push(new IsFavouriteFilter('favourite', isFavouriteStrategy));
            buff = buff.concat('{ isFavouriteValue:', this.isFavouriteValue, ' },');
        }
        if (this.compatibilityCheckValue) {
            const compatibilityBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                'NumberBetweenBoundsStrategy', 'NumericStrategy', this.compatibilityRangeValues[0], this.compatibilityRangeValues[1]);
            allFilters.push(new CompatibilityFilter('compatibility', compatibilityBetweenBoundsStrategy));
            buff = buff.concat('{ compatibilityCheckValue:', this.compatibilityCheckValue, ' },');
        }
        if (this.ageCheckValue) {
            const ageBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                'NumberBetweenBoundsStrategy', 'NumericStrategy', this.ageRangeValues[0], this.ageRangeValues[1]);
            allFilters.push(new AgeFilter('height', ageBetweenBoundsStrategy));
            buff = buff.concat('{ ageCheckValue:', this.ageCheckValue, ' },');
        }
        if (this.heightCheckValue) {
            const heightBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                'NumberBetweenBoundsStrategy', 'NumericStrategy', this.heightRangeValues[0], this.heightRangeValues[1]);
            allFilters.push(new HeightFilter('height', heightBetweenBoundsStrategy));
            buff = buff.concat('{ heightCheckValue:', this.heightCheckValue, ' },');
        }
        if (this.distanceCheckValue) {
            const distanceBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                'NumberBetweenBoundsStrategy', 'NumericStrategy', this.distRangeValue, 300);
            allFilters.push(new DistanceInKmFilter('height', distanceBetweenBoundsStrategy));
            buff = buff.concat('{ distanceCheckValue:', this.distanceCheckValue, ' },');
        }
        // alert(buff);
        this.matches = this.matchService.getFilteredMatches(allFilters);
    }
}
