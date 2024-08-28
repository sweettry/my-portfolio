import skills from '@/lib/skills';
import { Separator } from '../ui/separator';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiSolidity,
} from 'react-icons/si';
// import { TbBrandFoundry } from 'react-icons/tb';
const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Python', icon: SiPython, color: 'text-blue-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-teal-500' },
    { name: 'Solidity', icon: SiSolidity, color: 'text-gray-600' },
    // { name: 'Foundry', icon: TbBrandFoundry, color: 'text-orange-500' },
  ];

  return (
    <section className='py-12'>
      <div className='container mx-auto px-4'>
        <Separator className='mb-8 opacity-50' />
        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-36'>
          {skills.map((skill) => (
            <div key={skill.name} className='flex flex-col items-center'>
              <skill.icon className={`h-12 w-12 ${skill.color}`} />
              <span className='mt-2 text-sm font-medium'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
