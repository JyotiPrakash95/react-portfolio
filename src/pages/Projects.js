import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { data } from "./project-data";

export default function Projects() {
  return (
    <div className="bg-white overflow-y-hidden	">
      <div className="relative isolate px-6 pt-14 lg:px-8 ">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl sm:leading-tight">
              Apps I've built
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Some glimpses of my work
            </p>

            {/* project card */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-10">
              {data.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
            {/* project card */}
            <div className="w-60 ml-auto mr-auto mt-16">
              <ul className="bg-gray-100 flex items-center justify-center p-1 rounded-3xl shadow-sm mt-5">
                <a
                  className="p-2"
                  target="_blank"
                  href="https://github.com/JyotiPrakash95"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    id="github"
                  >
                    <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
                  </svg>
                </a>
                <a
                  className="p-2"
                  target="_blank"
                  href="https://www.linkedin.com/in/jyoti-prakash-8287151bb/"
                >
                  <svg
                    className="hover:opacity-80"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 5 1036 990"
                    id="linkedin"
                  >
                    <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path>
                  </svg>
                </a>
                <a
                  className="p-2"
                  target="_blank"
                  href="https://codepen.io/Jyoti-prakash"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="codepen"
                  >
                    <path d="m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"></path>
                  </svg>
                </a>
                <a
                  className="p-2"
                  target="_blank"
                  href="mailto:jyotiprakash0737@gmail.com"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="mail"
                  >
                    <path
                      fill="#231f20"
                      d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z"
                    ></path>
                    <path
                      fill="#231f20"
                      d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z"
                    ></path>
                  </svg>
                </a>
              </ul>
            </div>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-xl border border-gray-600 hover:scale-105 duration-200 hover:text-gray-200 hover:border-gray-800 hover:from-black hover:to-gray-900 shadow-btn"
              >
                <PhoneIcon
                  className="h-6 w-6 text-white-600 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                Contact
              </Link>
              <Link
                to="/"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-800"
              >
                Home <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}


// project card
const ProjectCard = ({ title, description, link, stack, image }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 sm:p-5 rounded-xl"
  >
    <div className="flex relative w-full lg:h-80">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-contain bg-white object-center rounded-xl border-2 border-s-slate-200"
        src={image}
      />
      <div
        className="px-8 py-10 relative h-full w-full border-2 shadow-xl shadow-indigo-600 rounded-xl bg-zinc-800 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{ height: "100%" }}
      >
        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1 mt-0 sm:mt-8 ">
          {stack}
        </h2>
        <h1 className="title-font text-lg font-medium text-white mb-3">
          {title}
        </h1>
        <p className="leading-relaxed text-slate-200 lg:block hidden">
          {description}
        </p>
      </div>
    </div>
  </a>
);
