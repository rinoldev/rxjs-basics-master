import { Observable, of } from 'rxjs';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
of('Hello', 'RxJS').subscribe(console.log);

const obs = new Observable(subscriber =>{
    subscriber.next('Hello');
});

const observer = {
    next: val => console.log(val),
    error: err => console.error(),
    complete: () => console.log(complete)
}
obs.subscribe(observer);