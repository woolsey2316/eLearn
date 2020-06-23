import React from 'react'

function Inbox() {
  return (
    <div class="intro-y box bg-theme-1 p-5">
      <div class="border-t border-theme-3 pt-6 text-white">
        <a
          href=""
          class="flex items-center px-3 py-2 rounded-md bg-theme-22 font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-mail w-4 h-4 mr-2"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          All Exams
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-inbox w-4 h-4 mr-2"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
          </svg>
          Active
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-trash w-4 h-4 mr-2"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          Completed
        </a>
      </div>
      <div class="border-t border-theme-3 mt-5 pt-5 text-white">
        <a href="" class="flex items-center px-3 py-2 truncate">
          <div class="w-2 h-2 bg-theme-11 rounded-full mr-3"></div>
          Important
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-theme-9 rounded-full mr-3"></div>
          Ready for
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-theme-12 rounded-full mr-3"></div>
          Work
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-theme-6 rounded-full mr-3"></div>
          Next Week
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-plus w-4 h-4 mr-2"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Add New Label
        </a>
      </div>
    </div>
  )
}
export { Inbox }
