import { useNavigate } from "react-router-dom";

export default function TermsAndConditions() {
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
          Terms and Conditions
        </h2>
      </div>
      <div className="container mx-auto px-4 mt-4 dark:text-white">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Terms and Conditions
        </h2>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          Welcome to AdventPrime. By accessing or using our platform, you agree
          to comply with and be bound by the following terms and conditions.
          Please review them carefully.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          <strong>1. Acceptance of Terms</strong>
          <br />
          By using our platform, you agree to be bound by these terms and
          conditions, as well as any other guidelines, policies, or rules that
          may be posted from time to time.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          <strong>2. Use of the Platform</strong>
          <br />
          You agree to use the platform only for lawful purposes and in
          accordance with these terms and conditions. You must not use the
          platform in any way that could damage, disable, overburden, or impair
          the platform.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          <strong>3. Registration and Accounts</strong>
          <br />
          To access certain features of the platform, you may be required to
          register for an account. You agree to provide accurate and complete
          information during the registration process and to update such
          information as necessary.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          <strong>4. Intellectual Property</strong>
          <br />
          All content on the platform, including text, graphics, logos, and
          images, is the property of AdventPrime or its licensors and is
          protected by copyright and other intellectual property laws.
        </p>
        <p className="text-lg text-gray-700 text-justify mb-6 dark:text-white">
          <strong>5. Termination</strong>
          <br />
          We reserve the right to terminate or suspend your access to the
          platform at any time, without notice, for any reason, including if you
          violate these terms and conditions.
        </p>
        <p className="text-lg text-gray-700 text-justify dark:text-white">
          <strong>6. Changes to Terms</strong>
          <br />
          We may update these terms and conditions from time to time. Your
          continued use of the platform after any such changes constitutes your
          acceptance of the new terms and conditions.
        </p>
      </div>
    </>
  );
}
