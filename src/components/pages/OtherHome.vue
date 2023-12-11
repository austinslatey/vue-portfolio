<template>
<div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-4">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
      <div class="max-w-2xl lg:max-w-2xl text-start">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome to my portfolio.</h2>
        <p class="mt-8 text-lg leading-8 text-gray-300 text-center">Innovative Web Solutions | Continuous Learner | Competitive Gamer</p>
        <!-- <div class="mt-6 flex max-w-md gap-x-2">
          <dt class="mt-4 font-semibold text-white text-start">Inquire for resume:</dt>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email">
          <button type="submit" class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div> -->
        <h2 class="text-lg font-bold tracking-tight text-white sm:text-xl text-center mt-10">Currently working with:</h2>
      </div>
      <dl class="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-2 lg:pt-2">
        
        <div class="flex flex-col">
          <div class="rounded-md bg-white/5 ring-1 ring-white/10">
            <img src="@/assets/imgs/homeImg/loopPrint-header.webp" class="h-30 w-50 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"/>
          </div>
          <dt class="mt-4 font-semibold text-white text-center text-xl sm:text-lg">LoopPRINT</dt>
          <dt class="mt-4 font-semibold text-white text-start text-2xl sm:text-xl">Lead Developer</dt>
          <dd class="mt-4 leading-9 text-gray-400 text-lg">Adds important information such as artist names, splits, share, admin rights and more, to an audio file or song using advanced techniques, ensuring accurate tracking of all usage of a creatives musical works.</dd>
        </div>
        <div class="flex flex-col mt-4">
          <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            <img src="@/assets/imgs/homeImg/edX.png" class="h-30 w-40 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"/>
          </div>
          <dt class="mt-4 font-semibold text-white text-center text-xl sm:text-lg">edX Coding Bootcamps</dt>
          <dt class="mt-4 font-semibold text-white text-start text-2xl sm:text-xl">Teaching Assistant/Instructional Specialist</dt>
          <dd class="mt-2 leading-8 text-gray-400 text-lg">Build systems that make the digital world work. Become a full stack developer ready to enter the high-demand world of programming. You’ll also gain access to continuation courses that provide additional competitive skills, such as Python, Java, C#, and Amazon Web Services.</dd>
        </div>
      </dl>
    </div>
  </div>
  <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
  </div>
</div>

</template>

<script>


export default {
  name: 'OtherHome'
}
</script>