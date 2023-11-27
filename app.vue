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
    text: `👾 <b class="text-green-600">Technology familiarity</b>: <br/> 
    <div align="center" class="flex gap-2 flex-wrap">
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
            alt="JavaScript"
            title="JavaScript"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/117448124-a2da9800-af3e-11eb-85d2-bd1b69b65603.png"
            alt="Vue.js"
            title="Vue.js"
        /></code>
        <code
          ><img
            width="50"
            src="https://github.com/marwin1991/profile-technology-icons/assets/136815194/ebd92b15-970a-45b8-8c4c-0ecf69b17cdc"
            alt="Nuxt.js"
            title="Nuxt.js"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png"
            alt="Sass"
            title="Sass"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
            alt="Git"
            title="Git"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
            alt="HTML"
            title="HTML"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
            alt="CSS"
            title="CSS"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
            alt="Node.js"
            title="Node.js"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png"
            alt="HTTP"
            title="HTTP"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
            alt="REST"
            title="REST"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192108374-8da61ba1-99ec-41d7-80b8-fb2f7c0a4948.png"
            alt="GitHub"
            title="GitHub"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192108376-c675d39b-90f6-4073-bde6-5a9291644657.png"
            alt="GitLab"
            title="GitLab"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png"
            alt="Visual Studio Code"
            title="Visual Studio Code"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png"
            alt="Jira"
            title="Jira"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png"
            alt="Tailwind CSS"
            title="Tailwind CSS"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png"
            alt="Figma"
            title="Figma"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png"
            alt="npm"
            title="npm"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/183049794-a3dfaddd-22ee-4ffe-b0b4-549ccd4879f9.png"
            alt="yarn"
            title="yarn"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
            alt="Express"
            title="Express"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/187955008-981340e6-b4cc-441b-80cf-7a5e94d29e7e.png"
            alt="webpack"
            title="webpack"
        /></code>
        <code
          ><img
            width="50"
            src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/b40892ef-efb8-4b0e-a6b5-d1cfc2f3fc35"
            alt="Vite"
            title="Vite"
        /></code>
        <code
          ><img
            class="bg-white rounded p-1"
            width="50"
            src="https://user-images.githubusercontent.com/25181517/186884152-ae609cca-8cf1-4175-8d60-1ce1fa078ca2.png"
            alt="macOS"
            title="macOS"
        /></code>
        <code
          ><img
            width="50"
            src="https://user-images.githubusercontent.com/25181517/186884150-05e9ff6d-340e-4802-9533-2c3f02363ee3.png"
            alt="Windows"
            title="Windows"
        /></code>
        <code
          ><img
            width="50"
            src="https://github.com/marwin1991/profile-technology-icons/assets/76662862/2481dc48-be6b-4ebb-9e8c-3b957efe69fa"
            alt="Linux"
            title="Linux"
        /></code>
      </div>...`,
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
    // animation: 0.3s ease-in 1s both running main;

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
