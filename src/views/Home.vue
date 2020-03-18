<template>
  <div class="home">
    <b-row class="justify-content-md-center home-row">
      <b-col md="6" sm="12">
        <div id="gemstone-col">
          <!-- Gemstone card -->
          <b-card id="gemstone-card" header-tag="header">
            <template v-slot:header>
              <h6 class="mb-0">#001</h6>
            </template>
            <b-card-text>
              <b-img
                class="my-0 mx-0 px-0"
                src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/07/17/13/diamonds-black-background.jpg?w968h681"
                fluid-grow
                alt="Fluid-grow image"
              ></b-img>
              <div class="gemstone-content">
                <div class="preview-name">
                  <h3 id="gemstone-name">Name</h3>
                  <p>
                    <strong>Scientific name:</strong>
                    Sciname
                  </p>
                  <p>
                    <strong>Description:</strong>
                    Description
                  </p>
                  <p class="pr-2">
                    <strong>Place of origin:</strong>
                  </p>
                  <ul>
                    <li>Japan</li>
                  </ul>
                  <p class="pr-2">
                    <strong>Symbolism:</strong>
                  </p>
                  <div>
                    <b-badge class="preview-tags">test</b-badge>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-col id="search-col" md="6" sm="12">
        <div id="table-window">
          <div>
            <div class="mb-2">
              <p>search bar</p>
            </div>
            <b-table
              :sticky-header="true"
              :no-border-collapse="true"
              responsive
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
            >
              <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
              <template v-slot:head(id)>
                <div class="text-nowrap">Row ID</div>
              </template>
              <template v-slot:head()="scope">
                <div class="text-nowrap">{{ scope.label }}</div>
              </template>
            </b-table>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      sortBy: "age",
      sortDesc: false,
      fields: [
        {
          key: "last_name",
          sortable: true,
          stickyColumn: true,
          isRowHeader: true,
          variant: "primary"
        },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false },
        { key: "last_name", sortable: true },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false },
        { key: "last_name", sortable: true },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false },
        { key: "last_name", sortable: true },
        { key: "first_name", sortable: true },
        { key: "age", sortable: true },
        { key: "isActive", sortable: false }
      ],
      items: [
        {
          isActive: true,
          age: 40,
          first_name: "Dickerson",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
  }
};
</script>

<style scoped>
#gemstone-col {
  width: 100%;
  height: 100%;
  /* border-right: 1px solid #dfdfdf; */
  padding: 20px;
  padding-left: 3rem;
  padding-right: 3rem;
}

#search-col {
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-left: 3rem;
  padding-right: 3rem;
}

.b-table-sticky-header {
  max-height: 550px;
}

#gemstone-name {
  text-align: center !important;
  padding-bottom: 1rem;
}

#gemstone-card * {
  text-align: left;
}

.gemstone-content {
  padding: 1.25rem;
}

#gemstone-card .preview-name {
  text-align: center;
}

#gemstone-card strong {
  font-weight: 500;
}

.preview-tags {
  padding: 0.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-right: 0.4rem;
  font-size: 0.8rem;
  text-transform: capitalize;
}

#gemstone-card .card-body {
  padding: 0;
}

#gemstone-col img {
  /* max-height: 30%; */
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.preview-tags {
  padding: 0.4rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-right: 0.4rem;
  font-size: 0.8rem;
  text-transform: capitalize;
}

.badge-secondary {
  background-color: pink !important;
  color: #343a40 !important;
}

.card-header {
  background-color: #e4dede71;
}
</style>
