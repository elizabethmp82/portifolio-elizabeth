'use client'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/melo-elizabeth',
    label: 'LinkedIn',
  },
  {
    icon: <FaGithub />,
    url: 'http://github.com/elizabethmp82',
    label: 'GitHub',
  },
//   {
//     icon: <FaInstagram />,
//     url: 'https://instagram.com/seuusuario',
//     label: 'Instagram',
//   },
  {
    icon: <FaEnvelope />,
    url: 'mailto:meloelizabethp@gmail.com',
    label: 'Email',
  },
]

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-accent text-2xl transition transform hover:scale-110 hover:text-primary-dark"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
