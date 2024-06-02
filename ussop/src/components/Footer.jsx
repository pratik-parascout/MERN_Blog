import {Footer} from 'flowbite-react'
import {Link} from 'react-router-dom'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si'

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white flex justify-around">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Usopp's
            </span>
            Blog
          </Link>
          <div className="flex gap-5">
            <Footer.Icon
              href="https://www.linkedin.com/in/pratik-kumar-b82761228"
              icon={BsLinkedin}
            />
            <Footer.Icon
              href="https://github.com/pratik-parascout"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.instagram.com/parasc0ut/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://leetcode.com/u/para_scout/"
              icon={SiLeetcode}
            />
          </div>
        </div>
        <div>
          <Footer.Divider />
          <Footer.Copyright
            href="https://www.linkedin.com/in/pratik-kumar-b82761228"
            by="Pratik Kumar"
            year={new Date().getFullYear()}
          />
        </div>
      </div>
    </Footer>
  )
}
export default FooterComp