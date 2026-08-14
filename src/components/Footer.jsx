import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 py-6 text-center text-sm text-slate-500">
      <span className="font-medium text-cyan-400">
        DevTrack v1
      </span>
      {" • "}
      Built with React + Tailwind CSS
    </footer>
  );
};

export default Footer;