
import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatBot(props) {
  const theme = {
    background: "white",
    fontFamily: "Poppins",
    headerBgColor: "#2F4049",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#567787",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  const config = {
    width: "300px",
    height: "500px",
    floating: true,
  };

  const steps = [
    {
      id: "Greeting",
      message: "Hey there, Thanks for visiting TravelBuddy!",
      trigger: "Would you like to reach out to us?",
    },
    {
      id: "Would you like to reach out to us?",
      message: "Would you like to reach out to us?",
      trigger: "Display options to reach out",
    },
    {
      id: "Display options to reach out",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "Enter Name",
        },
        {
          value: "No",
          label: "No",
          trigger: "Answer No",
        },
      ],
    },
    {
      id: "Answer No",
      message:
        "No worries, feel free to ping me on my linkedin at https://www.linkedin.com/in/glendonthaiw/",
    },

    {
      id: "Enter Name",
      message:
        "Drop in your email address whenever you're ready and ill be in contact in a jiffy!",
      trigger: "Waiting user input for email",
    },
    {
      id: "Waiting user input for name",
      user: true,
      trigger: "Enter Email",
    },
    {
      id: "Enter Email",
      message: "Hi {previousValue}, Please Enter your Email",
      trigger: "Waiting user input for email",
    },
    {
      id: "Waiting user input for email",
      user: true,
      trigger: "Done",
    },
    {
      id: "Enter Message",
      message: "Please Enter your Message",
      trigger: "Waiting user input for Message",
    },

    {
      id: "Waiting user input for Message",
      user: true,
      trigger: "Done",
    },

    {
      id: "Done",
      message: "Thanks for reaching out, I'd be in touch!",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}
export default CustomChatBot;