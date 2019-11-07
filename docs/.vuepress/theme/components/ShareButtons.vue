<template>
  <div class="share-buttons">
    <div class="item item--label">Share:</div>
    <div class="item">
      <a
        data-network="twitter"
        @click="share('twitter')"
        title="Tagion Twitter Feed"
        target="_blank"
        class="social-buttons__button"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          class="svg-inline--fa fa-twitter fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          />
        </svg>
      </a>
      <a
        data-network="facebook"
        @click="share('facebook')"
        title="Tagion Facebook Page"
        target="_blank"
        class="social-buttons__button"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          class="svg-inline--fa fa-facebook-f fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </a>

      <a
        data-network="linkedin"
        @click="share('linkedin')"
        title="Tagion LinkedIn Page"
        target="_blank"
        class="social-buttons__button"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          class="svg-inline--fa fa-linkedin-in fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          />
        </svg>
      </a>
      <a
        data-network="telegram"
        @click="share('telegram')"
        title="Tagion Telegram Channel"
        target="_blank"
        class="social-buttons__button"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="telegram-plane"
          class="svg-inline--fa fa-telegram-plane fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
          />
        </svg>
      </a>
      <a
        data-network="reddit"
        @click="share('reddit')"
        title="Tagion Subreddit"
        target="_blank"
        class="social-buttons__button"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="reddit-alien"
          class="svg-inline--fa fa-reddit-alien fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    share(network) {
      if (!network) return;

      let networkAnalytics = capitalize(network);

      let shareLink = "";
      let thisLink = encodeURI(`${window.location}`);

      let title = window.document.title;

      title = title.replace("| Tagion", "").trim();

      if (network === "twitter") {
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURI(
          `${title} from @tagionTeam`
        )}&url=${thisLink}`;
      } else if (network === "facebook") {
        shareLink = `https://www.facebook.com/dialog/share?app_id=457870521510062&display=popup&href=${thisLink}`;
      } else if (network === "linkedin") {
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${thisLink}&title=${encodeURI(
          title
        )}&source=LinkedIn`;
      } else if (network === "telegram") {
        shareLink = `https://telegram.me/share/url?url=${thisLink}&text=${encodeURI(
          title
        )}`;
      } else if (network === "reddit") {
        shareLink = `http://www.reddit.com/submit?url=${thisLink}&title=${title}`;
      }

      window.open(shareLink);

      this.$analytics.triggerEvent({
        category: "Share",
        action: "ShareButtonClick_" + networkAnalytics
      });
    }
  }
};

function capitalize(s) {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}
</script>