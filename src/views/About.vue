<template>
  <div class="about">
    <b-jumbotron>
      <div class="py-2">
        <h1>Gemstones Catalog</h1>
        <p>Bootstrap v4 Components for Vue.js 2</p>
      </div>
      <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>

    <div id="about-content" class="px-3 container">
      <b-card no-body class="overflow-hidden about-card">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Why gemstones?">
              <b-card-text>
                This is a wider card with supporting text as a natural lead-in to additional content.
                This content is a little bit longer.
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<style scoped>
.about-card {
  margin: auto;
  max-width: 1000px;
  margin-bottom: 100px;
}
</style>
