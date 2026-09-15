'use client';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import { useSelector } from 'react-redux';
import { HOME_QUERY } from '@/src/graphql/home';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';

import DynamicZone from '@/src/components/dynamic-zone';
import { useEffect } from 'react';

const rootVariables3 = {
   "--bg-main": "#050505",
  "--bg-card": "#0F0F0F",
  "--bg-card-hover": "#151515",

  "--accent": "#FF9F1C",
  "--accent-hover": "#FFB84D",
  "--accent-dim": "rgba(255, 159, 28, 0.15)",

  "--text-main": "#FFFFFF",
  "--text-muted": "#999999",
  "--border-light": "rgba(255, 255, 255, 0.08)",
  "--border-accent": "rgba(255, 159, 28, 0.3)",

  "--bg-paper": "#FBFBF9",
  "--bg-paper-card": "#FFFFFF",
  "--bg-lime": "#FFF0D6",
  "--bg-lime-card": "#FFF7E8",
  "--bg-grey": "#F0F0EE",
  "--bg-grey-card": "#FFFFFF",
  "--ink": "#0A0A0A",
  "--ink-muted": "#63645C",
  "--border-dark": "rgba(10, 10, 10, 0.09)",
  "--accent-ink": "#B86600",

  "--radius-m": "16px",
  "--radius-s": "8px",
};
const rootVariables2 = {
   "--bg-main": "#050505",
  "--bg-card": "#0F0F0F",
  "--bg-card-hover": "#151515",

  "--accent": "#38BDF8",
  "--accent-hover": "#67D3FF",
  "--accent-dim": "rgba(56, 189, 248, 0.15)",

  "--text-main": "#FFFFFF",
  "--text-muted": "#999999",
  "--border-light": "rgba(255, 255, 255, 0.08)",
  "--border-accent": "rgba(56, 189, 248, 0.3)",

  "--bg-paper": "#FBFBF9",
  "--bg-paper-card": "#FFFFFF",
  "--bg-lime": "#DDF4FD",
  "--bg-lime-card": "#EFF9FE",
  "--bg-grey": "#F0F0EE",
  "--bg-grey-card": "#FFFFFF",
  "--ink": "#0A0A0A",
  "--ink-muted": "#63645C",
  "--border-dark": "rgba(10, 10, 10, 0.09)",
  "--accent-ink": "#0878A8",

  "--radius-m": "16px",
  "--radius-s": "8px",
};
const rootVariables = {
  "--bg-main": "#050505",
  "--bg-card": "#0F0F0F",
  "--bg-card-hover": "#151515",
  "--accent": "#D1F82A",
  "--accent-hover": "#E2FF5A",
  "--accent-dim": "rgba(209, 248, 42, 0.15)",
  "--text-main": "#FFFFFF",
  "--text-muted": "#999999",
  "--border-light": "rgba(255, 255, 255, 0.08)",
  "--border-accent": "rgba(209, 248, 42, 0.3)",

  "--bg-paper": "#FBFBF9",
  "--bg-paper-card": "#FFFFFF",
  "--bg-lime": "#EFF9CE",
  "--bg-lime-card": "#F8FCE9",
  "--bg-grey": "#F0F0EE",
  "--bg-grey-card": "#FFFFFF",
  "--ink": "#0A0A0A",
  "--ink-muted": "#63645C",
  "--border-dark": "rgba(10, 10, 10, 0.09)",
  "--accent-ink": "#6E8B00",

  "--radius-m": "16px",
  "--radius-s": "8px",
};

export default function Home() {
  const locale = useSelector((state) => state.locale.locale);
  // useEffect(() => {
  //   const root = document.documentElement;

  //   Object.entries(rootVariables).forEach(([key, value]) => {
  //     root.style.setProperty(key, value);
  //   });
  // }, []);
  // console.log(locale)
  const { data, loading, error } = useQuery(HOME_QUERY, {
    variables: {
      locale: locale,
    },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <PageSkeleton />;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content);
  // console.log(data)

  // return null
  if (!data?.home) return <PageSkeleton />;

  // let content = data?.home.blockHeading2.content
  // console.log(content)
  return (
    <>
      <Header />
      <DynamicZone data={data?.home?.content} />
      <Footer />
    </>
  );
}




const Team5 = () => {
  return (
    <div>
      {/* MDI Icons */}
      {/* Page Container */}
      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col mt-8">
            {/* Meet the Team */}
            <div className="container max-w-7xl px-4">
              {/* Section Header */}
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  {/* Header */}
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">Meet the Team</h1>
                  {/* Description */}
                  <p className="text-gray-700 text-lg font-light">With over 100 years of combined experience, we've got a well-seasoned team at the helm.</p>
                </div>
              </div>
              {/* Team Members */}
              <div className="flex flex-wrap">
                {/* Member #1 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    {/* Avatar */}
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />
                    </a>
                    {/* Details */}
                    <div className="text-center mt-6">
                      {/* Name */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Tranter Jaskulski</h1>
                      {/* Title */}
                      <div className="text-gray-700 font-light mb-2">Founder &amp; Specialist</div>
                      {/* Social Icons */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* Linkedin */}
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2" />
                        </a>
                        {/* Twitter */}
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2" />
                        </a>
                        {/* Instagram */}
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Member #2 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    {/* Avatar */}
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                    </a>
                    {/* Details */}
                    <div className="text-center mt-6">
                      {/* Name */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Denice Jagna</h1>
                      {/* Title */}
                      <div className="text-gray-700 font-light mb-2">Tired &amp; M. Specialist</div>
                      {/* Social Icons */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* Linkedin */}
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2" />
                        </a>
                        {/* Twitter */}
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2" />
                        </a>
                        {/* Instagram */}
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Member #3 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    {/* Avatar */}
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                    </a>
                    {/* Details */}
                    <div className="text-center mt-6">
                      {/* Name */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Kenji Milton</h1>
                      {/* Title */}
                      <div className="text-gray-700 font-light mb-2">Team Memeber</div>
                      {/* Social Icons */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* Linkedin */}
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2" />
                        </a>
                        {/* Twitter */}
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2" />
                        </a>
                        {/* Instagram */}
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Member #4 */}
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    {/* Avatar */}
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100" src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80" />
                    </a>
                    {/* Details */}
                    <div className="text-center mt-6">
                      {/* Name */}
                      <h1 className="text-gray-900 text-xl font-bold mb-1">Doesn't matter</h1>
                      {/* Title */}
                      <div className="text-gray-700 font-light mb-2">Will be fired</div>
                      {/* Social Icons */}
                      <div
                        className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      >
                        {/* Linkedin */}
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2" />
                        </a>
                        {/* Twitter */}
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2" />
                        </a>
                        {/* Instagram */}
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team4 = () => {
  return (
    <div className="p-10 max-w-screen-lg mx-auto">
      <div className="text-center mb-4">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Our<span className="text-indigo-600"> Team</span>
        </h3>
      </div>
      <div className="sm:grid grid-cols-2 gap-6 my-10">
        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3785084/pexels-photo-3785084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }} title="Woman holding a mug"></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
            <div className>
              <a href="#" className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Yahya R. Makarim
              </a>
              <p className="text-sm text-gray-600">CEO &amp; President</p>
              <p className="text-gray-500 text-base mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="my-4 flex">
                <a href="#">
                  <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                      <g data-name="facebook">
                        <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                        <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg className="mr-3" width="16px" height="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" style={{ enableBackground: 'new 0 0 310 310' }} xmlSpace="preserve">
                    <g id="XMLID_826_">
                      <path
                        id="XMLID_827_"
                        d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg width="19px" height="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 239.04 239.04" style={{ enableBackground: 'new 0 0 239.04 239.04' }} xmlSpace="preserve">
                    <g>
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"
                      />
                      <path
                        d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"
                      />
                      <path
                        d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")' }} title="Woman holding a mug"></div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
            <div className>
              <a href="#" className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                Zakir Hussain Rezai
              </a>
              <p className="text-sm text-gray-600">VueJS Developer</p>
              <p className="text-gray-500 text-base mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="my-4 flex">
                <a href="#">
                  <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                      <g data-name="facebook">
                        <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                        <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg className="mr-3" width="16px" height="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" style={{ enableBackground: 'new 0 0 310 310' }} xmlSpace="preserve">
                    <g id="XMLID_826_">
                      <path
                        id="XMLID_827_"
                        d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg width="19px" height="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 239.04 239.04" style={{ enableBackground: 'new 0 0 239.04 239.04' }} xmlSpace="preserve">
                    <g>
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"
                      />
                      <path
                        d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"
                      />
                      <path
                        d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team3 = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="py-10 max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our<span className="text-indigo-600"> Team</span>
          </h3>
        </div>
        <div className="grid grid-cols-3 col-gap-10">
          <div className="text-center bg-white">
            <img className="w-100" src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="p-4">
              <div className="text-md">
                <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out">
                  Mehdi Mohammadi
                </a>
                <p className="text-gray-500 uppercase text-sm">Web developer</p>
              </div>
              <div className="my-4 flex justify-center items-center">
                <a href="#">
                  <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                      <g data-name="facebook">
                        <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                        <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg className="mr-3" width="16px" height="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" style={{ enableBackground: 'new 0 0 310 310' }} xmlSpace="preserve">
                    <g id="XMLID_826_">
                      <path
                        id="XMLID_827_"
                        d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg width="19px" height="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 239.04 239.04" style={{ enableBackground: 'new 0 0 239.04 239.04' }} xmlSpace="preserve">
                    <g>
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"
                      />
                      <path
                        d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"
                      />
                      <path
                        d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center bg-white">
            <img className="w-100" src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="p-4">
              <div className="text-md">
                <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out">
                  Yahya R. Makarim
                </a>
                <p className="text-gray-500 uppercase text-sm">president &amp; CEO</p>
              </div>
              <div className="my-4 flex justify-center items-center">
                <a href="#">
                  <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                      <g data-name="facebook">
                        <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                        <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg className="mr-3" width="16px" height="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" style={{ enableBackground: 'new 0 0 310 310' }} xmlSpace="preserve">
                    <g id="XMLID_826_">
                      <path
                        id="XMLID_827_"
                        d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg width="19px" height="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 239.04 239.04" style={{ enableBackground: 'new 0 0 239.04 239.04' }} xmlSpace="preserve">
                    <g>
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"
                      />
                      <path
                        d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"
                      />
                      <path
                        d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center bg-white">
            <img className="w-100" src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <div className="p-4">
              <div className="text-md">
                <a href="#" className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out">
                  Ahmad Sultani
                </a>
                <p className="text-gray-500 uppercase text-sm">Web designer</p>
              </div>
              <div className="my-4 flex justify-center items-center">
                <a href="#">
                  <svg className="mr-3" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                      <g data-name="facebook">
                        <rect width={24} height={24} transform="rotate(180 12 12)" opacity={0} />
                        <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z"></path>
                      </g>
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg className="mr-3" width="16px" height="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 310 310" style={{ enableBackground: 'new 0 0 310 310' }} xmlSpace="preserve">
                    <g id="XMLID_826_">
                      <path
                        id="XMLID_827_"
                        d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
		c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
		c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
		C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
		c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
		c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
		c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
		c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
		c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
		c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
		c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
		C307.394,57.037,305.009,56.486,302.973,57.388z"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#">
                  <svg width="19px" height="19px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 239.04 239.04" style={{ enableBackground: 'new 0 0 239.04 239.04' }} xmlSpace="preserve">
                    <g>
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872
		c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118
		c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251
		c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z"
                      />
                      <path
                        d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438
		c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957
		c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654
		c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z"
                      />
                      <path
                        style={{ fill: '#FFFFFF' }}
                        d="M155.754,93.94c-15.675-23.742-51.06-26.08-70.081-5.042c-12.971,14.346-13.888,38.226-4.125,55.185
		c0.55,0.183,1.054,0.504,1.513,1.054c15.859,17.692,43.176,24.109,62.794,8.067C163.363,138.858,168.496,113.236,155.754,93.94z"
                      />
                      <path
                        d="M93.282,126.483c5.546,15.584,25.255,27.959,40.976,18.334c31.763-19.434-5.546-72.235-31.718-48.814
		C93.282,101.457,89.661,116.261,93.282,126.483z"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Team2() {
  return (
    <section className="px-4 md:px-8 mt-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-head">
          <p style={{ color: '#d1f82a' }} className="route-tag">
            meet out team
          </p>
          <h2>Trusted by teams who can't afford downtime</h2>
          {/* <p>Real feedback from teams running high volume dial floors every day, shared here exactly as our customers told it to us.</p> */}
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap gap-6 items-center justify-center">
            <div className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer  transition">
              <img className="w-24 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="userImage1" />
              <h2 className="text-gray-700  text-lg font-medium mt-2">Donald Jackman</h2>
              <p className="text-gray-500 ">Content Creator</p>
              <p className="text-center text-gray-500/60  w-3/4 mt-4">Lorem Ipsum is simply dummy text of the printing</p>
              <div className="flex items-center space-x-4 mt-6 text-gray-500 ">
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-blue-600 transition">
              <img className="w-24 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2" />
              <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">Richard Nelson</h2>
              <p className="text-gray-500 group-hover:text-white/80">Content Writer</p>
              <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">Lorem Ipsum is simply dummy text of the printing</p>
              <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group flex flex-col items-center py-8 text-sm bg-white border border-gray-300/60 w-64 rounded-md cursor-pointer hover:border-blue-600 hover:bg-blue-600 transition">
              <img className="w-24 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="userImage3" />
              <h2 className="text-gray-700 group-hover:text-white text-lg font-medium mt-2">James Washington</h2>
              <p className="text-gray-500 group-hover:text-white/80">Content Marketing</p>
              <p className="text-center text-gray-500/60 group-hover:text-white/60 w-3/4 mt-4">Lorem Ipsum is simply dummy text of the printing</p>
              <div className="flex items-center space-x-4 mt-6 text-gray-500 group-hover:text-white">
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.882 0H1.167A1.16 1.16 0 0 0 0 1.161V14.84C0 15.459.519 16 1.167 16H14.83a1.16 1.16 0 0 0 1.166-1.161V1.135C16.048.516 15.53 0 14.882 0M4.744 13.6H2.385V5.987h2.36zM3.552 4.929c-.778 0-1.374-.62-1.374-1.368a1.38 1.38 0 0 1 1.374-1.367 1.38 1.38 0 0 1 1.374 1.367c0 .749-.57 1.368-1.374 1.368M11.33 13.6V9.91c0-.878-.026-2.039-1.245-2.039-1.244 0-1.426.98-1.426 1.961V13.6H6.3V5.987h2.307v1.058h.026c.337-.62 1.09-1.239 2.256-1.239 2.411 0 2.852 1.549 2.852 3.665V13.6z" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.095 0H1.905C.855 0 0 .854 0 1.905v12.19C0 15.145.854 16 1.905 16h12.19c1.05 0 1.905-.854 1.905-1.905V1.905C16 .855 15.146 0 14.095 0m-1.521 6.98a2.85 2.85 0 0 1-2.651-1.277v4.395A3.248 3.248 0 1 1 6.674 6.85c.068 0 .134.006.201.01v1.6c-.067-.007-.132-.02-.2-.02a1.658 1.658 0 1 0 0 3.316c.915 0 1.724-.721 1.724-1.637l.016-7.465h1.531a2.85 2.85 0 0 0 2.63 2.547v1.78" fill="currentColor" />
                  </svg>
                </a>
                <a href="#">
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m16.358 2.613 1.128-1.425c.326-.386.416-.683.445-.832-.89.535-1.722.713-2.256.713h-.208L15.348.95A3.83 3.83 0 0 0 12.795 0c-2.078 0-3.71 1.722-3.71 3.71 0 .12 0 .298.03.417l.088.593-.623-.03C4.78 4.573 1.663 1.307 1.158.743c-.831 1.485-.356 2.91.148 3.8l1.01 1.663-1.603-.89q.044 1.87 1.425 2.938l.801.594-.801.326c.504 1.515 1.632 2.138 2.464 2.375l1.098.297-1.04.713C2.999 13.745.92 13.656 0 13.568c1.87 1.305 4.097 1.602 5.64 1.602 1.158 0 2.02-.118 2.227-.207 8.313-1.96 8.699-9.382 8.699-10.866v-.208l.178-.119c1.01-.95 1.425-1.454 1.662-1.751-.089.03-.208.089-.326.119z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Teams = () => {
  return (
    <section className="px-4 md:px-8 mt-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-head">
          <p style={{ color: '#d1f82a' }} className="route-tag">
            meet out team
          </p>
          <h2>Trusted by teams who can't afford downtime</h2>
          {/* <p>Real feedback from teams running high volume dial floors every day, shared here exactly as our customers told it to us.</p> */}
        </div>
        <ul className="grid gap-4 mx-auto grid-cols-2 md:gap-6 md:grid-cols-3 sm:max-w-xl md:max-w-full">
          <li className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
              <img src="https://readymadeui.com/team-1.webp" className="w-full h-full object-cover object-top" alt="John Doe" />
            </div>
            <div className="text-center mt-4 mb-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">John Doe</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Software Engineer</p>
            </div>
          </li>
          <li className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
              <img src="https://readymadeui.com/team-2.webp" className="w-full h-full object-cover object-top" alt="Mark Adair" />
            </div>
            <div className="text-center mt-4 mb-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Mark Adair</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Web Developer</p>
            </div>
          </li>
          <li className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
              <img src="https://readymadeui.com/team-3.webp" className="w-full h-full object-cover object-top" alt="Simon Konecki" />
            </div>
            <div className="text-center mt-4 mb-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Simon Konecki</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Web Designer</p>
            </div>
          </li>
          <li className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
              <img src="https://readymadeui.com/team-4.webp" className="w-full h-full object-cover object-top" alt="Eleanor" />
            </div>
            <div className="text-center mt-4 mb-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Eleanor</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Web Designer</p>
            </div>
          </li>
          <li className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
              <img src="https://readymadeui.com/team-5.webp" className="w-full h-full object-cover object-top" alt="Alen" />
            </div>
            <div className="text-center mt-4 mb-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Alen</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Software Engineer</p>
            </div>
          </li>
          <li className="bg-white p-2 border border-slate-300 rounded-lg sm:p-3 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="bg-gray-50 aspect-square rounded-lg overflow-hidden dark:bg-neutral-700">
              <img src="https://readymadeui.com/team-6.webp" className="w-full h-full object-cover object-top" alt="Sophia" />
            </div>
            <div className="text-center mt-4 mb-1">
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">Sophia</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Software Developer</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
