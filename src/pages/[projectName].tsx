import ImageProject from "../components/viewProject/ImageProject";
import DescriptionProject from "../components/viewProject/DescriptionProject";
import { viewProjectData } from "../components/viewProject/staticData";
export default function ViewProject() {
  const temp = viewProjectData.challenge;
  return (
    <>
      <ImageProject images={temp.img} />
      <DescriptionProject description={temp.description} />
    </>
  );
}
