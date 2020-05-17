import {Component, OnInit} from '@angular/core';
import {Match, City} from './domain/match';
import {AgeFilter, CompatibilityFilter, HasImageFilter, HeightFilter, IsFavouriteFilter, IsInContactFilter, DistanceRangeInKmFilter} from './domain/filters';
import {MatchService} from './services/matchservice';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
    StringIsNotNullStrategy,
    PositiveNumberStrategy,
    IsTrueOrFalseStrategy,
    NumberBetweenBoundsStrategy,
    NumberEqualToStrategy,
    DistanceWithinRangeStrategy
} from './domain/strategies';

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
    title = 'Matches';
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
            { field: 'age', header: 'Age (years)' },
            { field: 'height_in_cm', header: 'Height (cm)' },
            { field: 'compatibility_score', header: 'Compatibility (%)' },
            { field: 'favourite', header: 'Is Favourite' },
            { field: 'city', subfield: 'name', header: 'City' }
        ];
    }
    handleApplyFilters() {
        this.matches = [];
        const allFilters = [];
        if (this.hasImageValue) {
            const hasImageStrategy = new StringIsNotNullStrategy();
            allFilters.push(new HasImageFilter(hasImageStrategy));
        }
        if (this.hasImageValue != null && !this.hasImageValue) {
            const hasImageStrategy = new StringIsNotNullStrategy();
            const hasImageFilter = new HasImageFilter(hasImageStrategy);
            alert('does not have image not implemented.');
            // allFilters.push(new NotFilter(hasImageFilter));
        }
        if (this.isInContactValue) {
            const isInContactStrategy = new PositiveNumberStrategy();
            allFilters.push(new IsInContactFilter( isInContactStrategy));
        }
        if (this.isInContactValue != null && !this.isInContactValue) {
            const isNotContactStrategy = new NumberEqualToStrategy(0);
            allFilters.push( new IsInContactFilter(isNotContactStrategy));
        }
        if (this.isFavouriteValue) {
            const isFavouriteStrategy = new IsTrueOrFalseStrategy(
                 this.isFavouriteValue);
            allFilters.push(new IsFavouriteFilter( isFavouriteStrategy));
        }
        if (this.isFavouriteValue != null && !this.isFavouriteValue) {
            const isNotFavouriteStrategy = new IsTrueOrFalseStrategy(
                this.isFavouriteValue);
            allFilters.push(new IsFavouriteFilter(isNotFavouriteStrategy));
        }
        if (this.compatibilityCheckValue) {
            const compatibilityBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                this.safeConvertNumberToDecimalFraction(this.compatibilityRangeValues[0]),
                this.safeConvertNumberToDecimalFraction(this.compatibilityRangeValues[1]));
            allFilters.push(new CompatibilityFilter(compatibilityBetweenBoundsStrategy));
        }
        if (this.ageCheckValue) {
            const ageBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                this.ageRangeValues[0], this.ageRangeValues[1]);
            allFilters.push(new AgeFilter(ageBetweenBoundsStrategy));
        }
        if (this.heightCheckValue) {
            const heightBetweenBoundsStrategy = new NumberBetweenBoundsStrategy(
                 this.heightRangeValues[0], this.heightRangeValues[1]);
            allFilters.push(new HeightFilter(heightBetweenBoundsStrategy));
        }
        if (this.distanceCheckValue) {
            const distanceBetweenBoundsStrategy = new DistanceWithinRangeStrategy(53.801277, -1.548567, 30,
                this.distRangeValue);
            allFilters.push(new DistanceRangeInKmFilter(distanceBetweenBoundsStrategy));
        }
        this.matchService.getFilteredMatches(allFilters).then(matches => this.matches = matches);
        console.log('return values :' + this.matches);
       //  this.matches = results.slice();

    }
    safeConvertNumberToDecimalFraction(value: number) {
        if (value != null) {
            const decimal = value / 100;
            return decimal;
        }
        return 0;
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
