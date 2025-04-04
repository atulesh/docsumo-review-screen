export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

const THEME_KEY = 'theme'

export const getInitialTheme = () => {
  return (localStorage.getItem(THEME_KEY) as Theme | null) ?? Theme.DARK
}

export const applyTheme = (theme: Theme) => {
  const root = window.document.documentElement
  root.classList.remove(Theme.DARK, Theme.LIGHT)
  root.classList.add(theme)
  localStorage.setItem(THEME_KEY, theme)
}
