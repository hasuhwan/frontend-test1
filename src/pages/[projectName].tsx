import ImageProject from "../components/viewProject/ImageProject";
import DescriptionProject from "../components/viewProject/DescriptionProject";
import { viewProjectData } from "../components/viewProject/staticData";
import { projectData } from "../components/Project/staticData";
import Head from "next/head";
import type { IdetailData } from "../components/viewProject/staticData";

interface IdataValue extends IdetailData {
  title: string;
}
interface IpropsValue {
  data: IdataValue;
}
export default function ViewProject(props: IpropsValue) {
  return (
    <>
      <Head>
        <title>{`하수환 | ${props.data.title} `}</title>
      </Head>
      <h1 className="block text-head font-extrabold mb-span">
        {props.data.title}
      </h1>
      {props.data.img.length === 0 ? null : (
        <ImageProject images={props.data.img} />
      )}
      <DescriptionProject description={props.data.description} />
    </>
  );
}
export const getStaticPaths = async () => {
  const paths = [
    { params: { projectName: "twitter" } },
    { params: { projectName: "challenge" } },
    { params: { projectName: "stackoverflow" } },
  ];
  return { paths, fallback: false };
};
interface IparamsValue {
  projectName: string;
}
interface IcontextValue {
  params: IparamsValue;
}

export async function getStaticProps({ params }: IcontextValue) {
  const data = viewProjectData[params.projectName];
  const title = projectData[params.projectName].title;
  return {
    props: { data: { ...data, title } },
  };
}
