<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <base-card
      color="rgba(203, 170, 92, 0.51)"
      class="pa-3"
    >
      <v-container
        grid-list-xl
        pa-0
      >
        <v-layout wrap>
          <v-flex
            xs12
            md5
          >
            <base-subheading class="mb-3">
              Subscribe
            </base-subheading>
            <p>
              Enter your email address to subscribe to this blog
              and receive notifications of new posts by email.
            </p>

            <v-layout
              wrap
              pa-2
            >
              <v-text-field
                solo
                hide-details
                style="max-width: 400px;"
              />
              <v-btn
                :block="$vuetify.breakpoint.xsOnly"
                class="ma-0"
                color="secondary"
                style="height: 48px"
              >
                Subscribe
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex
            xs12
            md6
            offset-md1
          >
            <base-subheading>Contact</base-subheading>
            <v-list class="transparent">
              <v-list-tile>
                <v-list-tile-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>EMAIL</v-list-tile-title>
                <v-list-tile-sub-title>
                  1139452801@qq.com
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>ADDRESS</v-list-tile-title>
                <v-list-tile-sub-title>
                  上海  浦东
                </v-list-tile-sub-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-avatar
                  color="primary"
                >
                  <v-icon
                    class="elevation-4"
                    dark
                  >
                    mdi-phone
                  </v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>PHONE</v-list-tile-title>
                <v-list-tile-sub-title>
                  +86-17695512329
                </v-list-tile-sub-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </base-card>
  </v-container>
</template>
