<template>
    <div>
       <v-container>
        <div class="px-8 mt-10">
            <v-card class="linergradiantcolor" height="701px" style="border-radius: 16px;border: 2px solid #E1E1E1;background: linear-gradient(180deg, #F2F2F2 0%, #FFF 100%);">
             <v-row>
                <v-col cols="6" class="">
                    <div class="mt-8 pl-12 pr-9">
                    <p style="color: #282828;font-family: Bookmania;font-size: 32px;font-style: normal;font-weight: 600;line-height: 24px;letter-spacing: -0.64px;">NPS Calculator</p>
                    <p class="mb-2 pt-6" style="">Principal amount</p>
                    <v-text-field class="rounded-xl elevation-0 " 
             label="Enter principal paid"
            placeholder="Enter principal paid"
            solo
            prefix="₹" type="number" flat hide-spin-buttons  v-model="amountvalue"
          >

        </v-text-field>
        <v-row>
            <v-col cols="9">
                <p class="my-auto">Interest Rate (p.a.)</p>
            </v-col>
            <v-col cols="3" class="pl-0">
                <v-text-field class="rounded-xl elevation-0 " 
             label="Enter principal paid"
            placeholder="Enter principal paid"
            solo
            suffix="%" type="number" dense flat hide-spin-buttons  v-model="amountvalue"
          >

        </v-text-field>
            </v-col>
        </v-row>
      
                </div>

                </v-col>
                <v-col cols="6">
<p>sjsh</p>
                </v-col>
             </v-row>
            </v-card>
          
        </div>
       </v-container>
    </div>
</template>
<script>
export default {
  data() {
    return {
        amountvalue:200000,
    };
  },

}
</script>

<style>
/* .linergradiantcolor {
    background-image: linear-gradient(#F2F2F2
, #FFFFFF);
} */
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) > .v-input__control > .v-input__slot { 
    padding-left:18px !important;
}
</style>