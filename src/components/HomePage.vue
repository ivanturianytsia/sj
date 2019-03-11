<template lang="html">
  <div class="container">
    <button class="btn btn--start" @click="onStartClick()">
      <span v-if="!cards.length">Start</span>
      <!-- <span v-else>Re-start</span> -->
      <span v-else>{{ timeStr }}</span>
    </button>
    <div class="content">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="{
          'card': true,
          'card--active': card.active || selected === index || preview === index
        }"
        @click="onCardClick(index)">
        <div class="card__face card__face--front">
          <span class="card__logo">SJ</span>
        </div>
        <div class="card__face card__face--back">
          <img class="card__image" :src="card.imageSrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxPairs: 9,
      maxTimer: 90,
      items: [
        { imageSrc: require('../assets/images/items/drop1-sunglasses (1).jpg') },
        { imageSrc: require('../assets/images/items/large-logo-printed-blanket.jpg') },
        { imageSrc: require('../assets/images/items/in-lang-we-trust-hooded-sweatshirt.jpg') },
        { imageSrc: require('../assets/images/items/new-warriors-t-shirt.jpg') },
        { imageSrc: require('../assets/images/items/project-t-shirt.jpg') },
        { imageSrc: require('../assets/images/items/no-problemo-tie-dye-t-shirt (1).jpg') },
        { imageSrc: require('../assets/images/items/kaw-vs-slippers.jpg') },
        { imageSrc: require('../assets/images/items/gui-gilet-vest.jpg') },
        { imageSrc: require('../assets/images/items/daisy-wordmark-hooded-sweatshirt.jpg') },
        { imageSrc: require('../assets/images/items/crewneck-sweatshirt.jpg') },
        { imageSrc: require('../assets/images/items/depa-ecs-sandals.jpg') },
        { imageSrc: require('../assets/images/items/wmns-popper-pants.jpg') },
        { imageSrc: require('../assets/images/items/western-shirt.jpg') },
        { imageSrc: require('../assets/images/items/cocktail-shirt.jpg') },
        { imageSrc: require('../assets/images/items/tie-dye-socks.jpg') },
        { imageSrc: require('../assets/images/items/1000-keith-haring-2.jpg') },
        { imageSrc: require('../assets/images/items/hawaiian-shirt.jpg') },
        { imageSrc: require('../assets/images/items/duck-new-era-cap.jpg') },
        { imageSrc: require('../assets/images/items/cn-knit.jpg') },
        { imageSrc: require('../assets/images/items/wmns-woven-swoosh-jacket.jpg') },
        { imageSrc: require('../assets/images/items/lover-hooded-sweatshirt.jpg') },
        { imageSrc: require('../assets/images/items/drop1-sunglasses.jpg') }
      ],
      cards: [],
      selected: null,
      preview: null,
      time: null
    }
  },
  computed: {
    selectedCard () {
      if (!this.selected) { return null }
      return this.cards[this.selected] || null
    },
    timeStr () {
      if (this.time === null) { return null }
      let minutes = Math.floor(this.time / 60)
      let seconds = this.time % 60
      if (`${seconds}`.length === 1) {
        seconds = `0${seconds}`
      }
      return `${minutes}:${seconds}`
    }
  },
  methods: {
    _generateCards () {
      // Make sure no overflow
      if (this.maxPairs > this.items.length) {
        this.maxPairs = this.items.length
      }

      const startIndex = Math.floor(Math.random() * this.items.length)

      let selectedPairs = [...this.items, ...this.items].slice(startIndex, startIndex + this.maxPairs)
      selectedPairs = [...selectedPairs, ...selectedPairs]
      selectedPairs = selectedPairs.map(item => {
        return { ...item, active: false }
      })

      this.cards = this._shuffle(selectedPairs)

      this._runTimer()
      window.setTimeout(() => {
        this._reset()
      }, this.maxTimer * 1000)
    },
    _shuffle (items) {
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const x = items[j]
        items[j] = items[i]
        items[i] = x
      }
      return items
    },
    _reset () {
      this.start = null
      this.selected = null
      this.preview = null
      this.cards = []
    },
    onCardClick (index) {
      if (this.preview || index === this.selected) { return }
      if (!this.selected) {
        this.selected = index
        return
      }
      if (this.selectedCard && this.cards[index] && this.selectedCard.imageSrc === this.cards[index].imageSrc) {
        this.cards[this.selected].active = true
        this.cards[index].active = true
        this.selected = null
        return
      }
      this.preview = index
      window.setTimeout(() => {
        this.selected = null
        this.preview = null
      }, 1000)
    },
    onStartClick () {
      this._reset()
      window.setTimeout(() => {
        this._generateCards()
      })
    },
    _runTimer () {
      const run = () => {
        if (this.time <= 0) { return }
        window.setTimeout(() => {
          this.time = this.time - 1
          run()
        }, 1000)
      }
      this.time = this.maxTimer
      run()
    }
  }
}
</script>

<style lang="scss" scoped>

$card-width: 15rem;
$card-gap: 1rem;

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.content {
  display: flex;
  flex-wrap: wrap;
  padding: $card-gap;
  width: ($card-width + $card-gap * 2) * 6 + $card-gap * 2;
}

.btn {
  background-color: #fff;
  border: none;
  outline: none;
  font-size: 2rem;
  padding: 2rem;
  cursor: pointer;
}

.card {
  position: relative;
  width: $card-width;
  height: 20rem;
  perspective: 100rem;
  margin: $card-gap;
  cursor: pointer;

  &--active {
    pointer-events: none;
  }

  &__face {
    position: absolute;
    top: 0;
    width: 15rem;
    height: 20rem;
    transition: 1s ease;
    backface-visibility: hidden;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;

    &--front {
      background-color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--back {
      background-color: #fff;
      transform: rotateY(180deg);
    }
  }

  &--active > &__face {
    &--front {
      transform: rotateY(180deg);
    }

    &--back {
      transform: rotateY(360deg);
    }
  }

  &__logo {
    color: #fff;
    font-size: 3rem;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
