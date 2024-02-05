import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.management.upsert({
    where: { name: 'Gym'},
    update: {},
    create: {
      name: 'Gym',
    description: "Place that allows you to practice sports of different types and/or exercise in an enclosed area",
    age: "All ages",
    gender: "Masculine and Feminine",
    email: "gymNacho@hotmail.com",
    lastSee:
        "Antonio Ricaurte y Simon Bolivar",
countLastSee: 5,
      
    },
  });

    const post2 = await prisma.management.upsert({
    where: { name: 'Gym' },
    update: {},
    create: {
      name: 'Gym',
      description: 'It is a place where people exercise to improve their health and practice their sport of any age.',
      age: "over 16",
      gender: "Masculine and Feminine",
      email: "gymNacho@hotmail.com",
     lastSee:
        " Park Center",
countLastSee: 10,
    },
  });



  console.log({ post1, post2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });