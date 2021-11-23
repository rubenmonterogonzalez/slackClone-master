<template>
  <div class="navbar w-full float-right flex ml-auto border-b-2 border-gray h-14">
    <div class="flex-1 flex pt-3 ml-72 ">
      <a href="#" class="contents">
        <span class="text-gray-800 text-lg font-bold">David Bootle, Edy Ragnoli</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mt-1 ml-1"
          viewBox="0 0 20 20"
          fill="CurrentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div class="flex-1 flex">
      <div class="relative inline-block ml-auto mt-1 mr-4">
        <button
          id="nav-toggle"
          class="ml-2"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="menu"
          aria-label="Navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>
        <div class="relative inline-block ml-auto mt-1 mr-4">
          <span class="inline-block w-6 h-6 rounded bg-red-500"
            ><h6 class="text-white text-xs ml-2 mt-1">R</h6></span
          >
          <span
            class="
              absolute
              bottom-0
              right-0
              inline-block
              w-2
              h-2
              bg-green-600
              border-2 border-transparent
              rounded-full
            "
          ></span>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar flex h-10 w-full float-right ml-auto border-b-1 shadow-md border-gray">
    <a class="contents" href=""><svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 ml-72 mt-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="gray"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
    <span class="text-gray-500 mt-3">Add a bookmark</span>
    </a>
  </div>
</template>
