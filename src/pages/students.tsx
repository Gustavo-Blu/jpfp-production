import Image from "next/image";
import { api } from "~/utils/api";

export default function StudentsPage() {
  const { data: students, refetch: refetchStudents } =
    api.student.getAll.useQuery();

  return (
    <main className="mt-5 mb-32">
      <section className="flex w-screen">
        <form className="flex-1">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative mb-10 ml-5 w-1/2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search Students"
              required
            />
          </div>
        </form>
        <button className="btn mr-5 bg-violet-600 font-medium text-white">
          Add Student
        </button>
      </section>
      <section className=" flex flex-wrap justify-center gap-4">
        {students?.map((student) => (
          <div key={student.id} className="rounded-sm border-2 border-white">
            <Image
              src={student.imageUrl}
              alt="student picture"
              width={250}
              height={250}
            />
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <h3>{student.email}</h3>
            <h3>goes to {student.campus?.name}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}
