
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimation = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate elements with the animate-on-scroll class
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        gsap.fromTo(
          element,
          { 
            opacity: 0,
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Text reveal animation
      const textElements = document.querySelectorAll('.text-reveal');
      
      textElements.forEach((element) => {
        const spans = element.querySelectorAll('span');
        
        gsap.to(spans, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return animationRef;
};

export const useHeroAnimation = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        '.hero-title span',
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power2.out" 
        }
      );
      
      tl.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          ease: "power2.out" 
        },
        "-=0.4"
      );
      
      tl.fromTo(
        '.nav-item',
        { opacity: 0, y: -20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.4, 
          stagger: 0.1,
          ease: "power2.out" 
        },
        "-=0.6"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return heroRef;
};

export const useServiceCardAnimation = () => {
  const serviceRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.service-card');
      
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.05)"
          });
        });
      });
    }, serviceRef);
    
    return () => ctx.revert();
  }, []);
  
  return serviceRef;
};
