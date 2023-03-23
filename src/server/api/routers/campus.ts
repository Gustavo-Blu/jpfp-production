import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const campusRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.campuses.findMany({
      include: {
        students: true,
      },
    });
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.campuses.findFirst({
        where: {
          id: input.id,
        },
        include: {
          students: true,
        },
      });
    }),
});
