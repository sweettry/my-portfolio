'use client';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import {projects} from '@/lib/placeholder-data';

const ProjectDetailPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Extract the project ID from the pathname
  const projectId = pathname.split('/').pop();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <p>Project not found!</p>;
  }

  return (
    <div className="project-detail-page">
      <p className="text-gray-700">{project.description}</p>
      <div className="project-content mt-6">
        {/* Add more details about the project here */}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
