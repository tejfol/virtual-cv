<script setup>
import { XMarkIcon, IdentificationIcon } from "@heroicons/vue/24/solid";

const terminalContent = reactive([
  {
    text: `🚀 <b class="text-green-600">Passionate Front-End Engineer</b>: <br/> Transforming Ideas into Seamless User Experiences Greetings LinkedIn community! 👋 I'm Matei Mark, a results-driven front-end engineer with nearly 3 years of hands-on experience in translating creative concepts into functional, visually appealing web applications.`,
  },
  {
    text: `🛠️ <b class="text-green-600">Technical Proficiency</b>:
    <br/> My expertise lies in crafting dynamic and responsive user interfaces using cutting-edge technologies such as HTML5, CSS3, JavaScript, and popular front-end frameworks like React.js. I thrive on solving complex problems and optimizing performance to deliver an exceptional end-user experience.`,
  },
  {
    text: `💼 <b class="text-green-600">Professional Journey</b>: <br/>
    In my professional journey, I've had the privilege to contribute to a diverse range of projects across various industries. From collaborating with cross-functional teams to implementing innovative solutions, I've honed my skills in creating seamless and intuitive interfaces.`,
  },
  {
    text: `🔧 <b class="text-green-600">Key Skills</b>: <br/>
    <ul>
      <li>- UI/UX Design</li>
      <li>- Front-End Development</li>
      <li>- Responsive Web Design</li>
      <li>- Cross-Browser Compatibility</li>
      <li>- Performance Optimization</li>
      <li>- Problem Solving</li>
    </ul>
    `,
  },
  {
    text: `🌐 <b class="text-green-600">Passion for Learning</b>:
    The ever-evolving nature of technology fascinates me, and I'm committed to staying at the forefront of industry trends. I'm an advocate for continuous learning and always seek new challenges to expand my skill set.`,
  },
  {
    text: `Best regards,
    <b class='underline'>Matei Mark</b>`,
  },
]);

const inputV = ref("");

function handleInput($event) {
  terminalContent.push({
    wrongInput: true,
    text: $event.target.value,
  });

  terminalContent.push({
    text: `command not found: ${$event.target.value}`,
  });

  inputV.value = "";
}
</script>

<template>
  <main class="min-w-screen min-h-screen py-16 px-4 sm:px-8 bg-[#0d1117]">
    <div
      id="terminal"
      class="relative terminal-shadow border border-gray-500 rounded-t-xl container max-w-4xl mx-auto overflow-hidden"
    >
      <header
        class="flex px-4 pb-1 pt-2 justify-between items-center sticky bg-gray-800 top-0 z-10"
      >
        <IdentificationIcon class="w-6" />
        <div>tejfol@tejfol.io</div>
        <div>
          <button
            type="button"
            class="transition duration-50 ease-in rounded-full p-1 border border-gray-600 bg-gray-500/50 hover:brightness-110"
          >
            <XMarkIcon class="w-4 stroke-2" />
          </button>
        </div>
      </header>

      <section
        class="px-4 py-2 bg-black/70 h-full overflow-auto max-h-[80vh] overscroll-contain"
      >
        <ul class="space-y">
          <li v-for="item in terminalContent" :key="item.id">
            <LineStarter />
            <span
              v-html="item.text"
              :class="{ 'text-red-600': item.wrongInput }"
            >
            </span>
            <!-- <span>{{ new Date().toISOString() }}</span> -->
          </li>

          <li>
            <LineStarter />
            <input
              v-model="inputV"
              @keydown.enter="handleInput"
              type="text"
              autofocus
              class="appearance-none bg-transparent outline-none"
            />
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style lang="scss">
main {
  @apply text-gray-50;
  font-family: "Share Tech Mono", monospace;

  & #terminal {
    animation: 0.3s ease-in 1s both running main;

    @keyframes main {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  & .terminal-shadow {
    box-shadow: rgba(152, 152, 152, 0.3) 0px 0px 5px 1px;
  }

  & ul {
    & li {
      @apply inline-block w-full;
    }
  }
}
</style>
