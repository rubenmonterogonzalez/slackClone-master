<template>
  <div class="min-h-screen w-64">
    <div
      class="
        sidebar
        flex flex-col flex-shrink-0
        border-t-2 border-white
        fixed
        z-1
        mb:flex hidden
        
      "
    >
      <div
        class="
          flex-shrink-0
          px-2
          py-2
          flex flex-row
          items-center
          justify-between
          border-b-2 border-white
          cursor-pointer
          hover:bg-pink-900
        "
      >
        <button
          @click="dropdownOpen = !dropdownOpen"
          id="nav-toggle"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Navigation"
          data-dropdown-toggle="dropdown"
        >
          <a
            href="#"
            class="
              flex
              text-lg
              font-bold
              tracking-widest
              text-white
              uppercase
              rounded-lg
              pl-3
            "
            >NGP
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mt-2"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </button>
        <div
          v-show="dropdownOpen"
          class="
            absolute
            w-72
            top-10
            left-4
            pl-1
            pt-3
            rounded-lg
            border-gray-200
            shadow-lg
            border-2
            bg-gray-50
            z-20
          "
        >
          <div class="pb-4">
            <div class="float-left pt-2">
              <a href="#" class="px-4 py-2 text-sm text-gray-700">
                <span class="inline-block w-9 h-9"
                  ><img src="../assets/download.png" alt=""
                /></span>
              </a>
            </div>
            <div class="inline-grid">
              <span class="font-bold text-sm text-gray-800 mt-2 cursor-pointer"
                >NGP</span
              >
              <span class="text-sm cursor-pointer text-gray-400"
                >ngpws.slack.com</span
              >
            </div>
          </div>
          <div class="border-t-2 border-b-2 border-gray">
            <a
              href="#"
              class="
                block
                px-4
                pb-3
                pt-3
                text-sm text-gray-700
                hover:bg-blue-500 hover:text-white
              "
            >
              Your workspace is currently on Slack's
              <strong>Pro Plan. </strong>
              <span class="font-bold text-blue-500 hover:text-white"
                >Learn More</span
              ></a
            >
          </div>

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
            Invite people to NGP
          </a>
          <a
            href="#"
            class="
              block
              px-4
              pb-3
              text-base text-gray-700
              hover:bg-blue-500 hover:text-white
              border-b-2 border-gray
            "
          >
            Create a channel
          </a>
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
            Preferences
          </a>
          <a
            href="#"
            class="
              block
              px-4
              pb-3
              text-base text-gray-700
              hover:bg-blue-500 hover:text-white
              border-b-2 border-gray
            "
            >Customize NGP
          </a>
          <div class="border-b-2 border-gray">
            <a
              href="#"
              class="
                flex
                justify-between
                py-2
                px-4
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              >Tools
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
              pb-2
              text-base text-gray-700
              hover:bg-blue-500 hover:text-white
              border-b-2 border-gray
            "
            >Sign out of NGP</a
          >
          <div class="border-b-2 border-gray">
            <a
              href="#"
              class="
                flex
                justify-between
                py-2
                px-4
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              >Add workspaces
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
        </div>
        <a href="#" class="pr-3">
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </a>
      </div>
      <div class="overflow-y-scroll overscroll-y-auto overflow-x-hidden">
        <div class="block pb-0">
          <a
            class="
              flex
              block
              px-4
              py-1
              mt-4
              text-sm
              font-semibold
              text-gray-300
              hover:bg-pink-900
            "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              /></svg
            ><span class="pt-0.5">Threads</span>
          </a>
          <a
            class="
              flex
              block
              px-4
              py-1
              text-sm
              font-semibold
              text-gray-300
              hover:bg-pink-900
            "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              /></svg
            ><span class="pt-0.5">All Dm's</span>
          </a>
          <a
            class="
              flex
              block
              px-4
              py-1
              text-sm
              font-semibold
              text-gray-300
              hover:bg-pink-900
            "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              /></svg
            ><span class="pt-0.5">Mentions & reactions</span>
          </a>
          <a
            class="
              flex
              block
              px-4
              py-1
              text-sm
              font-semibold
              text-gray-300
              hover:bg-pink-900
            "
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              /></svg
            ><span class="pt-0.5">Slack Connect</span>
          </a>
          <button
            class="w-60"
            @click="dropdownOpen2 = !dropdownOpen2"
            id="nav-toggle"
            aria-haspopup="true"
            aria-expanded="false"
            aria-controls="menu"
            aria-label="Navigation"
            data-dropdown-toggle="dropdown"
          >
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:text-white
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                /></svg
              ><span class="pt-0.5">More</span>
            </a>
          </button>
          <div
            v-show="dropdownOpen2"
            class="
              absolute
              w-80
              left-4
              rounded-lg
              border-gray-200
              shadow-lg
              border-2
              bg-gray-50
              z-20
            "
          >
            <div class="">
              <a
                class="
                  flex
                  block
                  px-4
                  mt-3
                  pb-1
                  text-base text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                <span class="ml-2 mr-2">All unreads</span>
                <span class="ml-20 text-gray-500 hover:text-white"
                  >Ctrl+Shift+A</span
                >
              </a>
            </div>
            <div class="border-b-2 border-gray pb-2">
              <a
                class="
                  flex
                  block
                  px-4
                  pb-1
                  text-base text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span class="ml-2 mr-12">Saved items</span>
                <span class="ml-auto text-gray-500 hover:text-white"
                  >Ctrl+Shift+S</span
                >
              </a>
            </div>
            <div class="">
              <a
                class="
                  flex
                  block
                  px-4
                  pb-1
                  mt-2
                  text-base text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
                <span class="ml-2">Channel browser</span>
                <span class="ml-auto text-gray-500 hover:text-white"
                  >Ctrl+Shift+L</span
                >
              </a>
            </div>
            <div class="">
              <a
                class="
                  flex
                  block
                  px-4
                  pb-1
                  text-base text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 pt-1"
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
                <span class="ml-2">File browser</span>
              </a>
            </div>
            <div class="">
              <a
                class="
                  flex
                  block
                  px-4
                  pb-1
                  text-base text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                  />
                </svg>
                <span class="ml-2 mr-auto">People & user groups</span>
                <span class="text-gray-500 hover:text-white">Ctrl+Shift+E</span>
              </a>
            </div>
            <div class="pb-2">
              <a
                class="
                  flex
                  block
                  px-4
                  pb-1
                  text-base text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 pt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span class="ml-2 mr-auto">Apps</span>
              </a>
            </div>
            <div class="border-t-2 border-gray py-2">
              <a
                href="#"
                class="
                  flex
                  block
                  px-4
                  pb-1
                  ml-1
                  text-xs text-gray-700
                  hover:bg-blue-500 hover:text-white
                "
                >Customize this list in your
                <pre></pre>
                <span class="text-blue-500 font-bold">preferences</span>
              </a>
            </div>
          </div>
        </div>
        <div class="flex-grow block pb-0">
          <div class="channels">
            <a
              @click="dropdownOpen3 = !dropdownOpen3"
              class="
                flex
                block
                px-4
                py-2
                mt-3
                text-sm
                font-semibold
                text-gray-300
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 mr-2 mt-0.5 hover:bg-pink-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                /></svg
              >Channels
              <div class="channel_icons inline-flex ml-auto">
                <button class="tooltip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2 hover:bg-pink-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                  <span class="tooltiptext text-sm">Section options</span>
                </button>
                <button class="tooltip">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 hover:bg-pink-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span class="tooltiptext text-sm">Add channels</span>
                </button>
              </div>
            </a>
          </div>
          <div v-show="dropdownOpen3" class="">
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >a_food_desire
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >clearvue-dev-site
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >clearvue-site-launch
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >COP26_2021_white-paper
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                /></svg
              >general
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >general-marketing
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >marketing
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >marketing-malta
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >proj-webpage-building
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                /></svg
              >public-websites-migration
            </a>
            <a
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                /></svg
              >tech-malta-devs
            </a>
            <a
              @click="dropdownOpen5 = !dropdownOpen5"
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 -mt-0.5 ml-2 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
              >Add channels
            </a>
          </div>
        </div>
        <div
          v-show="dropdownOpen5"
          class="absolute w-52 left-14 rounded-lg bg-white z-20"
        >
          <div class="">
            <a
              class="
                flex
                block
                px-4
                mt-3
                pb-1
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              href="#"
            >
              <span class="ml-2">Create a new channel</span>
            </a>
          </div>
          <div class="">
            <a
              class="
                flex
                block
                px-4
                mb-3
                pb-1
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              href="#"
            >
              <span class="ml-2">Browse all channels</span>
            </a>
          </div>
        </div>
        <div class="flex-grow md:block mt-3 pb-4 md:pb-0">
          <div class="channels">
            <a
              @click="dropdownOpen4 = !dropdownOpen4"
              class="flex block px-4 py-2 text-sm font-semibold text-gray-300"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 mr-2 mt-0.5 hover:bg-pink-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                /></svg
              >Direct messages
              <div class="channel_icons inline-flex ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2 hover:bg-pink-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 hover:bg-pink-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div v-show="dropdownOpen4">
            <div
              v-show="dropdownOpen4"
              class="hover:bg-pink-900 cursor-pointer"
            >
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
                <p
                  class="
                    inline-block
                    text-sm
                    font-semibold
                    text-gray-300
                    hover:bg-pink-900
                  "
                >
                  Ruben Montero
                </p>
              </a>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <div class="hover:bg-pink-900 cursor-pointer">
              <a
                class="
                  inline-block
                  pl-7
                  py-1
                  text-sm
                  font-semibold
                  text-gray-300
                "
                href="#"
              >
                <span class="inline-block w-5 h-5 rounded bg-red-500"
                  ><h5 class="text-xs text-white ml-1.5 mt-0.5">R</h5></span
                >
                <span
                  class="
                    inline-block
                    w-2
                    h-2
                    bg-green-600
                    border-2 border-transparent
                    rounded-full
                  "
                ></span>
              </a>
              <p class="inline-block text-sm font-semibold text-gray-300">
                Ruben Montero
              </p>
            </div>
            <a
              @click="dropdownOpen6 = !dropdownOpen6"
              class="
                flex
                block
                px-4
                py-1
                text-sm
                font-semibold
                text-gray-300
                hover:bg-pink-900
              "
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 -mt-0.5 ml-2 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg
              >Add teammates
            </a>
          </div>
        </div>
        <div
          v-show="dropdownOpen6"
          class="absolute w-52 left-14 rounded-lg bg-white z-20"
        >
          <div class="">
            <a
              class="
                flex
                block
                px-4
                mt-3
                pb-1
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              href="#"
            >
              <span class="ml-2">Invite people</span>
            </a>
          </div>
          <div class="">
            <a
              class="
                flex
                block
                px-4
                mb-3
                pb-1
                text-base text-gray-700
                hover:bg-blue-500 hover:text-white
              "
              href="#"
            >
              <span class="ml-2">New conversation</span>
            </a>
          </div>
        </div>
        <div class="h-12"></div>
      </div>
      <div
        class="
          hover_text
          flex-shrink-0
          px-4
          py-4
          flex flex-row
          items-center
          justify-between
          border-t-2 border-white
          cursor-pointer
        "
      >
        <a href="#" class="mr-3 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentcolor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </a>
        <a
          href="#"
          class="
            mr-auto
            text-sm
            font-semibold
            text-gray-300 text-white
            rounded-lg
          "
          >David Bootle</a
        >
        <div
          class="
            relative
            inline-block
            w-10
            mr-2
            align-middle
            select-none
            transition
            duration-200
            ease-in
          "
        >
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            class="
              toggle-checkbox
              absolute
              block
              w-5
              h-5
              rounded-full
              border-2
              bg-gray-300
              appearance-none
              cursor-pointer
            "
          />
          <label
            for="toggle"
            class="
              toggle-label
              block
              overflow-hidden
              h-5
              rounded-full
              border-gray-300 border-2
              cursor-pointer
            "
          ></label>
        </div>
      </div>
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
    const dropdownOpen3 = ref(false);
    const dropdownOpen4 = ref(false);
    const dropdownOpen5 = ref(false);
    const dropdownOpen6 = ref(false);

    return {
      dropdownOpen,
      dropdownOpen2,
      dropdownOpen3,
      dropdownOpen4,
      dropdownOpen5,
      dropdownOpen6,
    };
  },
};
</script>

<style scoped>
.sidebar {
  background: linear-gradient(
    8deg,
    rgb(114 61 116) 0%,
    rgb(90 51 92) 35%,
    rgba(73, 39, 75, 1) 100%
  );
}
.overflow-y-scroll {
  height: 85vh;
}
.hover_text:hover > a {
  color: white;
}
.channels .channel_icons svg {
  visibility: hidden;
}
.channels:hover .channel_icons svg {
  visibility: visible;
  transition-delay: 0.5s;
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
  position: absolute;
  z-index: 9999;
  bottom: 100%;
  left: 14%;
  margin-left: -60px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
