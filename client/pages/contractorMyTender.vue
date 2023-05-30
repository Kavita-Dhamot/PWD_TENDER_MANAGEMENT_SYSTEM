<template>
  <div class="Internships">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><v-card class="pa-2 mr-4 yellow darken-3 mt-1 mb-1" @click="logoutfunc">
          LogOut
        </v-card></v-card
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
          My Tenders and Projects
        </div>

        <v-row>
          <v-col :cols=maximise>
             <p class="text-center blue-grey text-h4">Applied Project</p>

            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 pa-4 rounded-ls" elevation="0">


                <div>
                  <v-btn v-if="maximise==12" color='blue-grey' @click="maximise=5"> Minimise</v-btn>
                   <v-btn v-if="maximise==5" color='blue-grey' @click="maximise=12"> Maximise</v-btn>

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
                      :items="projects_arr"
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
                            :key="projects_arr.indexOf(item)"
                          >
                            <td>{{ item.name }}</td>
                            <td>{{ item.tenderEndDate }}</td>
                            <td>{{ item.expBudget }}</td>
                            <td>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '0'
                                "
                              >Project Accepting Tenders
                                <v-icon color="blue-grey"
                                  >mdi-clock-outline</v-icon
                                >
                              </div>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '1'
                                "
                              >Waiting for PWD Approval
                                <v-icon color="blue-grey"
                                  >mdi-account-clock-outline</v-icon
                                >
                              </div>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '2'
                                "
                              >Waiting for Govt Approval
                                <v-icon color="green">mdi-check-bold</v-icon>
                              </div>
                              <div
                                v-if="
                                  tender_arr[projects_arr.indexOf(item)]
                                    .approved == '-1'
                                "
                              >Rejected
                                <v-icon color="red">mdi-close-thick</v-icon>
                              </div>
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

          <v-col v-if="maximise!=12":cols=12-maximise>
            <p class="text-center blue-grey text-h4">View Project</p>
            <v-card light elevation="0" class="grey lighten-2 ma-10">
              <v-row>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Name :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="text--black">{{ name }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Project Start Date :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="text--black">{{ prjStartDate }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Project End Date:
                  </div>
                </v-col>
                <v-col cols="2"
                  ><div class="black--text">
                    {{ prjEndDate }}
                  </div>
                </v-col>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Tender Start Date :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ tenderStartDate }}
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Tender End Date :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ tenderEndDate }}
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Budget :
                  </div></v-col
                >
                <v-col cols="2"
                  ><div class="black--text">
                    {{ expBudget }}
                  </div></v-col
                >
                <v-col cols="4"
                  ><div class="blue-grey--text text-subtitle-1">
                    Location :
                  </div></v-col
                >
                <v-col cols="4"
                  ><p class="black--text">
                    {{ location }}
                  </p></v-col
                >
                <v-col cols="12"
                  ><div class="blue-grey--text text-subtitle-1">
                    Details :
                  </div></v-col
                >
                <v-col cols="12 "
                  ><div class="black--text">{{ details }}</div></v-col
                >
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Link :
                  </div></v-col
                >
                <v-col cols="8"
                  ><div class="black--text">{{ link }}</div></v-col
                >
                <v-col cols="2"></v-col>

                <v-card class="pa-5 transparent" light elevation="0">
                  <div class="pa-2 mb-4 blue-grey text-h5 white--text">
                    Tender Details
                  </div>
                  <v-card class="transparent" flat>
                    <v-container fluid>
                      <v-row>
                        <v-col cols="2">
                          <v-subheader>Proposable Budget</v-subheader>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            outlined
                            disabled
                            v-model="Budget"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6"></v-col>

                        <v-col cols="2">
                          <v-subheader>Start Timeline </v-subheader>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            outlined
                            disabled
                            v-model="timelineStart"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="2">
                          <v-subheader>End Timeline</v-subheader>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-if="approved == '2'"
                            outlined
                            v-model="timelineEnd"
                          ></v-text-field>
                          <v-text-field
                            v-else
                            outlined
                            disabled
                            v-model="timelineEnd"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-subheader>Material used</v-subheader>
                          <v-textarea
                            v-if="approved == '2'"
                            outlined
                            v-model="material"
                            color="blue-grey"
                          >
                          </v-textarea>
                          <v-textarea
                            v-else
                            disabled
                            outlined
                            v-model="material"
                            color="blue-grey"
                          >
                          </v-textarea>
                        </v-col>

                        <v-col cols="12">
                          <v-btn
                            v-if="approved == '2'"
                            color="blue-grey"
                            x-large
                            @click="updatetender"
                            >Edit<v-icon>mdi-lock</v-icon></v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-card>
              </v-row></v-card
            >
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
  data: () => ({
    maximise: 12,
    selectedRow: null,
    selected: -1,
    name: "NA", //display
    prjStartDate: "NA", //display
    prjEndDate: "NA",
    tenderStartDate: "NA",
    expBudget: "NA", //display
    tenderEndDate: "NA", //display
    location: "NA",
    details: "NA",
    link: "NA",
    Budget: "",
    timelineStart: "",
    timelineEnd: "",
    material: "",
    approved: "",
    tender_id: "",
    projects_arr: [],
    tender_arr: [],
    drawer: true,
    items12: [
      { title: "Dashboard", icon: "mdi-home-city", to: "/contractorDashboard" },
      {
        title: "Profile",
        icon: "mdi-account",
        to: "/contractorProfile",
      },
      { title: "All Projects", icon: "mdi-bookshelf", to: "/contractorTender" },
      {
        title: "My Projects",
        icon: "mdi-clipboard",
        to: "/contractorMyTender",
      },
    ],
    mini: false,

    search: "",
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Tender End Date", value: "tenderEndDate" },
      { text: "Budget", value: "expBudget" },
      { text: "Status", value: "" },
    ],
  }),
  methods: {
    logoutfunc() {
      this.$router.push("/Logout");
    },
    async getProjects() {
      try {
        let cookie = this.$cookies.get("jwt");
        if (cookie == null) {
          this.$router.push("/login");
        }
        let data = {
          cookie: cookie,
        };
        let response = await this.$axios.$post(
          `http://localhost:3000/api/profile/`,
          data
        );
        if (!response.success) {
          this.$router.push("/login");
        } else if (response.user.role !== "contractor") {
          this.$cookies.set("jwt", null);
          this.$router.push("/Login");
        }

        for (let i = 0; i < response.user.my_projects.length; i++) {
          let idd = response.user.my_projects[i].project_id;

          let response1 = await this.$axios.$get(
            `http://localhost:3000/api/projects/${idd}`
          );
          if (response) {
            this.projects_arr.push(response1.project);
            this.tender_arr.push(response.user.my_projects[i]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async updatetender() {
      try {
        let data = {
          project_id: this.tender_arr[this.selectedRow].project_id,
          contractor_id: this.tender_arr[this.selectedRow].contractor_id,
          Budget: this.tender_arr[this.selectedRow].Budget,
          timelineStart: this.tender_arr[this.selectedRow].timelineStart,
          timelineEnd: this.tender_arr[this.selectedRow].timelineEnd,
          material: this.tender_arr[this.selectedRow].material,
          approved: this.tender_arr[this.selectedRow].approved,
        };
        let response = await this.$axios.$put(
          `http://localhost:3000/api/tenders/${this.tender_id}`,
          data
        );
      } catch (err) {
        console.log(err);
      }
    },
    rowSelect(idx) {
      this.maximise = 5;
      this.selectedRow = idx;
      this.expItem();
    },
    expItem() {
      this.selected = 1;
      this.tender_id = this.tender_arr[this.selectedRow]._id;
      this.project_id = this.tender_arr[this.selectedRow].project_id;
      this.name = this.projects_arr[this.selectedRow].name;
      this.prjStartDate = this.projects_arr[this.selectedRow].prjStartDate;
      this.prjEndDate = this.projects_arr[this.selectedRow].prjEndDate;
      this.tenderStartDate = this.projects_arr[
        this.selectedRow
      ].tenderStartDate;
      this.tenderEndDate = this.projects_arr[this.selectedRow].tenderEndDate;
      this.expBudget = this.projects_arr[this.selectedRow].expBudget;
      this.location = this.projects_arr[this.selectedRow].location;
      this.details = this.projects_arr[this.selectedRow].details;
      this.link = this.projects_arr[this.selectedRow].link;
      this.Budget = this.tender_arr[this.selectedRow].Budget;
      this.timelineStart = this.tender_arr[this.selectedRow].timelineStart;
      this.timelineEnd = this.tender_arr[this.selectedRow].timelineEnd;
      this.material = this.tender_arr[this.selectedRow].material;
      this.approved = this.tender_arr[this.selectedRow].approved;
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
          `http://localhost:3000/api/verify/contractor`,
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
    this.getProjects();
  },
};
</script>
