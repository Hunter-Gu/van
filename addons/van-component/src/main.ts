import van from 'vanjs-core';
import * as vanX from 'vanjs-ext';
import { createComponent } from './createComponent';
import { createContext } from './context';

const { div, button } = van.tags;

const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

const ThemedComponent = createComponent(({ name }: { name: string }) => {
  const theme = ThemeContext.consume();

  return div(
    'Hello ',
    name,
    button(
      {
        onclick: theme.toggleTheme,
      },
      'Toggle Theme - ',
      () => theme.theme
    )
  );
});

const App = createComponent(
  () => {
    const dynamicTheme = vanX.reactive({
      theme: 'light',
      toggleTheme: () =>
        (dynamicTheme.theme = dynamicTheme.theme === 'dark' ? 'light' : 'dark'),
    });

    return div(
      ThemeContext.Provider(
        {
          value: {
            theme: 'dark',
            toggleTheme: () => {},
          },
        },
        () => ThemedComponent({ name: 'World' })
      ),
      ThemeContext.Provider({ value: dynamicTheme }, () =>
        ThemedComponent({ name: 'Universe' })
      )
    );
  },
  { name: 'App' }
);

van.add(document.body, App());
