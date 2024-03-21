const t1 = gsap.timeline({ defaults: { ease: "power2.out" } });
t1.to(".slider", { y: "-100%", duration: 1.2 });
t1.to(".heroSection", { y: "0%", duration: 1.2 }, "-=1");
t1.fromTo(".navbar", { opacity: 0 }, { opacity: 1, duration: 1.2 });
