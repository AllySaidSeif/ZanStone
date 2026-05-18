// src/components/Header/Navbar.js
import { useEffect, useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/zanstoneLogo.png';
import { color } from '../styles/color';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px 0;
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: transform 0.3s ease;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const LogoImage = styled.img`
  height: 55px;
  width: auto;
  object-fit: contain;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 45px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BrandName = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
`;

const BrandTagline = styled.span`
  font-size: 0.65rem;
  color: ${color.primary};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex: 1;
  justify-content: center;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.menuOpen ? '0' : '-100%'};
    width: 75%;
    height: 100vh;
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 100px 30px 40px;
    gap: 25px;
    transition: right 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 85%;
    padding: 80px 20px 40px;
    gap: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: all 0.3s ease;
  padding: 8px 0;

  &:hover {
    color: ${color.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2.5px;
    background: linear-gradient(90deg, ${color.primary}, #FF6B6B);
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 0;

    &::after {
      display: none;
    }

    &:hover {
      padding-left: 10px;
    }
  }
`;

const WhatsAppButton = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #25D366, #20BA5C);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
    background: linear-gradient(135deg, #20BA5C, #25D366);
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.85rem;
    gap: 6px;

    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 9px 14px;
    font-size: 0.8rem;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  transition: all 0.3s ease;
  padding: 8px;

  &:hover {
    color: ${color.primary};
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;
  }
`;

const CloseButton = styled(FiX)`
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 1.8rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${color.primary};
    transform: rotate(90deg);
  }

  @media (max-width: 480px) {
    top: 20px;
    right: 15px;
    font-size: 1.5rem;
  }
`;

const LanguageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const LanguageButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 42px;
  padding: 0 12px;
  border: 1px solid rgba(255, 125, 51, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
  color: #24323a;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;

  &:hover {
    border-color: ${color.primary};
    transform: translateY(-1px);
  }

  svg {
    font-size: 1rem;
    transition: transform 0.2s ease;
    transform: ${props => props.$open ? 'rotate(180deg)' : 'rotate(0deg)'};
  }

  @media (max-width: 768px) {
    height: 38px;
    padding: 0 10px;
    gap: 5px;
    font-size: 0.78rem;
  }

  @media (max-width: 480px) {
    height: 36px;
    padding: 0 9px;
  }
`;

const FlagText = styled.span`
  font-size: 1.08rem;
  line-height: 1;
`;

const LanguageMenu = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 190px;
  padding: 8px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid rgba(24, 37, 45, 0.08);
  box-shadow: 0 18px 40px rgba(24, 37, 45, 0.16);
  opacity: ${props => props.$open ? 1 : 0};
  visibility: ${props => props.$open ? 'visible' : 'hidden'};
  transform: ${props => props.$open ? 'translateY(0)' : 'translateY(-6px)'};
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
  z-index: 1002;

  @media (max-width: 768px) {
    right: -48px;
  }

  @media (max-width: 480px) {
    right: -42px;
    width: 176px;
  }
`;

const LanguageOption = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 11px;
  border: none;
  border-radius: 11px;
  background: ${props => props.$active ? 'rgba(255, 125, 51, 0.1)' : 'transparent'};
  color: #24323a;
  font-size: 0.9rem;
  font-weight: ${props => props.$active ? 800 : 600};
  text-align: left;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 125, 51, 0.12);
    color: ${color.primary};
  }
`;

const HiddenTranslateRoot = styled.div`
  position: fixed;
  left: -9999px;
  top: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English', flag: '🇬🇧' },
  { code: 'pl', short: 'PL', label: 'Polish', flag: '🇵🇱' },
  { code: 'de', short: 'DE', label: 'German', flag: '🇩🇪' },
  { code: 'it', short: 'IT', label: 'Italian', flag: '🇮🇹' },
  { code: 'fr', short: 'FR', label: 'French', flag: '🇫🇷' },
  { code: 'es', short: 'ES', label: 'Spanish', flag: '🇪🇸' }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(() => localStorage.getItem('zanstone-language') || 'en');
  const languageRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return;

      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: LANGUAGES.map(language => language.code).join(','),
        autoDisplay: false
      }, 'google_translate_element');
    };

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate?.TranslateElement) {
      window.googleTranslateElementInit();
    }
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!languageRef.current?.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, []);

  useEffect(() => {
    if (currentLanguage !== 'en') {
      applyGoogleTranslate(currentLanguage);
    }
  }, [currentLanguage]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '+255616543216';
    const message = 'Hello! I would like to inquire about your tours in Zanzibar.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setMenuOpen(false);
  };

  const clearGoogleTranslateCookie = () => {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;

    const hostParts = window.location.hostname.split('.');
    if (hostParts.length > 1) {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${hostParts.slice(-2).join('.')};`;
    }
  };

  const applyGoogleTranslate = (languageCode) => {
    const combo = document.querySelector('.goog-te-combo');

    if (!combo) {
      setTimeout(() => applyGoogleTranslate(languageCode), 350);
      return;
    }

    combo.value = languageCode === 'en' ? '' : languageCode;
    combo.dispatchEvent(new Event('change'));
  };

  const handleLanguageChange = (languageCode) => {
    setCurrentLanguage(languageCode);
    setLanguageOpen(false);
    localStorage.setItem('zanstone-language', languageCode);

    if (languageCode === 'en') {
      clearGoogleTranslateCookie();
      window.location.reload();
      return;
    }

    document.cookie = `googtrans=/en/${languageCode}; path=/;`;
    applyGoogleTranslate(languageCode);
  };

  const handleReviewsClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById('google-reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedLanguage = LANGUAGES.find(language => language.code === currentLanguage) || LANGUAGES[0];

  return (
    <NavContainer scrolled={scrolled || menuOpen}>
      <NavContent>
        <LogoContainer to="/">
          <LogoImage src={logo} alt="ZanStone Tours & Safaris" />
        </LogoContainer>

        <NavLinksWrapper>
          <NavLinks menuOpen={menuOpen}>
            {menuOpen && <CloseButton onClick={toggleMenu} />}
            <li>
              <NavLink 
                to="/" 
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/dayTrips" 
                onClick={() => setMenuOpen(false)}
              >
                Day Trips
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/safariExperience" 
                onClick={() => setMenuOpen(false)}
              >
                Safaris
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                onClick={() => setMenuOpen(false)}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={() => setMenuOpen(false)}
              >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink 
                as="a"
                href="#"
                onClick={handleReviewsClick}
              >
                Reviews
              </NavLink>
            </li>
          </NavLinks>
        </NavLinksWrapper>

        <WhatsAppButton href="#" onClick={(e) => {
          e.preventDefault();
          handleWhatsApp();
        }}>
          <FaWhatsapp />
          <span>Chat on WhatsApp</span>
        </WhatsAppButton>

        <LanguageWrapper ref={languageRef}>
          <LanguageButton
            type="button"
            $open={languageOpen}
            onClick={() => setLanguageOpen(open => !open)}
            aria-label="Change language"
            aria-expanded={languageOpen}
          >
            <FlagText>{selectedLanguage.flag}</FlagText>
            <span>{selectedLanguage.short}</span>
            <FiChevronDown />
          </LanguageButton>
          <LanguageMenu $open={languageOpen}>
            {LANGUAGES.map(language => (
              <LanguageOption
                key={language.code}
                type="button"
                $active={currentLanguage === language.code}
                onClick={() => handleLanguageChange(language.code)}
              >
                <FlagText>{language.flag}</FlagText>
                <span>{language.label}</span>
              </LanguageOption>
            ))}
          </LanguageMenu>
        </LanguageWrapper>

        <MobileMenuButton onClick={toggleMenu}>
          <FiMenu />
        </MobileMenuButton>
      </NavContent>
      <HiddenTranslateRoot id="google_translate_element" />
    </NavContainer>
  );
};

export default Header;
