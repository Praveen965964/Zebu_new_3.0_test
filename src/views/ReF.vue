<template>
  <v-container class="px-0" fluid>
    <v-data-table
      :headers="headerasdfdss"
      :items="desserts"
      class="elevation-1"
    >
      <!-- <template v-slot:item.glutenfree="{ item }"> -->
        <template v-slot:[`item.calories`] ="{ sdfghjhgfds }">
       
              <v-switch v-model="aaaaaa">{{ sdfghjhgfds }}</v-switch>
          </template>


        <template v-slot:[`item.glutenfree`]="{ item }">
        <v-simple-checkbox
          v-model="item.glutenfree"
          disabled
        ></v-simple-checkbox>
      </template>
    </v-data-table>
      <v-data-table :headers="headers" :items="listItems" class="elevation-2">
          <template slot="item.switch" slot-scope="{ item }">
              <v-switch v-model="item.switch"></v-switch>
          </template>
          <template slot="item.checkbox" slot-scope="{ item }">
              <v-checkbox v-model="item.switch" :label="item.switch"></v-checkbox>
          </template>
      </v-data-table>
  </v-container>
</template>

<script>
  export default {
      props: ["car"],
      data() {
          return {
            aaaaaa:false,
            desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1,
            glutenfree: true,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1,
            glutenfree: false,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7,
            glutenfree: false,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0,
            glutenfree: true,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2,
            glutenfree: true,
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6,
            glutenfree: false,
          },
        ],
        headerasdfdss: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
          { text: 'Gluten-Free', value: 'glutenfree' },
        ],
              switch1: true,
              listItems: [
                  { label: 0, switch: false },
                  { label: 1, switch: true },
                  { label: 2, switch: true }
              ],
              headers: [
                  { text: 'Label', sortable: false, value: 'label' },
                  { text: 'Switch', sortable: false, value: 'switch' },
                  { text: 'Checkbox', sortable: false, value: 'checkbox' },
              ]
          }
      },

      methods: {
      },
  };
</script>
