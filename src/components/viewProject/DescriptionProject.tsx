import { regexp } from "../Profile/staticData";
import Link from "next/link";
import type { IdescriptionValue } from "./staticData";
interface IpropsValue {
  description: IdescriptionValue;
}
export default function DescriptionProject(props: IpropsValue) {
  return (
    <div>
      {Object.entries(props.description).map(([name, value]) => {
        return (
          <div className="mb-3" key={name}>
            <h2 className=" text-base font-bold mb-1">{name}</h2>
            {Array.isArray(value) ? (
              value.map((val, idx) => {
                return (
                  <span className="block mb-2" key={idx}>
                    &bull; {val}
                  </span>
                );
              })
            ) : regexp.test(value) ? (
              <Link href={value} target="_blank">
                {value}
              </Link>
            ) : (
              <span>{value}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
