import React from "react";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-center items-center flex-wrap gap-5 mt-8">
      <div className="flex gap-3">
        <a
          href="http://www.youtube.com/@Vloggerboi786"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/youtube.svg"
            alt="youtube"
            className="w-1/2 h-1/2"
          />
        </a>
        <a
          href="https://www.snapchat.com/add/sayyed_aadil786?share_id=TMImbCseYe8&locale=en-SA"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img src="/assets/snap.svg" alt="snapchat" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/sayyed_aadil.pvt?igsh=MXVhOGV0cWVpendreA=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
