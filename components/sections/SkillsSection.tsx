import skills from '@/lib/skills';

const SkillsSection = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-4'>
      <h2 className='mb-6 text-center text-2xl font-bold text-white'>
        My Skills
      </h2>
      <div className='flex flex-wrap justify-center space-x-4'>
        {skills.map((skill, index) => (
          <span key={index} className='text-lg font-semibold text-gray-200'>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
export default SkillsSection;
