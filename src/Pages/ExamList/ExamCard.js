import React from 'react'
import profile2 from "../../assets/dist/images/profile-2.jpg"

function ExamCard() {
  return (
    <div class="intro-y">
      <div class="inbox__item inbox__item--active inline-block sm:block text-gray-700 bg-gray-100 border-b border-gray-200">
        <div class="flex px-5 py-3">
          <div class="w-56 flex-none flex items-center mr-10">
            <input class="input flex-none border border-gray-500" type="checkbox"/>
            <a href="javascript:;" class="w-5 h-5 flex-none ml-4 flex items-center justify-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> </a>
            <a href="javascript:;" class="w-5 h-5 flex-none ml-2 flex items-center justify-center text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark w-4 h-4"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg> </a>
            <div class="w-6 h-6 flex-none image-fit relative ml-5">
              <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src={profile2}/>
            </div>
            <div class="inbox__item--sender truncate ml-3">Denzel Washington</div>
          </div>
          
          <div class="w-64 sm:w-auto truncate"> <span class="inbox__item--highlight">Contrary to popular belief, Lo</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20 </div>
          <div class="inbox__item--time whitespace-no-wrap ml-auto pl-10">01:10 PM</div>
        </div>
        <div class="flex px-5 py-3">
          <h2 className="text-lg font-medium leading-none mt-3"> astron-5432 </h2>
        </div>
        <div class="flex px-5 py-3">
          <h2 className="text-xl font-medium leading-none mt-3"> Astronomy Mid Term </h2>
        </div>
        <div class="flex px-5 py-3">
          <h2 className="font-medium leading-none mt-3 mr-5"> Date </h2>
          <h2 className="font-medium leading-none mt-3 mr-1 ml-1">|</h2>
          <h2 className="font-medium leading-none mt-3 ml-5"> MoreInfo  </h2>
        </div>
      </div>
    </div>
  )
}

export { ExamCard }