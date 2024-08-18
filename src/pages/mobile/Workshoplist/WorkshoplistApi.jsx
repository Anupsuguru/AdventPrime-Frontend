// TODO: install Axios Later
// TODO: make this async when the api endpoint is ready
import axios from "axios";
import {useMsal} from "@azure/msal-react";

export const getWorkshops = async (accesstoken) => {
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
  axios.defaults.headers.common['Authorization'] = 'Bearer '+accesstoken;
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL+"workshops");
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
