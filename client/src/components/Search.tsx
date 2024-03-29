import React from "react";

function Search() {
  return (
    <div className="intro-x relative mr-3 sm:mr-6">
      <div className="search hidden sm:block">
        <input
          type="text"
          className="search__input input placeholder-theme-13"
          placeholder="Search..."
        />
        <i data-feather="search" className="search__icon"></i>
      </div>
      <a className="notification notification--light sm:hidden" href="/">
        <i data-feather="search" className="notification__icon"></i>
      </a>
      <div className="search-result">
        <div className="search-result__content">
          <div className="search-result__content__title">Pages</div>
          <div className="mb-5">
            <a href="/" className="flex items-center">
              <div className="w-8 h-8 bg-theme-18 text-theme-9 flex items-center justify-center rounded-full">
                <i className="w-4 h-4" data-feather="inbox"></i>
              </div>
              <div className="ml-3">Mail Settings</div>
            </a>
            <a href="/" className="flex items-center mt-2">
              <div className="w-8 h-8 bg-theme-17 text-theme-11 flex items-center justify-center rounded-full">
                <i className="w-4 h-4" data-feather="users"></i>
              </div>
              <div className="ml-3">Users & Permissions</div>
            </a>
            <a href="/" className="flex items-center mt-2">
              <div className="w-8 h-8 bg-theme-14 text-theme-10 flex items-center justify-center rounded-full">
                <i className="w-4 h-4" data-feather="credit-card"></i>
              </div>
              <div className="ml-3">Transactions Report</div>
            </a>
          </div>
          <div className="search-result__content__title">Users</div>
          <div className="mb-5">
            <a href="/" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-5.jpg"
                />
              </div>
              <div className="ml-3">Sylvester Stallone</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                sylvesterstallone@left4code.com
              </div>
            </a>
            <a href="/" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-7.jpg"
                />
              </div>
              <div className="ml-3">Angelina Jolie</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                angelinajolie@left4code.com
              </div>
            </a>
            <a href="/" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-6.jpg"
                />
              </div>
              <div className="ml-3">Edward Norton</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                edwardnorton@left4code.com
              </div>
            </a>
            <a href="/" className="flex items-center mt-2">
              <div className="w-8 h-8 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src="dist/images/profile-7.jpg"
                />
              </div>
              <div className="ml-3">Sylvester Stallone</div>
              <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
                sylvesterstallone@left4code.com
              </div>
            </a>
          </div>
          <div className="search-result__content__title">Products</div>
          <a href="/" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-2.jpg"
              />
            </div>
            <div className="ml-3">Samsung Q90 QLED TV</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Electronic
            </div>
          </a>
          <a href="/" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-3.jpg"
              />
            </div>
            <div className="ml-3">Apple MacBook Pro 13</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              PC &amp; Laptop
            </div>
          </a>
          <a href="/" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-10.jpg"
              />
            </div>
            <div className="ml-3">Nikon Z6</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Photography
            </div>
          </a>
          <a href="/" className="flex items-center mt-2">
            <div className="w-8 h-8 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-full"
                src="dist/images/preview-6.jpg"
              />
            </div>
            <div className="ml-3">Samsung Q90 QLED TV</div>
            <div className="ml-auto w-48 truncate text-gray-600 text-xs text-right">
              Electronic
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export { Search };
