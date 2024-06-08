'use server'

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function queryPostsByPage(pageNumber: number, pageSize: number): Promise<{posts: Post[], totalPages: number}> {
    const posts = await prisma.post.findMany({
        skip: (pageNumber - 1) * pageSize,
        take: pageSize,
        orderBy: {
          updated: 'desc'
        }
      });
    const totalPosts = await prisma.post.count();
    const totalPages = Math.ceil(totalPosts / pageSize)

    return {
        posts,
        totalPages
    }
}