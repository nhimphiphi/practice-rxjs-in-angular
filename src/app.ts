import {Component} from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/withLatestFrom';
import { Subject } from "rxjs/Subject";
import { Store } from "@ngrx/store";
import { SECOND, HOUR, ADVANCE, RECALL } from './reducer/reducer';
import { Clock } from './clock/clock';


@Component({
    selector: 'app',
    directives: [Clock],
    templateUrl: 'src/app.html'
})

export class App {
    public time;
    public people;

    click$ = new Subject()
        .map((value)=> ({type: HOUR, payload: value}));
    
    person$ = new Subject()
        .map((value) => ({
            type: ADVANCE, payload: value
        }))

    recall$ = new Subject();

    seconds$ = Observable
        .interval(1000)
        .mapTo({type: SECOND, payload: 1});

    constructor(private store: Store<any>) {
        this.time = store.select('clock');
        this.people = store.select('people');


        Observable.merge(
            this.click$,
            this.seconds$,
            this.person$,
            this.recall$
                .withLatestFrom(this.time, (_, y)=> y)
                .map((time)=> ({type: RECALL, payload: time}))
            )
            .subscribe(store.dispatch.bind(store))
    }
}