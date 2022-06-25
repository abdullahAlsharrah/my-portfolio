import { NavBar, Menu, Body } from "./styles";
import {
  BiChevronDown,
  BiCodeCurly,
  BiHomeAlt,
  BiImage,
  BiMailSend,
} from "react-icons/bi";
import { IoPersonOutline, IoSend } from "react-icons/io5";
import { CgDatabase, CgNotes } from "react-icons/cg";
import {
  MdBusinessCenter,
  // MdFileDownload,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdStyle,
} from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { SiWordpress } from "react-icons/si";
import { FiGithub, FiSend } from "react-icons/fi";
import { useEffect, useState } from "react";
import pic1 from "./pics/pic2.png";
import me from "./pics/me.png";
import website from "./pics/website.png";
import main from "./pics/main.png";
import reUseMain from "./pics/reuse.png";
// import Abdullah_Alsharrah from "./Abdullah-Alsharrah.pdf";
import { Link } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // const [active, setActive] = useState("Home");

  const close = () => {
    closeModal();
    // setActive(page);
  };
  // const slides = window.onload
  //   ? null
  //   : Array.from(document.querySelector(".slides").children);
  const [section, setSection] = useState("");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let check = 0;

      check = window.scrollY;
      if (check !== 0) {
        document.getElementById("navBar").classList.add("scrolled");
      } else document.getElementById("navBar").classList.remove("scrolled");
    });
    const links = document.querySelectorAll(".nav-item");
    links.forEach((item) =>
      item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        el.classList.add("active");
        // setActive(el.id);

        if (isOpen) {
          closeModal();
        }
      })
    );
  });
  // console.log(links);
  return (
    <>
      <NavBar id="navBar">
        <ul className="left">
          <li>AK.Alsharrah</li>
        </ul>
        <div id="mobile" className="mobile">
          <AiOutlineAppstore onClick={openModal} size={25} color="lightblue" />
        </div>

        <ul id="screen" className="right">
          <li
            className="nav-item"
            data-link="home"
            // style={{ color: active === "home" ? "lightblue" : null }}
          >
            Home
          </li>
          <li
            className="nav-item"
            data-link="about"
            // style={{ color: active === "about" ? "lightblue" : null }}
          >
            About
          </li>
          <li
            className="nav-item"
            data-link="skills"
            // style={{ color: active === "skills" ? "lightblue" : null }}
          >
            Skills
          </li>
          <li
            className="nav-item"
            data-link="services"
            // style={{ color: active === "services" ? "lightblue" : null }}
          >
            Services
          </li>
          <li
            className="nav-item"
            data-link="portfolio"
            // style={{ color: active === "portfolio" ? "lightblue" : null }}
          >
            Portfolio
          </li>

          <li
          //  style={{ color: active === "contact-me" ? "lightblue" : null }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "unset",
              }}
              to="#"
              onClick={(e) => {
                window.location = "mailto:projects@hamiltonkw.com";
                e.preventDefault();
              }}>
              Contact me
            </Link>
          </li>
        </ul>
        <Menu className="menu" isOpen={isOpen}>
          <div
            className="menu-item nav-item"
            data-link="home"
            onClick={() => close("Home")}
            // style={{ color: active === "home" ? "lightblue" : null }}
          >
            <BiHomeAlt size={25} />
            <p>Home</p>
          </div>
          <div
            className="menu-item nav-item"
            data-link="about"
            // style={{ color: active === "about" ? "lightblue" : null }}
          >
            <IoPersonOutline size={25} />
            <p>About</p>
          </div>
          <div
            className="menu-item nav-item"
            data-link="skills"
            // style={{ color: active === "skills" ? "lightblue" : null }}
          >
            <CgNotes size={25} />
            <p>Skills</p>
          </div>
          <div
            className="menu-item nav-item"
            data-link="services"
            // style={{ color: active === "services" ? "lightblue" : null }}
          >
            <MdBusinessCenter size={25} />
            <p>Services</p>
          </div>
          <div
            className="menu-item nav-item"
            data-link="portfolio"
            // style={{ color: active === "portfolio" ? "lightblue" : null }}
          >
            <BiImage size={25} />
            <p>Portfolio</p>
          </div>
          <Link
            style={{
              textDecoration: "none",
              color: "unset",
            }}
            to="#"
            onClick={(e) => {
              window.location = "mailto:projects@hamiltonkw.com";
              e.preventDefault();
            }}>
            <div
              className="menu-item "
              // style={{ color: active === "contact-me" ? "lightblue" : null }}
            >
              <BiMailSend size={25} />
              Contact me
            </div>
          </Link>
        </Menu>
      </NavBar>

      <Body section={section} id="home">
        <div className="flex">
          <div className="container">
            <div className="social">
              <Link
                to={{
                  pathname: "https://github.com/abdullahAlsharrah",
                }}
                target="_blank">
                <FiGithub size={25} style={{ margin: 5, color: "lightblue" }} />
              </Link>

              <Link
                to={{
                  pathname:
                    "https://www.linkedin.com/in/abdullah-alsharrah-680255203/",
                }}
                target="_blank"
                style={{
                  textDecoration: "none",
                }}>
                <p className="linkedin" style={{ margin: 5 }}>
                  in
                </p>
              </Link>
              <Link
                style={{
                  textDecoration: "none",
                  color: "unset",
                }}
                to="#"
                onClick={(e) => {
                  window.location = "mailto:aksharrah@gmail.com";
                  e.preventDefault();
                }}>
                <FiSend size={25} style={{ margin: 5, color: "lightblue" }} />
              </Link>
            </div>
            <div className="imageContainer">
              <img alt="" src={me} />
            </div>
          </div>
          <div className="intro">
            <p className="greeting"> Hi, I'm AK. ALsharrah</p>
            <p className="info"> Full Stack Developer</p>
            <p className="paragraph">
              High level experience in web pages and apps, desgin and developing
              knowladge, producing quality work.
            </p>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="#"
              onClick={(e) => {
                window.location = "mailto:aksharrah@gmail.com";
                e.preventDefault();
              }}>
              <button className="contact-me">
                <p>Contact me</p> <IoSend />
              </button>
            </Link>
          </div>
          <div className="widthSocial">
            <Link
              to={{
                pathname: "https://github.com/abdullahAlsharrah",
              }}
              target="_blank">
              <FiGithub size={25} style={{ margin: 5, color: "lightblue" }} />
            </Link>
            <Link
              to={{
                pathname:
                  "https://www.linkedin.com/in/abdullah-alsharrah-680255203/",
              }}
              target="_blank"
              style={{
                textDecoration: "none",
              }}>
              <p className="linkedin" style={{ margin: 5 }}>
                in
              </p>
            </Link>{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "unset",
              }}
              to="#"
              onClick={(e) => {
                window.location = "mailto:aksharrah@gmail.com";
                e.preventDefault();
              }}>
              <FiSend size={25} style={{ margin: 5, color: "lightblue" }} />
            </Link>
          </div>
        </div>
        <div className="about" id="about">
          <p className="title">About Me</p>
          <p className="title2">My introduction</p>
          <div className="containerRow">
            <img alt="" src={pic1} />
            <div>
              {/* I'm a Kuwaiti exper freelancing part
                time in Kuwait and throughout the Middle East. */}
              <p className="paragraph">
                Hi, my name is Abdullah. I'm the OP (operation manager) in
                Hamilton Services Kuwait. I'm a web and apps develepor, with
                extencive knowladge and years of experiences, working in web
                technologies and UI / UX design producing quality work.
              </p>
              {/* <p className="paragraph">
                I provide a very personal service, I like to spend time getting
                to know my entrepreneur’s business allowing a higher
                understanding of their goals and requirements to help pave the
                way to great business relationships.
              </p> */}
              <div className="experiencesNo">
                <div className="box">
                  <p className="number">06+</p>
                  <p className="explain"> Years Experiance </p>
                </div>
                <div className="box">
                  <p className="number">15+</p>
                  <p className="explain"> Completed Project </p>
                </div>
                <div className="box">
                  <p className="number">03+</p>
                  <p className="explain"> Companies Work </p>
                </div>
              </div>
            </div>
          </div>

          {/* <Link
            style={{
              textDecoration: "none",
            }}
            to={Abdullah_Alsharrah}
            // src="/Abdullah-Alsharrah.pdf"
            target="_blank"
            download>
            <button className="contact-me">
              <p>Download CV</p> <MdFileDownload />
            </button>
          </Link> */}
        </div>
        <div className="about" id="skills">
          <p className="title">Skills</p>
          <p className="title2">My technicals levels</p>
          <div className="skillsRow" style={{ position: "relative" }}>
            <div className="flexRow">
              <div
                className="modal"
                onClick={
                  section !== "front"
                    ? () => setSection("front")
                    : () => setSection("")
                }>
                <BiCodeCurly size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">FrontEnd Developer</p>
                  <p className="skillYear">More than 4 years</p>
                </div>

                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="drop front">
                <div className="reactline">
                  <p className="html">HTML</p>
                  <p className="perc">95%</p>
                </div>
                <div className="cssline">
                  <p className="htlm">CSS</p>
                  <p className="perc">85%</p>
                </div>
                <div className="cssline">
                  <p className="htlm">JavaScript</p>
                  <p className="perc">85%</p>
                </div>
                <div className="reactline">
                  <p className="htlm">React</p>
                  <p className="perc">95%</p>
                </div>
                <div className="reactline n">
                  <p className="htlm">React Native</p>
                  <p className="perc">95%</p>
                </div>
                <div className="jsline ">
                  <p className="htlm">Flutter</p>
                  <p className="perc">75%</p>
                </div>
              </div>
            </div>
            <div className="flexRow">
              <div
                className="modal"
                onClick={
                  section !== "designer"
                    ? () => setSection("designer")
                    : () => setSection("")
                }>
                <MdStyle size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">Designer</p>
                  <p className="skillYear">More than 4 years</p>
                </div>

                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="drop designer">
                <div className="jsline">
                  <p className="htlm">Figma</p>
                  <p className="perc">70%</p>
                </div>
              </div>
            </div>
            <div className="flexRow be">
              <div
                className="modal"
                onClick={
                  section !== "backend"
                    ? () => setSection("backend")
                    : () => setSection("")
                }>
                <CgDatabase size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">BackEnd Developer</p>
                  <p className="skillYear">More than 5 years</p>
                </div>

                <BiChevronDown size={35} color="lightblue" />
              </div>

              <div className="drop backend">
                <div className="cssline n">
                  <p className="htlm">Express JS</p>
                  <p className="perc">85%</p>
                </div>
                <div className="pyline">
                  <p className="htlm">Python</p>
                  <p className="perc">60%</p>
                </div>
              </div>
            </div>
            <div className="flexRow plf">
              <div
                className="modal"
                onClick={
                  section !== "platform"
                    ? () => setSection("platform")
                    : () => setSection("")
                }>
                <SiWordpress size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">Platform</p>
                  <p className="skillYear">More than 5 years</p>
                </div>

                <BiChevronDown size={35} color="lightblue" />
              </div>

              <div className="drop platform">
                <div className="reactline n">
                  <p className="htlm">WordPress</p>
                  <p className="perc">90%</p>
                </div>
                <div className="cssline">
                  <p className="htlm">Shopyfi</p>
                  <p className="perc">85%</p>
                </div>
                <div className="pyline">
                  <p className="htlm">Magento</p>
                  <p className="perc">50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="about"
          id="services"
          style={{
            marginTop:
              section === "backend" || section === "front" ? null : 100,
          }}>
          <p className="title">Services</p>
          <p className="title2">What i offer</p>
          <div className="skillsRow">
            <div
              className="modalBox"
              onClick={
                section !== "service1"
                  ? () => setSection("service1")
                  : () => setSection("")
              }>
              <MdStyle size={35} color="lightblue" />
              <p className="serviceTitle">UI / UX</p>
              <div className="row">
                <p>View More</p>
                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="hiddenContainer service1">
                <div className="block">
                  <p className="serviceTitle">UI/Ux Designer</p>
                  <ul className="list">
                    <li>I deliver the user interface</li>
                    <li>I design mobile friendly wep pages </li>
                    <li>I create UX element interaction </li>
                    <li>I design mobile apps</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="modalBox"
              onClick={
                section !== "service2"
                  ? () => setSection("service2")
                  : () => setSection("")
              }>
              <BiCodeCurly size={35} color="lightblue" />
              <p className="serviceTitle">FrontEnd</p>
              <div className="row">
                <p>View More</p>
                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="hiddenContainer service2">
                <div className="block">
                  <p className="serviceTitle">FrontEnd Developing</p>
                  <ul className="list">
                    <li>
                      Using HTML, JavaScript and CSS to bring concepts to life.
                    </li>
                    <li>
                      Using React and React Native to develop web apps and
                      mobile application.
                    </li>
                    <li>
                      Creating tools that improve site interaction regardless of
                      the browser{" "}
                    </li>
                    <li>Optimizing the user experience. </li>
                    <li>Managing software workflow.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="modalBox"
              onClick={
                section !== "service3"
                  ? () => setSection("service3")
                  : () => setSection("")
              }>
              <CgDatabase size={35} color="lightblue" />
              <p className="serviceTitle">BackEnd</p>
              <div className="row">
                <p>View More</p>
                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="hiddenContainer service3">
                <div className="block">
                  <p className="serviceTitle">BackEnd Developing</p>
                  <ul className="list">
                    <li>
                      JavaScript to develope a usefull enviroment for your
                      project.
                    </li>
                    <li>Help you deploy your backend</li>
                    <li>Build a strong DataBase</li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="modalBox"
              onClick={
                section !== "service4"
                  ? () => setSection("service4")
                  : () => setSection("")
              }>
              <SiWordpress size={35} color="lightblue" />
              <p className="serviceTitle">Platforms</p>
              <div className="row">
                <p>View More</p>
                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="hiddenContainer service4">
                <div className="block">
                  <p className="serviceTitle">Platform</p>
                  <ul className="list">
                    <li>Help you start your simple e-commerce website</li>
                    <li>Build a blog website for your amazing adventures</li>
                    <li>Redesign Your webpage</li>
                    <li>Help You organize your categories</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about" id="portfolio">
          <p className="title">Portfolio</p>
          <p className="title2">Most recent works</p>
          <div className="slides-contaienr">
            <div className="containerArrow">
              <MdKeyboardArrowLeft
                // style={{ position: "absolute", left: -50, top: 150 }}
                size={55}
                color="lightblue"
                onClick={
                  counter === 1
                    ? () => setCounter(3)
                    : () => setCounter(counter - 1)
                }
              />
              <div className="slides">
                <div
                  id="slide-item"
                  className={
                    counter === 1
                      ? "slide-item slide-active"
                      : "slide-item slide-2"
                  }>
                  <img alt="" src={main} />

                  <div className="portfolio">
                    <p className="portfolio-title">Salon Manager</p>{" "}
                    <p className="portfolio-para">
                      Management app for salons. with casher system and invoices
                      by days or months
                    </p>
                  </div>
                </div>
                <div
                  id="slide-item"
                  className={
                    counter === 2
                      ? "slide-item slide-active"
                      : counter > 2
                      ? "slide-item slide-2"
                      : "slide-item slide-1"
                  }>
                  <img alt="" src={website} className="border" />
                  <div className="portfolio">
                    <p className="portfolio-title">Multi Vendor</p>
                    <p className="portfolio-para ">
                      e-commerce Website with multi vendors stores,and vendores
                      view using woocomerce
                    </p>
                  </div>
                </div>
                <div
                  id="slide-item"
                  className={
                    counter === 3
                      ? "slide-item slide-active"
                      : "slide-item slide-1"
                  }>
                  <img alt="" src={reUseMain} className="phone" />
                  <div className="portfolio">
                    <p className="portfolio-title">UI/UX</p>
                    <p className="portfolio-para">
                      UI/Ux interface designes for a multi vendor application
                      using React native
                    </p>
                  </div>
                </div>
              </div>

              <MdKeyboardArrowRight
                // style={{ position: "absolute", right: -50, top: 150 }}
                size={55}
                color="lightblue"
                onClick={
                  counter === 3
                    ? () => setCounter(1)
                    : () => setCounter(counter + 1)
                }
              />
            </div>
          </div>
          <div className="dots">
            <div className={counter === 1 ? "active" : null}></div>
            <div className={counter === 2 ? "active" : null}></div>
            <div className={counter === 3 ? "active" : null}></div>
          </div>
        </div>

        {/* <div
          className="contactmeBox"
          id="contact-me"
          style={{ marginTop: 100 }}
        >
          <p className="large">You have a new project</p>
          <p className="small">
            Conatct me know and get 30% off on your new project
          </p>
        </div> */}
      </Body>
    </>
  );
}

export default App;
