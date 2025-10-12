"use client";
import { usePathname } from "next/navigation";
import { Logger } from "@logtail/next";
import { useEffect } from "react";

const clientLog = new Logger();

export function RouteLogger() {
  const pathname = usePathname();
  useEffect(() => {
    clientLog.info("Page visited", { path: pathname });
  }, [pathname]);
  return null;
}
