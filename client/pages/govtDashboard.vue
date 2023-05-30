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

      <v-main class="grey lighten-2 ml-4">
        <v-row class="mt-0">
          <v-col cols="12" class="text-center"
            ><p class="blue-grey--text text-h2">Welcome to PWD Prayagraj</p>
          </v-col>
          <v-col cols="4">
            <v-card class="pa-5 white--text blue-grey text-h5"
              >News and Updates</v-card
            >
            <v-card
              class="mx-auto transparent ml-4 mt-4 pt-4"
              dark
              elevation="0"
              min-height="50"
              flat
            >
              <div v-for="(item, i) in news" :key="i" class="pl-5 pr-5">
                <v-card class="transparent" elevation="0" light>
                  <v-card
                    elevation="0"
                    color="transparent"
                    :href="'http://' + item.src"
                    class="black--text pl-5"
                    ><div>{{ item.title }}</div></v-card
                  >
                </v-card>
                <v-card class="blue-grey mt-5 mb-5" height="2px"></v-card>

              </div>
            </v-card>
          </v-col>

          <v-col cols="8">
            <v-card class="pa-5 white--text blue-grey text-h5"
              >Announcements</v-card
            >
            <v-container class="grey lighten-2">
              <v-card class="grey lighten-3 rounded-ls" elevation="0">
                <div>
                  <v-toolbar flat color="grey lighten-2">
                    <v-divider class="mx-2" inset vertical></v-divider>

                    <v-text-field
                      light
                      v-model="search"
                      append-icon="mdi-magnify"
                      label="Search"
                      single-line
                      hide-details
                      color="blue-grey"
                    ></v-text-field>

                    <v-dialog
                      class="grey lighten-2"
                      v-model="dialog"
                      max-width="500px"
                    >
                      <v-btn
                        slot="activator"
                        color="blue-grey"
                        dark
                        class="mb-2 ml-2"
                        @click="dialog = true"
                        >New Item<v-icon>mdi-pencil-plus</v-icon></v-btn
                      >
                      <v-card light class="grey lighten-2">
                        <v-card-title>
                          <span class="headline">Edits</span>
                        </v-card-title>

                        <v-card-text color="grey lighten-2">
                          <v-container grid-list-md class="grey lighten-2">
                            <v-layout wrap>
                              <v-flex xs12 sm12 md12>
                                <v-text-field
                                  v-model="title"
                                  label="Title"
                                  class="grey lighten-2"
                                  color="black"
                                ></v-text-field>
                              </v-flex>
                              <v-flex xs12 sm12 md12>
                                <v-textarea
                                  outlined
                                  v-model="description"
                                  color="blue-grey"
                                >
                                </v-textarea>
                              </v-flex>
                            </v-layout>
                          </v-container>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <!--<v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>-->
                          <v-btn
                            color="cyan darken-1"
                            flat
                            @click.native="onAddAnnouncement"
                            >Save</v-btn
                          >
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                  <v-spacer></v-spacer>

                  <v-container class="grey lighten-2">
                    <v-data-table
                      light
                      :headers="headers"
                      :items="announcementcards"
                      :search="search"
                      hide-actions
                      class="grey lighten-2"
                    >
                      <template #item.edit="{ item }" min-width="50%">
                        <v-icon
                          x-large
                          class="mr-2"
                          color="blue-grey"
                          @click="editItem(item)"
                        >
                          mdi-pencil
                        </v-icon>

                        <v-icon
                          x-large
                          color="red"
                          @click="
                            deleteItem(
                              announcementcards[announcementcards.indexOf(item)]
                                ._id,
                              item
                            )
                          "
                        >
                          mdi-delete
                        </v-icon>

                        <btn> </btn>
                      </template>
                    </v-data-table>
                  </v-container>
                </div>
              </v-card>
            </v-container>
          </v-col>
          <v-col cols="12" class="text-center"
            ><p class="blue-grey--text text-h4">Projects</p>
          </v-col>

          <v-col cols="3" v-for="item in desktop" :key="item"
            ><v-card
              class="mx-auto blue-grey lighten-1"
              max-width="344"
              href="http://uppwd.gov.in/"
            >
              <v-img :src="item.img" height="125"></v-img>

              <v-card-title>
                {{ item.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ item.text }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get(
        "http://localhost:3000/api/announcementcards"
      );

      return {
        announcementcards: response.announcementcards,
      };
    } catch (err) {}
  },
  data: () => ({
    drawer: true,
    desktop: [
      {
        img:
          "https://www.mumbailive.com/images/media/images/images_1588162734983_national_highway.jpg?bg=d5e3e9&crop=512%2C384%2Cnull%2C0&fit=fill&fitToScale=h%2C1368%2C768&h=432.2807017543859&height=384&w=770&width=512",
        text:
          "Construction of road to mohalla kullah ward no . 4 lower bhalwal , kanger mishriwala road",
        title: "Road Construction",
      },
      {
        img:
          "http://www.kinfratech.com/wp-content/uploads/2016/07/roadworks2.jpg",
        text:
          "Construction/upgradation of roads under pradhan mantri gram sadak yojana and their maintenance for five years of potrel to mv - 37 via old chitapari, mv - 108",
        title: "Road Construction",
      },
      {
        img:
          "https://3.imimg.com/data3/IQ/WI/MY-924799/building-works-500x500.jpg",
        text:
          "Tender for term contract ( building ) 2021-22 term contract ( building ) 2021-22",
        title: "Building Construction",
      },
      {
        img:
          "https://images.newindianexpress.com/uploads/user/imagelibrary/2017/11/5/w600X300/Govtlkji.jpg",
        text:
          "Tender for term contract (school building) 2021-22 term contract ( school building ) 2021-22",
        title: "Building Construction",
      },
      {
        img:
          "https://gumlet.assettype.com/freepressjournal%2F2020-01%2Fddfa26c6-1388-4470-b16d-a71b26db227f%2Fcats.jpg?w=1200",
        text:
          "Construction of medical college campus for 100 mbbs admission annually and modification in existing govt. hospital into teaching hospital as per applicable mci / nmc norms at rudrapur, uttarakhand",
        title: "Building Construction",
      },
      {
        img:
          "http://grossreservoir.org/wp-content/uploads/2018/08/101817-Raising-the-Dam-36-x-24-009-1.jpg",
        text:
          "Construction of upper narmada project on narmada river on turn key basis including construction of dam and 45600 ha cca micro irrigation system up to 2 . 5 ha chak of 0 . 35 lps/ha in district dindori and anuppur including scada work as per detail scope",
        title: "Dam Construction",
      },
      {
        img:
          "https://static.theprint.in/wp-content/uploads/2020/03/Railway-construction-696x392.jpg",
        text:
          "C01422-biennial maintenance of rail track at railway siding ntpc solapur c01422-biennial maintenance of rail track at railway siding ntpc solapur",
        title: "Railway Construction",
      },
      {
        img:
          "https://assets-news.housing.com/news/wp-content/uploads/2018/09/24202353/Construction-of-elevated-flyover-on-Gurugram-Alwar-Road-to-begin-from-September-21-2018-FB-1200x628-compressed.jpg",
        text:
          "Construction of flover on nagpur amravati road nh53 in nagpur city. Total of 1453 km long 4 lane massive highway with 3 toll gates in between states.",
        title: "Highway Construction",
      },
    ],
    news: [
      {
        src:
          "https://mib.gov.in/sites/default/files/Tender%20Invite%20for%20maintenance%20%26%20enhancements%20of%20CBFCs%20Application%20Portal%2C%20Website%20%26%20development%20of%20Mobile%20App%20%E2%80%93%20Request%20for%20uploading%20RFP%20on%20Ministry%E2%80%99s%20website.pdf",
        title:
          "Tender Invite for maintenance & enhancements of CBFC's Application Portal, Website & development of Mobile App",
      },
      {
        src:
          "https://mib.gov.in/sites/default/files/PublicationsDivision061120.pdf",
        title: "Empanelment of Zonal marketing Distribution Agencies (ZMDAs)	",
      },
      {
        src:
          "https://mib.gov.in/sites/default/files/TenderObsolteArticles%20%281%29.pdf",
        title: "Tender-Condemnation of Obsolete Articles	",
      },
      {
        src:
          "https://mib.gov.in/sites/default/files/ShortTermTenderCatering.pdf",
        title: "Tender for provisioning of dinner at the residence of HMIB",
      },
      {
        src: "https://mib.gov.in/sites/default/files/ShortTermTenderTent_0.pdf",
        title:
          "Tender for provisioning of Tent and related items at the residence of HMIB",
      },
    ],
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
    search: "",

    headers: [
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title",
      },
      { text: "Description", value: "description", align: "left" },
      { text: "Actions", value: "edit", sortable: false, align: "left" },
    ],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: 0,
    },
    defaultItem: {
      title: "",
      description: 0,
    },
    dialog: false,
    edt: 0,
    title: "",
    ide: "",
    description: "",
    ind: "",
  }),
  methods: {
    logoutfunc() {
      this.$router.push("/Logout");
    },
    editItem(item) {
      this.edt = 1;
      this.title = this.announcementcards[
        this.announcementcards.indexOf(item)
      ].title;
      this.description = this.announcementcards[
        this.announcementcards.indexOf(item)
      ].description;
      this.ind = this.announcementcards.indexOf(item);
      this.dialog = true;
    },

    async deleteItem(id, item) {
      const index = this.announcementcards.indexOf(item);

      //confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/announcementcards/${id}`
        );
        console.log(response);
        if (response.status) {
          this.announcementcards.splice(index, 1);
        }
      } catch (err) {}
    },

    async onAddAnnouncement() {
      if (this.edt === 1) {
        this.ide = this.announcementcards[this.ind]._id;
        let data = {
          title: this.title,
          description: this.description,
        };
        let result = await this.$axios.$put(
          `http://localhost:3000/api/announcementcards/${this.ide}`,
          data
        );
        this.dialog = false;
        this.announcementcards[this.ind].title = this.title;
        this.announcementcards[this.ind].description = this.description;
        this.edt = 0;
      } else {
        try {
          console.log(this.title);
          console.log(this.description);

          let data = {
            title: this.title,
            description: this.description,
          };
          let response = await this.$axios.$post(
            "http://localhost:3000/api/announcementcards",
            data
          );
          this.announcementcards.push(data);
          this.title = "";
          this.description = "";
        } catch (err) {
          console.log(err);
        }
      }
      //this.dialog=false;
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
  },
  beforeMount() {
   this.verify();
  },
};
</script>
