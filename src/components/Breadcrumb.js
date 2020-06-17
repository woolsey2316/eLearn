import React from 'react'

function Breadcrumb() {
  return (
    <div class="-intro-x breadcrumb breadcrumb--light mr-auto">
      <a href="" class="">
        Application
      </a>
      <i data-feather="chevron-right" class="breadcrumb__icon"></i>
      <a href="" class="breadcrumb--active">
        Dashboard
      </a>
    </div>
  )
}

export { Breadcrumb }
