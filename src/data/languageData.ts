export const languageData = {
  TR: {
    // Navbar
    nav: {
      links: ["Ana Sayfa", "Projeler", "Deneyimler", "Yetenekler", "Sertifikalar", "İletişim"],
      logo: {
        name: "Hediye Ersan",
        title: "Junior",
        subtitle: "Web Geliştirici"
      },
      languageToggle: {
        switchToTurkish: "Türkçe'ye Geç",
        switchToEnglish: "İngilizce'ye Geç"
      }
    },

    // Profile Section
    profile: {
      hello: "Merhaba!",
      intro: "Ben <span class='text-orange'>Hediye</span>, <br /><span class='text-gray-900'>Web Geliştirici</span>",
      portfolio: "Portfolyo",
      hireMe: "İşe Al",
      quote: "Yazılımda analitik düşünce gücüne ve kullanıcı odaklı tasarıma inanıyorum.",
      stats: {
        hours: "960+",
        hoursLabel: "Saat Teknik Eğitim"
      }
    },

    // Projects Section
    projects: {
      title: "Projelerim",
      subtitle: "Matematiksel kesinlik ve modern teknolojileri birleştirerek uçtan uca dijital çözümler üretiyorum.",
      projects: [
        {
          title: "JobCraft Cv Builder",
          desc: "Ekipçe geliştirdiğimiz cv hazırlama web uygulamasında ilk kez TypeScript yazarak temelimi oluşturdum ve takım çalışması deneyimi kazandım. Çok sayfalı akışları yönetmek için Redux Toolkit kullandık; CV adımlarını form yapısıyla kurup kullanıcı verisini Redux'ta tutarak canlı önizleme sağladım. İçerik yüksekliğini ölçen özel bir hook ile ikinci sayfaya otomatik geçişi çözdüm. Backend API'lerini Insomnia ile doğrulayıp entegre ettim. Yayına hazırlanan projede frontend geliştirici olarak aktif rol alıyorum.",
          github: "GitHub",
          website: "Web Sitesi"
        },
        {
          title: "TrendKod",
          desc: "Geliştirme sürecine Postman ile API testlerini yaparak başladım; veri yapılarını önceden doğrulayıp hatasız bir entegrasyon sağladım.Projede Redux Store kullanarak; alışveriş sepeti, kullanıcı oturumu ve ürün filtreleme gibi karmaşık süreçleri tek bir noktadan yönettim.Redux Thunk ile asenkron API süreçlerini yönettim. Hazırladığım dinamik filtreleme sistemi sayesinde kullanıcıların kategorilere ve ürün özelliklerine göre gerçek zamanlı sonuçlar almasını sağlayan hızlı bir altyapı oluşturdum.",
          github: "GitHub",
          website: "Web Sitesi"
        },
        {
          title: "Portfolyo Web Sitesi",
          desc: "Kariyer yolculuğumun ilk portfolyo projesinde, modern web standartlarını ve merkezi state yönetimi prensiplerini uyguladım. LanguageContext.jsx üzerinden kurguladığım yapı sayesinde, myData.js içindeki Türkçe ve İngilizce veri setlerini tüm uygulamaya dinamik olarak dağıtan bir çoklu dil sistemi geliştirdim. DarkModeToggle.jsx ile tema yönetimi mekanizmalarını entegre ettim. Ayrıca animasyonlar ve tailwind css ile birlikte ux/ui tasarımına odaklanarak, görsel olarak etkileyici bir deneyim oluşturmayı hedefledim.",
          github: "GitHub",
          website: "Web Sitesi"
        },
        {
          title: "ShopCo E-ticaret",
          desc: "Figma üzerinde tasarlanan e-ticaret sayfasını, pixel-perfect hassasiyetiyle ve modüler bir mimariyle tasarlamaya çalıştım. Geliştirme sürecinde React Context API kullanarak sepet yönetimi, kullanıcı yetkilendirme ve sipariş geçmişi gibi kritik süreçleri merkezi bir state mekanizmasıyla yönettim. Tasarımın her tarayıcıda tutarlı görünmesi için reset.css standartlarını uygularken, useMediaQuery gibi özel hook'lar ve Tailwind CSS ile cihaz tipine göre uyum sağlayan bir kullanıcı deneyimi kurguladım.",
          github: "GitHub",
          website: "Web Sitesi"
        },
        {
          title: "Pizza Sipariş Sayfası",
          desc: "Projede ana sayfa, sipariş formu ve başarı onayı aşamalarından oluşan sipariş akışı kurguladım. Sipariş formu içerisinde malzeme seçimi ve hamur kalınlığı gibi form verilerini React state ile yöneterek, verinin sadece doğru validasyonlardan geçtikten sonra siparişe dönüşmesini sağladım. Projede Cypress (E2E) entegrasyonu ve pizza.cy.js test senaryolarıyla, kullanıcı navigasyonunu ve form fonksiyonelliğini otomatikleştirerek geliştirme sağladım.Tasarım tarafını ise özel başlıklar kullanarak Css ile sağladım",
          github: "GitHub",
          website: "Web Sitesi"
        },
        {
          title: "Full Stack Quiz",
          desc: "Full-stack eğitim sürecimde öğrendiğim bilgileri kalıcı hale getirmek ve kişisel bir başvuru kaynağı oluşturmak için bir Quiz uygulaması geliştirdim. Kendi araştırmalarımla hazırladığım 161 soruluk kapsamlı bir JSON veri setini (questions.json) yöneterek; frontend, backend ve veri tabanı konularında öğrenme platformu kurguladım.Bu çalışma, karmaşık teknik bilgileri yapılandırılmış bir veri modeline dönüştürme ve eğitim sürecini dijital bir araca dönüştürme motivasyonumu temsil etmektedir.",
          github: "GitHub",
          website: "Web Sitesi"
        }
      ]
    },

    // Experience Section
    experience: {
      title: "Deneyimlerim",
      experiences: [
        {
          company: "JUNIORS CENTER",
          date: "Ekim 2025 - Günümüz",
          role: "Frontend Geliştirici",
          desc: "UI/UX ekibi tarafından tasarlanan arayüzleri TypeScript (TSX), React ve Tailwind CSS kullanarak kodluyorum. Kullanıcı deneyimini koruyarak sayfalar geliştiriyorum. Takım içinde Git ile işbirliği yapıyor, kod inceleme ve geliştirme süreçlerine aktif olarak katılıyorum."
        },
        {
          company: "SCA SOCIAL",
          date: "Ağustos 2025 - Kasım 2025",
          role: "Proje Yönetimi Stajyeri",
          desc: "Bilgi Hukuku, Yönetim ve Organizasyon, Yapay Zeka ve Veri Bilimi, Proje Yönetimi alanlarında eğitim aldım ve her kurs içinde projeler geliştirdim."
        },
        {
          company: "WORKINTECH",
          date: "Eylül 2024 - Mart 2025",
          role: "Full-Stack Bootcamp",
          desc: "Full Stack Geliştirici olarak, kariyer gelişimimi desteklemek için 6 ay boyunca 864 saat ders ve 75'ten fazla proje içeren bir bootcamp programını tamamladım."
        }
      ]
    },

    // Skills Marquee
    skills: ["UI/UX Tasarım", "Web Tasarım", "Backend", "Frontend", "Full Stack", "Java", "Spring Boot", "React", "Redux", "TypeScript", "OOP"],

    // Why Hire Me Section
    whyHireMe: {
      title: "Neden <span class='text-orange'>işe almalısınız?</span>",
      description: "Altı aylık yoğun full-stack eğitim programım sırasında geliştirdiğim güçlü teknik temel ve TypeScript ustalığımla teknik zorlukların üstesinden gelmeye hazırım. Disiplinli çalışma etiğim ve kod kalitesine verdiğim önemle, takımınıza taze enerji ve titiz bir mühendislik perspektifi getirmeyi hedefliyorum."
    },

    // Let's Discuss Section
    letsDiscuss: {
      title: "Harika bir proje fikriniz mi var?",
      subtitle: "Görüşelim",
      emailPlaceholder: "E-posta Adresini Girin",
      sendButton: "Gönder",
      stats: {
        education: "Sakarya Üniversitesi Matematik Mezunu",
        role: "Full-Stack Web Geliştirici",
        design: "UI/UX ve Modern Tasarım"
      }
    },

    // Footer
    footer: {
      connect: "Orada Bağlantı Kuralım",
      hireMe: "İşe Al",
      brand: {
        name: "HEDİYE ERSAN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum eget."
      },
      navigation: {
        title: "Navigasyon",
        links: ["Ana Sayfa", "Hakkımızda", "Hizmet", "Özgeçmiş", "Proje"]
      },
      contact: {
        title: "İletişim",
        github: "GitHub",
        linkedin: "LinkedIn", 
        email: "E-posta"
      },
      subscribe: {
        title: "Son bilgileri alın",
        button: "Gönder"
      },
      copyright: "Telif Hakkı© {year} Hediye Ersan. Tüm hakları saklıdır.",
      terms: "Kullanım Şartları & Koşulları",
      privacy: "Gizlilik Politikası"
    }
  },

  EN: {
    // Navbar
    nav: {
      links: ["Home", "Project", "Experience", "Skills", "Certificate", "Contact"],
      logo: {
        name: "Hediye Ersan",
        title: "Junior",
        subtitle: "Web Developer"
      },
      languageToggle: {
        switchToTurkish: "Switch to Turkish",
        switchToEnglish: "Switch to English"
      }
    },

    // Profile Section
    profile: {
      hello: "Hello!",
      intro: "I'm <span class='text-orange'>Hediye</span>, <br /><span class='text-gray-900'>Web Developer</span>",
      portfolio: "Portfolio",
      hireMe: "Hire me",
      quote: "I believe in the power of analytical thinking<br />and user-centered design in software.",
      stats: {
        hours: "960+",
        hoursLabel: "Hour Technical Training"
      }
    },

    // Projects Section
    projects: {
      title: "My Projects",
      subtitle: "I produce end-to-end digital solutions by combining mathematical precision with modern technologies.",
      projects: [
        {
          title: "JobCraft Cv Builder",
          desc: "In the CV preparation web application we developed as a team, I built my foundation by writing TypeScript for the first time and gained teamwork experience. We used Redux Toolkit to manage multi-page flows; I set up CV steps as a form structure and provided live preview by keeping user data in Redux. I solved automatic page transition with a custom hook that measures content height. I verified and integrated Backend APIs with Insomnia. I'm actively involved as a frontend developer in the project being prepared for release.",
          github: "GitHub",
          website: "Website"
        },
        {
          title: "TrendKod",
          desc: "I started the development process by doing API tests with Postman; I ensured error-free integration by verifying data structures in advance. In the project, I used Redux Store to manage complex processes like shopping cart, user session, and product filtering from a single point. I managed asynchronous API processes with Redux Thunk. With the dynamic filtering system I prepared, I created a fast infrastructure that allows users to get real-time results based on categories and product features.",
          github: "GitHub",
          website: "Website"
        },
        {
          title: "Portfolio Website",
          desc: "In my first portfolio project of my career journey, I applied modern web standards and central state management principles. Through the structure I designed with LanguageContext.jsx, I developed a multi-language system that dynamically distributes Turkish and English data sets in myData.js to the entire application. I integrated theme management mechanisms with DarkModeToggle.jsx. I also aimed to create a visually impressive experience by focusing on ux/ui design with animations and tailwind css.",
          github: "GitHub",
          website: "Website"
        },
        {
          title: "ShopCo Ecommerce",
          desc: "I tried to design the e-commerce page designed on Figma with pixel-perfect precision and modular architecture. During the development process, I managed critical processes like cart management, user authorization, and order history with a central state mechanism using React Context API. While applying reset.css standards for the design to appear consistent in every browser, I created a user experience that adapts to device type with custom hooks like useMediaQuery and Tailwind CSS.",
          github: "GitHub",
          website: "Website"
        },
        {
          title: "Pizza Order Page",
          desc: "I designed an order flow consisting of homepage, order form, and success confirmation stages in the project. I managed form data like ingredient selection and dough thickness in the order form with React state, ensuring that data only turns into an order after passing correct validations. I improved development by automating user navigation and form functionality with Cypress (E2E) integration and pizza.cy.js test scenarios. I provided the design side with custom headers using CSS.",
          github: "GitHub",
          website: "Website"
        },
        {
          title: "Full Stack Quiz",
          desc: "To make the information I learned during my full-stack education permanent and create a personal reference resource, I developed a Quiz application. By managing a comprehensive JSON data set of 161 questions that I prepared with my own research (questions.json); I designed a learning platform on frontend, backend, and database topics. This work represents my motivation to transform complex technical information into a structured data model and digitize the education process.",
          github: "GitHub",
          website: "Website"
        }
      ]
    },

    // Experience Section
    experience: {
      title: "My Experiences",
      experiences: [
        {
          company: "JUNIORS CENTER",
          date: "October 2025 - Present",
          role: "Frontend Developer",
          desc: "I encodes interfaces designed by the UI/UX team using TypeScript (TSX), React and Tailwind CSS. I develop pages by maintaining the user experience. I'm collaborating with Git within the team, actively participating in code review and development processes."
        },
        {
          company: "SCA SOCIAL",
          date: "August 2025- November 2025",
          role: "Project Management Intern",
          desc: "I received training in Information Law, Management and Organization, Artificial Intelligence and Data Science, Project Management and developed projects within each course."
        },
        {
          company: "WORKINTECH",
          date: "September 2024 - March 2025",
          role: "Full-Stack Bootcamp",
          desc: "As Full Stack Developer, I completed a bootcamp program that includes 864 hours of classes and more than 75 projects for 6 months to support my career development."
        }
      ]
    },

    // Skills Marquee
    skills: ["UI/UX Design", "Web Design", "Backend", "Frontend", "Full Stack", "Java", "Spring Boot", "React", "Redux", "TypeScript", "OOP"],

    // Why Hire Me Section
    whyHireMe: {
      title: "Why <span class='text-orange'>Hire me?</span>",
      description: "With the strong technical foundation I developed during my six-month intensive full-stack training program and my mastery of TypeScript, I am ready to overcome technical challenges. With my disciplined work ethic and emphasis on code quality, I aim to bring fresh energy and a meticulous engineering perspective to your team."
    },

    // Let's Discuss Section
    letsDiscuss: {
      title: "Have an awesome project idea?",
      subtitle: "Let's Discuss",
      emailPlaceholder: "Enter Email Address",
      sendButton: "Send",
      stats: {
        education: "Sakarya Univ. Mathematics Graduate",
        role: "Full-Stack Web Developer",
        design: "UI/UX & Modern Design"
      }
    },

    // Footer
    footer: {
      connect: "Lets Connect there",
      hireMe: "Hire me",
      brand: {
        name: "HEDİYE ERSAN",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum eget."
      },
      navigation: {
        title: "Navigation",
        links: ["Home", "About us", "Service", "Resume", "Project"]
      },
      contact: {
        title: "Contact",
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email"
      },
      subscribe: {
        title: "Get the latest information",
        button: "Send"
      },
      copyright: "Copyright© {year} Hediye Ersan. All rights reserved.",
      terms: "User Terms & Conditions",
      privacy: "Privacy Policy"
    }
  }
}

export type Language = "TR" | "EN"
export type LanguageData = typeof languageData.TR
