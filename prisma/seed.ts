import { Prisma, Students } from "@prisma/client";
import { prisma } from "../src/server/db";
import { faker } from "@faker-js/faker";

async function main() {
  console.log("seeding...");

  console.log("deleting old tables");
  await prisma.campuses.deleteMany({});
  await prisma.students.deleteMany({});

  console.log("seeding campuses");
  await prisma.campuses.createMany({
    data: [
      {
        name: "New York University",
        imageUrl:
          "https://meet.nyu.edu/wp-content/uploads/2020/04/Header_Imageone-e1586952269373.jpg",
        address: "New York, NY 10012",
        description:
          "New York University (NYU) is a private research university in New York City. Chartered in 1831 by the New York State Legislature, NYU was founded by a group of New Yorkers led by then-Secretary of the Treasury Albert Gallatin.",
      },
      {
        name: "Columbia University",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Columbia_University_%2852009406881%29.jpg/220px-Columbia_University_%2852009406881%29.jpg",
        address: "New York, NY 10027",
        description:
          "Columbia University (colloquially known as Columbia; officially as Columbia University in the City of New York) is a private Ivy League research university in New York City. Established in 1754 as King's College on the grounds of Trinity Church in Manhattan, it is the oldest institution of higher education in New York, the fifth-oldest in the United States, and one of nine colonial colleges founded prior to the Declaration of Independence.",
      },
      {
        name: "Fordham University",
        imageUrl:
          "https://www.usnews.com/dims4/USNEWS/8205328/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F7d%2F2c660496b823f534b6a70c2e3eb2cc%2Fcollege-photo_12860.jpg",
        address: "The Bronx, NY 10458",
        description:
          "Fordham University is a private Jesuit research university in New York City. Established in 1841 and named after the Fordham neighborhood of the Bronx in which its original campus is located",
      },
      {
        name: "Syracuse University",
        imageUrl:
          "https://www.syracuse.edu/images/640U1RSTtrvFtl4Eyva-G8XbUwk=/5000/width-1100/drone_hall_of_languages_summer.jpg",
        address: "Syracuse, NY",
        description:
          "Syracuse University is a private research university in Syracuse, New York. Established in 1870 with roots in the Methodist Episcopal Church, the university has been nonsectarian since 1920.",
      },
    ],
  });

  const students: Students[] = [];

  for (let i = 0; i < 50; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const student: Students = {
      id: i + 1,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      firstName: firstName,
      lastName: lastName,
      email: faker.internet.email(firstName, lastName),
      imageUrl: faker.internet.avatar(),
      gpa: faker.datatype.number({ max: 4.0, min: 0.0, precision: 0.1 }),
      campusId: faker.datatype.number({ min: 1, max: 4 }),
    };

    students.push(student);
  }

  console.log("seeding students");
  await prisma.students.createMany({ data: students });

  console.log("done seeding");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
