<template>
    <v-carousel show-arrows="hover" hide-delimiters height="600px" cycle interval="10000">
        <v-carousel-item src="@/assets/images/market1.jpg" cover>
            <div class="overlay-content">
                <h1 class="overlay-title">Las mejores ofertas en vinos</h1>
                <p class="overlay-text">Hasta 25% off</p>
            </div>
        </v-carousel-item>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover>
            <div class="overlay-content">
                <h1 class="overlay-title">Equipa tu cama</h1>
                <p class="overlay-text">Con colchas y esas cosas supongo</p>
            </div>
        </v-carousel-item>
        <v-carousel-item src="@/assets/images/market2.jpg" cover>
            <div class="overlay-content">
                <h1 class="overlay-title">Semana de descuentos</h1>
                <p class="overlay-text">En ropas y seleccionados y alguna otra oferta que se me ocurra</p>
            </div>
        </v-carousel-item>
    </v-carousel>
</template>

<style scoped>
.overlay-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}

.overlay-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.overlay-text {
  margin: 0;
  font-size: 16px;
}
</style>