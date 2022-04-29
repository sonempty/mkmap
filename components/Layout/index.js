import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { checkAuth, signOut } from "../../utils/auth";
import CreateSider from "./CreateSider";
import { MapDataFilter } from "./MapDataFilter";

export const Layout = ({ children }) => {
  const router = useRouter();
  const [role, setRole] = useState(false);

  useEffect(() => {
    let r = checkAuth();
    if (r) {
      setRole(r);
      return;
    } else {
      router.replace("/login");
    }
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Head>
        <title>MKN App</title>
        <meta name="description" content="Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between py-2 px-4 bg-gray-700">
        <div className="space-x-4">
          <Link href={"/"}>
            <a
              className={
                router.asPath === "/" ? "text-orange-300" : "text-white"
              }
            >
              Map
            </a>
          </Link>
          {role == "editor" && (
            <Link href={"/create/box"}>
              <a
                className={
                  router.asPath.includes("create")
                    ? "text-orange-300"
                    : "text-white"
                }
              >
                Create
              </a>
            </Link>
          )}
        </div>
        <div>
          <button
            onClick={() => {
              signOut();
              router.replace("/login");
            }}
            className="text-white mr-4"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-48">
          <MapDataFilter />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export const CreateLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    let r = checkAuth();
    if (r == "editor") {
      return;
    } else {
      signOut();
      router.replace("/login");
    }
  }, []);
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Head>
        <title>MKN App</title>
        <meta name="description" content="Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between py-2 px-4 bg-gray-700">
        <div className="space-x-4">
          <Link href={"/"}>
            <a
              className={
                router.asPath === "/" ? "text-orange-300" : "text-white"
              }
            >
              Map
            </a>
          </Link>
          <Link href={"/create/pop"}>
            <a
              className={
                router.asPath.includes("create")
                  ? "text-orange-300"
                  : "text-white"
              }
            >
              Create
            </a>
          </Link>
        </div>
        <div>
          <button
            onClick={() => {
              signOut();
              router.replace("/login");
            }}
            className="text-white mr-4"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="flex flex-1">
        <div className="w-48">
          <CreateSider />
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};
