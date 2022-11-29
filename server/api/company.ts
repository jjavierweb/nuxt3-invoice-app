import { PrismaClient, Prisma } from "@prisma/client";
import { serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const user = await serverSupabaseUser(event);
  const companies = await prisma.company.findFirst({
    where: {
      user: user?.id,
    },
  });
  return companies;
});
