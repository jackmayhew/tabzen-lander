<template>
  <section id="reviews">
    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
      <div class="lg:col-span-2 mx-auto text-center lg:w-4/5 lg:mx-auto">
        <p class="text-4xl lg:text-6xl font-semibold font-display text-blue-950">
          Real Users, Real Results with TabZen
        </p>
        <p class="text-slate-600 mt-4 md:w-3/4 mx-auto">
          Hear what users have to say about the transformative power of TabZen.
          See how it's improved their online tab experience.
        </p>
      </div>
      <ol role="list" class="grid grid-cols-1 gap-y-8 gap-x-2 mt-12 text-center lg:grid-cols-3 lg:mt-24">
        <li v-for="review in reviews" :key="review.id">
          <div class="flex flex-col justify-between h-full relative">
            <div
              class="py-10 px-8 bg-blue-50 h-full flex flex-col items-center md:w-3/4 lg:w-full mx-auto rounded-3xl relative">
              <p class="text-base text-pretty font-display text-blue-900">{{ review.text }}</p>
              <div class="h-6 w-6 bg-blue-50 rounded bottom-[-10px] z-1 rotate-45 absolute"></div>
            </div>
            <div class="flex-shrink-0 block order-last mt-6">
              <div class="flex flex-col gap-3 items-center text-left justify-center text-center">
                <div>
                  <img class="inline-block w-16 border h-16 rounded-full shrink-0" :src="review.image"
                    :alt="review.alt" />
                </div>
                <div>
                  <p class="text-sm font-display text-blue-950">{{ review.name }}</p>
                  <p class="text-slate-500">{{ review.title }}</p>
                </div>
              </div>
            </div>

          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  { id: 1, name: 'John S.', title: 'Guitarist', image: '/images/head1.svg', alt: 'Roberta Johnson', text: "TabZen is a game-changer for my guitar practice sessions. No more frustrating pop-ups or intrusive ads - just clean, focused tabs." },
  { id: 2, name: 'Jaco P.', title: 'Bassist', image: '/images/head2.svg', alt: 'John Doe', text: "As a bass teacher, I've recommended TabZen to all my students. It's the perfect tool to help them stay engaged and improve their skills." },
  { id: 3, name: 'Kim D.', title: 'Bassist', image: '/images/head3.svg', alt: 'Jane Smith', text: "Hands down the best way to enjoy bass tabs online. TabZen has become an essential part of my daily workflow." },
]
</script>

<style scoped></style>