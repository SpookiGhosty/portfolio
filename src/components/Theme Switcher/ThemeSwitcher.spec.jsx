import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import renderer from 'react-test-renderer';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import fs from 'fs';
import path from 'path';

function loadCss(container, filePath) {
  const cssFileContent = fs.readFileSync(path.resolve(filePath), 'utf8');
  const style = document.createElement('style');
  style.innerHTML = cssFileContent;
  container.append(style);
}

function setDarkModePreference(isDarkMode) {
  vi.spyOn(window, 'matchMedia').mockImplementation(() => {
    return { matches: isDarkMode };
  });
}

beforeEach(() => {
  const originalConsoleError = console.error;
  vi.spyOn(console, 'error').mockImplementation((message) => {
    if (message.includes('Creating roots directly with document.body is discouraged')) {
      return;
    }
    originalConsoleError(message);
  });
});

afterEach(() => {
  // Restore the original console.error function after all tests
  vi.restoreAllMocks();
});

describe('Check properties', () => {
  test('Props are being validated', async () => {
    // Arrange
    let actual;
    const expected = 'Invalid prop `darkClassName` of type `number` supplied to `ThemeSwitcher`, expected `string`.';
    const spy = vi.spyOn(console, 'error').mockImplementation((_, __, message) => {
      actual = message;
    });

    // -- set the dark mode preference to true
    setDarkModePreference(true);

    // Act
    render(<ThemeSwitcher darkClassName={1} />);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
    expect(actual).toBe(expected);
  });
  test('Props have default value', async () => {
    // Arrange
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    // -- set the dark mode preference to true
    setDarkModePreference(true);

    // Act
    const component = renderer.create(<ThemeSwitcher />);
    const testInstance = component.root;

    // Assert
    expect(spy).toHaveBeenCalledTimes(0);
    expect(testInstance.props.darkClassName).toBe('dark');
  });
});

describe('Check structure', () => {
  test('Prop darkClassName works', async () => {
    // Arrange
    // -- set the dark mode preference to true
    setDarkModePreference(true);

    // Act
    render(<ThemeSwitcher darkClassName={'foo'} />, {
      container: document.body,
    });

    // Assert
    expect(document.body.classList.contains('foo')).toBe(true);
  });
});

describe('Check behavior', () => {
  test('ThemeSwitcher toggles dark-mode class', () => {
    // Arrange
    // -- set the dark mode preference to false
    setDarkModePreference(false);

    const { getByTestId } = render(<ThemeSwitcher />, {
      container: document.body,
    });
    const themeSwitcherButton = getByTestId('themeSwitcherButton');
    const beforeClick = document.body.classList.contains('dark');
    // Act
    fireEvent.click(themeSwitcherButton);
    const afterClick = document.body.classList.contains('dark');

    // Assert
    expect(beforeClick).toBe(false);
    expect(afterClick).toBe(true);
  });
  describe('ThemeSwitcher favors user preference', () => {
    test('ThemeSwitcher favors light preference', () => {
      // Arrange
      // -- set the dark mode preference to false
      setDarkModePreference(false);

      render(<ThemeSwitcher />, {
        container: document.body,
      });
      const whenLightModeOne = document.body.classList.contains('dark');

      expect(whenLightModeOne).toBe(false);
    });
    test('ThemeSwitcher favors dark preference', () => {

      setDarkModePreference(true);

      render(<ThemeSwitcher />, {
        container: document.body,
      });
      const whenDarkModeOne = document.body.classList.contains('dark');

      // Assert
      expect(whenDarkModeOne).toBe(true);
    });
  });
});

describe('Check style', () => {
  test('ThemeSwitcher has correct style', () => {

    setDarkModePreference(false);

    const { container, getByTestId } = render(<ThemeSwitcher />, {
      container: document.body,
    });

    loadCss(container, './src/index.css');
    loadCss(container, './src/components/ThemeSwitcher/ThemeSwitcher.css');

    const themeSwitcherButton = getByTestId('themeSwitcherButton');
    const lightStyles = window.getComputedStyle(themeSwitcherButton);
    const { color: lightTextColor, backgroundColor: lightBackgroundColor } = lightStyles;
    fireEvent.click(themeSwitcherButton);
    const darkStyles = window.getComputedStyle(themeSwitcherButton);
    const { color: darkTextColor, backgroundColor: darkBackgroundColor } = darkStyles;

    expect(lightBackgroundColor).toBe('ButtonFace');
    expect(lightTextColor).toBe('ButtonText');
    expect(darkBackgroundColor).toBe('ButtonFace');
    expect(darkTextColor).toBe('ButtonText');
  });
});
