import skills from '@/lib/skills';
import { Separator } from '../ui/separator';
const SkillsSection = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4 py-6'>
      <Separator className='opacity-15' />
      <div className='pt-6'>
        <div className='flex flex-wrap justify-center space-x-4'>
          {skills.map((skill, index) => (
            <span key={index} className='text-lg font-semibold text-gray-200'>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsSection;
