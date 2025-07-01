import { projects, GITHUB_ICON_SVG } from "./projectData.js";
(function () {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);
  // TypeWriter 클래스 정의
  class TypeWriter {
    constructor(txtElement, words, wait = 1600) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = "";
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.isDeleting = false;
      this.type();
    }

    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.txtElement.innerText = this.txt;

      let typeSpeed = 50;
      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }
  // 페이지 초기 로딩 애니메이션 처리
  function initPageLoad() {
    const tl = gsap.timeline({ delay: 0 });
    const documentBody = document.getElementById("body-container");
    const preloader = document.querySelector(".preloader");

    tl.to(documentBody, { duration: 0.6, backgroundColor: "#070707" })
      .from(preloader, { duration: 0.2, opacity: 0, y: 60 })
      .to(preloader, { duration: 0.2, opacity: 0, y: -60 })
      .to(documentBody, { duration: 0.2, backgroundColor: "#faf9f9" })
      .from(
        ".about-section",
        {
          duration: 0.6,
          opacity: 0,
          y: -20,
          ease: "power2.out",
          delay: 1,
        },
        "-=0.2"
      );

    gsap.from("#divider-info-1", {
      delay: 2,
      duration: 0.5,
      width: "0%",
    });
    gsap.from("#divider-info-2", {
      delay: 2.25,
      duration: 0.5,
      width: "0%",
    });
    gsap.from("#status-bar", {
      duration: 0.5,
      opacity: 0,
      delay: 2.5,
    });
    gsap.from("#about-cta", {
      delay: 2,
      duration: 1,
      opacity: 0,
    });
    gsap.from("canvas", {
      delay: 2.5,
      duration: 0.5,
      opacity: 0,
    });
    gsap.from("#navbar", {
      delay: 2.5,
      duration: 1,
      opacity: 0,
      y: -10,
      ease: "expo.Out",
    });
    gsap.from("#section-container", {
      delay: 2.5,
      duration: 0.5,
      opacity: 0,
      y: 10,
      ease: "expo.Out",
    });
    gsap.to(".services-border", {
      scrollTrigger: {
        trigger: ".about-resources",
        toggleActions: "restart none reverse none",
        start: "center center",
      },
      duration: 1,
      width: "50%",
    });
    gsap.from("#divider-info-3", {
      scrollTrigger: {
        trigger: "#divider-info-3",
        start: "top center",
      },
      duration: 1,
      width: "0%",
    });
    gsap.from("#divider-info-4", {
      scrollTrigger: {
        trigger: "#divider-info-3",
        start: "top center",
      },
      duration: 1.25,
      width: "0%",
    });
    gsap.from("#project-1", {
      scrollTrigger: {
        trigger: "#project-1",
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
    });
    gsap.from("#project-2", {
      scrollTrigger: {
        trigger: "#project-2",
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
    });
    gsap.from("#project-3", {
      scrollTrigger: {
        trigger: "#project-3",
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
    });
    gsap.from("#project-4", {
      scrollTrigger: {
        trigger: "#project-4",
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
    });
    gsap.from("#project-5", {
      scrollTrigger: {
        trigger: "#project-5",
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
    });
    gsap.from(".mini-project", {
      scrollTrigger: {
        trigger: ".mini-project",
        start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      stagger: 0.15,
      y: 20,
    });
    gsap.from("footer", {
      scrollTrigger: {
        trigger: "footer",
        // start: "top center",
      },
      duration: 0.5,
      opacity: 0,
      y: 20,
    });
  }
  // 네비게이션 열고 닫기 애니메이션 처리
  function initNav() {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");

    const navItem = document.querySelectorAll("#nav-item");
    const staggerTargets = document.querySelectorAll(".nav-item-link");

    navToggle.addEventListener("click", () => {
      openNav();
    });
    navClose.addEventListener("click", () => {
      closeNav();
    });

    function openNav() {
      gsap.to(".overlay-nav", {
        duration: 1,
        top: "-0vh",
        right: "-0%",
        width: "100vw",
        height: "100dvh",
        borderBottomLeftRadius: "50px",
        ease: "expo.inOut",
      });
      gsap.to("#overlay-nav-content", {
        delay: 0.8,
        duration: 1,
        opacity: 1,
      });
    }

    function closeNav() {
      gsap.to(".overlay-nav", {
        delay: 0.5,
        duration: 1,
        top: "-100vh",
        right: "-100%",
        width: "0vw",
        height: "0vh",
        borderBottomLeftRadius: "200px",
        ease: "expo.inOut",
      });
      gsap.to("#overlay-nav-content", {
        duration: 0.5,
        opacity: 0,
      });
    }

    navItem.forEach((item) =>
      item.addEventListener("click", () => {
        closeNav();
      })
    );

    const altNavTrigger = document.getElementById("other-nav-toggle");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 40) {
        gsap.to(altNavTrigger, {
          opacity: 1,
          duration: 0.1,
          y: -10,
        });
        altNavTrigger.style.opacity = "1";
      } else if (window.pageYOffset < 40) {
        gsap.to(altNavTrigger, {
          opacity: 0,
          duration: 0.5,
          y: 10,
        });
      }
    });

    altNavTrigger.addEventListener("click", () => {
      openNav();
    });
  }

  // 캔버스에 빗방울 애니메이션 처리
  function drawRainCanvas() {
    const canvas = document.getElementById("rain-canvas");
    const ctx = canvas.getContext("2d");

    const isMobile = () => window.matchMedia("(max-width: 1024px)").matches;

    // 캔버스 크기 설정
    function setSize() {
      const multiplier = isMobile() ? 3 : 1;
      canvas.width = window.innerWidth * multiplier;
      canvas.height = window.innerHeight / 2;
    }

    // 처음 크기 설정
    setSize();
    // 창 크기 바뀔 때마다 다시 계산
    window.addEventListener("resize", setSize);

    // 비 오는 방울 초기화
    let drops = [];
    for (let i = 0; i < 500; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 5 + 2,
        length: Math.random() * 20 + 5,
      });
    }

    // 그리기 루프
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        ctx.fillRect(d.x, d.y, 1, d.length);
        d.y += d.speed;
        if (d.y > canvas.height) d.y = 0;
      }
      requestAnimationFrame(draw);
    }

    draw();
  }

  // 커서 애니메이션 및 이미지 프리뷰
  function customCursor() {
    const bigBall = document.querySelector(".cursor-ball-big");
    const smallBall = document.querySelector(".cursor-ball-small");
    const cursorImage = document.querySelector(".cursor-img");

    const hoverables = document.querySelectorAll(".hoverable");
    const hoverElems = document.querySelectorAll("[data-image]");

    document.body.addEventListener("mousemove", onMouseMove);

    // hoverable 요소에 마우스 올리면 큰 커서 커짐
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(bigBall, { scale: 4, duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(bigBall, { scale: 1, duration: 0.3 });
      });
    });

    // data-image 요소에 마우스 올리면 이미지 프리뷰 표시
    hoverElems.forEach((el) => {
      el.addEventListener("mouseenter", onMouseHover);
      el.addEventListener("mouseleave", onMouseHoverOut);
    });

    function onMouseMove(e) {
      gsap.to(bigBall, { duration: 0.4, x: e.pageX - 15, y: e.pageY - 15 });
      gsap.to(smallBall, { duration: 0.1, x: e.pageX - 5, y: e.pageY - 7 });
      if (cursorImage) {
        gsap.to(cursorImage, { duration: 0.1, x: e.pageX + 20, y: e.pageY + 20 });
      }
    }

    function onMouseHover(e) {
      const el = e.currentTarget;
      const imgSrc = el.dataset.image;
      const imgWidth = el.dataset.imageWidth || "13rem";

      if (cursorImage) {
        cursorImage.src = imgSrc;
        cursorImage.style.width = imgWidth;
        gsap.killTweensOf(cursorImage);
        gsap.set(cursorImage, { display: "block" });
        gsap.fromTo(cursorImage, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
      }
    }

    function onMouseHoverOut() {
      if (cursorImage) {
        gsap.killTweensOf(cursorImage);
        gsap.to(cursorImage, {
          opacity: 0,
          scale: 0.8,
          duration: 0.2,
          ease: "power2.in",
          onComplete() {
            cursorImage.style.display = "none";
          },
        });
      }
    }
  }
  // 타이핑 애니메이션
  function typingEffect() {
    const txtElement = document.querySelector(".wordData");
    if (!txtElement) return; // .wordData 요소가 없으면 무시

    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
  }
  // 호버 시 원형 애니메이션
  function initCtaHover() {
    const ctaIdentifier = document.querySelector(".about-cta-box");

    ctaIdentifier.addEventListener("mouseenter", () => {
      gsap.to("#cta-circle", {
        duration: 0.5,
        opacity: 0,
      });
    });

    ctaIdentifier.addEventListener("mouseleave", () => {
      gsap.to("#cta-circle", {
        duration: 0.5,
        opacity: 1,
      });
    });
  }
  // 링크 화살표 호버
  function animateLinkArrow() {
    document.querySelectorAll(".live-link").forEach((link) => {
      const arrow = link.querySelector(".arrow-icon");
      link.addEventListener("mouseenter", () => {
        gsap.to(arrow, { x: 5, duration: 0.3, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.inOut" });
      });
    });
  }
  // 햄버거 메뉴 토글
  function initMobileMenu() {
    const btn = document.getElementById("hamburger-btn");
    const menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
  //부드러운 내부 링크 스크롤
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const rawId = link.getAttribute("href").slice(1);
        const isMobile = window.innerWidth < 768;
        const targetId = rawId === "experience" ? (isMobile ? "experience-mobile" : "experience-desktop") : rawId;
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
  // 타임라인 아이템 ScrollTrigger 애니
  function initTimeline() {
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      const fromDir = item.closest(".text-right") ? { x: 100 } : { x: -100 };
      gsap.from(item, {
        opacity: 0,
        ...fromDir,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }
  // email
  function initContactForm() {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    function isValidEmail(email) {
      return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    }

    function showToast(msg, isError = false) {
      const toast = document.createElement("div");
      toast.className = isError ? "toast-message toast-error" : "toast-message";
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }
    document.querySelectorAll(".contact-form").forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const senderName = form.querySelector('input[name="name"]').value.trim();
        const senderEmail = form.querySelector('input[name="email"]').value.trim();
        const messageBody = form.querySelector('textarea[name="message"]').value.trim();

        if (!senderName || !senderEmail || !messageBody) {
          showToast("모든 필수 항목을 입력해 주세요.", true);
          return;
        }

        if (!isValidEmail(senderEmail)) {
          showToast("유효한 이메일 주소를 입력해 주세요. 예) user@example.com", true);
          return;
        }

        emailjs
          .send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
            from_name: senderName,
            from_email: senderEmail,
            message: `보낸 사람: ${senderName} (${senderEmail})\n\n메시지:\n${messageBody}`,
          })
          .then(() => {
            form.reset();
            showToast("메일이 성공적으로 전송되었습니다!");
          })
          .catch(() => {
            showToast("메일 전송 중 오류가 발생했습니다.", true);
          });
      });
    });
  }
  // 미니 & 게임 프로젝트 카드 렌더링
  function miniProjectList() {
    const container = document.querySelector(".mini-project-list");
    if (!container || !Array.isArray(projects) || projects.length === 0) return;

    const fragment = document.createDocumentFragment();

    projects.forEach(({ imgSrc, imgAlt, title, desc, stacks, liveUrl, codeUrl }) => {
      const card = document.createElement("div");
      card.className = "flip-card";

      const inner = document.createElement("div");
      inner.className = "flip-inner";

      const img = Object.assign(document.createElement("img"), {
        className: "mini-project",
        src: imgSrc,
        alt: imgAlt,
      });

      const flipBack = document.createElement("div");
      flipBack.className = "flip-back";

      const backContent = document.createElement("div");
      backContent.className = "flip-back-content";

      backContent.innerHTML = `
      <div class="flip-back-title">${title}</div>
      <div class="flip-back-desc">${desc}</div>
      <div class="project-stack-list">
        ${stacks.map((s) => `<span class="project-stack">${s}</span>`).join("")}
      </div>
      <div class="project-links">
        <a class="hoverable" href="${liveUrl}" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-globe"></i> See live site &rarr;
        </a>
        ${
          codeUrl !== "#"
            ? ` <a class="hoverable" href="${codeUrl}" target="_blank" rel="noopener noreferrer">
          ${GITHUB_ICON_SVG} View Code &rarr;
        </a>`
            : ""
        }
      </div>
    `;

      flipBack.appendChild(backContent);
      inner.append(img, flipBack);
      card.appendChild(inner);
      fragment.appendChild(card);
    });

    container.replaceChildren(fragment);
  }
  function debounce(fn, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      drawRainCanvas();

      ScrollTrigger.refresh();
    }, 200)
  );

  function init() {
    miniProjectList();
    initPageLoad();
    initNav();
    drawRainCanvas();
    customCursor();
    typingEffect();
    initCtaHover();
    animateLinkArrow();
    initMobileMenu();
    initSmoothScroll();
    initTimeline();
    // initContactForm();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
