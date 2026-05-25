'use client';
import { Menu, Phone } from 'lucide-react';
import Link from 'next/link';

interface TopnavProps {
    onMobileMenuClick?: () => void;
}

const Topnav = ({ onMobileMenuClick }: TopnavProps) => {
    return (
        <div className="bg-[#FFFFFF] border-b border-[rgba(0,0,0,.1)] w-full">
            <div className="inner inner-header flex flex-row items-center justify-between min-h-[4.4rem] p-0">

                {/* Mobile logo */}
                <Link href="/" className="block lg:hidden float-left" aria-label="New York City Electricians">
                    <img src="/logos/nyc Electricians_darkbackground.png" alt="New York City Electricians" className="block h-[3.6rem]" />
                </Link>

                {/* Phone number — centered on desktop */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <a
                        href="tel:6463409882"
                        className="flex items-center gap-2 text-[#292929] text-[1.4rem] font-light tracking-[.05rem] py-[2rem] no-underline transition-colors duration-[350ms] hover:text-[#8CBCFF]"
                    >
                        <Phone size={14} strokeWidth={2} />
                        <span>(646) 340-9882 — 24-Hour Emergency Service Available</span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={onMobileMenuClick}
                    className="lg:hidden flex items-center justify-center ml-[1.3rem] bg-transparent border-0 cursor-pointer text-[#292929] p-[0.4rem]"
                    aria-label="Menu"
                >
                    <Menu size={30} strokeWidth={2.5} />
                    <em className="sr-only not-italic">Menu icon</em>
                </button>

            </div>
        </div>
    );
}

export default Topnav;
