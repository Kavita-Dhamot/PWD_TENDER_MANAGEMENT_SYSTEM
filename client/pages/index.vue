
<template>
  <div class="index">
    <div id="app" class="index back">
      <v-app app id="inspire">
        <v-app-bar height="100px" app color="semi-transparent">
          <div class="ml-2 mt-4">
            <vuetify-logo />
          </div>
          <v-toolbar-title
            class="text-h4 white--text text-lighten-1 font-weight-light"
            >PWD PORTAL</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn class="white black--text ml-2" elevation="0" href="/">
            Home
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Register">
            Sign Up
          </v-btn>
          <v-btn class="transparent ml-2" elevation="0" href="/Login">
            Login
          </v-btn>
        </v-app-bar>
        <v-content>
          <v-container grid-list-lg>
            <v-row>
              <v-col cols="12">
                <v-card class="mx-auto white" min-height="100" flat>
                  <v-card-text
                    class="text-h1 blue-grey--text text-lighten-1 font-weight-black pa-5 mt-10"
                  >
                    PWD PORTAL
                    <p class="text-h2 success--text font-weight-light">
                      Tender Management Portal
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-auto white pa-4" min-height="100" flat>
                  <ul
                    class="transparent pa-2 mt-4"
                    v-for="item in quicklinks"
                    :key="item"
                  >
                    <v-card elevation="0" rounded-lg light>
                      <v-row>
                        <v-col cols="6" class="pa-5"
                          ><v-img
                            class="rounded-circle"
                            height="150px"
                            width="150px"
                            :src="item.src"
                          ></v-img
                        ></v-col>
                        <v-col cols="6"
                          ><p class="text-h5 blue-grey--text">
                            {{ item.name }}
                          </p>
                          <p>{{ item.details }}</p></v-col
                        >
                      </v-row>
                    </v-card>
                    <!-- <v-card
                :href="'http://' + item.link"
                target="_blank"
                class="pa-2 blue-grey lighten-2"
                dark
                >{{ item.title }}
              </v-card> -->
                  </ul>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card class="mx-auto white" min-height="100" flat>
                  <v-card-text
                    class="font-weight-light text-h4 blue-grey--text text-lighten-1 pa-5"
                  >
                    WELCOME TO PWD PRAGYARAJ PORTAL
                  </v-card-text>
                  <p class="pa-5 black--text">
                    The Public Works Department conducts the construction,
                    improvement, strengthening and maintenance of roads and
                    bridges. The responsibility of construction of certain
                    buildings of the state government and their maintenance is
                    also upon this department. The department undertakes the
                    maintenance of National Highways passing through Uttar
                    Pradesh which are not covered by the National Highways
                    Authority for which funds are provided by the Government of
                    India. The task of monitoring the works under different
                    schemes and ensuring high quality of work has been assigned
                    to 18 zonal Chief Engineers.
                  </p>

                  <v-carousel
                    cycle
                    height="250"
                    hide-delimiter-background
                    show-arrows-on-hover
                    class="pa-5"
                  >
                    <v-carousel-item v-for="(slide, i) in slides123" :key="i">
                      <v-row>
                        <v-col cols="6">
                          <v-img min-height="250px" :src="slide.src"></v-img>
                        </v-col>
                        <v-col cols="6">
                          <div vertical layout>
                            <div class="text-h4 black--text">
                              {{ slide.title }}
                            </div>
                            <div class="text-h6 red--text">
                              <p>{{ slide.text }}</p>
                            </div>
                          </div>
                        </v-col>
                      </v-row>
                    </v-carousel-item>
                  </v-carousel>
                  <v-card
                    class="green mt-5 mb-5 ml-5 mr-5"
                    height="5px"
                  ></v-card>
                  <v-row>
                    <v-col cols="6">
                      <v-card
                        class="mx-auto white ml-4"
                        dark
                        elevation="4"
                        min-height="50"
                        flat
                      >
                        <p class="pa-5 green--text text-h5">News and Updates</p>
                        <ul
                          v-for="(item, i) in news"
                          :key="i"
                          class="pl-5 pr-5"
                        >
                          <li>
                            <v-card
                              class="green mt-5 mb-5"
                              height="2px"
                            ></v-card>
                            <v-card
                              elevation="0"
                              color="transparent"
                              :href="'http://' + item.src"
                              class="black--text pl-5"
                              ><div>{{ item.title }}</div></v-card
                            >
                          </li>
                        </ul>
                      </v-card>
                    </v-col>
                    <v-col cols="6"> </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>





<style scoped>
body {
  overflow: hidden;
  height: 100vh;
}
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
  background-image: url("https://ra5put1n.blob.core.windows.net/internship-portal/website-images/admin.jpg");
  background-position-y: center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}
.brand {
  position: fixed;
}
.swipe-move {
  transition: all 0.3s;
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

  data: () => ({
    headers: [
      {
        text: "Title",
        align: "left",
        sortable: true,
        value: "title",
      },
      { text: "Description", value: "description", align: "left" },
      //{ text: "Actions", value: "edit", sortable: false, align: "left" },
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
      { src: "", title: "" },
    ],
    slides123: [
      {
        src:
          "https://www.mumbailive.com/images/media/images/images_1588162734983_national_highway.jpg?bg=d5e3e9&crop=512%2C384%2Cnull%2C0&fit=fill&fitToScale=h%2C1368%2C768&h=432.2807017543859&height=384&w=770&width=512",
        text:
          "Construction of road to mohalla kullah ward no . 4 lower bhalwal , kanger mishriwala road",
        title: "Road Construction",
      },
      {
        src:
          "http://www.kinfratech.com/wp-content/uploads/2016/07/roadworks2.jpg",
        text:
          "Construction/upgradation of roads under pradhan mantri gram sadak yojana and their maintenance for five years of potrel to mv - 37 via old chitapari, mv - 108",
        title: "Road Construction",
      },
      {
        src:
          "https://3.imimg.com/data3/IQ/WI/MY-924799/building-works-500x500.jpg",
        text:
          "Tender for term contract ( building ) 2021-22 term contract ( building ) 2021-22",
        title: "Building Construction",
      },
      {
        src:
          "https://images.newindianexpress.com/uploads/user/imagelibrary/2017/11/5/w600X300/Govtlkji.jpg",
        text:
          "Tender for term contract (school building) 2021-22 term contract ( school building ) 2021-22",
        title: "Building Construction",
      },
      {
        src:
          "https://gumlet.assettype.com/freepressjournal%2F2020-01%2Fddfa26c6-1388-4470-b16d-a71b26db227f%2Fcats.jpg?w=1200",
        text:
          "Construction of medical college campus for 100 mbbs admission annually and modification in existing govt. hospital into teaching hospital as per applicable mci / nmc norms at rudrapur, uttarakhand",
        title: "Building Construction",
      },
      {
        src:
          "http://grossreservoir.org/wp-content/uploads/2018/08/101817-Raising-the-Dam-36-x-24-009-1.jpg",
        text:
          "Construction of upper narmada project on narmada river on turn key basis including construction of dam and 45600 ha cca micro irrigation system up to 2 . 5 ha chak of 0 . 35 lps/ha in district dindori and anuppur including scada work as per detail scope",
        title: "Dam Construction",
      },
      {
        src:
          "https://static.theprint.in/wp-content/uploads/2020/03/Railway-construction-696x392.jpg",
        text:
          "C01422-biennial maintenance of rail track at railway siding ntpc solapur c01422-biennial maintenance of rail track at railway siding ntpc solapur",
        title: "Railway Construction",
      },
      {
        src:
          "https://assets-news.housing.com/news/wp-content/uploads/2018/09/24202353/Construction-of-elevated-flyover-on-Gurugram-Alwar-Road-to-begin-from-September-21-2018-FB-1200x628-compressed.jpg",
        text:
          "Construction of flover on nagpur amravati road nh53 in nagpur city. Total of 1453 km long 4 lane massive highway with 3 toll gates in between states.",
        title: "Highway Construction",
      },
    ],
    dialog: true,

    clipped: false,
    drawer: true,
    fixed: false,
    quicklinks: [
      {
        name: "Yogi Adityanath",
        details: "Hon’ble Chief Minister of Uttar Pradesh ",
        title: "Title1",
        link: "www.google.com",
        src:
          "http://uppwd.gov.in/site/writereaddata/siteContent/201905281159150225CMSir.jpg",
      },
      {
        name: "Shri Keshav Prasad Maurya",
        details: "Hon’ble Dy.Chief Minister and PWD Minister",
        title: "Title1",
        link: "www.google.com",
        src:
          "http://uppwd.gov.in/site/writereaddata/siteContent/201905281148308169PwdMini.jpg",
      },
      {
        name: "Shri Chandrika Prasad Upadhyay",
        details: "Hon'ble State Minister, PWD",
        title: "Title1",
        link: "www.google.com",
        src:
          "http://uppwd.gov.in/site/writereaddata/siteContent/201908271346225031CPU-1.jpg",
      },
      {
        name: "Shri Nitin Ramesh Gokarn",
        details: "Principal Secretary",
        title: "Title1",
        link: "www.google.com",
        src:
          "http://uppwd.gov.in/site/writereaddata/siteContent/201810091155185771PrSecycurrent.jpg",
      },
      {
        name: "Shri Suresh Pratap Singh",
        details: "Engineer-in-Chief (Development) & HOD",
        title: "Title1",
        link: "www.google.com",
        src:
          "http://uppwd.gov.in/site/writereaddata/siteContent/Images/202104011147400945Sureshpratapsingh.jpg",
      },
    ],
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
    title: "IIIT INTERNSHIP PORTAL",
  }),

  methods: {},
};
</script>
