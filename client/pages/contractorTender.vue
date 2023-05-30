<template>
  <div class="Internships">
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
        <p class="text-center grey lighten-2 blue-grey--text mt-5 text-h2">
          Projects
        </p>
        <v-row>
          <v-col :cols=maximise>
            <p class="text-center blue-grey text-h4">Projects</p>
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-2 pa-4 rounded-ls" elevation="0">
                   <v-btn v-if="maximise==12" color='blue-grey' @click="maximise=5"> Minimise</v-btn>
                   <v-btn v-if="maximise==5" color='blue-grey' @click="maximise=12"> Maximise</v-btn>

                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-divider class="mx-2" inset vertical></v-divider>
                    <v-spacer></v-spacer>
                    <v-text-field
                      light
                      color="blue-grey"
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <v-container class="grey lighten-2">
                     <!-- <v-data-table
                      light
                      :headers="headers"
                      :items="projects"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }">
                        <v-icon x-large color="blue" @click= "expItem(item)">
                          mdi-account-box
                        </v-icon>
                      </template>
                    </v-data-table>  -->

                   <v-data-table
                      light

      :headers="headers"
      :items="projects"
      :search="search"
      item-key="name"
      class="elevation-1"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr :class="key === selectedRow ? 'custom-highlight-row' : ''" @click= "rowSelect(key)" v-for="(item, key) in items" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.tenderEndDate }}</td>
            <td>{{ item.expBudget }}</td>

          </tr>
        </tbody>
      </template>
    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>
          <v-divider class="mt-10 blue-grey" vertical></v-divider>
          <v-col v-if="maximise!=12" :cols="12-maximise">
            <p class="text-center blue-grey text-h4">View Project</p>
            <v-card light elevation="0" class="grey lighten-2 ma-10">
              <v-row>
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Status
                  </div></v-col
                >
                <v-col cols="10"
                  ><div class="text--black">

                    <div v-if="status==0">Open for tender<v-icon color="green"
                                  >mdi-folder-open</v-icon
                                ></div>
                    <div v-if="status==1">PWD Tender Approval Pending<v-icon color="blue-grey"
                                  >mdi-account-clock-outline</v-icon
                                ></div>
                    <div v-if="status==2">Govt Tender Approval Pending <v-icon color="blue-grey"
                                  >mdi-account-clock-outline</v-icon
                                ></div>
                    <div v-if="status==3">Tender Approved. Closed<v-icon color="green">mdi-lock</v-icon></div>
                    </div></v-col
                >

                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Name
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
                    Tender Start Date
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
                <v-col cols="2"
                  ><div class="blue-grey--text text-subtitle-1">
                    Location :
                  </div></v-col
                >
                <v-col cols="6"
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
                  </div>
                  </v-col
                >

                <v-col cols="8">
                   <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">

        <v-card
                    elevation="0"
                    color="transparent"
                    :href="link"
                    class="black--text pl-5"
                    v-bind="attrs"
                     target="_blank"
          v-on="on"
                    ><div><v-btn color="success">Visit Site</v-btn></div></v-card
                  >


      </template>
      <span>{{link}}</span>
    </v-tooltip>

                  </v-col
                >
                <v-col cols="2"></v-col>

                <div>
                  <v-row justify="center">
                    <v-btn
                      v-if=" selected==1 && applyBtn==true"
                      color="primary"
                      class="ma-2"
                      dark
                      @click="dialog = true"
                    >
                      Apply
                    </v-btn>

                    <v-dialog
                      light
                      v-model="dialog"
                      fullscreen
                      hide-overlay
                      transition="dialog-bottom-transition"
                      scrollable
                    >
                      <v-card tile>
                        <div>
                          <v-toolbar
                            dark
                            extended
                            extension-height="100"
                            src="http://uppwd.gov.in/site/writereaddata/HomePage/Header/H_201904121208521886.jpg"
                          >
                            <v-btn icon dark @click="dialog = false">
                              <v-icon x-large>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title class="mt-5 ml-5"
                              ><v-card class="rounded-lg elevation-2 font-weight-bold semi-transparent-white text-h2 ">Apply to {{ name }}</v-card></v-toolbar-title
                            >
                            <v-spacer></v-spacer>
                          </v-toolbar>
                        </div>

                        <v-list class="pa-5" subheader>
                          <div class="pa-2 mb-4 blue-grey text-h5 white--text">
                            My Details
                          </div>
                          <v-row>
                            <v-col cols="4">
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title>Name</v-list-item-title>
                                  <v-list-item-subtitle>{{
                                    contractor_name
                                  }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title>Company</v-list-item-title>
                                  <v-list-item-subtitle>{{
                                    company
                                  }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title
                                    >Industry</v-list-item-title
                                  >
                                  <v-list-item-subtitle>{{
                                    industry
                                  }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title
                                    >Phone</v-list-item-title
                                  >
                                  <v-list-item-subtitle>{{
                                    contact_info
                                  }}</v-list-item-subtitle>
                                </v-list-item-content>
                              </v-list-item>
                              <v-btn large class="blue-grey">
                                <a
                                  v-bind:href="annual_report_url"
                                  target="_blank"
                                  class="black--text"
                                  style="text-decoration: none"
                                >
                                  Annual Report<v-icon>mdi-download</v-icon>
                                </a></v-btn
                              >
                            </v-col>

                            <v-col cols="4">
                              <v-card class="transparent pa-2 " elevation="0">Past Projects</v-card>
                              <v-textarea
                                    outlined
                                    v-model="past_projects"
                                    color="blue-grey"
                                    disabled
                                  >
                                  </v-textarea>
                            </v-col>
                          </v-row>
                        </v-list>
                        <v-divider></v-divider>

                        <v-card class="pa-5" light elevation="0">
                          <div class="pa-2 mb-4 blue-grey text-h5 white--text">
                            Tender Details
                          </div>
                          <v-card class="transparent" flat>
                            <v-container fluid>
                              <v-row>
                                <v-col cols="2">
                                  <v-subheader>Proposable Budget</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="Budget"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="2">
                                  <v-subheader>Start Timeline </v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="timelineStart"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="2">
                                  <v-subheader>End Timeline</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="timelineEnd"
                                  ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                  <v-subheader>Material used</v-subheader>
                                  <v-textarea
                                    outlined
                                    v-model="material"
                                    color="blue-grey"
                                  >
                                  </v-textarea>
                                </v-col>

                                <v-col cols="12">
                                    <v-btn  @click="dialog2=!dialog2" color="blue-grey" x-large>Apply <v-icon>mdi-lock</v-icon></v-btn>
                                </v-col>

                              </v-row>
                            </v-container>
                          </v-card>
                        </v-card>

                        <div style="flex: 1 1 auto"></div>
                      </v-card>
                    </v-dialog>
                    <v-dialog
                    light
          v-model="dialog2"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              Confirm
            </v-card-title>
            <v-card-text>

             Are you sure about applied Tender ?
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                @click="dialog2 = false"
              >
                back
              </v-btn>
               <v-btn
                color="primary"
                text
                @click="dialog2 = false ; dialog = false; dialog3 = true; confirmTender()"

              >
                Apply and Lock <v-icon>mdi-lock</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
                  </v-row>
                </div> </v-row
            ></v-card>
          </v-col>

          <v-col cols="8"> <v-dialog
                    light
          v-model="dialog3"
          max-width="500px"
        >
          <v-card>
            <v-card-title>
              <div v-if="success==true">
                Success
                </div>
                <div v-if="success==false">
                Failed
                </div>
            </v-card-title>
            <v-card-text>
              <div v-if="success==true">
                Successfully applied to Project
                </div>
                <div v-if="success==false">
                Failed to Apply
                </div>

            </v-card-text>
            <v-card-actions>

               <v-btn
                color="primary"
                text
                @click="dialog3 = false; Reload();"

              >
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog> </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<style>
.custom-highlight-row{
  background-color: rgb(249, 255, 192)
}



.semi-transparent-white {
  background-color: #eeeeee;
  opacity: 0.75;
  color: black;
}
</style>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/projects");

      return {
        projects: response.projects,
      };
    } catch (err) {}
  },
  data: ()=>({
    selectedRow: -1,
    maximise: 12,
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
    annual_report_url: "",
    id: "",
    project_id: "",
    email: "",
    contractor_name: " ",
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
    Budget: "",
    timelineStart: "",
    timelineEnd: "",
    material: "",
    my_projects: [],
    success: true,
    status: -1,
    confirmed: 0,
    drawer: true,
    dialog: false,
    dialog2: false,
    dialog3: false,
    notifications: false,
    sound: true,
    widgets: false,
    applyBtn: true,

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

    ],
  }),
  methods: {
    Reload(){
      this.$router.push("/contractorTender");
    },
    logoutfunc() {
      this.$router.push("/Logout");
    },
    async confirmTender() {
      try {
        let data = {
          project_id: this.project_id,
          contractor_id: this.id,
          Budget: this.Budget,
          timelineStart: this.timelineStart,
          timelineEnd: this.timelineEnd,
          material: this.material,
          approved: 0,
        }
        console.log(data);
      let response = await this.$axios.$post(`http://localhost:3000/api/tenders/`,data);
      if(response.success){
        this.success = true;
        this.project_id =  "";
        this.contractor_id = "";
        this.Budget = "";
        this.timelineStart = "";
        this.timelineEnd = "";
        this.material = "";
        this.$router.push("/contractorTender");
        location.reload();
        //this.$router.go();
      }
    }catch (err) {
        console.log(err);
        this.success = false;
      }
    },
    async getUser() {
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
        this.id = response.user._id;
        this.contractor_name = response.user.name;
        this.email = response.user.email;
        this.company = response.user.company;
        this.industry = response.user.industry;
        this.contact_info = response.user.contact_info;
        this.past_projects = response.user.past_projects;
        this.branch_addr_line = response.user.branch_addr_line;
        this.city = response.user.city;
        this.state = response.user.state;
        this.country = response.user.country;
        this.profile_url = response.user.photo;
        this.role = response.user.role;
        this.confirmed = response.user.confirmed;
        this.annual_report_url = response.user.annual_report;
        this.my_projects = response.user.my_projects;
      } catch (err) {
        console.log(err);
      }
    },
    rowSelect(idx) {
      //console.dir(idx)
      this.maximise=5;
      this.selectedRow = idx;
      this.expItem(this.projects[this.selectedRow]);
    },
    expItem(item) {
      this.applyBtn = true;
      this.selected = 1;
      this.project_id = this.projects[this.projects.indexOf(item)]._id;
      for(let i=0;i<this.my_projects.length;i++)
      {
        if(this.my_projects[i].project_id == this.project_id)
        {
          this.applyBtn=false;
          break;
        }
      }
      this.name = this.projects[this.projects.indexOf(item)].name;
      console.log(this.name);
      this.prjStartDate = this.projects[
       this.projects.indexOf(item)
      ].prjStartDate;
      console.log(this.prjStartDate);
      this.prjEndDate = this.projects[this.projects.indexOf(item)].prjEndDate;
      console.log(this.prjEndDate);
      this.tenderStartDate = this.projects[this.projects.indexOf(item)].tenderStartDate;
      console.log(this.tenderStartDate);
      this.tenderEndDate = this.projects[
        this.projects.indexOf(item)
      ].tenderEndDate;
      console.log(this.tenderEndDate);
      this.expBudget = this.projects[this.projects.indexOf(item)].expBudget;
      console.log(this.expBudget);
      this.location = this.projects[this.projects.indexOf(item)].location;
      this.details = this.projects[this.projects.indexOf(item)].details;
      this.link = this.projects[this.projects.indexOf(item)].link;
      this.status = this.projects[this.projects.indexOf(item)].status;
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
    this.getUser();
  },
};
</script>

