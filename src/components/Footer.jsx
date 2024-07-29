const footerLinks = (element) => {
  const allElements = document.querySelectorAll(".footerLinks");

  switch (element) {
    case 0:
      allElements.forEach((item, index) =>
        index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
      );
      break;
    case 1:
      allElements.forEach((item, index) =>
        index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
      );
      break;
    case 2:
      allElements.forEach((item, index) =>
        index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
      );
      break;
    case 3:
      allElements.forEach((item, index) =>
        index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
      );
      break;
    case 4:
      allElements.forEach((item, index) =>
        index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
      );
      break;
    case 5:
      allElements.forEach((item, index) =>
        index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)
      );
      break;
    default:
      allElements.forEach((item) => (item.style.opacity = 1));
      break;
  }
};

const handleOnMouseLeave = () => {
  const allElements = document.querySelectorAll(".footerLinks");
  allElements.forEach((item) => (item.style.opacity = 1));
};

const Footer = () => {
  return (
    <>
      <footer>
        <h1>
          Let's
          <br />
          #ConnectOnCutting?
        </h1>

        <aside onMouseLeave={handleOnMouseLeave}>
          <a
            href="/"
            className="footerLinks"
            onMouseOver={() => footerLinks(0)}
            data-cursorpointermini={true}
          >
            Home
          </a>
          <a
            href="/story"
            className="footerLinks"
            onMouseOver={() => footerLinks(1)}
            data-cursorpointermini={true}
          >
            Story
          </a>
          <a
            href="/media"
            className="footerLinks"
            onMouseOver={() => footerLinks(2)}
            data-cursorpointermini={true}
          >
            Media
          </a>
          <a
            href="/franchise"
            className="footerLinks"
            onMouseOver={() => footerLinks(3)}
            data-cursorpointermini={true}
          >
            Franchise
          </a>
          <a
            href="/events"
            className="footerLinks"
            onMouseOver={() => footerLinks(4)}
            data-cursorpointermini={true}
          >
            Events
          </a>
          <a
            href="/chaiwalacares"
            className="footerLinks"
            onMouseOver={() => footerLinks(5)}
            data-cursorpointermini={true}
          >
            Chai Wala Cares
          </a>
        </aside>

        <div>
          <h5>Email</h5>
          <a href="mailto: Info@mbachaiwala.com">Info@mbachaiwala.com</a>
          <a href="mailto: franchise@mbachaiwala.com">
            Franchise@mbachaiwala.com
          </a>
        </div>

        <div>
          <h5>Phone</h5>
          <a href="tel: +9152234568">+9152234568</a>
        </div>

        <p>© COPYRIGHT 2024 MBA CHAIWALA. MADE BY</p>
      </footer>
      <div className="footer"></div>
    </>
  );
};

export default Footer;
