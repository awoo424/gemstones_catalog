<template>
  <b-col class="admin">
    <b-card-group deck>
      <!-- Add card -->
      <b-card title="Add a gemstone">
        <b-card-text id="add-card">
          <!-- Name -->
          <b-form-group
            id="gemstone-name"
            label-cols-sm="12"
            label-cols-lg="3"
            label="Name"
            label-for="input-name"
            class="pt-lg-3"
          >
            <b-form-input
              id="input-name"
              v-model="name"
              :state="nameState"
              aria-describedby="name-feedback"
            ></b-form-input>
            <b-form-invalid-feedback id="name-feedback">This is a required field.</b-form-invalid-feedback>
          </b-form-group>

          <!-- Sciname -->
          <b-form-group
            id="gemstone-sciname"
            label-cols-sm="12"
            label-cols-lg="3"
            description="Chemical formula of the gemstone."
            label="Scientific name"
            label-for="input-sciname"
          >
            <b-form-input
              id="input-sciname"
              v-model="sciname"
              :state="scinameState"
              aria-describedby="sciname-feedback"
            ></b-form-input>
            <b-form-invalid-feedback id="name-feedback">This is a required field.</b-form-invalid-feedback>
          </b-form-group>

          <!-- Description -->
          <b-row class="mt-2">
            <b-col md="12" lg="3">
              <label for="textarea-small">Description</label>
            </b-col>
            <b-col md="12" lg="9">
              <b-form-textarea
                v-model="description"
                id="textarea-small"
                size="sm"
                placeholder="Add description"
              ></b-form-textarea>
            </b-col>
          </b-row>

          <div class="py-3"></div>

          <!-- Image file -->
          <b-form-file
            v-model="imagefile"
            placeholder="Choose a file or drop it here"
            drop-placeholder="Drop file here..."
            type="file"
            @change="previewImage"
            accept="image/*"
          ></b-form-file>
          <div class="py-3"></div>

          <!-- Symbolism -->
          <b-form-group
            id="gemstone-symbolism"
            label-cols-sm="12"
            label-cols-lg="3"
            label="Symbolism"
            label-for="input-symbolism"
          >
            <b-form-tags
              input-id="tags-remove-on-delete"
              :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
              v-model="symbolism"
              tag-variant="light"
              separator=" "
              placeholder="Enter tags separated by space"
              size="sm"
              remove-on-delete
              no-add-on-enter
              class="mb-2"
            ></b-form-tags>
            <b-form-text id="tags-remove-on-delete-help">
              Press
              <kbd>BACKSPACE</kbd> to remove the last tag entered
            </b-form-text>
          </b-form-group>
        </b-card-text>
        <template v-slot:footer class="card-footer">
          <b-button variant="danger">Clear</b-button>
          <span class="px-2"></span>
          <b-button variant="success">Confirm</b-button>
        </template>
      </b-card>

      <!-- Preview card -->
      <b-card id="preview-card" header-tag="header">
        <template v-slot:header>
          <h6 class="mb-0">Preview</h6>
        </template>
        <b-card-text>
          <div v-if="imagefile.length">
            <b-img class="my-0 mx-0 px-0" :src="imagefile" fluid-grow alt="Fluid-grow image"></b-img>
          </div>
          <div class="preview-content">
            <div class="preview-name">
              <h3>{{ name }}</h3>
            </div>
            <div v-if="sciname.length">
              <p>
                <strong>Scientific name:</strong>
                {{ sciname }}
              </p>
            </div>
            <div v-if="description.length">
              <p>
                <strong>Description:</strong>
                {{ description }}
              </p>
            </div>
            <div v-if="symbolism.length">
              <p>
                <strong>Symbolism:</strong>
                {{ symbolism }}
              </p>
            </div>
          </div>
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-col>
</template>

<script>
export default {
  methods: {
    previewImage: function(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = e => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imagefile = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    }
  },
  computed: {
    nameState() {
      return this.name.length > 2 ? true : false;
    },
    scinameState() {
      return this.sciname.length > 0 ? true : false;
    }
  },
  data() {
    return {
      name: "",
      sciname: "",
      description: "",
      imagefile: "",
      symbolism: ["love", "peace"]
    };
  }
};
</script>

<style>
.admin * {
  box-sizing: border-box;
}

#add-card * {
  text-align: left;
}

#preview-card {
  text-align: left;
}

.preview-content {
  padding: 1.25rem;
}

#preview-card .preview-name {
  text-align: center;
}

#preview-card strong {
  font-weight: 500;
}

.admin {
  margin: 20px auto;
}

/* label {
  display: block;
  margin-top: 10px;
} */

.col-form-label,
label {
  font-weight: 500;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
}

kbd {
  background-color: #b3b3b3;
}

#preview-card .card-body {
  padding: 0;
}

.card-footer {
  text-align: right;
}

.admin img {
  /* max-height: 30%; */
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>
