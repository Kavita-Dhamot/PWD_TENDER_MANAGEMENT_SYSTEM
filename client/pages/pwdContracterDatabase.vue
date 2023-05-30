<template>
  <div class="Dashboard">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><v-card class="pa-2 mr-4 yellow darken-3 mt-1 mb-1" @click = "logoutfunc">LogOut</v-card></v-card
      >
      <v-navigation-drawer
        app
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        class="blue-grey darken-3"
      >
        <v-list-item v-if="mini == false" class="px-2">
          <div
            class="layout align-center justify-center"
            style="min-width: 100px; min-height: 100"
          >
            <v-img
              color=""
              src="https://ra5put1n.blob.core.windows.net/internship-portal/website-images/pwd.png"
            ></v-img>
          </div>
          <div></div>
        </v-list-item>

        <v-divider></v-divider>

        <v-list flat class="blue-grey darken-3 pr-1 pl-1">
          <v-list-item v-if="mini == false" @click.stop="mini = !mini">
            <v-list-item-icon>
              <v-icon x-large color="yellow darken-3">mdi-chevron-left</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="text--white text-h6 mb-2 font-weight-light"
                >Minimise</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="mini == true">
            <v-list-item-icon>
              <v-icon>mdi-menu</v-icon>
            </v-list-item-icon>

            <v-list-item-content
              class="text--white text-h6 mb-2 font-weight-light"
            >
              <v-list-item-title>Minimise</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="item in items12"
            :key="item.title"
            :to="item.to"
            router
            exact
            active-class="yellow darken-3  rounded-lg"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title
                class="text--white text-h6 mb-2 font-weight-light"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="grey lighten-2">
        <div class="text-h3 blue-grey--text text-center mt-10 mb-5">
          Contractor Database
        </div>
        <v-card class="blue-grey" width="100%" height="10px"></v-card>
        <v-row>

          <v-col :cols=maximise>
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 pa-4 rounded-ls" elevation="0">
                <v-btn v-if="maximise==12" color='blue-grey' @click="maximise=5"> Minimise</v-btn>
                   <v-btn v-if="maximise==5" color='blue-grey' @click="maximise=12"> Maximise</v-btn>

                <div>
                  <div>
                    <v-text-field
                      light
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      color="blue-grey"
                    ></v-text-field>
                  </div>
                  <v-spacer></v-spacer>


                  <v-container class="grey lighten-2">


                      <v-data-table
                      light
                      :headers="headers"
                      :items="users"
                      :search="search"
                      item-key="name"
                      class="elevation-1"
                    >
                      <template v-slot:body="{ items }">
                        <tbody>
                          <tr
                            :class="
                              key === selectedRow ? 'custom-highlight-row' : ''
                            "
                            @click="rowSelect(key)"
                            v-for="(item, key) in items"
                            :key="users.indexOf(item)"
                          >
                            <td>{{ item.name }}</td>
                            <td>{{ item.email }}</td>
                            <td>


                        <v-icon
                          large
                          color="red"
                          @click="
                            deleteItem(users[users.indexOf(item)]._id, item)"
                        >
                          mdi-delete
                        </v-icon>

                            </td>

                          </tr>
                        </tbody>
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>
          <v-divider vertical class="blue-grey mt-10 mb-10"></v-divider>

          <v-col v-if="maximise!=12" :cols=12-maximise>
            <v-card class="grey lighten-2 mt-5" light elevation="0">
              <v-card class="transparent" flat>
                <v-container fluid>
                  <v-row>
                    <v-col cols="4"> </v-col>
                    <v-col cols="4">
                      <div class="justify-center">
                        <v-card
                          class="rounded-circle blue-grey"
                          height="150px"
                          width="150px"
                        >
                          <v-img
                            v-bind:src="profile_url"
                            class="rounded-circle"
                            height="150px"
                          ></v-img>
                        </v-card></div
                    ></v-col>
                    <v-col cols="4"> </v-col>
                    <v-col cols="2">
                      <v-subheader>Name</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        outlined
                        v-model="name"
                        disabled
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>Email</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>Company</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        outlined
                        disabled
                        v-model="company"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-subheader>Industry</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        v-model="industry"
                        outlined
                        color="blue-grey"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="2">
                      <v-subheader>Phone</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        v-model="contact_info"
                        outlined
                        color="blue-grey"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-subheader>Past Projects</v-subheader>
                      <v-textarea
                        disabled
                        outlined
                        v-model="past_projects"
                        color="blue-grey"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                  <v-subheader class="text-h5">Company Address</v-subheader>

                  <v-row>
                    <v-col cols="2">
                      <v-subheader>Address Line</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="branch_addr_line"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>City</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="city"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>State</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="state"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2">
                      <v-subheader>Country</v-subheader>
                    </v-col>
                    <v-col cols="4">
                      <v-text-field
                        disabled
                        outlined
                        v-model="country"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="2"> </v-col>
                    <v-col cols="12"
                      ><v-subheader class="text-h5"
                        >Approved Tenders</v-subheader
                      >
                    </v-col>
                    <v-col cols="12"
                      ><v-subheader class="text-h5">Annual Report</v-subheader>
                    </v-col>
                    <v-row>
                      <v-col class="ml-8" cols="3">
                        <v-btn large class="blue-grey">
                          <a
                            v-bind:href="annual_report_url"
                            target="_blank"
                            class="black--text"
                            style="text-decoration: none"
                          >
                            View Report<v-icon>mdi-eye</v-icon>
                          </a></v-btn
                        ></v-col
                      >
                      <!-- <v-col cols="2"></v-col>
                      <v-col cols="3">
                        {{ Saved }}
                        <v-btn large class="blue-grey" @click="onSaveProfile"
                          >Save</v-btn
                        >
                      </v-col> -->
                    </v-row>
                    <v-col cols="8"> </v-col>
                    <v-col cols="1"></v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<style>
.custom-highlight-row {
  background-color: rgb(249, 255, 192);
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/users");
      // console.log(response.users);
      let users1 = []
      for(let i=0;i<response.users.length;i++ ){
        if(response.users[i].confirmed === 2 && response.users[i].role === "contractor"){
          users1.push(response.users[i]);
        }
      }
      return {
        users: users1,
      };
    } catch (err) {}
  },
  data: () => ({
    maximise: 12,
    selectedRow: -1,
    profile_url: "",
    annual_report_url: "",
    id: "",
    email: "",
    name: " ",
    company: " ",
    industry: " ",
    past_projects: " ",
    contact_info: " ",
    branch_addr_line: " ",
    city: " ",
    state: " ",
    country: " ",
    password: "",
    role: "",
    confirmed: 0,
    drawer: true,
    items12: [
      { title: "Dashboard", icon: "mdi-home-city", to: "/pwdDashboard" },
      {
        title: "Contractor Profile",
        icon: "mdi-account",
        to: "/pwdContracterDatabase",
      },
      {
        title: "Approve Profile",
        icon: "mdi-lock",
        to: "/pwdApprove",
      },

      {
        title: "Projects",
        icon: "mdi-clipboard",
        to: "/pwdProjects",
      },
    ],
    mini: false,

    drawer: null,

    search: "",

    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Actions", value: "edit", sortable: false },
    ],
  }),
  methods: {
    logoutfunc() {
      this.$router.push("/Logout");
    },
      rowSelect(idx) {
        this.maximise=5;
      this.selectedRow = idx;
      this.expItem(this.users[this.selectedRow]);
    },
    expItem(item) {
      try {
        // let id = this.users[this.users.indexOf(item)]._id;

        // let response = await this.$axios.$post(
        //   `http://localhost:3000/api/users/${id}`
        // );
        this.id = this.users[this.users.indexOf(item)]._id;
        this.name = this.users[this.users.indexOf(item)].name;
        this.email = this.users[this.users.indexOf(item)].email;
        this.company = this.users[this.users.indexOf(item)].company;
        this.industry = this.users[this.users.indexOf(item)].industry;
        this.contact_info = this.users[this.users.indexOf(item)].contact_info;
        this.past_projects = this.users[this.users.indexOf(item)].past_projects;
        this.branch_addr_line = this.users[this.users.indexOf(item)].branch_addr_line;
        this.city = this.users[this.users.indexOf(item)].city;
        this.state = this.users[this.users.indexOf(item)].state;
        this.country = this.users[this.users.indexOf(item)].country;
        this.profile_url = this.users[this.users.indexOf(item)].photo;
        this.password = this.users[this.users.indexOf(item)].password;
        this.role = this.users[this.users.indexOf(item)].role;
        this.confirmed = this.users[this.users.indexOf(item)].confirmed;
        this.annual_report_url = this.users[this.users.indexOf(item)].annual_report;
        console.log(this.annual_report_url);
      } catch (err) {
        console.log(err);
      }
    },
    async verify() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/Login");
        }
        let data = {
          cookie: cookie,
        };
        let verify_response = await this.$axios.$post(
          `http://localhost:3000/api/verify/pwd`,
          data
        );
        if (!verify_response.success) {
          this.$cookies.set("jwt", null);
          this.$router.push("/Login");
        }
      } catch (err) {
        console.log(err);
      }
    },

  },
  beforeMount() {
    this.verify();
  },
};
</script>
