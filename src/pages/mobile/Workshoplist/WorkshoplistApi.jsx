// TODO: install Axios Later
// TODO: make this async when the api endpoint is ready
import axios from "axios";

export const getWorkshops = async () => {
  // return [
  //   {
  //     title: "Introduction to Spark",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 2", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Python",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Spark",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 2", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Python",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Spark",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 2", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Python",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Spark",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 2", "Tech 3"],
  //   },
  //   {
  //     title: "Introduction to Python",
  //     date: "Aug 12",
  //     description:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
  //     tags: ["Tech 1", "Tech 3"],
  //   },
  //   // More workshops...
  // ];

  // TODO: Uncomment the code below when the api endpoint is ready

  try {
    const response = await axios.get("http://127.0.0.1:8000/workshops", {
      headers: {
        studentEmail: "muniyap@uwindsor.ca",
      },
    });
    if (response.data.message === "Success") {
      console.log(response.data.content);
      return response.data.content;
    } else {
      console.error("Error: Unexpected response", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching workshops:", error);
    return [];
  }
};
