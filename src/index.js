import { createApp } from 'vue/dist/vue.esm-bundler'
import axios from "axios";
import BookCard from "./components/BookCard";
import {ThemeProvider} from 'vue3-styled-components'


const app = createApp({
  components: {
    'theme-provider': ThemeProvider,
    BookCard
  },
  data() {
    return {
      errored: false,
      loading: true,
      data: null,
    };
  },
  mounted() {
    let currentlyReading = axios.get(
      process.env.API_URL_READING + "?key=" + process.env.API_KEY
    );
    let toRead = axios.get(
      process.env.API_URL_TOREAD + "?key=" + process.env.API_KEY
    );
    let read = axios.get(
      process.env.API_URL_READ + "?key=" + process.env.API_KEY
    );

    axios
      .all([currentlyReading, toRead, read])
      .then(
        axios.spread((...res) => {
          let array = [];
          res.map((item) => {
            item.data.items.map((book) => {
              //make sure book links are loaded via https
              book.volumeInfo.imageLinks.thumbnail =
                book.volumeInfo.imageLinks.thumbnail.replace(
                  /^http:\/\//i,
                  "https://"
                );

              // determing which class to pass in for read/reading/to read badge
              book.shelf = item.config.url.includes("3/volumes")
                ? "currently-reading"
                : item.config.url.includes("2/volumes")
                ? "to-read"
                : "read";
              return array.push(book);
            });
          });

          this.data = array;
        })
      )
      .catch((error) => {
        this.errored = true;
        console.warn(error);
      })
      .finally(() => (this.loading = false));
    }
})

app.mount('#app')
