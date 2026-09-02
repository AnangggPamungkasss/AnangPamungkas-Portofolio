import { useEffect, useState } from "react";

function Icon({ name, size = 18 }) {
  const icons = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </>
    ),

    skills: (
      <>
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="8.5" />
      </>
    ),

    web: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 19l2-4 2 4" />
        <path d="M16 19l2-4 2 4" />
      </>
    ),

    data: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="2.5" />
        <path d="M5 5v8c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
        <path d="M5 13v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
        <path d="M9 9h6" />
      </>
    ),

    design: (
      <>
        <path d="M12 3c-1.7 0-3 1.3-3 3 0 1.4.8 2.5 2 2.9V12h2v-3.1c1.2-.4 2-1.5 2-2.9 0-1.7-1.3-3-3-3Z" />
        <path d="M6 14.5A6 6 0 0 0 12 20a6 6 0 0 0 6-5.5" />
        <path d="M9 20h6" />
      </>
    ),

    experience: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M8 6V4h8v2" />
        <path d="M3 11h18" />
        <path d="M9 11v2h6v-2" />
      </>
    ),

    education: (
      <>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 11.5V16c2.8 2.2 7.2 2.2 10 0v-4.5" />
        <path d="M21 9v6" />
      </>
    ),

    projects: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="m8 9 3 3-3 3" />
        <path d="M13 15h4" />
      </>
    ),

    achievements: (
      <>
        <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
        <path d="M6 5H3v1a5 5 0 0 0 5 5" />
        <path d="M18 5h3v1a5 5 0 0 1-5 5" />
        <path d="M12 12v5" />
        <path d="M8 21h8" />
        <path d="M9 17h6" />
      </>
    ),

    training: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </>
    ),

    contact: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

     email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8.5v.01" />
        <path d="M12 16v-5" />
        <path d="M12 13c0-1.1.8-2 2-2s2 .9 2 2v3" />
      </>
    ),

    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    tiktok: (
      <>
        <path d="M15 4v10.5a4.5 4.5 0 1 1-4.5-4.5" />
        <path d="M15 4c.6 2.2 2 3.6 4 4" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function App() {
  const [language, setLanguage] = useState("id");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeProfileTab, setActiveProfileTab] = useState("skills");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const isID = language === "id";

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );
  
    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("keydown", handleEscape);
  };
},[]);

useEffect(() => {
  document.body.style.overflow = selectedItem ? "hidden" : "";

  return () => {
    document.body.style.overflow = "";
  };
}, [selectedItem]);

const openModal = (item) => {
  setSelectedItem(item);
};

const closeModal = () => {
  setSelectedItem(null);
};

  const content = {
    id: {
      nav: {
        home: "Home",
        profile: "Profil",
        experience: "Pengalaman Kerja",
        projects: "Portofolio",
        skills: "Keahlian",
        education: "Pendidikan & Sertifikasi",
        achievements: "Pelatihan & Pencapaian",
        training: "Pelatihan",
        contact: "Kontak",
      },

      hero: {
        eyebrow: "HALO, SAYA",
        title: "ANANG AHMAD AJIE PAMUNGKAS",
        role: "Lulusan Teknik Informatika",
        description:
          "Lulusan S1 Teknik Informatika Universitas Negeri Gorontalo yang memiliki ketertarikan pada administrasi, pengelolaan data, sistem informasi, dan pengembangan web. Memiliki pengalaman dalam administrasi proyek, dokumentasi, pengolahan data, penyusunan laporan, serta pengembangan sistem berbasis web",
        projectButton: "Lihat Proyek",
        cvButton: "Unduh CV",
        contactButton: "Hubungi Saya",
        tags: [
          "Pengembangan Web",
          "Pengelolaan Data",
          "Sistem Informasi",
        ],
      },

      about: {
        label: "TENTANG SAYA",
        title: "Mengubah pengetahuan menjadi solusi yang bermanfaat.",
        description:
          "Lulusan S1 Teknik Informatika Universitas Negeri Gorontalo yang memiliki ketertarikan pada bidang administrasi, pengelolaan data, sistem informasi, dan pengembangan web. Memiliki pengalaman dalam administrasi proyek, dokumentasi, pengolahan data, penyusunan laporan, serta pengembangan sistem berbasis web.",
      },

      skills: {
        label: "Keahlian",
        title: "Kemampuan yang saya miliki.",
        items: [
          {
            icon: "web",
            title: "Web Developer",
            subtitle: "Fullstack Developer",
            skills: [
              { name: "HTML + CSS", level: "Tingkat lanjut" },
              { name: "PHP", level: "Tingkat lanjut" },
              { name: "JavaScript", level: "Tingkat lanjut" },
              { name: "Python", level: "Tingkat menengah" },
              { name: "Java", level: "Tingkat menengah" },
              { name: "Kotlin", level: "Tingkat menengah" },
              { name: "Laravel", level: "Tingkat lanjut" },
              { name: "MySQL", level: "Tingkat lanjut" },
            ],
          },
          {
            icon: "data",
            title: "System Analyst",
            subtitle: "Data & Sistem",
            skills: [
              { name: "Analisis kebutuhan", level: "Tingkat lanjut" },
              { name: "Data processing", level: "Tingkat lanjut" },
              { name: "Database", level: "Tingkat lanjut" },
              { name: "SQL", level: "Tingkat lanjut" },
              { name: "Reporting", level: "Tingkat menengah" },
            ],
          },
          {
            icon: "design",
            title: "Design, Media & Tools",
            subtitle: "Creative & Production",
            skills: [
              { name: "Canva", level: "Tingkat lanjut" },
              { name: "Figma", level: "Tingkat menengah" },
              { name: "Photo editing", level: "Tingkat menengah" },
              { name: "Documentation", level: "Tingkat lanjut" },
              { name: "Google Workspace", level: "Tingkat lanjut" },
            ],
          },
        ],
      },

      experience: {
        label: "Pengalaman",
        title: "Pengalaman profesional.",
        items: [
          {
            date: "Juli 2023 — Oktober 2023", // Sesuaikan bulan dan tahunnya
            title: "Video Editor",
            company: "Rahli Official",
            employmentType: "Part-time",
            location: "Jl. Satsuit Tubun, Kel. Siendeng, Kec. Hulonthalangi, Kota Gorontalo",
            responsibilities: [
              "Mengedit dan memproduksi konten video menarik menggunakan aplikasi CapCut.",
              "Berdiskusi dan melakukan brainstorming ide konten kreatif bersama pemilik usaha.",
              "Menyusun konsep visual, pemotongan klip (trimming), serta menambahkan efek,transisi dan elemen grafis yang sesuai."
            ]
          },

          {
            date: "September 2024 — Desember 2024",
            title: "Magang",
            company: "Dinas Perdagangan dan Perindustrian Kota Gorontalo",
            employmentType: "Internship",
            location: "Jl. Jendral Sudirman No. 22, Kota Gorontalo",
            responsibilities: [
              "Melakukan survei lapangan dan pendataan harga bahan pokok.",
              "Mengelola dan memperbarui database harga bahan pokok.",
              "Melakukan pengolahan dan verifikasi data hasil survei.",
              "Mengembangkan website pemetaan pasar.",
              "Melakukan verifikasi data pembayaran penyewa lapak pasar.",
              "Melakukan rekonsiliasi data pembayaran dan data penyewa."
            ]
          },

          {
            date: "Desember 2024 — April 2025",
            title: "Asisten Administrasi Proyek",
            company: "CV. KANZALIA",
            employmentType: "Contract",
            location: "Jl. Satsuit Tubun, Kel. Siendeng, Kec. Hulonthalangi, Kota Gorontalo",
            responsibilities: [
              "Mengelola administrasi dan dokumentasi proyek.",
              "Mencetak dan menyiapkan laporan pekerjaan.",
              "Mencatat dan merekap pengeluaran operasional.",
              "Mengelola serta merekap data absensi tenaga kerja.",
              "Melakukan pengecekan dan monitoring pekerjaan di lapangan.",
              "Mengambil dokumentasi foto kegiatan dan hasil pekerjaan.",
              "Menyusun laporan perkembangan dan hasil pekerjaan."
            ]
          },

          {
            date: "Mei 2025 — September 2025", // Sesuaikan bulan dan tahunnya
            title: "Web Developer",
            company: "AW Chiro Massage",
            employmentType: "Freelance",
            location: " Jl. Awara Karya, Liluwo, Kec. Kota Tengah, Kota Gorontalo, Gorontalo ", // Sesuaikan lokasi jika perlu
            responsibilities: [
              "Merancang dan mengembangkan sistem pakar berbasis web untuk mendiagnosa cedera olahraga.",
              "Mendesain dan mengoptimalkan struktur database untuk penyimpanan data medis/pasien yang efisien.",
              "Melakukan pengujian sistem (testing & debugging) untuk memastikan aplikasi berjalan responsif dan bebas bug.",
              "Merancang antarmuka pengguna (UI/UX) yang intuitif dan mudah digunakan oleh pengakses web.",
              "Melakukan pemeliharaan (maintenance) serta pembaruan fitur web secara berkala.",
              "Mengintegrasikan algoritma penalaran/aturan keputusan ke dalam sistem pakar."
            ]
          },
        ],
      },

      education: {
        label: "Pendidikan & Sertifikasi",
        title: "Latar belakang pendidikan.",
        degree: "Sarjana Komputer",
        university: "Universitas Negeri Gorontalo",
        gpa: "IPK 3,60 — Sangat Memuaskan",
        thesis:
          "Sistem Pakar Berbasis Web Untuk Diagnosa Cedera Olahraga Menggunakan Metode Forward Chaining dan Backward Chaining",
        certificationTitle: "English Proficiency Test (TOEFL)",
        certificationScores: [
          { label: "Listening Comprehension", value: "46" },
          { label: "Structure and Written Expression", value: "42" },
          { label: "Reading Comprehension and Vocabulary", value: "51" },
          { label: "Total Score", value: "463" },
        ],
      },

      projects: {
        label: "Proyek",
        title: "Beberapa proyek yang saya kerjakan.",
        items: [
          {
            title: "Sistem Pakar Berbasis Web Untuk Diagnosa Cedera Olahraga",
            images: [
              "/expert-system/expert-system-1.png",
              "/expert-system/expert-system-2.png",
              "/expert-system/expert-system-3.png",
              "/expert-system/expert-system-4.png",
              "/expert-system/expert-system-5.png",
              "/expert-system/expert-system-6.png",
              "/expert-system/expert-system-7.png"
            ],
        
            description:
              "Sistem pakar berbasis web yang dikembangkan untuk membantu proses diagnosis awal cedera olahraga berdasarkan gejala yang dialami pengguna.",
        
            detail:
              "Proyek ini merupakan tugas akhir yang mengimplementasikan metode Forward Chaining dan Backward Chaining dalam proses diagnosis. Sistem dirancang agar pengguna dapat memilih gejala yang dialami, kemudian sistem mencocokkan gejala tersebut dengan basis pengetahuan untuk menghasilkan kemungkinan jenis cedera beserta informasi terkait.",
            
            problem:
              "Diagnosis cedera olahraga memerlukan keahlian khusus dan akses ke informasi medis yang komprehensif. Banyak atlet dan masyarakat umum kesulitan mendapatkan diagnosis awal yang akurat, sehingga memerlukan waktu lama untuk berkonsultasi dengan profesional medis.",
            
            solution:
              "Sistem pakar ini memungkinkan diagnosis awal yang cepat dan akurat melalui antarmuka web yang user-friendly. Dengan mengimplementasikan Forward Chaining dan Backward Chaining, sistem dapat memberikan rekomendasi diagnosis berdasarkan gejala yang dipilih pengguna, membantu mempercepat proses triase dan konsultasi medis.",
        
            technologies: [
              "Laravel",
              "PHP",
              "MySQL",
              "html+css",
              "Forward Chaining",
              "Backward Chaining"
            ],
            
            github: "https://github.com/AnangggPamungkasss/sistem-pakar.git"
          },
        
          {
            title: "Sistem Informasi Grafis dan Analisis Perdagangan (SIGAP)",
            images: [
              "/sigap/sigap-1.png",
              "/sigap/sigap-2.png",
              "/sigap/sigap-3.png",
              "/sigap/sigap-4.png",
              "/sigap/sigap-5.png",
              "/sigap/sigap-6.png"
            ],
        
            description:
              "SIGAP (Sistem Informasi Grafis dan Analisis Perdagangan) adalah aplikasi berbasis web yang dikembangkan untuk membantu Dinas Perdagangan dan Perindustrian Kota Gorontalo dalam mengelola, menganalisis, dan menyajikan data perdagangan secara lebih informatif dan efisien melalui visualisasi data interaktif.",
        
            detail:
              "SIGAP merupakan aplikasi berbasis web yang dikembangkan untuk mendukung pengelolaan dan analisis data perdagangan pada Dinas Perdagangan dan Perindustrian Kota Gorontalo. Aplikasi ini membantu mengelola data pengguna, pasar, lapak, dan komoditas secara lebih terstruktur serta menyajikannya dalam bentuk informasi dan visualisasi yang mudah dipahami. SIGAP dirancang untuk meningkatkan efisiensi pengolahan dan penyajian data yang sebelumnya banyak dilakukan secara manual. Melalui sistem yang lebih interaktif dan sistematis, pegawai dapat memperoleh informasi perdagangan dengan lebih cepat untuk membantu analisis, pemantauan tren, dan pengambilan keputusan.",
            
            problem:
              "Pengelolaan dan analisis data perdagangan masih banyak dilakukan secara manual, sehingga proses pengolahan dan penyajian informasi membutuhkan waktu yang relatif lama. Kondisi tersebut menyulitkan proses pemantauan perkembangan perdagangan dan membuat penyajian data menjadi kurang efisien. Padahal, data perdagangan merupakan salah satu dasar penting bagi pemerintah dalam melakukan analisis, evaluasi, dan penyusunan kebijakan sektor perdagangan dan industri",
            
            solution:
              "SIGAP menyediakan sistem terintegrasi berbasis web untuk membantu pengelolaan, analisis, dan visualisasi data perdagangan secara lebih cepat dan sistematis. Dengan sistem ini, proses yang sebelumnya dilakukan secara manual dapat menjadi lebih efisien, data dapat disajikan dalam bentuk visualisasi yang lebih informatif, dan pegawai dapat lebih mudah memantau perkembangan serta tren perdagangan. Hal tersebut membantu meningkatkan efektivitas pengelolaan data dan mendukung pengambilan keputusan yang lebih akurat",
        
            technologies: [
              "laravel",
              "PHP",
              "MySQL",
              "html+css",
              "leaflet.js"
            ],
            
            github: "https://github.com/AnangggPamungkasss/web-perdagangan"
          },

          {
            title: "Sistem Informasi Pelayanan Surat Desa",
            images: [
              "/surat-desa/surat-desa-1.png",
              "/surat-desa/surat-desa-2.png",
              "/surat-desa/surat-desa-3.png",
              "/surat-desa/surat-desa-4.png",
              "/surat-desa/surat-desa-5.png"
            ],

            description:
              "Sistem Informasi Surat Desa adalah aplikasi berbasis web yang dirancang untuk mempermudah dan mempercepat proses pengajuan serta pembuatan surat administrasi warga secara digital tanpa perlu antre di kantor desa.",

            detail:
              "Sistem Informasi Surat Desa dikembangkan untuk memodernisasi layanan administrasi kependudukan di tingkat desa. Aplikasi ini memungkinkan warga mengajukan berbagai jenis surat keterangan secara online dari rumah, memantau status pengajuan secara *real-time*, dan mengunduh hasil surat yang telah disetujui. Bagi pihak pemerintah desa, sistem ini menyediakan dashboard manajemen yang terstruktur untuk memverifikasi dokumen warga, mengelola template surat, serta mempercepat proses penandatanganan dan penerbitan berkas. Pendekatan ini secara signifikan memangkas birokrasi, mengurangi penumpukan antrean fisik, dan meningkatkan akurasi data kependudukan.",

            problem:
              "Proses pengajuan dan pembuatan surat administrasi desa masih bergantung pada metode konvensional di mana warga harus datang langsung dan mengantre di kantor desa. Hal ini sering kali memicu penumpukan antrean, memakan waktu warga yang memiliki kesibukan, serta meningkatkan risiko kesalahan pencetakan data secara manual oleh perangkat desa. Selain itu, belum tersedianya pelacakan status pengajuan membuat warga tidak tahu pasti kapan surat mereka selesai diproses.",

            solution:
              "Sistem ini menyediakan platform pelayanan mandiri (*self-service*) berbasis web yang mengintegrasikan pengajuan surat dari sisi warga dengan pemrosesan berkas di sisi admin kantor desa. Dengan digitalisasi ini, warga dapat mengajukan surat kapan saja tanpa perlu hadir secara fisik, sementara staf desa dapat memverifikasi data dan menerbitkan dokumen dengan lebih praktis, transparan, dan efisien.",

            technologies: [
              "codeigniter",
              "PHP",
              "MySQL",
              "Bootstrap",
              "html+css"
            ],

            github: "https://github.com/AnangggPamungkasss/surat_desa"
          }
        ],
      },

      achievements: {
        label: "Pencapaian",
        title: "Beberapa pencapaian saya.",
        items: [
           {
            year: "2024",
            title: "Publikasi Jurnal Ilmiah",
            institution: "Journal of Software Engineering and Communication (JSEC)",
            description:
              'Berhasil menyusun dan mempublikasikan artikel ilmiah berjudul "Penerapan Algoritma Naive Bayes Pada Klasifikasi Kelayakan Penurunan Ukt Berdasarkan Kondisi Ekonomi Mahasiswa" pada Jurnal JSEC sebagai penulis kedua'
          },

          {
            year: "2025",
            title: "Publikasi Jurnal Ilmiah",
            institution: "DEVOTION: Jurnal Pengabdian Pada Masyarakat",
            description:
              'Berhasil menyusun dan mempublikasikan artikel ilmiah berjudul "Sosialisasi Aplikasi Web Sistem Informasi Grafis dan Analisis Perdagangan (SIGAP) pada Dinas Perdagangan Dan Perindustrian Kota Gorontalo" pada Jurnal DEVOTION sebagai penulis ketiga.'
          },

          {
            year: "2026",
            title: "Publikasi Jurnal Ilmiah",
            institution: "Diffusion: Journal of Systems and Information Technology",
            description:
              'Berhasil menyusun dan mempublikasikan artikel ilmiah berjudul "Sistem Pakar Berbasis Web Untuk Diagnosa Cedera Olahraga Menggunakan Metode Forward Chaining dan Backward Chaining" sebagai penulis pertama.'
          },
      
          {
            year: "2026",
            title: "Prestasi Akademik",
            institution: "Universitas Negeri Gorontalo",
            description:
              'Menyelesaikan studi di Fakultas Teknik Universitas Negeri Gorontalo dengan IPK 3,60 dan predikat "Sangat Memuaskan".'
          }
        ]
      },

      training: {
        label: "Pelatihan",
        title: "Pembelajaran dan pengembangan diri.",
        items: [
          {
            organizer: "Universitas Negeri Gorontalo",
            title: "Pelatihan Dasar TIK",
            year: "2021",
            description:
              "Pelatihan dasar teknologi informasi yang memberikan pemahaman mengenai penggunaan teknologi dan keterampilan dasar komputer."
          },
      
          {
            organizer: "Progate",
            title: "Kursus Python",
            year: "2021",
            description:
              "Pembelajaran pemrograman Python melalui platform Progate dengan materi dasar pemrograman dan penyelesaian masalah menggunakan kode."
          },
      
          {
            organizer: "Progate",
            title: "Kursus SQL",
            year: "2021",
            description:
              "Pembelajaran dasar SQL untuk memahami pengelolaan dan pengambilan data dari database relasional."
          },
      
          {
            organizer: "Gorontalo Creativity Competition",
            title: "Gorontalo Creativity Competition IT Jilid V",
            year: "2022",
            description:
              "Kegiatan kompetisi bidang teknologi informasi yang menjadi pengalaman dalam mengembangkan kreativitas dan kemampuan teknologi."
          },
          
          {
            organizer: "Kementerian Koperasi dan UKM",
            title: "KEMENKOP UKM — Pelatihan Calon Wirausaha",
            year: "2022",
            description:
              "Pelatihan yang memberikan wawasan mengenai dasar kewirausahaan dan pengembangan usaha."
          },
      
          {
            organizer: "Program MBKM",
            title: "KKN MBKM — Desa Tangguh Bencana",
            year: "2024",
            description:
              "Kegiatan pengabdian dan pembelajaran di masyarakat melalui program Desa Tangguh Bencana."
          },
      
          {
            organizer: "Universitas Negeri Gorontalo",
            title: "Seminar Anti Plagiarisme",
            year: "2025",
            description:
              "Seminar mengenai pentingnya integritas akademik dan pencegahan plagiarisme dalam penulisan ilmiah."
          },
      
          {
            organizer: "Universitas Negeri Gorontalo",
            title: "Seminar Penggunaan Artificial Intelligence (AI)",
            year: "2025",
            description:
              "Seminar yang membahas perkembangan dan pemanfaatan Artificial Intelligence dalam berbagai bidang."
          }
        ],
      },

      contact: {
        label: "Kontak",
        title: "Mari terhubung.",
        description:
          "Saya terbuka terhadap peluang di bidang administrasi, pengelolaan data, sistem informasi, dan pengembangan web.",
        items: [
          {
            platform: "Email",
            name: "pamungkasanang9977@gmail.com", // Ganti dengan email Anda
            actionText: "Hubungi",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=pamungkasanang9977@gmail.com", // Ganti dengan email Anda
            icon: "email"
          },
          {
            platform: "LinkedIn",
            name: "Anang Pamungkas",
            actionText: "Lihat",
            url: "https://www.linkedin.com/in/anang-pamungkas-654535433", // Ganti link LinkedIn Anda
            icon: "linkedin"
          },
          {
            platform: "Instagram",
            name: "@anang_pamungkas.99", // Ganti username Instagram Anda
            actionText: "Lihat",
            url: "https://www.instagram.com/anang_pamungkas.99", // Ganti link Instagram Anda
            icon: "instagram"
          },
          {
            platform: "TikTok",
            name: "@noct.arion88", // Ganti username TikTok Anda
            actionText: "Lihat",
            url: "https://www.tiktok.com/@noct.arion88", // Ganti link TikTok Anda
            icon: "tiktok"
          }
        ]
      },

      footer: "dibuat oleh • Anang Pamungkas",
    },

    en: {
      nav: {
        home: "Home",
        profile: "Profile",
        experience: "Experience",
        projects: "Portfolio",
        skills: "Skills",
        education: "Education",
        achievements: "Training & Achievements",
        training: "Training",
        contact: "Contact",
      },

      hero: {
        eyebrow: "HELLO, I'M",
        title: "ANANG AHMAD AJIE PAMUNGKAS",
        role: "Informatics Engineering Graduate",
        description:
          "A Bachelor’s degree graduate in Informatics Engineering from Gorontalo State University with an interest in administration, data management, and information systems. Possesses experience in project administration, documentation, data processing, and report preparation. Detail-oriented, organized, and a quick learner, with the ability to leverage information technology to enhance work efficiency.",
        projectButton: "Explore Projects",
        cvButton: "Download CV",
        tags: [
          "Web Development",
          "Data Management",
          "Information Systems",
        ],
      },

      about: {
        label: "ABOUT ME",
        title: "Turning knowledge into useful solutions.",
        description:
          "Bachelor of Informatics Engineering graduate from Universitas Negeri Gorontalo with an interest in administration, data management, information systems, and web development. Experienced in project administration, documentation, data processing, reporting, and web-based system development.",
      },

      skills: {
        label: "Skills",
        title: "What I can do.",
        items: [
          {
            icon: "web",
            title: "Web Developer",
            subtitle: "Fullstack Developer",
            skills: [
              { name: "HTML + CSS", level: "Advanced" },
              { name: "PHP", level: "Advanced" },
              { name: "JavaScript", level: "Advanced" },
              { name: "Python", level: "Intermediate" },
              { name: "Java", level: "Intermediate" },
              { name: "Kotlin", level: "Intermediate" },
              { name: "Laravel", level: "Advanced" },
              { name: "MySQL", level: "Advanced" },
            ],
          },
          {
            icon: "data",
            title: "System Analyst",
            subtitle: "Data & Systems",
            skills: [
              { name: "Requirement analysis", level: "Advanced" },
              { name: "Data processing", level: "Advanced" },
              { name: "Database", level: "Advanced" },
              { name: "SQL", level: "Advanced" },
              { name: "Reporting", level: "Intermediate" },
            ],
          },
          {
            icon: "design",
            title: "Design, Media & Tools",
            subtitle: "Creative & Production",
            skills: [
              { name: "Canva", level: "Advanced" },
              { name: "Figma", level: "Intermediate" },
              { name: "Photo editing", level: "Intermediate" },
              { name: "Documentation", level: "Advanced" },
              { name: "Google Workspace", level: "Advanced" },
            ],
          },
        ],
      },

      experience: {
        label: "Experience",
        title: "Professional experience.",
        items: [
          {
            date: "July 2023 — October 2023",
            title: "Video Editor",
            company: "Rahli Official",
            employmentType: "Part-time",
            location: "Jl. Satsuit Tubun, Siendeng, Hulonthalangi, Gorontalo City",
            responsibilities: [
              "Edited and produced engaging video content using CapCut.",
              "Brainstormed creative content ideas with the business owner.",
              "Developing visual concepts, trimming clips, and adding appropriate effects, transitions, and graphic elements."
            ]
          },

           {
            date: "September 2024 — December 2024",
            title: "University Internship Program",
            company: "Department of Trade and Industry of Gorontalo City",
            employmentType: "Internship",
            location: "Jl. Jendral Sudirman No. 22, Gorontalo City",
            responsibilities: [
              "Conducted field surveys and collected commodity price data.",
              "Managed and updated commodity price databases.",
              "Processed and verified survey data.",
              "Developed a market mapping website.",
              "Verified market stall rental payment data.",
              "Reconciled payment records with tenant data."
            ]
          },

          {
            date: "December 2024 — April 2025",
            title: "Project Administration Assistant",
            company: "CV. KANZALIA",
            employmentType: "Full-time",
            location: "Jl. Nusantara No. 18, Gorontalo City",
            responsibilities: [
              "Managed project administration and documentation.",
              "Prepared and printed project work reports.",
              "Recorded and summarized operational expenses.",
              "Managed and summarized workforce attendance data.",
              "Monitored project activities and conducted field checks.",
              "Captured photo documentation of activities and completed work.",
              "Prepared project progress and completion reports."
            ]
          },

          {
            date: "May 2025 — Sep 2025",
            title: "Web Developer",
            company: "AW Chiro Massage",
            employmentType: "Freelance",
            location: "Jl. Awara Karya, Liluwo, Kota Tengah, Gorontalo City",
            responsibilities: [
              "Designed and developed a web-based expert system for diagnosing sports injuries.",
              "Designed and optimized the database structure for efficient medical/patient data storage.",
              "Conducted system testing and debugging to ensure a responsive and bug-free web application.",
              "Designed an intuitive UI/UX interface for an easy-to-use user experience.",
              "Performed regular web maintenance and feature updates.",
              "Integrated reasoning algorithms and decision rules into the expert system."
            ]
          }
        ],
      },

      education: {
        label: "Education & Certification",
        title: "Academic background.",
        degree: "Bachelor of Computer Science",
        university: "Universitas Negeri Gorontalo",
        gpa: "GPA 3.60 — Very Satisfactory",
        thesis:
          "Web-Based Expert System for Sports Injury Diagnosis Using Forward Chaining and Backward Chaining",
         certificationTitle: "English Proficiency Test (TOEFL)",
        certificationScores: [
          { label: "Listening Comprehension", value: "46" },
          { label: "Structure and Written Expression", value: "42" },
          { label: "Reading Comprehension and Vocabulary", value: "51" },
          { label: "Total Score", value: "463" },
        ],
      },

      projects: {
        label: "Projects",
        title: "Some of the projects I have worked on.",
        items: [
          {
            title: "Web-Based Expert System for Sports Injury Diagnosis",
            images: [
              "/expert-system/expert-system-1.png",
              "/expert-system/expert-system-2.png",
              "/expert-system/expert-system-3.png",
              "/expert-system/expert-system-4.png",
              "/expert-system/expert-system-5.png",
              "/expert-system/expert-system-6.png",
              "/expert-system/expert-system-7.png"
            ],

            description:
              "A web-based expert system developed to assist in the initial diagnosis of sports injuries based on the symptoms experienced by users.",

            detail:
              "This project is a final project that implements Forward Chaining and Backward Chaining methods in the diagnostic process. The system is designed so that users can select their symptoms, after which the system matches these symptoms with a knowledge base to generate potential injury types along with relevant information.",

            problem:
              "Diagnosing sports injuries requires specialized expertise and access to comprehensive medical information. Many athletes and the general public struggle to obtain an accurate initial diagnosis, resulting in lengthy delays before consulting with medical professionals.",

            solution:
              "This expert system enables quick and accurate initial diagnoses through a user-friendly web interface. By implementing Forward Chaining and Backward Chaining, the system provides diagnostic recommendations based on selected symptoms, helping to speed up the triage and medical consultation process.",

            technologies: [
              "Laravel",
              "PHP",
              "MySQL",
              "html+css",
              "Forward Chaining",
              "Backward Chaining"
            ],

            github: "https://github.com/AnangggPamungkasss/sistem-pakar"
          },

          {
            title: "Graphic Information System and Trade Analysis (SIGAP)",
            images: [
              "/sigap/sigap-1.png",
              "/sigap/sigap-2.png",
              "/sigap/sigap-3.png",
              "/sigap/sigap-4.png",
              "/sigap/sigap-5.png",
              "/sigap/sigap-6.png"
            ],

            description:
              "SIGAP (Graphic Information System and Trade Analysis) is a web-based application developed to assist the Department of Trade and Industry of Gorontalo City in managing, analyzing, and presenting trade data more informatively and efficiently through interactive data visualization.",

            detail:
              "SIGAP is a web-based application developed to support the management and analysis of trade data at the Department of Trade and Industry of Gorontalo City. This application helps manage data for users, markets, stalls, and commodities in a more structured manner while presenting it in easily understandable information and visualizations. SIGAP is designed to increase the efficiency of data processing and presentation, which was previously done manually. Through a more interactive and systematic system, officers can access trade information faster to assist in analysis, trend monitoring, and decision-making.",

            problem:
              "Trade data management and analysis were largely conducted manually, causing the processing and presentation of information to take a relatively long time. This condition complicated the monitoring of trade developments and made data presentation inefficient, even though trade data serves as a crucial foundation for the government in evaluating and formulating trade and industrial policies.",

            solution:
              "SIGAP provides an integrated web-based system to facilitate faster, more systematic management, analysis, and visualization of trade data. With this system, manual workflows become more efficient, data is presented through informative visualizations, and officers can easily monitor trade trends—thereby enhancing data management effectiveness and supporting accurate decision-making.",

            technologies: [
              "laravel",
              "PHP",
              "MySQL",
              "html+css",
              "leaflet.js"
            ],

            github: "https://github.com/AnangggPamungkasss/web-perdagangan"
          },

          {
            title: "Village Administrative Letter Services Information System",
            images: [
              "/surat-desa/surat-desa-1.png",
              "/surat-desa/surat-desa-2.png",
              "/surat-desa/surat-desa-3.png",
              "/surat-desa/surat-desa-4.png",
              "/surat-desa/surat-desa-5.png"
            ],

            description:
              "Village Letter Information System is a web-based application designed to simplify and accelerate the process of applying for and generating administrative documents digitally without queuing at the village office.",

            detail:
              "The Village Letter Information System was developed to modernize population administration services at the village level. This application enables residents to request various official statements online from home, track application status in real-time, and download approved documents. For village administrators, the system provides a structured management dashboard to verify resident documents, manage letter templates, and accelerate document signing and issuance—significantly cutting bureaucracy, reducing physical queues, and improving data accuracy.",

            problem:
              "The process of applying for and issuing village administrative letters traditionally required residents to visit and queue at the village office in person. This approach led to long queues, wasted residents' time, and increased the risk of manual data entry errors by village staff. Furthermore, the lack of status tracking left residents uncertain about when their documents would be completed.",

            solution:
              "The system provides a web-based self-service platform that integrates resident requests directly with back-office processing for village staff. Through this digitization, residents can apply for documents at any time without physical presence, while staff can verify data and issue documents more efficiently, transparently, and accurately.",

            technologies: [
              "codeigniter",
              "PHP",
              "MySQL",
              "Bootstrap",
              "html+css"
            ],

            github: "https://github.com/AnangggPamungkasss/surat_desa"
          }
        ],
      },

     achievements: {
        label: "Achievements",
        title: "Some of my achievements.",
        items: [
          {
            year: "2024",
            title: "Scientific Journal Publication",
            institution: "Journal of Software Engineering and Communication (JSEC)",
            description:
              'Successfully authored and published a scientific article titled "Application of the Naive Bayes Algorithm for Classifying Eligibility for UKT Reductions Based on StudentsE "economic Conditions" in the JSEC journal as the second author.'
          },

          {
            year: "2025",
            title: "Scientific Journal Publication",
            institution: "DEVOTION: Journal of Community Service",
            description:
              'Successfully authored and published a scientific article titled "Dissemination of the SIGAP (Geographic Information System and Trade Analysis) Web Application at the Gorontalo City Trade and Industry Agency" in the Devotion journal as the third author.'
          },

          {
            year: "2026",
            title: "Scientific Journal Publication",
            institution: "Diffusion: Journal of Systems and Information Technology",
            description:
              'Successfully authored and published a scientific article titled "Web-Based Expert System for Sports Injury Diagnosis Using Forward Chaining and Backward Chaining Methods" as first author.'
          },

          {
            year: "2026",
            title: "Academic Achievement",
            institution: "State University of Gorontalo",
            description:
              'Completed undergraduate studies at the Faculty of Engineering, State University of Gorontalo with a GPA of 3.60 and graduated with the predicate "Very Satisfactory" (Sangat Memuaskan).'
          }
        ]
      },
      training: {
        label: "Training",
        title: "Learning and development.",
        items: [
          {
            organizer: "Universitas Negeri Gorontalo",
            title: "Basic ICT Training",
            year: "2021",
            description:
              "Basic information technology training that provides understanding of technology usage and basic computer skills."
          },

          {
            organizer: "Progate",
            title: "Python course",
            year: "2021",
            description:
              "Python programming learning through the Progate platform with basic programming material and problem solving using code."
          },

          {
            organizer: "Progate",
            title: "SQL Course",
            year: "2021",
            description:
              "Basic SQL learning to understand data management and retrieval from relational databases."
          },

          {
            organizer: "Gorontalo Creativity Competition",
            title: "Gorontalo Creativity Competition IT Jilid V",
            year: "2022",
            description:
              "An information technology competition event that became an experience in developing creativity and technology skills."
          },
        
          {
            organizer: "Kementerian Koperasi dan UKM",
            title: "KEMENKOP UKM — Pelatihan Calon Wirausaha",
            year: "2022",
            description:
              "Training that provides insights on entrepreneurship basics and business development."
          },
        
          {
            organizer: "Program MBKM",
            title: "KKN MBKM — Desa Tangguh Bencana",
            year: "2024",
            description:
              "Community service and learning activities through the Disaster Resilient Village program."
          },
        
          {
            organizer: "Universitas Negeri Gorontalo",
            title: "Seminar Anti Plagiarisme",
            year: "2025",
            description:
              "Seminar on the importance of academic integrity and plagiarism prevention in academic writing."
          },
        
          {
            organizer: "Universitas Negeri Gorontalo",
            title: "Seminar Penggunaan Artificial Intelligence (AI)",
            year: "2025",
            description:
              "Seminar discussing the development and application of Artificial Intelligence in various fields."
          }
        ],
      },

      contact: {
        label: "Contact",
        title: "Let's connect.",
        description:
          "I am open to opportunities in administration, data management, information systems, and web development.",
        items: [
          {
            platform: "Email",
            name: "pamungkasanang9977@gmail.com", // Ganti dengan email Anda
            actionText: "Contact",
            url: "https://mail.google.com/mail/?view=cm&fs=1&to=pamungkasanang9977@gmail.com", // Ganti dengan email Anda
            icon: "email"
          },
          {
            platform: "LinkedIn",
            name: "Anang Pamungkas",
            actionText: "Visit",
            url: "https://www.linkedin.com/in/anang-pamungkas-654535433", // Ganti link LinkedIn Anda
            icon: "linkedin"
          },
          {
            platform: "Instagram",
            name: "@anang_pamungkas.99", // Ganti username Instagram Anda
            actionText: "Visit",
            url: "https://www.instagram.com/anang_pamungkas.99", // Ganti link Instagram Anda
            icon: "instagram"
          },
          {
            platform: "TikTok",
            name: "@noct.arion88", // Ganti username TikTok Anda
            actionText: "Visit",
            url: "https://www.tiktok.com/@noct.arion88", // Ganti link TikTok Anda
            icon: "tiktok"
          }
        ]
      },

      footer: "Built with React • Anang Pamungkas",
    },
  };

  const t = isID ? content.id : content.en;

  return (
    <div className="app">
      {/* NAVBAR */}
<nav className="navbar">
  <div className="nav-container">

    {/* LOGO */}
    <a
      href="#home"
      className="logo"
      onClick={() => setMenuOpen(false)}
    >
      ANANG<span>.</span>
    </a>

    {/* DESKTOP NAVIGATION */}
    <div className="nav-links">
      <a href="#home">{t.nav.home}</a>
      <a href="#profile">{t.nav.profile}</a>
      <a href="#experience">{t.nav.experience}</a>
      <a href="#projects">{t.nav.projects}</a>
    </div>

    {/* NAV ACTIONS */}
    <div className="nav-actions">
    <button
      className="theme-toggle" type="button" onClick={() => setDarkMode(!darkMode)}
      aria-label={ darkMode ? "Switch to light mode" : "Switch to dark mode"}>
      <span className="theme-icon">
        {darkMode ? "☼" : "☾"}
      </span>
    </button>

      {/* LANGUAGE */}
      <div className="language-switcher">
        <button
          className={`language-button ${isID ? "active" : ""}`}
          onClick={() => setLanguage("id")}
          type="button"
        >
          ID
        </button>

        <span>/</span>

        <button
          className={`language-button ${!isID ? "active" : ""}`}
          onClick={() => setLanguage("en")}
          type="button"
        >
          EN
        </button>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </div>

  {/* MOBILE MENU */}

  <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

  <a href="#home" onClick={() => setMenuOpen(false)}>
    <span className="menu-icon">
      <Icon name="home" />
    </span>
    <span className="menu-text">
      {t.nav.home}
    </span>
  </a>

  <a href="#profile" onClick={() => setMenuOpen(false)}>
    <span className="menu-icon">
      <Icon name="skills" />
    </span>
    <span className="menu-text">
      {t.nav.profile}
    </span>
  </a>

  <a href="#experience" onClick={() => setMenuOpen(false)}>
    <span className="menu-icon">
      <Icon name="experience" />
    </span>
    <span className="menu-text">
      {t.nav.experience}
    </span>
  </a>

  <a href="#projects" onClick={() => setMenuOpen(false)}>
    <span className="menu-icon">
      <Icon name="projects" />
    </span>
    <span className="menu-text">
      {t.nav.projects}
    </span>
  </a>

</div>
</nav>


      {/* HERO */}
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">{t.hero.eyebrow}</p>

            <h1>{t.hero.title}</h1>

            <h2>{t.hero.role}</h2>

            <p className="hero-description">
              {t.hero.description}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button primary">
                {t.hero.projectButton} →
              </a>

              <a href="/cv.pdf" download="CV-Anang-Pamungkas.pdf" className="button secondary">
                {t.hero.cvButton}
              </a>

              <a href="#contact" className="button secondary">
                {t.hero.contactButton}
              </a>
            </div>

            <div className="hero-tags">
              {t.hero.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
            <div className="profile-placeholder">
            <img
              src="/profile.jpg"
              alt="Anang Pamungkas"
            />
          </div>

              <div className="profile-info">
                <strong>Anang Pamungkas</strong>
                <small>
                  {isID
                    ? "Teknik Informatika"
                    : "Informatics Engineering"}
                </small>
              </div>
            </div>

            <div className="floating-card card-one">
              <span>IPK</span>
              <strong>3.60</strong>
            </div>

            <div className="floating-card card-two">
              <span>
                {isID ? "Proyek" : "Projects"}
              </span>
              <strong>02+</strong>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
        <p className="section-label">
           <span className="section-label-icon">
         <Icon name="experience" size={15} />
          </span>
          {t.experience.label}
        </p>
          <h2>{t.experience.title}</h2>

          <div className="timeline">
  {t.experience.items.slice().reverse().map((item, index) => (
    <article className="timeline-item" key={index}>

      {/* TIMELINE */}
      <div className="experience-timeline">
        <div className="experience-icon">
          <span>&lt;/&gt;</span>
        </div>

        {index < t.experience.items.length - 1 && (
          <div className="experience-line"></div>
        )}
      </div>

      {/* DATE */}
      <div className="timeline-date">
        <span className="experience-date-label">
          {isID ? "PERIODE" : "PERIOD"}
        </span>

        <span className="experience-date">
          {item.date}
        </span>
      </div>

      {/* CONTENT */}
      <div className="experience-content">

        <div className="experience-header">
          <div className="experience-main-info">
            <h3>{item.title}</h3>
            
            <div className="experience-company-badge">
              <span className="company-icon">🏢</span>
              <span>{item.company}</span>
            </div>

            <div className="experience-address">
              <span className="address-icon">📍</span>
              <span>{item.location}</span>
            </div>
          </div>

          <div className="experience-status">
            <span className="status-dot"></span>
            <span className="status-text">{item.employmentType}</span>
          </div>
        </div>

        <div className="experience-divider"></div>

        <div className="experience-label">
          <span className="code-symbol">→</span>
          {isID ? "Tanggung Jawab" : "Responsibilities"}
        </div>

        <ul className="experience-responsibilities">
          {item.responsibilities.map(
            (responsibility, responsibilityIndex) => (
              <li key={responsibilityIndex}>
                <span className="responsibility-icon">
                  <Icon name="skills" size={13} />
                </span>

                <span>{responsibility}</span>
              </li>
            )
          )}
        </ul>

      </div>

    </article>
  ))}
</div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
        <p className="section-label">
        <span className="section-label-icon">
          <Icon name="projects" size={15} />
        </span>
        {t.projects.label}
      </p>

          <h2>{t.projects.title}</h2>

          <div className="projects-list">
  {t.projects.items.map((project, index) => (
    <button
      type="button"
      className="project-card"
      key={index}
      onClick={() => openModal(project)}
      aria-label={`${project.title} - ${isID ? "Lihat detail" : "View details"}`}
    >
      {project.images && project.images.length > 0 && (
        <div className="project-card-image">
          <img src={project.images[0]} alt={project.title} />
          <div className="project-card-overlay"></div>
          <div className="project-card-badge">
            {isID ? "Lihat Detail" : "View Details"} →
          </div>
        </div>
      )}
      
      <div className="project-card-content">
        <div className="project-card-header">
          <h3>{project.title}</h3>
          <div className="project-card-tech-inline">
            {project.technologies.slice(0, 2).map((tech) => (
              <span key={tech} className="tech-badge-inline">{tech}</span>
            ))}
          </div>
        </div>
        
        <p className="project-card-description">{project.description}</p>
        
        <div className="project-card-footer">
          <div className="project-card-tech-list">
            <span className="tech-label">{isID ? "Teknologi:" : "Stack:"}</span>
            {project.technologies.slice(0, 3).map((technology) => (
              <span key={technology} className="tech-pill">
                {technology}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-more-inline">+{project.technologies.length - 3}</span>
            )}
          </div>
          
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-button"
              onClick={(e) => e.stopPropagation()}
              aria-label={isID ? "Buka di GitHub" : "Open on GitHub"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </button>
  ))}
</div>
        </section>
        <section id="profile" className="profile-section">
          <div className="profile-intro">
            <p className="section-label">
              <span className="section-label-icon">
                <Icon name="skills" size={15} />
              </span>
              {t.nav.profile}
            </p>
          </div>

          <nav className="mini-nav" aria-label="Profile navigation">
            <button
              type="button"
              className={activeProfileTab === "skills" ? "active" : ""}
              onClick={() => setActiveProfileTab("skills")}
            >
              <span className="mini-nav-icon">
                <Icon name="skills" size={14} />
              </span>
              {isID ? "Keahlian" : "Skills"}
            </button>
            <button
              type="button"
              className={activeProfileTab === "education" ? "active" : ""}
              onClick={() => setActiveProfileTab("education")}
            >
              <span className="mini-nav-icon">
                <Icon name="education" size={14} />
              </span>
              {isID ? "Pendidikan & Sertifikasi" : "Education & Certification"}
            </button>
            <button
              type="button"
              className={activeProfileTab === "training" ? "active" : ""}
              onClick={() => setActiveProfileTab("training")}
            >
              <span className="mini-nav-icon">
                <Icon name="training" size={14} />
              </span>
              {isID ? "Pelatihan & Pencapaian" : "Training & Achievements"}
            </button>
          </nav>
        </section>

        {activeProfileTab === "skills" && (
          <section id="skills" className="section">
            <p className="section-label">
              <span className="section-label-icon">
                <Icon name="skills" size={15} />
              </span>
              {t.skills.label}
            </p>

            <h2>{t.skills.title}</h2>
            <div className="skills-grid">
              {t.skills.items.map((skill, index) => (
                <div
                  className={`skill-card skill-theme-${index + 1}`}
                  key={`${skill.title}-${index}`}
                >
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap">
                      <Icon name={skill.icon} size={24} />
                    </div>
                  </div>

                  <div className="skill-card-body">
                    <h3>{skill.title}</h3>
                    <p className="skill-subtitle">{skill.subtitle}</p>
                    <ul className="skill-list">
                      {skill.skills.map((item) => (
                        <li key={item.name}>
                          <span>{item.name}</span>
                          <em>{item.level}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeProfileTab === "education" && (
          <section id="education" className="section">
            <p className="section-label">
              <span className="section-label-icon">
                <Icon name="education" size={15} />
              </span>
              {t.education.label}
            </p>

            <h2>{t.education.title}</h2>

            <div className="education-layout">
              <div className="education-card">
                <span>2021 — 2026</span>

                <h3>{t.education.degree}</h3>

                <h4>{t.education.university}</h4>

                <p>{t.education.gpa}</p>

                <p>
                  <strong>
                    {isID ? "Skripsi:" : "Thesis:"}
                  </strong>{" "}
                  {t.education.thesis}
                </p>
              </div>

              <div className="education-certification">
                <div className="education-certification-header">
                  <span className="education-certification-badge">TOEFL</span>
                  <h4>{t.education.certificationTitle}</h4>
                </div>

                <div className="education-certification-list">
                  {t.education.certificationScores.map((score) => (
                    <div key={score.label} className="education-certification-item">
                      <span>{score.label}</span>
                      <strong>{score.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {activeProfileTab === "training" && (
          <>
            <section id="achievements" className="section">
              <p className="section-label">
                <span className="section-label-icon">
                  <Icon name="achievements" size={15} />
                </span>
                {t.achievements.label}
              </p>

              <h2>{t.achievements.title}</h2>

              <div className="achievement-grid">
                {t.achievements.items.map((item, index) => (
                  <div className="achievement-card" key={index}>
                    <div className="achievement-header">
                      <span className="achievement-year">{item.year}</span>
                    </div>

                    <h3>{item.title}</h3>

                    <div className="achievement-institution">
                      <span className="institution-icon">🏢</span>
                      {item.institution}
                    </div>

                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="training" className="section">
              <p className="section-label">
                <span className="section-label-icon">
                  <Icon name="training" size={15} />
                </span>
                {t.training.label}
              </p>

              <h2>{t.training.title}</h2>

              <div className="training-list">
                {t.training.items.slice().reverse().map((item, index) => (
                  <div className="training-item" key={index}>
                    <div className="training-header">
                      <div>
                        <div className="training-organizer">
                          {item.organizer}
                        </div>
                        <h3>{item.title}</h3>
                      </div>
                      <span className="training-year">{item.year}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <section id="contact" className="contact">
  <div className="contact-header">
    <p className="section-label">
      <span className="section-label-icon">
        <Icon name="contact" size={15} />
      </span>
      {t.contact.label}
    </p>

    <h2>{t.contact.title}</h2>

    <p className="contact-description">
      {t.contact.description}
    </p>

  </div>

  <div className="contact-grid">
    {t.contact.items?.map((item, index) => (
      <a
        key={`${item.platform}-${index}`}
        href={item.url}
        className="contact-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="contact-card-number">
          0{index + 1}
        </span>

        <div className="contact-icon-box">
          <Icon name={item.icon} size={21} />
        </div>

        <div className="contact-info">
          <span className="contact-platform">
            {item.platform}
          </span>

          <strong>{item.name}</strong>
        </div>

        <span className="contact-card-action">
          {item.actionText}
          <span>↗</span>
        </span>
      </a>
    ))}
  </div>

  <div className="contact-footer-line">
    <span></span>
    <small>
      {isID ? "TERBUKA UNTUK PELUANG & KOLABORASI" : "OPEN FOR OPPORTUNITIES & COLLABORATION"}
    </small>
    <span></span>
  </div>
</section>

       

        {selectedItem && (
  <div
    className="detail-modal"
    role="dialog"
    aria-modal="true"
    aria-label={selectedItem.title}
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    }}
  >
    <div className="detail-modal-content">

      <button
        type="button"
        className="detail-modal-close"
        onClick={closeModal}
        aria-label={isID ? "Tutup" : "Close"}
      >
        ×
      </button>

      <div className="detail-modal-grid">

        {/* PROJECT IMAGES */}

        {selectedItem.images &&
          selectedItem.images.length > 0 && (
            <div className="detail-modal-images">
              {selectedItem.images.map((image, index) => (
                <div
                  className="detail-modal-image"
                  key={`${image}-${index}`}
                >
                  <img
                    src={image}
                    alt={`${selectedItem.title} - ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}

        {/* CONTENT */}

        <div className="detail-modal-body">

          <h2 className="detail-modal-title">{selectedItem.title}</h2>

          <div className="detail-modal-meta">
            {selectedItem.technologies && (
              <div className="detail-modal-tech-section">
                <h4>{isID ? "Teknologi" : "Technologies"}</h4>
                <div className="detail-modal-tech">
                  {selectedItem.technologies.map(
                    (technology) => (
                      <span key={technology} className="tech-tag">
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>
            )}

            {selectedItem.github && (
              <div className="detail-modal-link-section">
                <a 
                  href={selectedItem.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-modal-github"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {isID ? "Lihat Repository" : "View Repository"}
                </a>
              </div>
            )}
          </div>

          <div className="detail-modal-sections">
            <div className="detail-modal-section">
              <h3>{isID ? "Deskripsi Proyek" : "Project Description"}</h3>
              <p>
                {selectedItem.detail ||
                  selectedItem.description}
              </p>
            </div>

            {selectedItem.problem && (
              <div className="detail-modal-section">
                <h3>{isID ? "Permasalahan" : "The Problem"}</h3>
                <p>{selectedItem.problem}</p>
              </div>
            )}

            {selectedItem.solution && (
              <div className="detail-modal-section">
                <h3>{isID ? "Solusi & Dampak" : "Solution & Impact"}</h3>
                <p>{selectedItem.solution}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  </div>
)}

      </main>

      <footer>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}

export default App;