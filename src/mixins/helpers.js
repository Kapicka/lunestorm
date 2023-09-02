import { theme,emitter } from "@/store.js";

const helpers = {
  data() {
    return {
      theme: theme
    };
  },
  methods: {
    isTheme(inputTheme) {
      return inputTheme === theme.value;
    },
    setTheme(inputTheme) {
      theme.value = inputTheme;
      document.querySelector('body').className = theme.value
    },
    getTheme() {
      return theme.value;
    },
    getEmitter() {
      return emitter;
    },
    getPage(){
      return this.$route.path.includes("ecumene") ? "ecumene" : "electro";
    },
    getUrl(endpoint){
      return `/${this.getPage()}/${endpoint}`

    }
  }
};
export default helpers;
