import styled from "styled-components";

export const NavBar = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (max-width: 1050px) {
    bottom: 0;
  }

  width: 100%;
  background-color: white;
  &.scrolled {
    border-bottom: 1px solid #e9e9e9;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  }
  div {
    &.mobile {
      @media (min-width: 1050px) {
        display: none;
      }
    }
  }
  ul {
    &.right {
      @media (max-width: 1050px) {
        display: none;
      }
    }

    &.left {
      @media (max-width: 1700px) {
        margin-right: -200px;
      }
      @media (max-width: 1300px) {
        margin-right: -400px;
      }
      @media (max-width: 1050px) {
        margin-right: unset;
        width: 80%;
        padding-left: 30px;
      }
      @media (max-width: 450px) {
        margin-right: unset;
        width: 85%;
        padding-left: unset;
      }

      padding-left: 120px;
      text-align: left;
    }
    position: relative;
    display: table-row;
    width: 100%;

    li {
      display: table-cell;
      cursor: pointer;
      @media (max-width: 1050px) {
        padding-top: 10px;
        padding-bottom: 10px;
        /* font-size: 25px; */
        font-weight: 600;
      }
      padding: 20px;
      :hover {
        color: lightblue;
      }
      font-size: 20px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }
`;

export const Menu = styled.div`
  &.menu {
    @media (min-width: 1050px) {
      display: none;
    }
    padding-top: 30px;
    visibility: hidden;
    transition: all 0.3s ease;
    height: 0;
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    bottom: 0;
    background-color: white;
    width: 100%;
    border-radius: 5% 5%0 0;
    border-top: 1px solid #e9e9e9;
    box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.2);
    div {
      &.menu-item {
        padding: 3px;
        transition: all 0.3s ease;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        opacity: 0;
        ${({ isOpen }) =>
          isOpen &&
          `
    // visibility: visible;
    transition: opacity 0.5s ease;
    opacity:1
    
    

   ;
   
  `}
        width: 70px;
        margin: 17px;
        font-size: 13px;
        @media (min-width: 1013px) {
          height: 110px;
          width: 110px;
          margin: 20px;
          font-size: 15px;
        }

        @media (min-width: 500px) {
          height: 110px;
          width: 110px;
          margin: 15px 25px;
          font-size: 15px;
        }
        font-weight: 600;
      }
    }
    ${({ isOpen }) =>
      isOpen &&
      `
    visibility: visible;
    transition: height 0.4s ease;
    height:300px
    
    

   ;
   
  `}
  }
`;
export const Body = styled.div`
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    margin-top: -60px;
  }
  padding-bottom: 30%;
  button {
    &.contact-me {
      margin-top: 70px;
      cursor: pointer;
      @media (max-width: 500px) {
        margin-top: 40px;
      }
      p {
        padding: 0 5px;
        font-weight: 600;
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold",
          sans- "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
      }
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 160px;
      height: 60px;
      font-size: 18px;
      border-radius: 10px;
      background-color: lightblue;
      color: white;
      border: unset;
      /* line-height: 25px; */
    }
  }
  div {
    &.contactmeBox {
      width: 100%;
      padding: 20px;

      /* display: flex; */
      justify-content: center;
      align-items: center;
      align-content: center;
      background-color: lightblue;
      border-radius: 20px;
      p {
        &.large {
          font-size: 35px;
          font-weight: 800;
        }
        &.small {
          font-weight: 500;
          font-size: 25px;
        }
      }
    }
    &.be {
      @media (max-width: 800px) {
        position: unset;
        right: unset;
        left: unset;
        top: unset;
      }
      ${({ section }) =>
        section === "designer" &&
        `
        position: absolute;
        left: 0;
        top: 138px;
   ;
   
  `};
      ${({ section }) =>
        section === "" &&
        `
        position: absolute;
        left: 0;
        top: 138px;
   ;
   
  `};
      ${({ section }) =>
        section === "service1" &&
        `
        position: absolute;
        left: 0;
        top: 138px;
   ;
   
  `};
      ${({ section }) =>
        section === "service2" &&
        `
        position: absolute;
        left: 0;
        top: 138px;
   ;
   
  `};
      ${({ section }) =>
        section === "service3" &&
        `
        position: absolute;
        left: 0;
        top: 138px;
   ;
   
  `};
      ${({ section }) =>
        section === "service4" &&
        `
        position: absolute;
        left: 0;
        top: 138px;
   ;
   
  `};
    }
    &.plf {
      @media (max-width: 800px) {
        position: unset;
        right: unset;
        left: unset;
        top: unset;
      }
      ${({ section }) =>
        section !== "designer" &&
        `
        position: absolute;
        right: 0;
        top: 138px;
   ;
  `}
      ${({ section }) =>
        section === "platform" &&
        `
        position: unset;
        left: unset;
        top: unset;
   ;
  `}
      ${({ section }) =>
        section === "designer" &&
        `
        position: absolute;
        right: 0;
        top: 193px;
   ;
  `};
    }
    &.flexRow {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
    &.front {
      visibility: hidden;
      overflow: hidden;
      max-height: 0;
      /* transition: max-height 0.5s ease; */
      opacity: 0.5;
      ${({ section }) =>
        section === "front" &&
        `
    visibility: visible;
    opacity:1;
    transition: all 0.5s ease;
    max-height: 500px;
   ;
   
  `};
    }
    &.backend {
      visibility: hidden;
      overflow: hidden;
      max-height: 0;
      /* transition: max-height 0.2s ease; */
      opacity: 0.5;
      ${({ section }) =>
        section === "backend" &&
        `
    visibility: visible;
    opacity:1;
    transition: all 0.5s ease;
    max-height: 500px;
   ;
   
  `};
    }
    &.platform {
      visibility: hidden;
      overflow: hidden;
      max-height: 0;
      /* transition: max-height 0.2s ease; */
      opacity: 0.5;
      ${({ section }) =>
        section === "platform" &&
        `
    visibility: visible;
    opacity:1;
    transition: all 0.5s ease;
    max-height: 500px;
   ;
   
  `};
    }
    &.designer {
      visibility: hidden;
      overflow: hidden;
      max-height: 0;
      /* transition: max-height 0.2s ease; */
      opacity: 0.5;
      ${({ section }) =>
        section === "designer" &&
        `
    visibility: visible;
    opacity:1;
    transition: all 0.5s ease;
    max-height: 500px;
    
    

   ;
   
  `};
    }
    &.drop {
      width: 80%;
      div {
        width: 100%;
        display: flex;
        p {
          &.perc {
            width: 90%;
            text-align: right;
          }
        }
        &.n {
          p {
            &.perc {
              width: 70%;
              text-align: right;
            }
          }
        }
        &.htmlline {
          position: relative;

          border-bottom: 4px solid #e9e9e9;
          ::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 80%;
            padding-bottom: 20px;
            border-bottom: 4px solid lightblue;
          }
        }
        &.cssline {
          position: relative;

          border-bottom: 4px solid #e9e9e9;
          ::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 85%;
            padding-bottom: 20px;
            border-bottom: 4px solid lightblue;
          }
        }
        &.pyline {
          position: relative;

          border-bottom: 4px solid #e9e9e9;
          ::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 50%;
            padding-bottom: 20px;
            border-bottom: 4px solid lightblue;
          }
        }
        &.jsline {
          position: relative;

          border-bottom: 4px solid #e9e9e9;
          ::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 75%;
            padding-bottom: 20px;
            border-bottom: 4px solid lightblue;
          }
        }
        &.reactline {
          position: relative;

          border-bottom: 4px solid #e9e9e9;
          ::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -4px;
            width: 95%;
            padding-bottom: 20px;
            border-bottom: 4px solid lightblue;
          }
        }
      }
    }
    &.skillsRow {
      cursor: pointer;

      div {
        &.row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          align-content: center;

          p {
            color: #adadad;
            font-size: 13px;
          }
        }
      }
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      /* justify-content: center; */
      @media (min-width: 800px) {
        align-items: baseline;
        /* padding-bottom: 100px; */
      }
      /* align-content: center; */
      width: 800px;
      @media (max-width: 800px) {
        width: unset;
        justify-content: center;
      }
    }
    &.modalBox {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      @media (max-width: 460px) {
        width: 140px;
        height: 250px;
        margin: 5px;
        border-radius: 20px;
        flex-direction: column;
        /* border: 1px solid #c4c4c4; */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      @media (min-width: 460px) {
        width: 180px;
        height: 250px;
        margin: 5px;
        border-radius: 20px;
        flex-direction: column;
        /* border: 1px solid #c4c4c4; */
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
      div {
        &.block {
          @media (max-width: 800px) {
            /* width: 80%; */
          }
          /* width: 50%; */
          /* z-index: 10; */
          margin: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          background-color: white;
          border-radius: 20px;
          /* height: 50%; */
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
          ul {
            &.list {
              li {
                @media (max-width: 800px) {
                  font-size: 15px;
                  line-height: 25px;
                }
                /* width: 80%; */
                font-size: 18px;
                line-height: 40px;
              }
            }
          }
        }
        &.service1 {
          visibility: hidden;
          ${({ section }) =>
            section === "service1" &&
            `
        visibility: visible;

   ;
   
  `};
        }
        &.service2 {
          visibility: hidden;
          ${({ section }) =>
            section === "service2" &&
            `
        visibility: visible;

   ;
   
  `};
        }
        &.service3 {
          visibility: hidden;
          ${({ section }) =>
            section === "service3" &&
            `
        visibility: visible;

   ;
   
  `};
        }
        &.service4 {
          visibility: hidden;
          ${({ section }) =>
            section === "service4" &&
            `
        visibility: visible;

   ;
   
  `};
        }
        &.hiddenContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          position: fixed;
          left: 0px;
          top: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(1, 1, 1, 0.35);
        }
      }
      p {
          &.serviceTitle {
          @media (max-width: 800px) {
            font-weight: 500;
            font-size: 25px;
          }
          font-weight: 700;
          font-size: 25px;
        }
      }
    }
    &.modal {
      width: unset;
      height: unset;
      margin: 20px;
      border-radius: unset;
      flex-direction: row;
      /* border: 1px solid #c4c4c4; */
      box-shadow: unset;

      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      div {
        &.skills {
          @media (max-width: 0px) {
            width: 50%;
            margin: unset;
            /* margin-top: -20px;
            margin-bottom: -20px; */
            /* background-color: red; */
          }
          margin: 20px;
          margin-top: unset;
          margin-bottom: unset;
          width: 250px;
        }
      }
      p {
        &.skillTitle {
          @media (max-width: 800px) {
            font-weight: 500;
            font-size: 22px;
          }
          font-weight: 700;
          font-size: 25px;
        }
        &.skillYear {
          @media (max-width: 800px) {
            /* display: none; */
            font-size: 15px;
          }
          font-weight: 600;
          font-size: 15px;
          margin-top: -15px;
          color: #adadad;
        }
      }
    }
    &.about {
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;

      div {
        &.dots {
          /* position: absolute; */
          display: flex;
          div {
            transition: all 0.3s ease;

            background-color: #e9e9e9;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            margin: 15px;
            &.active {
              background-color: lightblue;
              transition: all 0.3s;
            }
          }
        }
        &.slides-contaienr {
          margin: auto;
          position: relative;
          width: 100%;
          height: 100%;
          /* z-index: -1; */
          div {
            &.containerArrow {
              display: flex;
              width: 100%;
              justify-content: center;
              align-items: center;
              align-content: center;
            }
          }
        }
        &.slides {
          display: flex;
          justify-content: center;
          align-content: center;
          align-items: center;
          padding: 10px;
          position: relative;
          height: 100%;
          width: 80%;
          overflow: hidden;
        }

        &.slide-1 {
          position: absolute;
          transition: all 0.3s ease;
          opacity: 0.3;
          transform: translateX(100%);
          /* left: 100%; */
        }
        &.slide-2 {
          position: absolute;
          transition: all 0.3s ease;
          opacity: 0.3;

          transform: translateX(-100%);

          /* right: 100%; */
        }
        &.slide-active {
          position: unset;
          opacity: 1;
          transition: all 0.9s ease;

          /* left: 15px; */
        }
        &.slide-item {
          @media (max-width: 750px) {
            flex-direction: column;
          }
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          align-content: center;
          width: 100%;
          /* height: 100%; */
          div {
            &.portfolio {
              width: 50%;
              padding: 10px;
              @media (max-width: 750px) {
                width: unset;
              }
            }
          }
          p {
            &.portfolio-title {
              font-size: 30px;
              font-weight: 700;
              @media (max-width: 700px) {
                font-size: 25px;
                font-weight: 600;
              }
            }
            &.portfolio-para {
              font-size: 20px;
              margin-top: -20px;
              font-weight: 500;
              color: #adadad;
              line-height: 30px;
              @media (max-width: 700px) {
                font-size: 18px;
                font-weight: 500;
                line-height: 20px;
              }
            }
          }
          img {
            width: 40%;
            max-height: 450px;
            margin: 10px;
            border-radius: 20px;
            @media (max-width: 750px) {
              width: unset;
            }
          }
        }

        &.containerRow {
          width: 80%;
          @media (max-width: 1000px) {
            flex-direction: column;
            width: unset;
          }
          img {
            /* margin-left: -50px; */
            /* margin-right: 20px; */
            border-radius: 20px;
            width: 50%;
            @media (max-width: 1000px) {
              width: 80%;
              margin-left: unset;
              margin-right: unset;
            }
          }
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          align-content: center;
        }

        &.experiencesNo {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          align-content: center;
          /* width: 80%; */
        }
        &.box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align-content: center;
          margin: 50px;
          margin-top: 10px;
          margin-bottom: unset;
          @media (max-width: 600px) {
            margin: 30px;
            margin-bottom: unset;
          }
          @media (max-width: 500px) {
            margin: unset;
          }

          p {
            text-align: center;
            margin-right: 5px;

            &.number {
              font-size: 40px;
              font-weight: 700;

              @media (max-width: 1000px) {
                font-size: 30px;
                font-weight: 600;
              }
            }
            &.explain {
              color: #adadad;
              font-size: 20px;
              font-weight: 500;
              line-height: 30px;
              margin-top: -20px;
              @media (max-width: 600px) {
                font-size: 20px;
              }
              @media (max-width: 500px) {
                font-size: 15px;
                line-height: 22px;
              }
            }
          }
        }
      }
      p {
        &.title {
          @media (min-width: 700px) {
            font-size: 55px;
          }
          font-size: 30px;
          font-weight: 700;
        }
        &.title2 {
          @media (min-width: 700px) {
            font-size: 25px;
            margin-top: -50px;
          }
          margin-top: -30px;
          color: #adadad;
          font-weight: 600;
          font-size: 15px;
        }
        &.paragraph {
          @media (min-width: 700px) {
            font-size: 25px;
            font-weight: 500;
            line-height: 40px;
          }
          color: #adadad;
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
        }
      }
    }
    &.flex {
      @media (max-width: 1000px) {
        flex-direction: column;
      }
      /* padding: 250px 0; */
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-content: center;
      align-items: center;
    }
    &.container {
      padding-top: 50px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      align-items: center;
      width: 100%;
    }
    &.social {
      @media (min-width: 1000px) {
        display: none;
      }
      cursor: pointer;

      flex-direction: column;
      margin-right: 40px;
      align-content: center;
      align-items: center;
      p {
        &.linkedin {
          font-size: 25px;
          font-weight: 900;
          -webkit-text-stroke: 1.5px lightblue;
          letter-spacing: 1.5px;
          color: white;
        }
      }
    }
    &.widthSocial {
      cursor: pointer;
      @media (max-width: 1000px) {
        display: none;
      }
      flex-direction: column;
      margin-right: 40px;
      align-content: center;
      align-items: center;
      p {
        &.linkedin {
          @media (min-width: 1000px) {
            font-size: 30px;
          }
          font-size: 25px;
          font-weight: 900;
          -webkit-text-stroke: 1.5px lightblue;
          letter-spacing: 1.5px;
          color: white;
        }
      }
    }
    &.imageContainer {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);

      @media (min-width: 1000px) {
        height: 450px;
        width: 450px;
      }
      @media (min-width: 700px) {
        height: 350px;
        width: 350px;
      }
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      height: 200px;
      width: 230px;
      border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
      background-color: lightblue;
      overflow: hidden;
      img {
        position: absolute;
        /* top: s0px; */
        margin-top: 250px;
        margin-right: 300px;
        @media (min-width: 1000px) {
          height: 950px;
          width: 850px;
          margin-top: 350px;
          margin-right: 500px;
        }
        @media (min-width: 700px) {
          height: 980px;
          width: 870px;
          margin-top: 320px;
          margin-right: 420px;
        }

        height: 650px;
        width: 650px;
      }
    }
    &.intro {
      p {
        &.greeting {
          font-weight: 800;
          font-size: 25px;
          @media (min-width: 700px) {
            font-size: 35px;
          }
          /* font-family: "Comic Sans MS", "Comic Sans", "cursive"; */
        }

        &.info {
          font-weight: 500;
          color: #adadad;
          @media (min-width: 700px) {
            font-size: 20px;
          }
        }
        &.paragraph {
          @media (min-width: 700px) {
            font-size: 25px;
            font-weight: 500;
            line-height: 40px;
          }
          font-size: 20px;

          font-weight: 500;
          color: #adadad;
          line-height: 30px;
        }
      }
    }
  }
`;
