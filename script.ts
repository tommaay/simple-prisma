import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "Jenny",
//       email: "jenny@gmail.com",
//     },
//   });

//   console.log( user );
// }

// async function main() {
//   const users = await prisma.user.findMany();
//   console.log( users );
// }

// async function main() {
//   const user = await prisma.user.create({
//     data: {
//       name: "Bob",
//       email: "bob@prisma.io",
//       posts: {
//         create: {
//           title: "Hello World",
//         },
//       },
//     },
//   });

//   console.log(user);
// }

async function main() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
