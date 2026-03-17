import { CSSProperties } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai"; // WhatsApp icon
import { Phone, Mail } from "lucide-react";

export function ContactSidebar() {
  const containerStyle: CSSProperties = {
    position: "fixed",
    top: "33%",
    right: 0,
    display: "flex",
    flexDirection: "column",
    zIndex: 9999,
  };

  const iconStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    color: "#fff",
    borderRadius: "50% 0 0 50%",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    textDecoration: "none",
    marginBottom: 12,
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/+918089596969"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...iconStyle, background: "#25D366" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#1ebe57")}
        onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
      >
        <AiOutlineWhatsApp size={24} color="white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+918089596969"
        style={{ ...iconStyle, background: "#00BFFF" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#009ad6")}
        onMouseLeave={e => (e.currentTarget.style.background = "#00BFFF")}
      >
        <Phone style={{ width: 24, height: 24 }} />
      </a>

      {/* Email */}
      <a
        href="mailto:info@zsquadcooling.com"
        style={{ ...iconStyle, background: "#FFA500" }}
        onMouseEnter={e => (e.currentTarget.style.background = "#e69500")}
        onMouseLeave={e => (e.currentTarget.style.background = "#FFA500")}
      >
        <Mail style={{ width: 24, height: 24 }} />
      </a>
    </div>
  );
}
