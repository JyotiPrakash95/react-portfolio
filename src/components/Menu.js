import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function Menu() {
  
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-1 lg:text-xl font-semibold leading-6 text-gray-900 outline-none bg-gray-100 menu-btn p-3.5 rounded-xl sm:text-sm hover:bg-gray-200 hover:scale-105 duration-200">
        <span>Menu</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 lg:left-1/2 z-10 mt-5 flex w-screen max-w-max lg:-translate-x-3/4 px-4 sm:-translate-x-3/4">
          <div className="max-w-md w-11/12 flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 ">
            <div className="p-2">
              {/* NavLinks */}
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <ArrowRightIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <NavLink
                    to={"/about"}
                    className="text-gray-900 text-lg font-semibold"
                  >
                    About
                    <span className="absolute inset-0" />
                  </NavLink>
                  <p className="mt-1 text-gray-600 text-base">
                    Learn more about me
                  </p>
                </div>
              </div>
              {/* NavLinks */}
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <ArrowRightIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <NavLink
                    to={"/projects"}
                    className="font-semibold text-gray-900 text-lg"
                  >
                    Project
                    <span className="absolute inset-0" />
                  </NavLink>
                  <p className="mt-1 text-gray-600 text-base">
                    Check my recent work
                  </p>
                </div>
              </div>
              {/* NavLinks */}
              <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <ArrowRightIcon
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <NavLink
                    to={"/contact"}
                    className="font-semibold text-gray-900 text-lg"
                  >
                    Contact
                    <span className="absolute inset-0" />
                  </NavLink>
                  <p className="mt-1 text-gray-600 text-base">
                    Feel free to connect
                  </p>
                </div>
              </div>
              {/* NavLinks */}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
