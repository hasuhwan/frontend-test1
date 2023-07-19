import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useState } from "react";
interface IpropsValue {
  images: string[];
}
export default function ImageProject(props: IpropsValue) {
  const [open, setOpen] = useState(false);
  const settings = {
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const openHandle = useCallback(
    (bool: boolean) => {
      setOpen(bool);
    },
    [open]
  );
  return (
    <>
      <div className="w-full flex justify-start">
        <h2
          className="text-base font-bold mb-1 text-blueColor hover:cursor-pointer"
          onClick={() => {
            openHandle(true);
          }}
        >
          이미지 둘러보기
        </h2>
        {open ? (
          <div
            className="w-full h-full flex justify-center items-center top-0 left-0 fixed bg-opacityColor  "
            onClick={() => {
              openHandle(false);
            }}
          >
            <div
              className="w-1/4 h-1/2 flex justify-center items-center top-[50px]  absolute"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Slider {...settings} className="w-4/5 h-full">
                {props.images.map((el, idx) => {
                  return (
                    <img
                      src={el}
                      alt={el}
                      key={idx}
                      className="rounded-xl border-2"
                    />
                  );
                })}
              </Slider>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
