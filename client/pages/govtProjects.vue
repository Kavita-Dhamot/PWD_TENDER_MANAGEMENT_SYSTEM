<template>
  <div class="Dashboard">
    <v-app>
      <v-card
        class="blue-grey darken-3 elevation-5 text-right d-flex justify-end"
        align="right"
        height="50px"
        ><v-card class="pa-2 mr-4 yellow darken-3 mt-1 mb-1" @click = "logoutfunc"><p>LogOut</p></v-card></v-card
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
          View Project
        </p>
        <v-row>
          <v-col :cols="maximise" >
            <p class="text-center blue-grey text-h4">Projects</p>
            <v-container class="grey lighten-2">
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
                              ><v-card class="rounded-lg elevation-2 font-weight-bold semi-transparent-white text-h2 ">Create New Project</v-card></v-toolbar-title
                            >
                            <v-spacer></v-spacer>
                          </v-toolbar>
                        </div>



                        <v-card class="pa-5" light elevation="0">
                          <div class="pa-2 mb-4 blue-grey text-h5 white--text">
                            Project Details
                          </div>
                          <v-card class="transparent" flat>
                            <v-container fluid>
                              <v-row>
                                  <v-col cols="2">
                                  <v-subheader>Name</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="name1"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                  <v-subheader>Budget</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="expBudget1"
                                  ></v-text-field>
                                </v-col>
                                  <v-col cols="2">
                                  <v-subheader>Project Start Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="prjStartDate1"
                                  ></v-text-field>
                                </v-col>
                                  <v-col cols="2">
                                  <v-subheader>Project End Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="prjEndDate1"
                                  ></v-text-field>
                                </v-col>
                                  <v-col cols="2">
                                  <v-subheader>Tender Start Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="tenderStartDate1"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                  <v-subheader>Tender End Date</v-subheader>
                                </v-col>
                                <v-col cols="2">
                                  <v-text-field
                                    outlined
                                    v-model="tenderEndDate1"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                  <v-subheader>Location</v-subheader>
                                </v-col>
                                <v-col cols="4">
                                  <v-text-field
                                    outlined
                                    v-model="location1"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                </v-col>


                                <v-col cols="12">
                                  <v-subheader>Details</v-subheader>
                                  <v-textarea
                                    outlined
                                    v-model="details1"
                                    color="blue-grey"
                                  >
                                  </v-textarea>
                                </v-col>

                                 <v-col cols="12">
                                  <v-subheader>Attach Documents</v-subheader>
                                  <v-file-input
    multiple


  ></v-file-input>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn @click= "newProject(); dialog = !dialog;" color="blue-grey" x-large>Create </v-btn>

                                </v-col>

                              </v-row>
                            </v-container>
                          </v-card>
                        </v-card>

                        <div style="flex: 1 1 auto"></div>
                      </v-card>
                    </v-dialog>
              <v-card class="grey lighten-2 rounded-ls" elevation="0">
                <div>
                  <v-btn color="blue-grey" @click="dialog=true">Create New Project <v-icon>mdi-plus</v-icon></v-btn>
                   <v-btn v-if="maximise==12" color='blue-grey' @click="maximise=4"> Minimise</v-btn>
                   <v-btn v-if="maximise==4" color='blue-grey' @click="maximise=12"> Maximise</v-btn>
                  <v-toolbar flat color="grey lighten-2">
                    <v-divider class="mx-2" inset vertical></v-divider>

                    <v-text-field
                      light
                      color="blue-grey"
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                    ></v-text-field>

                  </v-toolbar>

                  <v-container class="grey lighten-2">

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
            <td>

                        <div
                                v-if="
                                  item.status == 0
                                "
                              >
                              Accepting Tender
                                <v-icon color="blue-grey"
                                  >mdi-clock-outline</v-icon
                                >
                              </div>
                              <div
                                v-if="
                                  item.status == 1
                                "
                              >
                              Waiting for PWD to select
                                <v-icon color="blue-grey"
                                  >mdi-account-clock-outline</v-icon
                                >
                              </div>
                              <div
                                v-if="
                                  item.status == 2
                                "
                              >
                              My Approval Pending
                                <v-icon color="green">mdi-account-question-outline</v-icon>
                              </div>
                              <div
                                v-if="
                                  item.status == 3
                                "
                              >Done
                                <v-icon color="green">mdi-check-bold</v-icon>
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

          <v-divider class="mt-10 blue-grey" vertical></v-divider>
          <v-col  v-if="maximise!=12" :cols="12-maximise">
            <p class="text-center blue-grey text-h4">View Project</p>
            <v-card light elevation="0" class="grey lighten-2 ma-10">
              <v-row>

                <v-col v-if="selectedRow!=-1 && status==1" cols="4"
                  ><v-btn color="success" x-large @click= "openProject">Open Project</v-btn></v-col
                >
                <v-col v-if="selectedRow!=-1 && status==0" cols="4"
                  ><v-btn color="red" x-large @click= "closeProject">Close Project</v-btn></v-col
                >
                <v-col v-if="selectedRow!=-1" cols="4">
                  <v-btn x-large color="white">Delete Project
                    <v-icon
                          x-large
                          color="red"
                          @click="
                            deleteItem(
                              projects[this.selectedRow]._id,
                              projects[this.selectedRow])"
                        >
                          mdi-delete
                        </v-icon>
                        </v-btn>
                        </v-col>
                        <v-col cols="8"></v-col>

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
                  ><div class="blue-grey--text text-subtitle-1">Project End Date:</div>
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
                <v-col cols="8"
                  ><p class="black--text">
                    {{ location }}
                  </p></v-col
                >
                <v-col cols="2"></v-col>
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
                   <v-col cols="10">
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

                <v-col cols=12>

<div v-if="status==2 || status==3">
              <p class="text-center white--text blue-grey text-h4">Approved Tender</p>
              <v-card light elevation="0" class="grey lighten-2 ma-10">
                <v-row>
                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Contracter :
                    </div></v-col
                  >
                  <v-col cols="4"
                    ><div class="text--black">{{ contractor_name }}</div></v-col
                  >

                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Budget :
                    </div></v-col
                  >
                  <v-col cols="4"
                    ><div class="text--black">{{ Budget }}</div></v-col
                  >

                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      TimeLine Start:
                    </div>
                  </v-col>
                  <v-col cols="4"
                    ><div class="black--text">{{ timelineStart }}</div>
                  </v-col>

                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      TimeLine End:
                    </div></v-col
                  >
                  <v-col cols="4"
                    ><div class="black--text">{{ timelineEnd }}</div></v-col
                  >



                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Past Projects :
                    </div></v-col
                  >
                  <v-col cols="10">
                    <div class="black--text">{{ past_projects }}</div>
                  </v-col>

                  <v-col cols="2"
                    ><div class="blue-grey--text text-subtitle-1">
                      Materials :
                    </div></v-col
                  >
                  <v-col cols="10"
                    ><p class="black--text">
                      {{ material }}
                    </p></v-col
                  >
                  <v-col cols="4"
                    ><v-btn v-if="status==2" color="blue-grey" @click="dialog1 = true"
                      >Lock<v-icon>mdi-lock</v-icon></v-btn
                    >
                    <v-btn v-if="status==2" color="blue-grey" @click="dialog2 = true"
                      >Deny <v-icon color="red">mdi-close-thick</v-icon></v-btn
                    >
                    </v-col
                  >
                </v-row></v-card
              >
            </div>
            <v-dialog
              class="grey lighten-2"
              v-model="dialog1"
              max-width="500px"
            >
              <v-card light class="grey lighten-2">
                <v-card-title>
                  <span class="headline">Are you sure!!!</span>
                </v-card-title>

                <v-card-text color="grey lighten-2">
                  <v-container grid-list-md class="grey lighten-2">
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <p>
                          Are you sure you want to lock this tender for this
                          project. You would not be able to change this after
                          this.
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="blue-grey" flat  @click= "tenderLocked(); dialog1 = false;" >Yes, Lock it <v-icon>mdi-lock</v-icon></v-btn
                  >
                  <v-btn color="blue-grey" flat @click="dialog1 = false"
                    >No, take me back
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
              <v-dialog
              class="grey lighten-2"
              v-model="dialog2"
              max-width="500px"
            >
              <v-card light class="grey lighten-2">
                <v-card-title>
                  <span class="headline">Are you sure!!!</span>
                </v-card-title>

                <v-card-text color="grey lighten-2">
                  <v-container grid-list-md class="grey lighten-2">
                    <v-layout wrap>
                      <v-flex xs12 sm12 md12>
                        <p>
                          Are you sure you want to deny this tender?
                        </p>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn color="blue-grey" flat  @click= "tenderDenied(); dialog2 = false" >Yes,I want to deny. </v-btn
                  >
                  <v-btn color="blue-grey" flat @click="dialog2 = false"
                    >No, take me back
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

                </v-col>
              </v-row></v-card
            >
            </v-col
                  >



        </v-row>
      </v-main>
    </v-app>
  </div>
</template>


<style>
.custom-highlight-row{
  background-color: rgb(249, 255, 192)
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
  data: () => ({
    dialog: false,
    dialog1: false,
    dialog2: false,
    name: "", //display
    prjStartDate: "", //display
    prjEndDate: "",
    tenderStartDate: "",
    expBudget: "", //display
    tenderEndDate: "", //display
    location: "",

    details: "",
    link: "",
    name1: "", //display
    prjStartDate1: "", //display
    prjEndDate1: "",
    tenderStartDate1: "",
    expBudget1: "", //display
    tenderEndDate1: "", //display
    location1: "",
    details1: "",
    link1: "",
    drawer: true,
    approved : 0,
    status : 0,

    Budget: "",
    timelineStart: "",
    timelineEnd: "",
    material: "",
    tender_id: "",
    project_id: "",
    contractor_id: "",
    contractor_name: "",
    past_projects: "",
    annual_report: "",
    selectedRow1: -1,
    selectedRow: -1,
    maximise: 12,
    items12: [
      { title: "Dashboard", icon: "mdi-home-city", to: "/govtDashboard" },
      {
        title: "Contractor",
        icon: "mdi-account",
        to: "/govtContracterDatabase",
      },
      { title: "Projects", icon: "mdi-bookshelf", to: "/govtProjects" },
    ],
    mini: false,
    headers: [
      {
        text: "Name",
        align: "left",
        sortable: true,
        value: "name",
      },
      { text: "Tender End Date", value: "tenderEndDate" },
      { text: "Budget", value: "expBudget" },

      { text: "Status", value: "status" },

    ],
  }),
  methods: {
    logoutfunc() {
      this.$router.push("/Logout");
    },
    async closeProject(){
      try{
        let data = {
          dialog: false,
          dialog1: false,
            name : this.name,
            prjStartDate : this.prjStartDate,
            prjEndDate : this.prjEndDate,
            tenderStartDate : this.tenderStartDate,
            tenderEndDate : this.tenderEndDate,
            expBudget : this.expBudget,
            location : this.location,
            details : this.details,
            link : this.link,
            tenders : this.tenders,
            status : 1,
        };
        let response = this.$axios.$put(
          `http://localhost:3000/api/projects/${this.project_id}`,
          data
        );
        if(response.success){
          this.$router.push('/govtProjects');
        }
      }catch(err){
        console.log(err);
      }
    },
    async openProject(){
      try{
        let data = {
            name : this.name,
            prjStartDate : this.prjStartDate,
            prjEndDate : this.prjEndDate,
            tenderStartDate : this.tenderStartDate,
            tenderEndDate : this.tenderEndDate,
            expBudget : this.expBudget,
            location : this.location,
            details : this.details,
            link : this.link,
            tenders : this.tenders,
            status : 0,
        };
        let response = this.$axios.$put(
          `http://localhost:3000/api/projects/${this.project_id}`,
          data
        );
        if(response.success){
          this.$router.push('/govtProjects');
        }
      }catch(err){
        console.log(err);
      }
    },
    async tenderLocked(){
      try{
        let data = {
            project_id : this.project_id,
            tender_id : this.tender_id,
        };
        console.log(data);
        let response = await this.$axios.$put(
          `http://localhost:3000/api/projectapprovegovt/`,
          data
        );
        console.log(response);
        if(response.success){
            this.$router.push('/govtProjects');
         }
      }catch(err){
        console.log(err);
      }
    },
    async tenderDenied(){
      try{
        let data = {
            project_id : this.project_id,
            tender_id : this.tender_id,
        };
        let response = await this.$axios.$put(
          `http://localhost:3000/api/projectdisapprovegovt/`,
          data
        );
        if(response.success){
          this.$router.push('/govtProjects');
        }
      }catch(err){
        console.log(err);
      }
    },
    rowSelect(idx) {
      //console.dir(idx)
      this.maximise=4;
      this.selectedRow = idx;
      this.expItem(this.projects[this.selectedRow]);
    },
    async expItem(item) {
      this.name = this.projects[this.projects.indexOf(item)].name;
      this.prjStartDate = this.projects[
        this.projects.indexOf(item)
      ].prjStartDate;
      this.prjEndDate = this.projects[this.projects.indexOf(item)].prjEndDate;
      this.tenderStartDate = this.projects[
        this.projects.indexOf(item)
      ].tenderStartDate;
      this.tenderEndDate = this.projects[
        this.projects.indexOf(item)
      ].tenderEndDate;
      this.expBudget = this.projects[this.projects.indexOf(item)].expBudget;
      this.location = this.projects[this.projects.indexOf(item)].location;
      this.details = this.projects[this.projects.indexOf(item)].details;
      this.link = this.projects[this.projects.indexOf(item)].link;
      this.status = this.projects[this.projects.indexOf(item)].status;
      this.project_id = this.projects[this.projects.indexOf(item)].final_tender.project_id;
      this.contractor_id = this.projects[this.projects.indexOf(item)].final_tender.contractor_id;
      this.Budget = this.projects[this.projects.indexOf(item)].final_tender.Budget;
      this.timelineStart = this.projects[this.projects.indexOf(item)].final_tender.timelineStart;
      this.timelineEnd = this.projects[this.projects.indexOf(item)].final_tender.timelineEnd;
      this.material = this.projects[this.projects.indexOf(item)].final_tender.material;
      this.approved = this.projects[this.projects.indexOf(item)].final_tender.approved;
      this.tender_id = this.projects[this.projects.indexOf(item)].final_tender._id;

      let response = await this.$axios.$get(
        `http://localhost:3000/api/users/${this.contractor_id}`
      );
      if (response) {
        this.contractor_name = response.user.name;
        this.past_projects = response.user.past_projects;
        this.annual_report = response.user.annual_report;
      }
    },
    async deleteItem(id,item){
      try{
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/projects/${id}`
        );
        if(response.success){
          this.$router.push('/govtProjects');
        }

      }catch(err){
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
          `http://localhost:3000/api/verify/govt`,
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
    async newProject(){
      try{
        let data = {
          name : this.name1,
          prjStartDate : this.prjStartDate1,
          prjEndDate : this.prjEndDate1,
          tenderStartDate : this.tenderStartDate1,
          tenderEndDate : this.tenderEndDate1,
          expBudget : this.expBudget1,
          location : this.location1,
          details : this.details1,
          link : this.link1,
          status : 0,
      };
       let response = await this.$axios.$post(
         `http://localhost:3000/api/projects/`,
          data);
        if(response.success){

          this.name1 = "";
          this.prjStartDate1 = "";
          this.prjEndDate1 = "";
          this.tenderStartDate1 = "";
          this.tenderEndDate1 = "";
          this.expBudget1 = "";
          this.location1 = "";
          this.details1 = "";
          this.link1 = "";
          this.projects.push(data);

      }
      }catch(err){
      console.log(err);
    }
    },
  },
  beforeMount() {
    this.verify();
  },
};
</script>

