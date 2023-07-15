import Tag from '@/components/Tag';
import experience from '@/data/experience';
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
  SiMicrosoftsqlserver,
  SiMobx,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
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

const mapIcon = (name: string) => {
  switch (name) {
    case 'react':
      return <SiReact className="inline-block" />;
    case 'typescript':
      return <SiTypescript className="inline-block" />;
    case 'javascript':
      return <SiJavascript className="inline-block" />;
    case 'jquery':
      return <SiJquery className="inline-block" />;
    case 'sass':
      return <SiSass className="inline-block" />;
    case 'bootstrap':
      return <SiBootstrap className="inline-block" />;
    case 'less':
      return <SiLess className="inline-block" />;
    case 'css-modules':
      return <SiCssmodules className="inline-block" />;
    case 'redux':
      return <SiRedux className="inline-block" />;
    case 'mobx':
      return <SiMobx className="inline-block" />;
    case 'webpack':
      return <SiWebpack className="inline-block" />;
    case 'angular':
      return <SiAngularjs className="inline-block" />;
    case 'django':
      return <SiDjango className="inline-block" />;
    case 'php':
      return <SiPhp className="inline-block" />;
    case '.net':
      return <SiDotnet className="inline-block" />;
    case 'semantic-ui':
      return <SiSemanticuireact className="inline-block" />;
    case 'react-query':
      return <SiReactquery className="inline-block" />;
    case 'react-table':
      return <SiReacttable className="inline-block" />;
    case 'react-hook-form':
      return <SiReacthookform className="inline-block" />;
    case 'tailwind':
      return <SiTailwindcss className="inline-block" />;
    case 'nextjs':
      return <SiNextdotjs className="inline-block" />;
    case 'vercel':
      return <SiVercel className="inline-block" />;
    case 'nestjs':
      return <SiNestjs className="inline-block" />;
    case 'csharp':
      return <SiCsharp className="inline-block" />;
    case 'microsoft-sql-server':
      return <SiMicrosoftsqlserver className="inline-block" />;
    default:
      return null;
  }
};

export default function Home() {
  return (
    <main className="flex flex-wrap max-w-screen-xl mx-auto px-5 md:px-10 py-10 md:py-20 text-white gap-20 relative">
      <div className="flex-auto lg:flex-[0_1_400px]">
        <div className="sticky top-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Fernando Villasenor</h1>

          <div className="text-lg flex items-center mb-5">
            <span className="pr-1">Senior Software Engineer, Frontend</span>
            <span className="blinking-cursor">|</span>
          </div>

          <div className="text-gray-300">
            Los Angeles based software engineer w/{new Date().getFullYear() - new Date('1/1/2014').getFullYear()}+ years
            experience in building complex UIs. I&#39;m a big fan of React, Javascript and TypeScript - amongst the many
            other tools I&#39;ve used over the years.
          </div>

          <Link href="/resume.pdf" className="mt-10 block text-cyan-300" aria-label="Download my resume file">
            Download Resume
          </Link>

          <div className="mt-10 md:mt-20 flex items-center flex-wrap gap-4">
            <Link href="https://github.com/fernvilla" aria-label="Visit github profile">
              <SiGithub size={24} className="opacity-70" />
            </Link>

            <Link href="https://www.linkedin.com/in/fernandovillasenor/" aria-label="Visit linkedin profile">
              <SiLinkedin size={24} className="opacity-70" />
            </Link>

            <Link href="mailto:fvilla18@gmail.com" aria-label="Contact me via gmail">
              <SiGmail size={24} className="opacity-70" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {experience.map(item => (
          <div className="flex items-start gap-x-10 gap-y-2 mb-10 flex-wrap" key={item.company}>
            <div className="uppercase text-xs flex-[1_1_100%] md:flex-none">{item.datesWorked}</div>

            <div className="-mt-1 flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <div className="text-gray-300 text-sm">{item.company}</div>

              <div className="mt-5">
                <div className="text-gray-100 text-sm">
                  <ul className="list-disc pl-3">
                    {item.expList.map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap mt-5 gap-x-4 gap-y-3">
                  {item.libraryList.map(lib => (
                    <Tag key={lib} className="capitalize">
                      {lib.replace(/-/g, ' ')} {mapIcon(lib)}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
