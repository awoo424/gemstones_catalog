<template>
  <!-- Footer -->
  <div id="footer" class="d-flex flex-column">
    <footer class="footer">
      <!-- <div class="my-5 flex-center">
        <a class="gplus-ic">
          <i class="fas fa-envelope fa-lg white-text mr-md-5 mr-5"></i>
        </a>
        <a class="fb-ic">
          <i class="fab fa-facebook fa-lg white-text mr-md-5 mr-5"></i>
        </a>
        <a class="li-ic">
          <i class="fab fa-linkedin-in fa-lg white-text"></i>
        </a>
      </div>-->

      <div class="mt-5">
        <span>
          Handcrafted with 💖by
          <a
            href="https://awoo424.github.io/angel_website/"
            target="_blank"
          >Angel Woo</a> |&nbsp;
        </span>
        <a href="https://github.com/awoo424" target="_blank">@awoo424</a>
      </div>
      <div class="ml-auto mt-2 mb-4 pb-4">
        <span>Powered by&nbsp;</span>
        <a href="https://vuejs.org/" target="_blank">Vue.js</a>
        <span>&nbsp;and&nbsp;</span>
        <a href="https://firebase.google.com/" target="_blank">Firebase</a>
      </div>
    </footer>
  </div>

  <!-- Footer -->
</template>

<script>
export default {
  name: "FooterPage",
  components: {}
};
</script>


<style scoped>
#footer {
  background-color: #2c3e50;
}

#footer i,
#footer a {
  color: white;
}

#footer span {
  color: #a09e9e;
}

#footer a:hover {
  color: #beebe9;
  text-decoration: none;
}
</style>