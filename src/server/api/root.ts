import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { studentRouter } from "./routers/students";
import { campusRouter } from "./routers/campus";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  student: studentRouter,
  campus: campusRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
