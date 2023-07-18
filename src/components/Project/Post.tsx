import Image from "next/image";
import type { dataValue } from "./staticData";
interface IpropsValue {
  data: dataValue;
  nav: Function;
  value: string;
}
export default function Post(props: IpropsValue) {
  return (
    <div
      className="w-full max-w-[200px] h-full flex flex-col items-center  border border-blueColor rounded-xl hover:cursor-pointer transition ease-in-out duration-300 hover:border-none hover:-translate-y-1 hover:shadow-lg hover:shadow-blueColor mr-base"
      onClick={() => {
        return props.nav(props.value);
      }}
    >
      <div className="w-full h-3/4 aspect-square relative ">
        <Image
          src={props.data.imgSrc}
          alt={props.data.title}
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-t-xl"
        />
      </div>
      <div className="w-full h-1/4 justify-center items-center flex">
        <h2 className=" font-bold text-base">{props.data.title}</h2>
      </div>
    </div>
  );
}
