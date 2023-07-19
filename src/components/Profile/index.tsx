import Particle from "../Particle";
import Link from "next/link";
import { intro, profileData, regexp } from "./staticData";
export default function Profile() {
  return (
    <Particle title="About Me">
      <div className="w-full grid grid-rows-1 grid-cols-5 justify-center items-center ">
        <div className="w-full h-3/4 max-h-[450px] relative">
          <img
            src="./profile/profile.jpeg"
            alt="proifle"
            className=" rounded-lg "
          />
        </div>

        <div className=" col-start-2 col-span-4 p-4 flex flex-col">
          <h2>되새김질 잘 하는 소 같은 개발자</h2>
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
                <span className={`${color}`} key={idx}>
                  {url}
                  {br ? <br /> : null}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Particle>
  );
}
