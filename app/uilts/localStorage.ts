const ACCESS_TOKEN = "accessToken";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setLocalStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    const storage = window.localStorage;
    if (!storage) {
      return;
    }
    switch (typeof value) {
      case `string`: {
        try {
          const stringifiedValue = JSON.stringify(value);
          storage.setItem(key, stringifiedValue);
        } catch (e) {
          // eslint-disable-next-line no-console
          console.error(`failed to stringify`);
        }
        break;
      }
      default:
        storage.setItem(key, value);
    }
  }
};

// eslint-disable-next-line consistent-return
export const getLocalStorage = (key: string, defaultValue = null) => {
  if (typeof window !== "undefined") {
    const storage = window.localStorage;
    if (!storage) {
      return null;
    }
    return storage.getItem(key) ?? defaultValue;
  }
};

export const removeLocalStorageItem = (key: string) => {
  if (typeof window !== "undefined") {
    const storage = window.localStorage;
    if (!storage) {
      return;
    }
    storage.removeItem(key);
  }
};

export const setAccessToken = (token: string) => {
  setLocalStorage(ACCESS_TOKEN, token);
  setLocalStorage(ACCESS_TOKEN, token);
};

export const getAccessToken = () => getLocalStorage(ACCESS_TOKEN);

export const removeAccessToken = () => {
  removeLocalStorageItem(ACCESS_TOKEN);
};
