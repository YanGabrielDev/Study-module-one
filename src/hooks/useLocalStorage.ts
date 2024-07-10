export const useLocalStorage = (key: string) => {

    const setLocalStorageItem = (value: any) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            window.console.log(error);
        }
    }

    const removeLocalStorageItem = (key: string) => {
        try {
            window.localStorage.removeItem(key)
        } catch (error) {
            window.console.log(error);
        }
    }

    const getLocalStorageItem = () => {
        try {
            const item = window.localStorage.getItem(key);

            if (item === null) return undefined;

            return JSON.parse(item);
        } catch (error) {
            window.console.log(error);

            return undefined;
        }
    }

    return { setLocalStorageItem, removeLocalStorageItem, getLocalStorageItem }
}