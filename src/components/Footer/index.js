import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>

                            <FooterLink to='/works'>How it works</FooterLink>
                            <FooterLink to='/testimonials'>Testimonials</FooterLink>
                            <FooterLink to='/careers'>Careers</FooterLink>
                            <FooterLink to='/investors'>Investors</FooterLink>
                            <FooterLink to='/terms'>Terms of Service</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>

                            <FooterLink to='/works'>Submit Video</FooterLink>
                            <FooterLink to='/testimonials'>Ambassadors</FooterLink>
                            <FooterLink to='/careers'>Agency</FooterLink>
                            <FooterLink to='/investors'>Influencer</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>

                            <FooterLink to='/works'>Contact</FooterLink>
                            <FooterLink to='/testimonials'>Support</FooterLink>
                            <FooterLink to='/careers'>Destinations</FooterLink>
                            <FooterLink to='/investors'>Sponsorships</FooterLink>

                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>

                            <FooterLink to='/works'>Instagram</FooterLink>
                            <FooterLink to='/testimonials'>Facebook</FooterLink>
                            <FooterLink to='/careers'>Youtube</FooterLink>
                            <FooterLink to='/investors'>Twitter</FooterLink>

                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>dolla</SocialLogo>
                        <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/?hl=es-la" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/?lang=es" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://pe.linkedin.com/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
