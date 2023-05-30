

<template>
  <div class="login">
    <div id="app" class="index back">
      <v-app app id="inspire">
        <v-app-bar height="100px" app color="semi-transparent">
          <div class="ml-2 mt-4">
            <vuetify-logo />
          </div>
          <v-toolbar-title
            class="text-h5 grey--text text-lighten-1 font-weight-light"
            >PWD PORTAL</v-toolbar-title
          >
          <v-spacer></v-spacer>

          <v-btn class="transparent ml-2" elevation="0" href="/"> Home </v-btn>
          <v-btn class="white black--text ml-2" elevation="0" href="/Register">
            Sign Up
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Login">
            Login
          </v-btn>
        </v-app-bar>
        <v-content>
          <v-col cols="12" xs="12" sm="12" md="12" lg="12">
            <v-container>
              <v-container grid-list-lg text-sm-center sm="8" md-12>
                <v-layout row wrap>
                  <v-flex xs12 md12>
                    <v-card
                      class="mx-auto rounded-b-xl transparent"
                      min-height="100"
                      flat
                    >
                      <v-card-text>
                        <div class="text-h1 black--text text-darken-1">
                          <v-layout align-center justify-center>
                            <v-flex xs12 sm8 md4>
                              <section
                                class="container fill-height justify-center"
                                id="login"
                              >
                                <div class="row justify-center">
                                  <div
                                    class="v-card--material pa-3 px-5 py-3 v-card v-sheet theme--light v-card--material--has-heading"
                                    elevation="10"
                                    max-width="100%"
                                    width="400"
                                    style="
                                      max-width: 100%;
                                      width: 400px;
                                      transform-origin: center top 0px;
                                    "
                                  >
                                    <div
                                      v-if="show == 1"
                                      class="d-flex grow flex-wrap"
                                    >
                                      <div
                                        class="text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 blue-grey pa-7"
                                        style="width: 100%"
                                      >
                                        <div class="text-center">
                                          <h1
                                            class="display-2 font-weight-bold mb-2"
                                          >
                                            Sign Up
                                          </h1>
                                        </div>
                                        <!---->
                                      </div>
                                      <!----><!---->
                                    </div>

                                    <div
                                      v-if="show == 1"
                                      class="v-card__text text-center"
                                    >
                                      <v-card-text>
                                        <v-form>
                                          <v-text-field
                                            label="Name"
                                            v-model="name"
                                            name="login"
                                            type="text"
                                            prepend-icon="mdi-account"
                                            color="cyan darken-2"
                                            light
                                          ></v-text-field>

                                          <v-text-field
                                            light
                                            label="Email"
                                            v-model="email"
                                            name="login"
                                            type="text"
                                            prepend-icon="mdi-email"
                                            color="cyan darken-2"
                                          ></v-text-field>

                                          <v-text-field
                                            light
                                            color="blue-grey"
                                            v-model="password"
                                            prepend-icon="mdi-lock-outline"
                                            :append-icon="
                                              show1 ? 'mdi-eye' : 'mdi-eye-off'
                                            "
                                            :type="show1 ? 'text' : 'password'"
                                            name="input-10-1"
                                            @click:append="show1 = !show1"
                                          ></v-text-field>
                                          <v-select
                                            prepend-icon="mdi-briefcase-account"
                                            :items="item1"
                                            label="Role"
                                            color="blue-grey"
                                            light
                                            v-model="role"
                                          ></v-select>
                                        </v-form>
                                      </v-card-text>
                                      <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                          color="cyan darken-1"
                                          @click="onRegister"
                                          >Sign Up</v-btn
                                        >
                                      </v-card-actions>
                                    </div>
                                    <div
                                      v-if="show == 2"
                                      class="v-card__text text-center"
                                    >
                                      <v-card-text>
                                        <div>
                                          Further instructions for account
                                          verification has been sent to
                                          {{ email }}
                                        </div>
                                      </v-card-text>
                                      <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                          color="cyan darken-1"
                                          href="/login"
                                          >Ok</v-btn
                                        >
                                      </v-card-actions>
                                    </div>
                                    <!---->
                                  </div>
                                </div>
                              </section>
                            </v-flex>
                          </v-layout>
                        </div>
                      </v-card-text>

                      <v-card
                        class="mx-auto rounded-b-xl transparent"
                        min-height="100"
                        flat
                        light
                      >
                      </v-card>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-container>
          </v-col>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}
.index {
  background: black;
  background-size: cover;
}
#container {
  width: 300px;
  background-color: red;
  display: flex;
  justify-content: center;
}

#child {
  background-color: blue-grey;
  width: 250px;
  height: 150px;
  position: relative;
  top: 75px;
}
.back {
  background-image: url("https://ra5put1n.blob.core.windows.net/internship-portal/website-images/cc3_2.jpg");
  background-position-y: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}
.brand {
  position: fixed;
}

#inspire {
  background: none !important;
}

.semi-transparent {
  opacity: 0.75;
}
.semi-transparent-white {
  background-color: #eeeeee;
  opacity: 0.85;
  color: black;
}
</style>


<script>
import Logo from "~/components/Logo.vue";
export default {
  components: {
    Logo,
  },
  middleware: "auth",
  auth: "guest",
  layout: "none",
  data() {
    return {
      show: 1,
      show1: false,
      show2: false,
      dialog: true,
      error: "",
      clipped: false,
      drawer: true,
      fixed: false,
      email: "",
      password: "",
      role: "Contractor",
      item1: ["contractor"],

      itemsss: [
        {
          icon: "mdi-apps",
          title: "Placement Portal",
          to: "https://placement.iiita.ac.in/",
        },
        {
          icon: "mdi-apps",
          title: "IIIT A",
          to: "https://www.iiita.ac.in/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Past Data",
          to: "https://placement.iiita.ac.in/statistics.php",
        },

        {
          icon: "mdi-chart-bubble",
          title: "Login",
          to: "/Login",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,

      title: "IIIT INTERNSHIP PORTAL",
    };
  },
  methods: {
    async onRegister() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role,
        };
        let response = await this.$axios.$post(
          "http://localhost:3000/api/auth/signup",
          data
        );
        if (response.success) {
          this.show = 2;
          this.password = "";
          this.name = "";
          this.role = "";
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
