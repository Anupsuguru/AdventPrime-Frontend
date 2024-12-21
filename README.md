# AdventPrime

This repository contains the frontend code for the AdventPrime, a cross-platform mobile application developed using ReactJS for facilitating, and streamlining the workshop registration process in University of Windsor.

## Application Functionality

AdventPrime is designed to provide a seamless experience for students and administrators in managing workshops at the University of Windsor. The app integrates with Microsoft Entra ID (Azure AD) for authentication and authorization, ensuring secure and standardized access in alignment with the university's existing authentication framework.

### Key Features

- **Dashboard Overview**: The homepage offers users a quick glance at important statistics, including the number of workshops completed, workshops currently in which the user is in waiting list, and workshops booked with tickets. Additionally, users receive a short overview of upcoming events, helping them stay informed about future opportunities.

- **Workshop Management**: 
  - Users can browse a list of available workshops. For each workshop, they can:
  - Book a spot if seats are available.
  - Join a waitlist when a workshop reaches full capacity.
  
- **Attendance Verification**: During workshops, users can scan a dynamically refreshing QR code to mark their attendance. This feature helps ensure authenticity and prevents proxy attendance.

- **Profile and Settings**: Users can manage their personal information and configure application settings, providing a personalized experience tailored to their needs.

### Security and Authentication

Authentication and authorization are handled using **Microsoft Entra ID (Azure AD)**, ensuring that only authorized users can access the application. In the frontend, Microsoft Authentication Library(MSAL.js 2.0) was used to authenticate, and generate JWT for the session. Furthermore, the backend will use Microsoft Entr ID's GraphQL API to validate the token before commit changes. This integration aligns with the University of Windsor's security standards, providing a consistent and reliable user authentication process.

## Deployment

The application is deployed using **Azure App Service**, with a CI/CD pipeline configured via **GitHub Actions**. This setup automates the deployment process, ensuring that updates and new features are delivered efficiently.

## Backend

The backend, developed in Python using Django, is hosted in a separate repository. Key features of the backend include:
- Implementation of mutex locks to prevent simultaneous bookings of the same ticket by multiple users.

## Technologies Used

- **Frontend:** ReactJS
- **Authentication:** Microsoft Entra ID (Azure AD)
- **Backend:** Python, Django (hosted in a separate repository)
- **CI/CD:** GitHub Actions
- **Hosting:** Azure App Service


