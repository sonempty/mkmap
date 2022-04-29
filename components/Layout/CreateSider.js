import Link from "next/link";
import { useRouter } from "next/router";

export default function CreateSider() {
  const router = useRouter();
  return (
    <div className="border-2 px-4 py-8 h-full">
      <h2 className="font-bold text-blue-600 text-lg">Create Object</h2>
      <div className="px-4 mb-2 space-y-2">
        <div>
          <Link href={"/create/pop"}>
            <a
              className={router.asPath === "/create/pop" ? "text-blue-500" : ""}
            >
              Pop
            </a>
          </Link>
        </div>
        <div>
          <Link href={"/create/mdf"}>
            <a
              className={router.asPath === "/create/mdf" ? "text-blue-500" : ""}
            >
              Mdf
            </a>
          </Link>
        </div>
        <div>
          <Link href={"/create/box"}>
            <a
              className={router.asPath === "/create/box" ? "text-blue-500" : ""}
            >
              Box
            </a>
          </Link>
        </div>
        <div>
          <Link href={"/create/olt"}>
            <a
              className={router.asPath === "/create/olt" ? "text-blue-500" : ""}
            >
              Olt
            </a>
          </Link>
        </div>
        <div>
          <Link href={"/create/spliter"}>
            <a
              className={
                router.asPath === "/create/spliter" ? "text-blue-500" : ""
              }
            >
              Spliter
            </a>
          </Link>
        </div>
      </div>

      <h2 className="font-bold text-blue-600 text-lg">Search Object</h2>
      <div className="px-4 mb-2 space-y-2">
        <div>
          <Link href={"/search"}>
            <a className={router.asPath === "/search" ? "text-blue-500" : ""}>
              Search
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
