export default function WhatsAppButton() {
  return (
  <a
      className="hotline_block"
      href="https://wa.me/353899520026"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        bottom: "50px",
        right: "20px",
        zIndex: "1000",
      }}
    >
      <span className="hotline_icon">
        <i
          className="fa-brands fa-whatsapp fa-beat fa-lg"
          style={{ color: "rgb(235, 238, 244)" }}
        ></i>
      </span>
    </a>
  );
}