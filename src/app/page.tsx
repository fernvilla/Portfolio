import Link from 'next/link';
import {
  SiAngularjs,
  SiBootstrap,
  SiCsharp,
  SiCssmodules,
  SiDjango,
  SiDotnet,
  SiGithub,
  SiGmail,
  SiJavascript,
  SiJquery,
  SiLess,
  SiLinkedin,
  SiMobx,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiR,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReacttable,
  SiRedux,
  SiSass,
  SiSemanticuireact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWebpack
} from 'react-icons/si';

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-cyan-600 text-white text-xs rounded-full px-3 py-2 flex items-center gap-1">{children}</div>
);

export default function Home() {
  return (
    <main className="flex flex-wrap max-w-screen-xl mx-auto px-5 md:px-10 py-10 md:py-20 text-white gap-20 relative">
      <div className="flex-auto lg:flex-[0_1_400px]">
        <div className="sticky top-20">
          <h1 className="text-5xl font-bold mb-2">Fernando Villasenor</h1>

          <div className="text-lg flex items-center mb-5">
            <span className="pr-1">Senior Software Engineer, Frontend</span>
            <span className="blinking-cursor">|</span>
          </div>

          <div className="text-gray-300">
            Los Angeles based software engineer w/9+ years experience in building complex UIs. I&#39;m a big fan of
            React, Javascript and TypeScript - amongst the many other tools I&#39;ve used over the years.
          </div>

          <div className="mt-10 md:mt-20 flex items-center flex-wrap gap-4">
            <Link href="https://github.com/fernvilla">
              <SiGithub size={24} className="opacity-70" />
            </Link>

            <Link href="https://www.linkedin.com/in/fernandovillasenor/">
              <SiLinkedin size={24} className="opacity-70" />
            </Link>

            <Link href="mailto:fvilla18@gmail.com">
              <SiGmail size={24} className="opacity-70" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {/* Item */}
        <div className="flex items-start gap-10 mb-10">
          <div className="uppercase text-xs flex-none">Jan 2023 - present</div>

          <div className="-mt-1 flex-auto">
            <h2 className="font-semibold">Senior Software Engineer, Front End</h2>
            <div className="text-gray-300 text-sm">GMSE Corp/Sponsorship Exchange</div>

            <div className="mt-5">
              <div className="text-gray-100 text-sm">
                <ul className="list-disc pl-3">
                  <li>
                    Built the entire ui platform from scratch using Next.js/React - making every required technical and
                    architectural decision (including library/framework choices, deployment, testing, and best practices
                    - linting, formatting, folder structure) along the way{' '}
                  </li>
                  <li>Built an entire collection of reusable UI React components from scratch w/Tailwind CSS</li>
                  <li>
                    Built multiple programs for our multi-tenant sponsorship matching application- including dashboards,
                    profile pages, sponsorship offer/proposals, ‘sponsorship builder’ dynamic form, file uploading and
                    markdown editing.
                  </li>
                  <li>
                    Built admin dashboard w/staff functionality, using Next.js middleware for server-side route
                    protection.
                  </li>
                  <li>
                    Setup custom authentication using Auth0 via NextJS api routing- implementing jwt access/refresh
                    token via browser cookies and Axios interceptors.
                  </li>
                  <li>
                    Worked on the backend as needed, developing a file upload tool to AWS S3, using Nest.js backend
                    framework
                  </li>
                  <li>
                    Worked closely w/VP of Engineering on any company-wide decision making - including the interviewing
                    and hiring of new engineers
                  </li>
                  <li>Setup Hubspot for static pages.</li>
                </ul>
              </div>

              <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                <Tag>
                  React <SiReact className="inline-block" />
                </Tag>

                <Tag>
                  Typescript <SiTypescript className="inline-block" />
                </Tag>

                <Tag>
                  Javascript <SiJavascript className="inline-block" />
                </Tag>

                <Tag>
                  Next.js <SiNextdotjs className="inline-block" />
                </Tag>

                <Tag>
                  Tailwind CSS <SiTailwindcss className="inline-block" />
                </Tag>

                <Tag>
                  React Query <SiReactquery className="inline-block" />
                </Tag>

                <Tag>
                  Nest.js <SiNestjs className="inline-block" />
                </Tag>

                <Tag>
                  React Hook Form <SiReacthookform className="inline-block" />
                </Tag>

                <Tag>
                  React Table <SiReacttable className="inline-block" />
                </Tag>

                <Tag>
                  Vercel <SiVercel className="inline-block" />
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-10 mb-10">
          <div className="uppercase text-xs flex-none">Jul 2021 - Dec 2022</div>

          <div className="-mt-1 flex-auto">
            <h2 className="font-semibold">Senior Software Engineer, Front End</h2>
            <div className="text-gray-300 text-sm">Tradesy/Vestiaire Collective</div>

            <div className="mt-5">
              <div className="text-gray-100 text-sm">
                <ul className="list-disc pl-3">
                  <li>
                    Worked on a multitude of teams, building out new features, while modernizing legacy pages to React
                  </li>
                  <li>Rewrote the entire frontend UI for our item recommendations tool</li>
                  <li>
                    Assisted Principal Engineer in large scale architectural change from client-side rendering of React
                    pages to SSR (served from PHP backend)
                  </li>
                  <li>Successfully helped migrate users from the Tradesy to Vestiaire Collective platform</li>
                </ul>
              </div>

              <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                <Tag>
                  React <SiReact className="inline-block" />
                </Tag>

                <Tag>
                  Typescript <SiTypescript className="inline-block" />
                </Tag>

                <Tag>
                  Javascript <SiJavascript className="inline-block" />
                </Tag>

                <Tag>
                  SASS <SiSass className="inline-block" />
                </Tag>

                <Tag>
                  Mobx <SiMobx className="inline-block" />
                </Tag>

                <Tag>
                  PHP <SiPhp className="inline-block" />
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-10 mb-10">
          <div className="uppercase text-xs flex-none">Jul 2020 - Jul 2021</div>

          <div className="-mt-1 flex-auto">
            <h2 className="font-semibold">Senior Frontend Engineer</h2>
            <div className="text-gray-300 text-sm">MyLife</div>

            <div className="mt-5">
              <div className="text-gray-100 text-sm">
                <ul className="list-disc pl-3">
                  <li>
                    Responsible for the frontend development of the RealMe platform (a B2B product for consumer online
                    safety)
                  </li>
                  <li>Built custom widgets for partners to integrate w/our API, along w/custom landing pages</li>
                  <li>Rebuilt profile search flow w/React and added testing</li>
                </ul>
              </div>

              <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                <Tag>
                  React <SiReact className="inline-block" />
                </Tag>

                <Tag>
                  Javascript <SiJavascript className="inline-block" />
                </Tag>

                <Tag>
                  Webpack <SiWebpack className="inline-block" />
                </Tag>

                <Tag>
                  SASS <SiSass className="inline-block" />
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-10 mb-10">
          <div className="uppercase text-xs flex-none">Aug 2017 - Jul 2020</div>

          <div className="-mt-1 flex-auto">
            <h2 className="font-semibold">Software Engineer</h2>
            <div className="text-gray-300 text-sm">Tix</div>

            <div className="mt-5">
              <div className="text-gray-100 text-sm">
                <ul className="list-disc pl-3">
                  <li>
                    Responsible for all frontend development - focusing on updating over 30+ legacy programs and data
                    reports from ASP.net to React w/Redux
                  </li>
                  <li>
                    Developed new UI programs such as email notification management, e-ticket management, as well as new
                    data reporting w/search criteria and data-grid functionality (exporting/emailing data & pdf
                    generation)
                  </li>
                  <li>Built charts, timelines and sales comparison tools using Chart.js</li>
                  <li>
                    Built API endpoints using C#/.Net w/Sql (MS SQL server) to integrate w/updated UI programs as needed
                  </li>
                  <li>Created mobile friendly E-tickets with customizable images</li>
                </ul>
              </div>

              <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                <Tag>
                  React <SiReact className="inline-block" />
                </Tag>

                <Tag>
                  Javascript <SiJavascript className="inline-block" />
                </Tag>

                <Tag>
                  Webpack <SiWebpack className="inline-block" />
                </Tag>

                <Tag>
                  Redux <SiRedux className="inline-block" />
                </Tag>

                <Tag>
                  CSS Modules <SiCssmodules className="inline-block" />
                </Tag>

                <Tag>
                  Semantic UI <SiSemanticuireact className="inline-block" />
                </Tag>

                <Tag>
                  C# <SiCsharp className="inline-block" />
                </Tag>

                <Tag>
                  .Net <SiDotnet className="inline-block" />
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-10 mb-10">
          <div className="uppercase text-xs flex-none">Jan 2015 - Jul 2017</div>

          <div className="-mt-1 flex-auto">
            <h2 className="font-semibold">Frontend Developer</h2>
            <div className="text-gray-300 text-sm">Panjo</div>

            <div className="mt-5">
              <div className="text-gray-100 text-sm">
                <ul className="list-disc pl-3">
                  <li>
                    Responsible for the entire frontend development of the marketplace- implementing all core features,
                    redesigns and updates
                  </li>
                  <li>
                    Introduced React/Redux (along w/testing) within user listing-management pages to begin transition
                    from jQuery
                  </li>
                  <li>Created all responsive html emails for use w/user notifications & marketing</li>
                  <li>Integrated checkout form w/Braintree Javascript SDK</li>
                </ul>
              </div>

              <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                <Tag>
                  jQuery <SiJquery className="inline-block" />
                </Tag>

                <Tag>
                  React <SiReact className="inline-block" />
                </Tag>

                <Tag>
                  SASS <SiSass className="inline-block" />
                </Tag>

                <Tag>
                  Javascript <SiJavascript className="inline-block" />
                </Tag>

                <Tag>
                  Webpack <SiWebpack className="inline-block" />
                </Tag>

                <Tag>
                  Redux <SiRedux className="inline-block" />
                </Tag>

                <Tag>
                  .Net <SiDotnet className="inline-block" />
                </Tag>
              </div>
            </div>
          </div>
        </div>

        {/* Item */}
        <div className="flex items-start gap-10 mb-10">
          <div className="uppercase text-xs flex-none">May 2014 - Dec 2014</div>

          <div className="-mt-1 flex-auto">
            <h2 className="font-semibold">Frontend Developer</h2>
            <div className="text-gray-300 text-sm">truBrain</div>

            <div className="mt-5">
              <div className="text-gray-100 text-sm">
                <ul className="list-disc pl-3">
                  <li>Led all frontend page redesigns- encompassing more than 90% of the website</li>
                  <li>Instituted the use of Angular to rebuild the subscription signup/checkout processes</li>
                  <li>Converted the entire site to be fully responsive and mobile friendly</li>
                </ul>
              </div>

              <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                <Tag>
                  jQuery <SiJquery className="inline-block" />
                </Tag>

                <Tag>
                  Javascript <SiJavascript className="inline-block" />
                </Tag>

                <Tag>
                  Angular <SiAngularjs className="inline-block" />
                </Tag>

                <Tag>
                  Bootstrap <SiBootstrap className="inline-block" />
                </Tag>

                <Tag>
                  LESS <SiLess className="inline-block" />
                </Tag>

                <Tag>
                  Django <SiDjango className="inline-block" />
                </Tag>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
