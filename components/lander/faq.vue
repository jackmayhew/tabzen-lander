<template>
  <section id="faq">
    <div class="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl lg:py-24">
      <div class="mx-auto">
        <div>
          <div class="lg:col-span-2 mx-auto text-center lg:w-4/5 lg:mx-auto">
            <p class="text-4xl lg:text-6xl font-semibold font-display text-blue-950">
              Questions? We've Got Answers!
            </p>
            <p class="text-slate-600 mt-4 md:w-3/4 mx-auto">
              Get all the details on how TabZen works and what it can do for your tab-viewing experience.
            </p>
          </div>
          <div class="mx-auto mt-12">
            <ul
              class="prose-styles list-disc grid grid-cols-1 md:grid-cols-2 gap-x-12 w-fit mx-auto list-none sm:list-disc">
              <li v-for="faq in faqs" :key="faq.id" class="mb-4">
                <strong class="font-display text-2xl text-blue-950 font-semibold">{{ faq.question }}</strong> <br>
                <p class="text-slate-600">{{ faq.answer }}</p>
              </li>
              <li class="text-slate-600">
                <strong class="font-display text-2xl text-blue-950"> Which websites does TabZen work on?</strong> <br>
                TabZen currently targets the following popular tab sites:
                <ul class="ml-4 mt-2 list-disc text-slate-600 flex flex-wrap">
                  <li v-for="site in tabSites" :key="site.name" class="w-full md:w-1/2">
                    <a :href="site.url" target="_blank" rel="noopener" class="hover:underline">{{ site.name }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  { id: 1, question: 'What is TabZen?', answer: 'TabZen is a Chrome extension that removes distracting elements from guitar, bass and drum tabs & chords providing a clean and focused viewing experience.' },
  { id: 2, question: 'How does TabZen work?', answer: 'TabZen automatically identifies and hides disruptive ads, overlays, and other non-essential content on sites like Songsterr and Ultimate Guitar.' },
  { id: 3, question: 'Will TabZen interfere with my ability to interact with tabs?', answer: "No, TabZen only hides non-essential elements, leaving the interactive parts of your tabs fully functional." },
  { id: 4, question: 'Does TabZen require any setup or configuration?', answer: 'No, TabZen is a plug-and-play extension. Simply install it, and it will automatically start decluttering your tab-viewing experience.' },
  { id: 5, question: 'Is TabZen free to use?', answer: 'Yes, TabZen is a free Chrome extension available to all users.' },
]
const tabSites = [
  { name: 'Songsterr', url: 'https://www.songsterr.com' },
  { name: 'Ultimate Guitar', url: 'https://www.ultimate-guitar.com' },
  { name: 'Chordify', url: 'https://chordify.net' },
  { name: 'Big Bass Tabs', url: 'https://www.bigbasstabs.com' },
  { name: '911Tabs', url: 'https://www.911tabs.com/guitar_tabs/' },
  { name: 'Guitar Tab Universe', url: 'https://www.guitartabs.cc' },
]
</script>

<style scoped></style>