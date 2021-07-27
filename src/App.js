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
  MdFileDownload,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdStyle,
} from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { SiWordpress } from "react-icons/si";
import { FiGithub, FiSend } from "react-icons/fi";
import { useEffect, useState } from "react";
import pic1 from "./pic2.png";
import me from "./me.png";
import Abdullah_Alsharrah from "./Abdullah-Alsharrah.pdf";
import { Link } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [active, setActive] = useState("Home");

  const close = (page) => {
    closeModal();
    setActive(page);
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
        setActive(el.id);
        console.log(el.id);

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
                window.location = "mailto:adbdb.27@gmail.com";
                e.preventDefault();
              }}
            >
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
              window.location = "mailto:adbdb.27@gmail.com";
              e.preventDefault();
            }}
          >
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
                target="_blank"
              >
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
                }}
              >
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
                  window.location = "mailto:adbdb.27@gmail.com";
                  e.preventDefault();
                }}
              >
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
                window.location = "mailto:adbdb.27@gmail.com";
                e.preventDefault();
              }}
            >
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
              target="_blank"
            >
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
              }}
            >
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
                window.location = "mailto:adbdb.27@gmail.com";
                e.preventDefault();
              }}
            >
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
              <p className="paragraph">
                Hi, my name is Abdullah. I'm a Kuwaiti expat freelancing part
                time in Kuwait and throughout the Middle East. I'm a web and
                apps develepor, with extencive knowladge and years of
                experiences, working in web technologies and UI / UX design
                producing quality work.
              </p>
              {/* <p className="paragraph">
                I provide a very personal service, I like to spend time getting
                to know my entrepreneur’s business allowing a higher
                understanding of their goals and requirements to help pave the
                way to great business relationships.
              </p> */}
              <div className="experiencesNo">
                <div className="box">
                  <p className="number">04+</p>
                  <p className="explain"> Years Experiance </p>
                </div>
                <div className="box">
                  <p className="number">10+</p>
                  <p className="explain"> Completed Project </p>
                </div>
                <div className="box">
                  <p className="number">02+</p>
                  <p className="explain"> Companies Work </p>
                </div>
              </div>
            </div>
          </div>

          <Link
            style={{
              textDecoration: "none",
            }}
            to={Abdullah_Alsharrah}
            // src="/Abdullah-Alsharrah.pdf"
            target="_blank"
            download
          >
            <button className="contact-me">
              <p>Download CV</p> <MdFileDownload />
            </button>
          </Link>
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
                }
              >
                <BiCodeCurly size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">FrontEnd Developer</p>
                  <p className="skillYear">More than 4 years</p>
                </div>

                <BiChevronDown size={35} color="lightblue" />
              </div>
              <div className="drop front">
                <div className="htmlline">
                  <p className="html">HTML</p>
                  <p className="perc">80%</p>
                </div>
                <div className="cssline">
                  <p className="htlm">CSS</p>
                  <p className="perc">85%</p>
                </div>
                <div className="jsline">
                  <p className="htlm">JavaScript</p>
                  <p className="perc">70%</p>
                </div>
                <div className="reactline">
                  <p className="htlm">React</p>
                  <p className="perc">95%</p>
                </div>
                <div className="reactline n">
                  <p className="htlm">React Native</p>
                  <p className="perc">95%</p>
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
                }
              >
                <MdStyle size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">Designer</p>
                  <p className="skillYear">More than 2 years</p>
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
                }
              >
                <CgDatabase size={35} color="lightblue" />
                <div className="skills">
                  <p className="skillTitle">BackEnd Developer</p>
                  <p className="skillYear">More than 2 years</p>
                </div>

                <BiChevronDown size={35} color="lightblue" />
              </div>

              <div className="drop backend">
                <div className="jsline n">
                  <p className="htlm">Express JS</p>
                  <p className="perc">70%</p>
                </div>
                <div className="pyline">
                  <p className="htlm">Python</p>
                  <p className="perc">50%</p>
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
                }
              >
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
          }}
        >
          <p className="title">Services</p>
          <p className="title2">What i offer</p>
          <div className="skillsRow">
            <div
              className="modalBox"
              onClick={
                section !== "service1"
                  ? () => setSection("service1")
                  : () => setSection("")
              }
            >
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
              }
            >
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
              }
            >
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
              }
            >
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
                  }
                >
                  <img
                    alt=""
                    src="data:image/jpeg;base64,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"
                  />

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
                  }
                >
                  <img
                    alt=""
                    src="data:image/jpeg;base64,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"
                  />
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
                  }
                >
                  <img
                    alt=""
                    src="data:image/jpeg;base64,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"
                  />
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
