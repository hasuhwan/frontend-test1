import Image from "next/image";
import Particle from "../Particle";
import Link from "next/link";
import { useMemo } from "react";
import { intro, profileData } from "./staticData";
export default function Profile() {
  const regexp: RegExp = useMemo(() => new RegExp(/^https?/, "i"), []);
  return (
    <Particle title="About Me">
      <div className="w-full grid grid-rows-1 grid-cols-5 justify-center items-center ">
        <Image
          src="/profile.jpeg"
          alt="proifle"
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="/profile.jpeg"
          className=" rounded-lg "
        />
        <div className=" col-start-2 col-span-4 p-4 flex flex-col">
          <h2 className=" text-mid font-bold mb-span">
            되새김질 잘 하는 소 같은 개발자
          </h2>
          <div className="w-full mb-5">
            {intro.split("br").map((el, idx) => {
              return (
                <span className="block text-base mb-2" key={idx}>
                  {el}
                </span>
              );
            })}
          </div>
          <div className="w-full p-base bg-beigeColor rounded-xl">
            {profileData.map((el, idx) => {
              console.log(el);
              const [url, color, br] = el;
              if (regexp.test(url)) {
                return (
                  <Link
                    href={url}
                    target="_blank"
                    className={`${color}`}
                    key={idx}
                  >
                    {url}
                  </Link>
                );
              }
              return (
                <>
                  <span className={`${color}`} key={idx}>
                    {url}
                  </span>
                  {br ? <br /> : null}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </Particle>
  );
}