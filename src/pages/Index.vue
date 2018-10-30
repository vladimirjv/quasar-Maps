<template>
  <q-page class="flex column">
    <q-resize-observable @resize="onResizePage" />
    <q-window-resize-observable @resize="onResize" />
    <!-- <div class="row" id="square"></div> -->
    <div class="absolute-center">
      <div id="color"></div>
    </div>
    <div class="row flex justify-center q-my-xl gutter-y-sm fixed-bottom" >
      <div class="col-10">
        <q-btn
          id="btn"
          label="Ruta"
          color="green-5"
          size="lg"
          to="/ruta"
        />
      </div>
      <div class="col-10">
        <q-btn
          id="btn"
          label="Mapa"
          color="secondary"
          size="lg"
          to="/mapa"
        />
      </div>
    </div>


  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data(){
    return{
      width:0,
      height:0,
      content:{
        width:300,
        height:300,
        'background-color':'red',
      }
    }
  },
  methods:{
    onResize(size){
      this.width=size.width;
      this.height=size.height;
      console.log(this.height);
    },
    onResizePage(size){
      this.content.width=size.width;
      this.content.height=size.height;
      console.log(this.content.height);
    },
  },
  mounted() {
    // this.content.width=window.innerWidth;
    // this.content.height=(window.innerHeight-50);
  },
}
</script>
 <style scoped>
  #btn{
    width:100%;
  }
  #btn-container{
    margin-botton:0 0 0 20%;
  }
  #color{
    width: 300;
    height: 300;
    background-color: red;
  }
 </style>
