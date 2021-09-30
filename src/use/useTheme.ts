import { ref, Ref, UnwrapRef } from 'vue';

interface IUseTheme {
  userTheme: Ref<UnwrapRef<string>>;
  onToggleTheme: (theme: string) => void;
  setTheme: (theme: string) => void;
  getMediaPreference: () => string;
  onResetTheme: () => void;
  onMountedThemeHook: () => void;
}

const lsKeyTheme = 'user-theme';

export const useTheme = (): IUseTheme => {
  const userTheme = ref<string>('');

  const setTheme = (theme: string): void => {
    localStorage.setItem(lsKeyTheme, theme);
    userTheme.value = theme;
    document.documentElement.className = theme;
  };

  const onToggleTheme = (theme: string): void => {
    const activeTheme = localStorage.getItem(lsKeyTheme);

    if (activeTheme === 'light-theme') {
      setTheme(theme);
    } else {
      setTheme(theme);
    }
  };

  const getMediaPreference = (): string => {
    const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (hasDarkPreference && localStorage.getItem(lsKeyTheme) !== 'light-theme') {
      return 'dark-theme';
    }
    return 'light-theme';
  };

  const onResetTheme = (): void => {
    localStorage.removeItem(lsKeyTheme);
    setTheme(getMediaPreference());
  };

  const onMountedThemeHook = (): void => {
    const initUserTheme = getMediaPreference();
    setTheme(initUserTheme);
  };

  return {
    userTheme,
    setTheme,
    onToggleTheme,
    getMediaPreference,
    onResetTheme,
    onMountedThemeHook,
  };
};
