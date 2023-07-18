import { regexp } from "../Profile/staticData";
import Link from "next/link";
export default function DescriptionProject(props) {
  return (
    <div>
      {Object.entries(props.description).map(([name, value]) => {
        return (
          <div className="mb-3">
            <h2 className=" text-base font-bold mb-1">{name}</h2>
            {Array.isArray(value) ? (
              value.map((val) => {
                return <span className="block mb-2">&bull; {val}</span>;
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
