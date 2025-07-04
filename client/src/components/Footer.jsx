
import { Footer, FooterLinkGroup, FooterTitle, FooterLink, FooterDivider, FooterCopyright, FooterIcon } from "flowbite-react";
import { Link } from 'react-router-dom';
import { BsFacebook,BsInstagram,BsTwitter,BsGithub,BsDribbble } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="">
                <Link to = '/' className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white" >
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Sumit Vats </span>
                    Blog
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                    <FooterTitle title='About' />
                   
                    <FooterLinkGroup col>
                        <FooterLink 
                        href = 'https://www.google.com'
                        target ='_blank'
                        rel ='noopener noreferrer'
                        >
                            google
                        </FooterLink>
                    <FooterLink 
                        href = 'https://www.google.com'
                        target ='_blank'
                        rel ='noopener noreferrer'
                        >
                        google
                        </FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <FooterTitle title='Follow us' />
                   
                    <FooterLinkGroup col>
                        <FooterLink 
                        href = 'https://www.google.com'
                        target ='_blank'
                        rel ='noopener noreferrer'
                        >
                        github
                        </FooterLink>
                    <FooterLink 
                        href = 'https://www.google.com'
                        target ='_blank'
                        rel ='noopener noreferrer'
                        >
                        discord
                        </FooterLink>
                    </FooterLinkGroup>
                </div>
                <div>
                    <FooterTitle title='Legal' />
                   
                    <FooterLinkGroup col>
                        <FooterLink 
                        href = 'https://www.google.com'
                        target ='_blank'
                        rel ='noopener noreferrer'
                        >
                            privacy policy
                        </FooterLink>
                    <FooterLink 
                        href = 'https://www.google.com'
                        target ='_blank'
                        rel ='noopener noreferrer'
                        >
                        copyright
                        </FooterLink>
                    </FooterLinkGroup>
                </div>
            </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href='#'  by= "Sumit Blog" year ={new Date().getFullYear} />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <FooterIcon href ='#' icon={BsFacebook} />
                <FooterIcon href ='#' icon={BsInstagram} />
                <FooterIcon href ='#' icon={BsTwitter} />
                <FooterIcon href ='#' icon={BsGithub} />
                <FooterIcon href ='#' icon={BsDribbble} />
            </div>

        </div>

      </div>
    </Footer>
  )
}
