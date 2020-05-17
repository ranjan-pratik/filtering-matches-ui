import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Filter} from './domain/filters';
import {FilterComponent} from './filter.component';
import {MatchService} from './services/matchservice';
import {Match} from './domain/match';

const  mockMatches: Match[] = [
    {
        match_id: 'Some Id', display_name: 'Some Name',
        age: 21,
        height_in_cm: 178,
        job_title: 'some job',
        religion: 'some religion',
        main_photo: 'some photo uri',
        compatibility_score: .12,
        contacts_exchanged: 1,
        favourite: true
    },
    {
        match_id: 'Some other Id',  display_name: 'Some other Name',
        age: 29,
        height_in_cm: 178,
        job_title: 'some other job',
        religion: 'some other religion',
        main_photo: 'some other photo uri',
        compatibility_score: .22,
        contacts_exchanged: 1,
        favourite: false
    }
];
const mockFilters = [
    {
        'strategy': {
            'lowerBound': 43,
            'upperBound': 95,
            'name': 'NumberBetweenBoundsStrategy',
            'type': 'numberBetweenBounds'
        },
        'type': 'age'
    },
    {
        'strategy': {
            'lowerBound': 148,
            'upperBound': 210,
            'name': 'NumberBetweenBoundsStrategy',
            'type': 'numberBetweenBounds'
        },
        'type': 'height'
    }
];

class MockMatchService {
    getMatches() {
        return mockMatches;
    }
    getFilteredMatches(array: Filter[]) {
        return Promise.resolve(mockMatches);
    }
}

describe('FilterComponent', () => {
    let httpTestingController: HttpTestingController;
    let service: MockMatchService;
    let component: FilterComponent;
    let spy: any;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [MatchService, FilterComponent],
            imports: [HttpClientTestingModule],
            declarations: [FilterComponent]
        }).compileComponents();
        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(MatchService);
        component = TestBed.get(FilterComponent);
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(FilterComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'Matches'`, async(() => {
        const fixture = TestBed.createComponent(FilterComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Matches');
        expect(app.matches).toEqual(undefined);
        expect(app.matchCols).toEqual(undefined);
        expect(app.hasImageValue).toEqual(undefined);
        expect(app.isInContactValue).toEqual(undefined);
        expect(app.isFavouriteValue).toEqual(undefined);
        expect(app.ageRangeValues).toEqual([18, 95]);
        expect(app.ageCheckValue).toEqual(undefined);
        expect(app.heightRangeValues).toEqual([135, 210]);
        expect(app.heightCheckValue).toEqual(undefined);
        expect(app.compatibilityRangeValues).toEqual([1, 99]);
        expect(app.compatibilityCheckValue).toEqual(undefined);
        expect(app.distRangeValue).toEqual(30);
        expect(app.distanceCheckValue).toEqual(undefined);
    }));

    it('should convert not null percent value to decimal', async(() => {
        const fixture = TestBed.createComponent(FilterComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.safeConvertNumberToDecimalFraction(20)).toEqual(.20);
        expect(app.safeConvertNumberToDecimalFraction(100)).toEqual(1);
        expect(app.safeConvertNumberToDecimalFraction(0)).toEqual(0);
        expect(app.safeConvertNumberToDecimalFraction(73)).toEqual(.73);
        expect(app.safeConvertNumberToDecimalFraction(20.48)).toEqual(.2048);
        expect(app.safeConvertNumberToDecimalFraction(null)).toEqual(0);
    }));
    it('should clear all set filter values', async(() => {
        const fixture = TestBed.createComponent(FilterComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(component.matches).toEqual(undefined);
        spyOn(service, 'getFilteredMatches').and.returnValue(Promise.resolve(mockMatches));
        component.hasImageValue = 'some value';
        component.distanceCheckValue = true;
        component.handleClearFilters(null);
        fixture.detectChanges();
        expect(component.hasImageValue).toEqual(null);
        expect(component.distanceCheckValue).toEqual(false);
        expect(component.matches).toEqual(undefined);
    }));

    it('should send filters', async(() => {
        const fixture = TestBed.createComponent(FilterComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.handleApplyFilters(null));
    }));
});
