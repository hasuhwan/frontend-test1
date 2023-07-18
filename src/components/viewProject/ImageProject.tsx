import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCallback, useState } from "react";
export default function ImageProject(props) {
  const [open, setOpen] = useState(false);
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const openHandle = useCallback(
    (bool) => {
      setOpen(bool);
    },
    [open]
  );
  return (
    <>
      <div className="w-full">
        <h2
          className="text-base font-bold mb-1 text-blueColor"
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
            <div className="w-1/2 h-2/3 flex justify-center">
              <Slider
                {...settings}
                className="w-full h-full flex justify-center relative aspect-square "
              >
                {props.images.map((el) => {
                  return (
                    <Image
                      src={el}
                      alt={el}
                      width={100}
                      height={100}
                      className="max-h-[300px] "
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
