import { useCallback } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { SiNotion, SiGithub } from "react-icons/si";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Header() {
  const router = useRouter();
  const onHomeHandle = useCallback(() => {
    router.push("/");
  }, []);
  return (
    <div className="w-full h-[6%]  flex border-b-2 justify-center items-center">
      <GrHomeRounded
        className="header-icon"
        onClick={() => {
          onHomeHandle();
        }}
      />
      <Link href="https://github.com/hasuhwan" target="__blank">
        <SiGithub className="header-icon" />
      </Link>
      <Link
        href="https://hasuhwan.notion.site/Notion-dbf047ec4aac4837b6c9afb4d7dd0420"
        target="__blank"
      >
        <SiNotion className="header-icon" />
      </Link>
    </div>
  );
}
