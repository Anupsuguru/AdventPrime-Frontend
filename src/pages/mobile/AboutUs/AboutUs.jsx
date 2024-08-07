import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <>
      <div className="top-bar flex items-center p-4 h-[10%] dark:bg-black">
        <button onClick={() => navigate(-1)} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-gray-700 dark:text-white">
          About
        </h2>
      </div>
      <div className="container mx-auto px-4 mt-4 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          AdventPrime
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          AdventPrime is at the forefront of streamlining workshop registration
          for students at the University of Windsor. Our innovative platform is
          designed to simplify the often complex and time-consuming process,
          allowing students to focus on what truly matters: their education and
          personal growth.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          By leveraging cutting-edge technology, we have created a user-friendly
          interface that empowers students to effortlessly browse through a wide
          range of workshops, discover new opportunities, and secure their spots
          with just a few clicks. Our platform is meticulously designed to cater
          to the unique needs of both students and workshop organizers, ensuring
          a seamless experience for all.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          AdventPrime is more than just a registration tool; it's a catalyst for
          student success. We are committed to fostering a vibrant and engaging
          campus community by facilitating easy access to enriching workshops
          and events. Our mission is to empower students to explore their
          passions, develop new skills, and build a strong foundation for their
          future careers.
        </p>
        <p className="text-lg text-gray-700 text-justify dark:text-white">
          Join us in revolutionizing the workshop registration experience. Let
          AdventPrime be your trusted partner in unlocking the full potential of
          your university journey.
        </p>
      </div>
    </>
  );
}
