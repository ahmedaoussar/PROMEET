import { Typography } from "@material-tailwind/react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="container mx-auto flex items-center justify-between py-6">
      <Typography color="bleuFonce" className="font-bold text-xl" style={{ color: '#1E3A8A' }}>
        &copy; 2024 ProMEET
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bleuFonce hover:text-blue-500 focus:text-blue-500"
          >
            <FaInstagram className="text-bleuFonce mr-2" style={{ fontSize: '1.5em' }}/>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bleuFonce hover:text-blue-500 focus:text-blue-500"
          >
            <FaLinkedin className="text-bleuFonce mr-2" style={{ fontSize: '1.5em' }}/>
          </a>
        </li>
      </ul>
    </footer>
  );
}
