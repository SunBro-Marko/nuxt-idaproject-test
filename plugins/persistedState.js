import createPersistedState from "vuex-persistedstate";
import * as Cookies from "js-cookie";
import cookie from "cookie";

export default ({ store, req }) => {
  createPersistedState({
    key: "yourkey",
    paths: ["basket"],
    storage: {
      getItem: key => {
        return Cookies.get(key);
      },
      // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 365, secure: false }),
      removeItem: key => Cookies.remove(key)
    }
  })(store);
};
