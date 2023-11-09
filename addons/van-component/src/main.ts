import van from 'vanjs-core';
import { createComponent } from './createComponent';

const { h1 } = van.tags;

const App = createComponent(({ name }: { name: string }) => {
  return h1('Hello ', name);
});

van.add(document.body, App({ name: 'world' }));
