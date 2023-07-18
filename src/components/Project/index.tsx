import { useCallback } from "react";
import Particle from "../Particle";
import Post from "./Post";
import { useRouter } from "next/router";
import { projectData } from "./staticData";

export default function Project() {
  const router = useRouter();
  const onNavigateHandle = useCallback((title: string) => {
    router.push(`/${title}`);
  }, []);
  return (
    <Particle title="Project">
      <div className="w-full flex items-center ">
        {Object.keys(projectData).map((key) => {
          return (
            <Post
              data={projectData[key]}
              nav={onNavigateHandle}
              key={key}
              value={key}
            />
          );
        })}
      </div>
    </Particle>
  );
}
