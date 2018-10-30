<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->
    <!-- (Optional) The Header -->
    <q-layout-header>

      <q-toolbar
        color="green-7"
      >
        <q-btn
          flat
          round
          dense
          icon="menu"
        />
        <q-toolbar-title>
          Header
          <!-- <span slot="subtitle">Subtile</span> -->
        </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs>
        <q-route-tab
          slot="title"
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->

    </q-layout-header>

    <!-- content -->
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
