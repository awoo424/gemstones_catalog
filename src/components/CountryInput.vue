<template>
  <div>
    <label class="typo__label" for="ajax">Place of origin</label>
    <multiselect
      v-model="selectedCountries"
      id="ajax"
      label="name"
      track-by="code"
      placeholder="Type to search"
      open-direction="bottom"
      :options="countries"
      :multiple="true"
      :searchable="true"
      :loading="isLoading"
      :internal-search="false"
      :clear-on-select="false"
      :close-on-select="false"
      :options-limit="300"
      :limit="3"
      :limit-text="limitText"
      :max-height="600"
      :show-no-results="false"
      :hide-selected="true"
      @search-change="asyncFind"
    >
      <template slot="tag" slot-scope="{ option, remove }">
        <span class="custom__tag">
          <span>{{ option.name }}</span>
          <span class="custom__remove" @click="remove(option)">&nbsp;❌</span>
        </span>
      </template>
      <template slot="clear" slot-scope="props">
        <div
          class="multiselect__clear"
          v-if="selectedCountries.length"
          @mousedown.prevent.stop="clearAll(props.search)"
        ></div>
      </template>
      <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
    </multiselect>
    <!-- <pre class="language-json"><code>{{ selectedCountries  }}</code></pre> -->
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { ajaxFindCountry } from "./countriesApi";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      selectedCountries: [],
      countries: [],
      isLoading: false
    };
  },
  methods: {
    limitText(count) {
      return `and ${count} other countries`;
    },
    asyncFind(query) {
      this.isLoading = true;
      ajaxFindCountry(query).then(response => {
        this.countries = response;
        this.isLoading = false;
      });
    },
    clearAll() {
      this.selectedCountries = [];
    }
  },
  watch: {
    selectedCountries: function() {
      // Emit this information to the parents component
      this.$emit("country-list", this.selectedCountries);
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
/* #country-input {
  width: 91.5% !important;
  padding: 5px !important;
  border-radius: 0.1rem;
  border-width: 1px;
  border-style: solid;
  border-color: #ced4da;
} */

.custom__tag {
  background-color: pink;
  margin-right: 0.5rem;
  margin-bottom: 12px;
  padding: 0.3rem;
  padding-left: 0.7rem;
  border-radius: 0.2rem;
}

.multiselect__strong {
  display: block;
  padding-top: 10px;
}

.multiselect__tags {
  /* min-height: 50px; */
}

.multiselect__input {
  margin-top: 7px;
  min-height: 25px;
}

.multiselect__option--highlight {
  background: #dfdfdf;
  color: #343a40;
}
</style>