import { StorageEnum } from "#/enum";

export const getItem = <T>(key: StorageEnum): T | null => {
  let value = null;

  try {
    const result = JSON.parse(window.localStorage.getItem(key));
    if (result) {
      value = JSON.parse(result);
    }
  } catch (error) {
    console.log(error);
  }
  return value;
};

export const setItem = <T>(key: StorageEnum, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: StorageEnum): void => {
  localStorage.removeItem(key);
};
export const clearItem = (): void => {
  localStorage.clear();
};

export const getStringItem = (key: StorageEnum): string | null => {
  return localStorage.getItem(key);
};
