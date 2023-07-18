import ImageProject from "../components/viewProject/ImageProject";
import DescriptionProject from "../components/viewProject/DescriptionProject";
import { viewProjectData } from "../components/viewProject/staticData";
import { projectData } from "../components/Project/staticData";
export default function ViewProject() {
  const temp = viewProjectData.challenge;
  const title = projectData.challenge.title;
  return (
    <>
      <h1 className="block text-head font-extrabold mb-span">{title}</h1>
      <ImageProject images={temp.img} />
      <DescriptionProject description={temp.description} />
    </>
  );
}
