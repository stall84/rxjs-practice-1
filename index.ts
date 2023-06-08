import './style.css';

import { prependOutput } from './basic-clock';

import { of, map, fromEvent } from 'rxjs';

prependOutput();
console.log(new Date().toLocaleTimeString());
of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

// Open the console in the bottom right to see results.

const newObs = fromEvent(document, 'click');

newObs.subscribe((e) => console.log(e));
