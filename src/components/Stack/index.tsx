import Particle from "../Particle";
import { stackData } from "./staticData";

export default function Stack() {
  return (
    <Particle title="Tech Stack">
      <div className="w-full flex flex-col ">
        {Object.keys(stackData).map((key, index) => {
          return (
            <div className="" key={index}>
              <h2>{key}</h2>
              <ul>
                {stackData[key].map(([title, body, icon], idx) => {
                  return (
                    <li className="flex mb-base items-start" key={idx}>
                      {icon}
                      <div className="flex">
                        <span className="block mr-1 font-bold">{title}:</span>
                        <span className="block"> {body}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Particle>
  );
}
