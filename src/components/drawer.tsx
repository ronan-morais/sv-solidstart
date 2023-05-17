"use client";

import { RiCloseCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/utils/hooks";

interface props {
  children: JSX.Element;
}

export function Drawer({ children }: props) {
  const [drawer, setDrawer] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    const body = document.body;

    if (drawer && screenSize.size <= 640) {
      body.style.position = "fixed";
    } else {
      body.style.position = "unset";
    }
  }, [drawer, screenSize]);
  return (
    <div>
      <input
        type="checkbox"
        id="closeDrawer"
        class="peer hidden"
        onChange={e => setDrawer(e.target.checked)}
      />
      <div class="container bg-begeMedio translate-x-full fixed top-0 right-0 bottom-0 w-full sm:w-[50vw] lg:w-[30vw] xl:w-[20vw] peer-checked:translate-x-0 ease-in-out transition-all duration-300 z-30">
        <button
          type="button"
          id="menuButton"
          title="Menu Button"
          class="fixed top-8 right-8"
        >
          <label htmlFor="closeDrawer" class="p-1 flex cursor-pointer">
            <RiCloseCircleLine class="fill-begeClaro hover:fill-white w-8 h-8" />
          </label>
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
