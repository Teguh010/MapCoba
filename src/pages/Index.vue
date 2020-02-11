<template>
  <q-layout view="lHh Lpr lFf">
    <div>
      <q-page-sticky class="tombolsticky" position="top-left" :offset="[18, 18]">
        <div v-if="!dialog">
          <q-btn
            round
            color="white"
            class="text-orange"
            icon="keyboard_arrow_left"
            v-go-back.single
          />
        </div>
      </q-page-sticky>
      <q-page-sticky class="tombolsticky" position="top-right" :offset="[18, 18]">
        <q-btn-dropdown
          dense
          class="tombolsamping text-capitalize text-black"
          rounded
          color="white"
          :label="label"
          dropdown-icon="change_history"
        >
          <q-list>
            <q-item clickable v-close-popup @click="label = 'Google Maps'" :label="label">
              <q-item-section>
                <q-item-label @click="onItemClick">Google Maps</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="label = 'OSM'" :label="label">
              <q-item-section>
                <q-item-label @click="onItemClick">OSM</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="label = 'Google Hybryd'" :label="label">
              <q-item-section>
                <q-item-label @click="onItemClick">Google Hybrid</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-page-sticky>

      <div class="gmap" id="map"></div>

      <q-footer class="q-pt-md bg-teal-1">
        <div class="innerfooter">
          <q-input
            borderless
            @click="open('bottom')"
            class="inputsip"
            v-model="text"
            placeholder="Cari Nopol Anda"
            dense
          >
            <template v-slot:prepend>
              <q-icon class="q-ma-sm" dense name="search" size="21px" />
            </template>
          </q-input>
        </div>

        <div class="row q-gutter-sm q-ml-md text-center q-mb-md q-mt-md">
          <q-btn
            class="tombolbawah bg-black text-caption text-capitalize"
            rounded
            label="engin ON"
          />
          <q-btn
            class="tombolbawah bg-black text-caption text-capitalize"
            rounded
            label="engin OFF"
          />
          <q-btn
            glossy
            class="tombolbawah bg-orange-8 text-caption text-capitalize shadow-8"
            rounded
            label="playback"
          />
        </div>
      </q-footer>
      <div>
        <q-dialog v-model="dialog" :position="position">
          <div class="q-pl-md q-pb-md">
            <q-btn
              round
              color="white"
              class="text-orange"
              icon="keyboard_arrow_left"
              v-go-back.single
            />
          </div>
          <div class="banner-cari">
            <q-banner class="bg-grey-3">
              <div style="text-align: center;">
                <q-btn size="15px" icon="menu" dense flat v-close-popup></q-btn>
              </div>
              <div style="text-align: center;">
                <span class="text-bold">List Tracking Gue</span>
              </div>
              <div class="q-pr-lg q-pl-lg q-pa-md">
                <q-input
                  autofocus
                  class="inputsip"
                  borderless
                  dense
                  color="orange"
                  v-model="text"
                  placeholder="Cari Nopol Kendaraan"
                >
                  <template v-slot:prepend>
                    <q-icon name="place" color="orange" class="q-pa-md" />
                  </template>
                  <template v-slot:append>
                    <q-icon class="q-pa-md" name="search" />
                  </template>
                </q-input>
              </div>
            </q-banner>
          </div>

          <q-card class="bg-grey-3 kartuku full-width">
            <q-list>
              <listtrackingmotor v-for="list in listtracking" :list="list" :key="list.id" />
            </q-list>
            <!-- <div class="fixed-bottom text-left q-mb-lg q-ml-lg">
              <q-btn rounded size="10px" color="black" label="back" icon="keyboard_arrow_left" />
            </div>-->
          </q-card>
        </q-dialog>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      listtracking: [
        {
          id: 1,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 2,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 3,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 4,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 5,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 6,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 7,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 12,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 8,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 9,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 10,
          name: "D 8730 FJ (EXP.01-12-2019)"
        },
        {
          id: 11,
          name: "D 8730 FJ (EXP.01-12-2019)"
        }
      ],
      text: "",

      dialog: true,
      position: "bottom",
      label: "Google Maps",
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
      text: "",
      lat: -6.737246,
      lng: 108.550659
    };
  },

  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 90,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false,
        fullscreenControl: false
      });
    },
    onItemClick() {
      console.log("Clicked on an Item");
    },
    open(position) {
      this.position = position;
      this.dialog = true;
    }
  },
  mounted() {
    this.renderMap();
  },
  components: {
    listtrackingmotor: require("pages/ListTrackingMotor.vue").default
  }
};
</script>

<style lang="scss" scoped>
.gmap {
  height: 100%;
  width: 100%;
  top: 0;

  position: relative;
  padding-bottom: 155%;
}
.tombolsticky {
  position: absolute;
  z-index: 1;
}
.innerfooter {
  margin-left: 18%;
  margin-right: 18%;
}
.tombolbawah {
  width: 30%;
}
.tombolatas {
  width: 80px;
}
.tombolsamping {
  width: 140px;
}
.inputsip {
  height: 35px;
  background: white;
  border-radius: 9px;
  border: 1.5px solid orange;
}
.kartuku {
  height: 520px;
  padding-top: 0px;
  border-radius: 0px;
}
.banner-cari {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
@media only screen and (max-width: 375px) and (height: 812px) {
  .gmap {
    height: 100%;
    width: 100%;
    top: 0;

    position: relative;
    padding-bottom: 190%;
  }
}
@media only screen and (height: 568px) {
  .kartuku {
    height: 350px;
    padding-top: 0px;
    border-radius: 0px;
  }
}
@media only screen and (height: 667px) {
  .kartuku {
    height: 450px;
    padding-top: 0px;
    border-radius: 0px;
  }
}
@media only screen and (height: 812px) {
  .kartuku {
    height: 600px;
    padding-top: 0px;
    border-radius: 0px;
  }
}
@media only screen and (height: 640px) {
  .kartuku {
    height: 430px;
    padding-top: 0px;
    border-radius: 0px;
  }
}
@media only screen and (height: 731px) {
  .kartuku {
    height: 520px;
    padding-top: 0px;
    border-radius: 0px;
  }
}
@media only screen and (height: 823px) {
  .kartuku {
    height: 610px;
    padding-top: 0px;
    border-radius: 0px;
  }
  .gmap {
    height: 100%;
    width: 100%;
    top: 0;

    position: relative;
    padding-bottom: 175%;
  }
}
</style>
