import { Logger } from "@logtail/next";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const logger = new Logger({ source: "middleware" });
  await logger.middleware(request, { logRequestDetails: ["body", "nextUrl"] });

  event.waitUntil(logger.flush());
  return NextResponse.next();
}
