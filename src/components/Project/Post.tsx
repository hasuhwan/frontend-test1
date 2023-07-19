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
      <div className="w-full aspect-square relative overflow-hidden flex justify-center ">
        <img
          src={props.data.imgSrc}
          alt={props.data.title}
          className="rounded-t-xl h-full object-cover"
        />
      </div>
      <div className="w-full h-1/4 justify-center items-center flex">
        <span className=" font-bold text-base">{props.data.title}</span>
      </div>
    </div>
  );
}
