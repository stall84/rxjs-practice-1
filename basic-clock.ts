import { map, timer, of } from 'rxjs';

export function prependOutput() {
  const output = document.createElement('output');
  output.innerHTML = `<div style="background-color: green;"><h3>HALLPP !!!</h3></div>`;
  document.body.prepend(output);

  const testObs = of(392734949, 321696399, 392435782);
  testObs.subscribe({
    next: (input) => console.log('curr_input_val ', input),
    error: (err) => console.log('there was an error: ', err),
    complete: () => console.log(' FUK YA '),
  });
}

export function bacicClock() {
  const output = document.createElement('output');
  document.body.prepend(output);
  timer(0, 1000).pipe(map(() => new Date().toLocaleTimeString()));
}
