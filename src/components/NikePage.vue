<template lang="html">
  <div class="container">
    <button class="btn btn--start" @click="onStartClick()">
      <span v-if="!displayItems.length">Start</span>
      <span v-if="time > 0">{{ timeStr }}</span>
      <span v-if="lost">Lost, restart?</span>
      <span v-if="won">Won! Restart?</span>
    </button>
    <div class="content">
      <div
        v-for="(item, index) in displayItems"
        :key="index"
        :class="{
          'card': true,
          'card--active': item.active
        }"
        @click="onCardClick(index)">
        <div class="card__face card__face--front">
          <img class="card__image" :src="item.imageSrc" alt="">
        </div>
        <div class="card__face card__face--back">
          <span v-if="item.nike">✅</span>
          <span v-if="!item.nike">❌</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lost: false,
      win: false,
      time: null,
      maxTimer: 90,
      maxItems: 12,
      displayItems: [],
      items: [
        { imageSrc: require('../assets/images/sneakers/air-max-720-royal-blue-.jpg'), nike: true },
        { imageSrc: require('../assets/images/sneakers/air-wildwood-sneakers.jpg'), nike: true },
        { imageSrc: require('../assets/images/sneakers/air-zoom-alpha-sneakers.jpg'), nike: true },
        { imageSrc: require('../assets/images/sneakers/blazer-mid-77-vintage-sneakers.jpg'), nike: true },
        { imageSrc: require('../assets/images/sneakers/cm997-90-s-style-of-life-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/gel-quantum-360-knit-2-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/gel-saga-zebra-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/kid-cudi-tennis-minimal-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/modernica-style-36-lx-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/nite-jogger-grey-pack-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/react-element-55-sneakers.jpg'), nike: true },
        { imageSrc: require('../assets/images/sneakers/rom-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/sankuanz-rs-x-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/uproar-hybrid-court-asg-fade-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/yung-1-sneakers.jpg'), nike: false },
        { imageSrc: require('../assets/images/sneakers/rains-sk8-hi-lite-sneakers.jpg'), nike: false }
      ]
    }
  },
  computed: {
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
      if (this.maxItems > this.items.length) {
        this.maxItems = this.items.length
      }

      const startIndex = Math.floor(Math.random() * this.items.length)

      let items = [...this.items, ...this.items].slice(startIndex, startIndex + this.maxItems)
      items = items.map(item => {
        return { ...item, active: false }
      })

      this.displayItems = this._shuffle(items)

      this._runTimer()
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
      this.displayItems = []
      this.timer = null
      this.lost = false
      this.won = false
    },
    onCardClick (index) {
      if (this.lost || this.won) { return }
      if (!this.displayItems[index].nike) {
        this._loose()
      }
      this.displayItems[index].active = true
      let count = 0
      this.displayItems.forEach(item => {
        if (item.nike) {
          count = count + 1
        }
        if (item.active) {
          count = count - 1
        }
      })
      if (count === 0) {
        this._win()
      }
    },
    onStartClick () {
      this._reset()
      window.setTimeout(() => {
        this._generateCards()
      })
    },
    _runTimer () {
      const run = () => {
        if (this.won || this.lost) {
          return
        }
        if (this.time <= 0) {
          this._loose()
          return
        }
        window.setTimeout(() => {
          this.time = this.time - 1
          run()
        }, 1000)
      }
      this.time = this.maxTimer
      run()
    },
    _loose () {
      this.time = null
      this.won = false
      this.lost = true
    },
    _win () {
      this.time = null
      this.lost = false
      this.won = true
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
    transition: 0.5s ease;
    backface-visibility: hidden;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;

    &--front {
      background-color: #fff;
    }

    &--back {
      font-size: 3rem;
      background-color: #fff;
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;
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

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
