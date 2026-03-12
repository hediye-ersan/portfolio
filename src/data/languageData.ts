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
          github: "#",
          website: "https://jobcraft-b23fc.web.app/"
        },
        {
          title: "TrendKod",
          desc: "Geliştirme sürecine Postman ile API testlerini yaparak başladım; veri yapılarını önceden doğrulayıp hatasız bir entegrasyon sağladım.Projede Redux Store kullanarak; alışveriş sepeti, kullanıcı oturumu ve ürün filtreleme gibi karmaşık süreçleri tek bir noktadan yönettim.Redux Thunk ile asenkron API süreçlerini yönettim. Hazırladığım dinamik filtreleme sistemi sayesinde kullanıcıların kategorilere ve ürün özelliklerine göre gerçek zamanlı sonuçlar almasını sağlayan hızlı bir altyapı oluşturdum.",
          github: "https://github.com/hediye-ersan/Trend-Kod",
          website: "https://trend-kod.vercel.app/"
        },
        {
          title: "Portfolyo Web Sitesi",
          desc: "Kariyer yolculuğumun ilk portfolyo projesinde, modern web standartlarını ve merkezi state yönetimi prensiplerini uyguladım. LanguageContext.jsx üzerinden kurguladığım yapı sayesinde, myData.js içindeki Türkçe ve İngilizce veri setlerini tüm uygulamaya dinamik olarak dağıtan bir çoklu dil sistemi geliştirdim. DarkModeToggle.jsx ile tema yönetimi mekanizmalarını entegre ettim. Ayrıca animasyonlar ve tailwind css ile birlikte ux/ui tasarımına odaklanarak, görsel olarak etkileyici bir deneyim oluşturmayı hedefledim.",
          github: "https://github.com/hediye-ersan/My-page",
          website: "https://my-page-rho-ochre.vercel.app/"
        },
        {
          title: "ShopCo E-ticaret",
          desc: "Figma üzerinde tasarlanan e-ticaret sayfasını, pixel-perfect hassasiyetiyle ve modüler bir mimariyle tasarlamaya çalıştım. Geliştirme sürecinde React Context API kullanarak sepet yönetimi, kullanıcı yetkilendirme ve sipariş geçmişi gibi kritik süreçleri merkezi bir state mekanizmasıyla yönettim. Tasarımın her tarayıcıda tutarlı görünmesi için reset.css standartlarını uygularken, useMediaQuery gibi özel hook'lar ve Tailwind CSS ile cihaz tipine göre uyum sağlayan bir kullanıcı deneyimi kurguladım.",
          github: "https://github.com/hediye-ersan/E-commerce",
          website: "https://e-commerce-drab-six-ds21nudubw.vercel.app/"
        },
        {
          title: "Pizza Sipariş Sayfası",
          desc: "Projede ana sayfa, sipariş formu ve başarı onayı aşamalarından oluşan sipariş akışı kurguladım. Sipariş formu içerisinde malzeme seçimi ve hamur kalınlığı gibi form verilerini React state ile yöneterek, verinin sadece doğru validasyonlardan geçtikten sonra siparişe dönüşmesini sağladım. Projede Cypress (E2E) entegrasyonu ve pizza.cy.js test senaryolarıyla, kullanıcı navigasyonunu ve form fonksiyonelliğini otomatikleştirerek geliştirme sağladım.Tasarım tarafını ise özel başlıklar kullanarak Css ile sağladım",
          github: "https://github.com/hediye-ersan/My-Pizza-Page",
          website: "https://pizza-sayfam.vercel.app/"
        },
        {
          title: "Full Stack Quiz",
          desc: "Full-stack eğitim sürecimde öğrendiğim bilgileri kalıcı hale getirmek ve kişisel bir başvuru kaynağı oluşturmak için bir Quiz uygulaması geliştirdim. Kendi araştırmalarımla hazırladığım 161 soruluk kapsamlı bir JSON veri setini (questions.json) yöneterek; frontend, backend ve veri tabanı konularında öğrenme platformu kurguladım.Bu çalışma, karmaşık teknik bilgileri yapılandırılmış bir veri modeline dönüştürme ve eğitim sürecini dijital bir araca dönüştürme motivasyonumu temsil etmektedir.",
          github: "https://github.com/hediye-ersan/Fullstack-Quiz",
          website: "https://fullstack-quiz-five.vercel.app/"
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
          desc: "Bilişim Hukuku, Yönetim ve Organizasyon, Yapay Zeka ve Veri Bilimi, Proje Yönetimi alanlarında eğitim aldım ve her kurs içinde projeler geliştirdim."
        },
        {
          company: "WORKINTECH",
          date: "Eylül 2024 - Mart 2025",
          role: "Full-Stack Bootcamp",
          desc: "Full Stack Geliştirici olarak, kariyer gelişimimi desteklemek için 6 ay boyunca 960+ saat ders ve 75'ten fazla proje içeren bir bootcamp programını tamamladım."
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
      title: "Full Stack Geliştiriciye mi ihtiyacınız var?",
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
      connect: "Hadi Birlikte Kodlayalım",
      hireMe: "İşe Al",
      brand: {
        name: "HEDİYE ERSAN",
        description: "Karmaşık problemleri temiz kod ve şık arayüzlerle çözmeye odaklı bir yazılımcıyım. Her projede yeni bir şeyler öğrenmeyi ve matematik mezunu olmanın getirdiği analitik bakış açısını geliştirdiğim uygulamalara yansıtmayı seviyorum."
      },
      navigation: {
        title: "Navigasyon",
        links: ["Ana Sayfa", "Proje", "Deneyim", "Yetenekler", "Sertifika"]
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
      copyright: "Telif hakkı © 2026 Hediye Ersan. React & TypeScript ile oluşturulmuştur.",
      terms: "Matematik Mezunu",
      privacy: "Junior Full Stack Geliştirici"
    },

    // Certificates Section
    certificates: {
      title: "Sertifikalarım",
      subtitle: "Sertifikalarımıza bir göz atalım",
      certificates: [
        {
          title: "Full Stack Track Sertifikası",
          subtitle: "6 aylık Full Stack Geliştirici eğitim programını başarıyla tamamladım. Eğitim sırasında React, Redux, Java, Spring Boot ve PostgreSQL kullanarak projeler geliştirdim. Şimdi bu bilgiyi profesyonel dünyada uygulamaya ve yeni teknolojileri öğrenmeye devam etmek istiyorum.",
          image: "/assets/certificate-2.svg",
          tags: ["Frontend", "Backend", "Java", "Spring Boot", "PostgreSQL", "React", "Redux", "TypeScript", "Full Stack", "OOP"]
        },
        {
          title: "Frontend Geliştirme Sertifikası",
          subtitle: "3 ay süren Frontend Geliştirme yolculuğumu başarıyla tamamladım ve sertifikamı aldım! 🚀Bu süreçte sadece teorik bilgi edinmekle kalmadım, aynı zamanda React ve JavaScript kullanarak kullanıcı dostu arayüzler geliştirdim ve gerçek dünya senaryolarına dayalı projeler tasarladım. Modern web teknolojileriyle çözümler oluşturmak ve temiz kod ilkelerini uygulamak benim için inanılmaz bir deneyim oldu.",
          image: "/assets/certificate-4.svg",
          tags: ["HTML", "CSS", "JavaScript", "React", "Frontend Geliştirme", "UI/UX Tasarım", "Temiz Kod Prensipleri", "Responsive Tasarım", "Web Erişilebilirliği", "Git / GitHub"]
        },
        {
          title: "Proje Yönetimi Sertifikası",
          subtitle: "Yoğun ve verimli proje yönetimi stajımı başarıyla tamamladım. Bu süreçte Bilişim Hukuku, Yönetim ve Organizasyon, Yapay Zeka ve Veri Bilimi ile Proje Yönetimi dersleri alarak teorik bilgi kazandım ve projeler teslim ederek öğrendiklerimi pratik yapma fırsatı buldum.",
          image: "/assets/certificate-3.svg",
          tags: ["Bilişim Hukuku", "Yönetim ve Organizasyon", "Yapay Zeka ve Veri Bilimi", "Proje Yönetimi"]
        },
        {
          title: "Codemasters Challenge Sertifikası",
          subtitle: "Sektördeki önde gelen teknoloji şirketlerinden uzmanların yer aldığı CodeMasters etkinliğini başarıyla tamamlayarak katılım sertifikamı aldım! Microsoft, Trendyol, Hepsiburada ve Havelsan gibi devlerin perde arkasındaki süreçleri dinlemek, güncel teknoloji trendleri ve uzman görüşleri benim için muazzam bir ilham kaynağıydı. Teknolojik gelişmeleri yakından takip ederek kendimi güncel tutmaya devam ediyorum.",
          image: "/assets/Codemasters 1.svg",
          tags: ["Codemaster", "Programlama", "Teknoloji Trendleri", "Microsoft", "Trendyol", "Hepsiburada", "Havelsan"]
        },
        {
          title: "Uluslararası İş Analizi Metodolojisi ve Teknikleri Sertifikası",
          subtitle: "Uluslararası İş Analizi Metodolojileri ve Teknikleri eğitimimi başarıyla tamamlayarak sertifikamı aldım! İş süreci optimizasyonu, gereksinim analizi ve modern metodolojilerdeki becerilerimi bir üst seviyeye taşıdığım için çok mutluyum.",
          image: "/assets/certificate-1.svg",
          tags: ["İş Analizi Metodolojileri", "İş Analizi Teknikleri", "İş Süreci Optimizasyonu", "Gereksinim Analizi", "Agile Metodolojiler", "Scrum", "Kanban"]
        },
        {
          title: "SQL ile Veritabanı Sorgulama Sertifikası",
          subtitle: "104 saatlik SQL Veritabanı Sorgulama eğitimimi başarıyla tamamlayarak sertifikamı aldım! SQL sorgulama, veritabanı tasarımı ve veri analizindeki becerilerimi bir sonraki seviyeye taşıdığına inanıyorum.",
          image: "/assets/certificate-5.svg",
          tags: ["SQL", "Veritabanı Sorgulama", "Veri Analizi", "MySQL"]
        }
      ]
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
          github: "https://github.com/hediyeer/JOBCRAFT-CV-BUILDER",
          website: "https://jobcraft-b23fc.web.app/"
        },
        {
          title: "TrendKod",
          desc: "I started the development process by doing API tests with Postman; I ensured error-free integration by verifying data structures in advance. In the project, I used Redux Store to manage complex processes like shopping cart, user session, and product filtering from a single point. I managed asynchronous API processes with Redux Thunk. With the dynamic filtering system I prepared, I created a fast infrastructure that allows users to get real-time results based on categories and product features.",
          github: "https://github.com/hediye-ersan/Trend-Kod",
          website: "https://trend-kod.vercel.app/"
        },
        {
          title: "Portfolio Website",
          desc: "In my first portfolio project of my career journey, I applied modern web standards and central state management principles. Through the structure I designed with LanguageContext.jsx, I developed a multi-language system that dynamically distributes Turkish and English data sets in myData.js to the entire application. I integrated theme management mechanisms with DarkModeToggle.jsx. I also aimed to create a visually impressive experience by focusing on ux/ui design with animations and tailwind css.",
          github: "https://github.com/hediye-ersan/My-page",
          website: "https://my-page-rho-ochre.vercel.app/"
        },
        {
          title: "ShopCo Ecommerce",
          desc: "I tried to design the e-commerce page designed on Figma with pixel-perfect precision and modular architecture. During the development process, I managed critical processes like cart management, user authorization, and order history with a central state mechanism using React Context API. While applying reset.css standards for the design to appear consistent in every browser, I created a user experience that adapts to device type with custom hooks like useMediaQuery and Tailwind CSS.",
          github: "https://github.com/hediye-ersan/E-commerce",
          website: "https://e-commerce-drab-six-ds21nudubw.vercel.app/"
        },
        {
          title: "Pizza Order Page",
          desc: "I designed an order flow consisting of homepage, order form, and success confirmation stages in the project. I managed form data like ingredient selection and dough thickness in the order form with React state, ensuring that data only turns into an order after passing correct validations. I improved development by automating user navigation and form functionality with Cypress (E2E) integration and pizza.cy.js test scenarios. I provided the design side with custom headers using CSS.",
          github: "https://github.com/hediye-ersan/My-Pizza-Page",
          website: "https://pizza-sayfam.vercel.app/"
        },
        {
          title: "Full Stack Quiz",
          desc: "To make the information I learned during my full-stack education permanent and create a personal reference resource, I developed a Quiz application. By managing a comprehensive JSON data set of 161 questions that I prepared with my own research (questions.json); I designed a learning platform on frontend, backend, and database topics. This work represents my motivation to transform complex technical information into a structured data model and digitize the education process.",
          github: "https://github.com/hediye-ersan/Fullstack-Quiz",
          website: "https://fullstack-quiz-five.vercel.app/"
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
          desc: "As Full Stack Developer, I completed a bootcamp program that includes 960+ hours of classes and more than 75 projects for 6 months to support my career development."
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
      title: "Do you need a Full Stack Developer?",
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
      connect: "Let's code together",
      hireMe: "Hire me",
      brand: {
        name: "HEDİYE ERSAN",
        description: "I am a software developer focused on solving complex problems with clean code and elegant interfaces. I enjoy learning new things in every project and reflecting the analytical perspective gained from my mathematics degree in the applications I develop."
      },
      navigation: {
        title: "Navigation",
        links: ["Home", "Project", "Experience", "Skill", "Certificate"]
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
      copyright: "Copyright © 2026 Hediye Ersan. Built with React & TypeScript.",
      terms: "Mathematics Graduate",
      privacy: "Junior Full Stack Developer"
    },

    // Certificates Section
    certificates: {
      title: "My Certificates",
      subtitle: "Lets have a look at my Certificates",
      certificates: [
        {
          title: "Full Stack Track Certificate",
          subtitle: "I successfully completed a 6-month Full Stack Developer training program. During the training, I developed projects using React, Redux, Java, Spring Boot, and PostgreSQL. I am now eager to apply this knowledge in the professional world and continue learning new technologies.",
          image: "/assets/certificate-2.svg",
          tags: ["Frontend", "Backend", "Java", "Spring Boot", "PostgreSQL", "React", "Redux", "TypeScript", "Full Stack", "OOP"]
        },
        {
          title: "Frontend Development Certificate",
          subtitle: "I successfully completed my 3-month Frontend Development journey and earned my certificate! 🚀During this process, I not only gained theoretical knowledge, but also developed user-friendly interfaces using React and JavaScript and designed projects based on real-world scenarios. Creating solutions with modern web technologies and applying clean code principles was an incredible experience for me.",
          image: "/assets/certificate-4.svg",
          tags: ["HTML", "CSS", "JavaScript", "React", "Frontend Development", "UI/UX Design", "Clean Code Principles", "Responsive Design", "Web Accessibility", "Git / GitHub"]
        },
        {
          title: "Project Management Certificate",
          subtitle: "🚀 I successfully completed a month-long intensive and productive project management internship. During this process, I took courses in IT Law, Management and Organization, Artificial Intelligence and Data Science, and Project Management, gaining theoretical knowledge and having the opportunity to put what I learned into practice by delivering projects.",
          image: "/assets/certificate-3.svg",
          tags: ["Information Law", "Management and Organization", "Artificial Intelligence and Data Science", "Project Management"]
        },
        {
          title: "Codemasters Challenge Certificate",
          subtitle: "I successfully completed the CodeMasters event, featuring experts from leading technology companies in the industry, and received my participation certificate! 🚀Listening to the processes behind the scenes at giants like Microsoft, Trendyol, Hepsiburada, and Havelsan, as well as current technology trends and expert opinions, was a tremendous source of inspiration for me. I continue to keep myself updated by closely following technological developments. 💻",
          image: "/assets/Codemasters 1.svg",
          tags: ["Codemaster", "Programming", "Technology Trends", "Microsoft", "Trendyol", "Hepsiburada", "Havelsan"]
        },
        {
          title: "International Business Analysis Methodology and Techniques Certificate",
          subtitle: "I successfully completed my International Business Analysis Methodologies and Techniques training and received my certificate! 🚀 I am delighted to have taken my skills in business process optimization, requirements analysis, and modern methodologies to the next level.",
          image: "/assets/certificate-1.svg",
          tags: ["Business Analysis Methodologies", "Business Analysis Techniques", "Business Process Optimization", "Requirements Analysis", "Agile Methodologies", "Scrum", "Kanban"]
        },
        {
          title: "Database Querying with SQL Certificate",
          subtitle: "I successfully completed my 104-hour SQL Database Querying training and received my certificate! 🚀 I believe it has taken my SQL querying, database design, and data analysis skills to the next level.",
          image: "/assets/certificate-5.svg",
          tags: ["SQL", "Database Querying", "Data Analysis", "MySQL"]
        }
      ]
    }
  }
}

export type Language = "TR" | "EN"
export type LanguageData = typeof languageData.TR
