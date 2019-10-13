<template>
  <v-footer
    class="py-4"
    dark
    height="auto"
  >
    <v-container mx-auto>
      <v-layout wrap>
        <v-flex xs9>
          <base-btn
            v-for="(item, i) in items"
            :key="i"
            :href="item.href"
            class="ml-0 mr-3"
            color="primary"
            square
            target="_blank"
          >
            <v-icon v-text="item.icon" />
          </base-btn>
        </v-flex>
        <v-spacer />
        <base-btn
          class="mr-0"
          square
          title="Go to top"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-twitter'
        },
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-instagram'
        },
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-facebook'
        },
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-google-plus'
        },
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-reddit'
        },
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-discord'
        },
        {
          href: 'https://github.com/qianxiaoxiong/theme-blog',
          icon: 'mdi-pinterest'
        }
      ]
    })
  }
</script>
