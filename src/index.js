import Vue from "vue";
import axios from "axios";
import BookCard from "./components/BookCard";

new Vue({
  el: "#app",
  components: {
    BookCard,
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
      "https://cors-anywhere.herokuapp.com/" + process.env.API_URL_READING
    );
    let toRead = axios.get(
      "https://cors-anywhere.herokuapp.com/" + process.env.API_URL_TOREAD
    );
    let read = axios.get(
      "https://cors-anywhere.herokuapp.com/" + process.env.API_URL_READ
    );

    axios
      .all([currentlyReading, toRead, read])
      .then(
        axios.spread((...res) => {
          let array = [];
          res.map((item) => {
            item.data.items.map((book) => {
              //make sure book links are loaded via https
              book.volumeInfo.imageLinks.thumbnail = book.volumeInfo.imageLinks.thumbnail.replace(
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
  },
});
