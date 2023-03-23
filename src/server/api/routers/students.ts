import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const studentRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.students.findMany({
      include: {
        campus: true,
      },
    });
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.students.findFirst({
        where: {
          id: input.id,
        },
        include: {
          campus: true,
        },
      });
    }),
});
