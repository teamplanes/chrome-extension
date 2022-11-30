import Cookies from 'js-cookie';

const path = '/';

const set = (name: string, value: string) => {
    // if expires === undefined the cookie will delete on closing window
    Cookies.set(name, value, { expires: 365, path });
};
const get = (name: string) => {
    const allCookies = Cookies.get();
    console.log('allCookies', Object.keys(allCookies))
    if (allCookies[name]) return allCookies[name];
    return null;
};
const del = (name: string) => {
    Cookies.remove(name, { path });
};
const setItem = async (key: string, value: string | null) => {
    if (!value) {
        del(key);
        return;
    }
    set(key, value);
};

const getItem = async (key: string) => {
    return get(key);
};
export { getItem, setItem };
