<template>
  <base-card dark>
    <v-img
      class="grey lighten-2"
      height="400"
      width="100%"
      :src="require('@/assets/articles/blurcamera.jpg')"
    >
      <v-layout
        fill-height
        align-center
        pa-3
      >
        <v-flex
          xs12
          md7
          offset-md5
        >
          <h1 class="display-3 font-weight-light">
            The Art Of Travel
          </h1>
          <div class="subheading text-uppercase pl-2 mb-4">
            在科学的道路上,是没有平坦的大路可走的,只有在那崎岖小路上攀登的不畏劳苦的人们,才有希望到达光辉的顶点。
          </div>
          <!-- <v-btn
            color="primary"
            depressed
            round
          >
            Subscribe
          </v-btn> -->
        </v-flex>
      </v-layout>
    </v-img>
  </base-card>
</template>
