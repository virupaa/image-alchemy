import { authMiddleware, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { NextResponse } from "next/server";

// export default authMiddleware({
//   publicRoutes:['/api/webhooks/clerk']
// });

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

const isProtectedRoute = createRouteMatcher([
    "/",
    // "/api(.*)"
  ]);

export default clerkMiddleware((auth, request) => {
  publicRoutes:['/api/webhooks/clerk']
  if(isProtectedRoute(request)){
      auth().protect();
  }
});