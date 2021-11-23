<template>
  <div class="navbar flex">
    <div class="flex w-1/4">
      <div class="w-12 text-center">
        <div class="hover:bg-pink-900 active:bg-transparent">
        <button
          @click="dropdownOpen = !dropdownOpen"
          id="nav-toggle"
          class="text-first cursor-pointer "
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Navigation"
          data-dropdown-toggle="dropdown"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>
        <div
          v-show="dropdownOpen"
          class="absolute text-left top-6 left-6 w-24 bg-white bg-gray z-20"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            File
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            Edit
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            View
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            Go
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            History
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            Window
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300"
          >
            Help
          </a>
        </div>
      </div>
      <div class="w-80"></div>
      <div class="contents w-12">
      <button
        id="nav-toggle"
        class="tooltip w-12 pl-2 hover:bg-pink-900"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu"
        aria-label="Navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span class="tooltiptext text-sm">Back in history</span>
      </button>
      </div>
      <div class="w-12 hover:bg-pink-900 pt-2 pl-3">
      <button
        id="nav-toggle"
        class="tooltip text-first w-12 "
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu"
        aria-label="Navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <span class="tooltiptext text-sm">Forward in history</span>
      </button>
      </div>
      <div class="w-12 p-2 pl-3 hover:bg-pink-900">
      <button
        id="nav-toggle"
        class="tooltip text-first w-12"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu"
        aria-label="Navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="tooltiptext text-sm">History</span>
      </button>
      </div>
    </div>
    <div class="flex-none flex text-white">
      <button class="tooltip">
        <input
          class="
            search-bar
            text-white
            relative
            cursor-pointer
            h-8
            bg-pink-700
            px-4
            pr-8
            rounded
            w-96
            text-sm
            focus:outline-none
            hover:bg-pink-900
          "
          type="search"
          name="search"
          placeholder="Search NGP"
        />
        <svg
          class="text-white-600 inline z-999 absolute top-3 right-3 h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          style="enable-background: new 0 0 56.966 56.966"
          xml:space="preserve"
          width="512px"
          height="512px"
        >
          <path
            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
          />
        </svg>
        <span class="tooltiptext text-sm">Search NGP</span>
      </button>
    </div>
    <div class="interrogation flex-1 flex">
      <button
        id="nav-toggle"
        class="w-12 pl-3 tooltip"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="menu"
        aria-label="Navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="tooltiptext text-sm">Help</span>
      </button>
      <div class="relative inline-block ml-auto">
        <button
          class="tooltip mr-3 mt-1"
          @click="dropdownOpen2 = !dropdownOpen2"
          id="nav-toggle"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Navigation"
          data-dropdown-toggle="dropdown"
        >
          <span class="inline-block w-8 h-8 rounded bg-red-500 hover:bg-red-400"
            ><h5 class="text-white mt-1">R</h5></span
          >
          <span
            class="
              absolute
              top-6
              left-6
              inline-block
              w-3
              h-3
              bg-green-600
              border-2 border-purple-900
              rounded-full
            "
          ></span>
          <span class="tooltiptext text-sm">Ruben Montero</span>
        </button>
        <div
          v-show="dropdownOpen2"
          class="
            absolute
            w-72
            top-9
            pl-1
            pt-3
            right-4
            rounded-lg
            border-gray-200
            shadow-lg
            border-2
            bg-gray-50
            z-20
          "
        >
          <div class="">
            <div class="float-left pt-2">
              <a href="#" class="px-4 py-2 text-sm text-gray-700">
                <span class="inline-block w-10 h-10 rounded bg-red-500"
                  ><h5 class="text-white text-base mt-2 ml-4">R</h5></span
                >
              </a>
            </div>
            <div class="inline-grid">
              <span class="font-bold text-sm text-gray-800 mt-2 cursor-pointer"
                >Ruben Montero</span
              >
              <span
                class="
                  absolute
                  top-12
                  left-18
                  inline-block
                  w-2
                  h-2
                  bg-green-600
                  rounded-full
                "
              ></span>
              <span class="text-sm ml-3 cursor-pointer text-gray-400"
                >Active</span
              >
            </div>
          </div>

          <input
            class="
              search-bar_profile
              text-white
              relative
              cursor-pointer
              h-8
              bg-white
              rounded
              w-60
              text-sm
              focus:outline-none
              rounded
              border-gray-200 border-2
              mt-4
              ml-4
              pl-12
            "
            type="search"
            name="search"
            placeholder="Update your status"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 absolute top-20 left-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <a
            href="#"
            class="
              block
              px-4
              pb-1
              pt-3
              text-base text-gray-700
              hover:bg-blue-500 hover:text-white
            "
          >
            Set yourself as <strong>away</strong>
          </a>
          <div class="border-b-2 border-gray">
            <a
              href="#"
              class="
                flex
                justify-between
                px-4
                pb-2
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              >Pause notifications
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 mt-2 hover:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
          <a
            href="#"
            class="
              block
              px-4
              pt-2
              pb-1
              text-base text-gray-700
              hover:bg-blue-500 hover:text-white
            "
            >Profile</a
          >
          <a
            href="#"
            class="
              block
              px-4
              pb-3
              text-base text-gray-700
              border-b-2 border-gray
              hover:bg-blue-500 hover:text-white
            "
            >Preferences</a
          >
          <a
            href="#"
            class="
              block
              px-4
              py-2
              text-base text-gray-700
              border-b-2 border-gray
              hover:bg-blue-500 hover:text-white
            "
            >Downloads <span class="text-gray-400 ml-20 hover:text-white">Ctrl+Shift+J</span></a
          >
          <a
            href="#"
            class="
              block
              px-4
              pt-2
              pb-3
              text-base text-gray-700
              hover:bg-blue-500 hover:text-white
            "
            >Sign out of NGP</a
          >
        </div>
      </div>
      <button class="tooltip w-12 h-10 pl-4 text-white hover:bg-pink-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 12H6"
          />
        </svg>
        <span class="tooltiptext text-xs">Minimize</span>
      </button>
      <button class="tooltip w-12 h-10 pl-4 text-white hover:bg-pink-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        <span class="tooltiptext text-xs">Unmaximize</span>
      </button>
      <button class="tooltip w-12 h-10 pl-4 text-white hover:bg-red-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <span class="tooltiptext text-xs">Close</span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  components: {},
  setup() {
    const dropdownOpen = ref(false);
    const dropdownOpen2 = ref(false);

    return {
      dropdownOpen,
      dropdownOpen2,
    };
  },
};
</script>

<style scoped>
.navbar {
  height: 40px;
  background: #49274b;
}

.search-bar {
  width: 680px;
  background: #924f96;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
