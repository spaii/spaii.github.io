export type Project = {
  title: string;
  period: string;
  role: string;
  description: string;
  result: string;
  tags: string[];
  links: { label: string; href: string }[];
  image?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const profile = {
  welcome: "Welcome to \n my portofolio",
  music: "/audio/chil.mp3", // kosongkan "" untuk menyembunyikan tombol musik
  musicCover: "/images/musik.jpg", // foto di atas tombol musik, kosongkan "" kalau belum ada
  musicTitle: "Chill Day", // opsional, kosongkan "" untuk menyembunyikan
  name: "DIMAS",
  handle: "PORTOFOLIO",
  headline: "Sarjana Teknik Informatika · Lulus 2026",
  intro:
    " Lulusan S1 Teknik Informatika dari Universitas Banten Jaya dengan minat pada teknologi informasi, analisis sistem, jaringan komputer, dan pengembangan perangkat lunak. Saya mencari posisi sebagai IT Staff, IT Support, Web Developer, Frontend Developer, dan Pengelola Database.",
  status: [
    {
      key: "Status",
      value: "Terbuka Untuk Kerja Penuh Waktu, Magang, atau Kontrak",
      highlight: true,
    },
    { key: "Lokasi", value: "Pandeglang, Banten" },
    {
      key: "Fokus",
      value:
        "backend, frontend, full-stack, API, basis data, Network Engineering",
    },
    {
      key: "Stack",
      value:
        "HTML & CSS,TypeScript, Python, Vite, Dart, Laravel, React, Node.js, \n PHP Native ,RestAPI, FastAPI, MySQL, SQLite, SQL Server, Git & Github",
    },
  ],
  about: [
    "Sebelumnya, saya menempuh pendidikan SMK jurusan Teknik Komputer dan Jaringan (TKJ) sambil mondok selama tiga tahun di Pesantren Mabdaussalikin. Selama SMK, saya pernah PKL di Sibernet sebagai teknisi WiFi, dengan pengalaman instalasi dan penanganan gangguan jaringan internet.",
    "Selama kuliah, saya juga pernah melaksanakan PKN di Mall Pelayanan Publik Pandeglang dengan tugas menganalisis sistem perizinan usaha di DPMPTSP. Selain itu, saya menyelesaikan skripsi berupa pengembangan sistem deteksi penyakit daun padi menggunakan CNN dengan arsitektur MobileNetV2. Di luar kuliah, saya aktif mengikuti kegiatan UKM Computer Community sebagai staf divisi Software & Jaringan.",
    "Saya merupakan pribadi yang memiliki kemauan belajar tinggi, bertanggung jawab, disiplin, dan mampu bekerja secara individu maupun dalam tim. Meskipun saya masih tergolong fresh graduate, saya siap untuk terus belajar, beradaptasi, dan mengembangkan kemampuan saya di dunia kerja.",
  ],
  // Isi dengan tautan CV, misalnya "/cv.pdf" (file ditaruh di folder public).
  // Kosongkan untuk menyembunyikan tombol Unduh CV.
  photo: "/images/profile.jpeg",
  cvUrl: "/CV_Dimas.pdf",
};

export const projects: Project[] = [
  {
    image: "/images/projects/Padi.jpeg",
    title:
      "RANCANG BANGUN SISTEM ANALISIS CITRA DAUN UNTUK DETEKSI PENYAKIT PADI MENGGUNAKAN CONVOLUTIONAL NEURAL NETWORK (CNN) ARSITEKTUR MOBILENETV2 PADA PETANI LOKAL DI DESA TUNGGAL JAYA",
    period: "2026 · Skripsi",
    role: "Solo",
    description:
      "Pengembangan sistem analisis dengan fokus penerapan teknologi pengolahan citra dan klasifikasi penyakit daun padi pada petani lokal di Desa Tunggal Jaya.",
    result: "Akurasi Mencapai 93%, dengan data Traning 20.000 data.",
    tags: ["Python", "Dart", "CNN", "MobileNetV2", "SQlite", "Mobile"],
    links: [
      {
        label: "Kode di GitHub",
        href: "https://github.com/spaii/deteksi-penyakit-padi",
      },
    ],
  },
  {
    image: "/images/projects/guru.jpg",
    title: "Aplikasi Absensi Guru",
    period: "2026 · Freelance",
    role: "Solo",
    description:
      "Website absensi untuk sekolah. Guru absen masuk dan pulang dengan selfie dari kamera, dan lokasi, alamat, serta waktu tercetak otomatis di bawah foto. Kepala sekolah memantau kehadiran guru secara langsung lewat dashboard. Dibuat dengan Python (Flask) dan SQLite.",
    result: "Prototipe selesai dalam 36 jam.",
    tags: ["Python (Flask)", "SQLite"],
    links: [
      {
        label: "Kode di GitHub",
        href: "https://github.com/username/absensi-guru",
      },
    ],
  },
  {
    image: "/images/projects/properti.png",
    title: "Aplikasi web properti berbasis Laravel",
    period: "2025 · Tugas Kuliah",
    role: "Solo",
    description:
      "Trias Property adalah aplikasi web untuk membantu merencanakan pembangunan rumah atau gedung. Pengguna dapat memilih paket bangunan yang sudah tersedia atau menyusun sendiri (custom) bahan yang akan dipakai, lalu melihat hasil dan ringkasan pesanannya sebelum mengirimkannya.",
    result:
      "Aplikasi web ini selesai dalam 2 minggu, dengan fitur CRUD untuk paket bangunan dan bahan, serta fitur perhitungan harga total.",
    tags: ["PHP", "Blade", "Other", "MySQL"],
    links: [
      {
        label: "Kode di GitHub",
        href: "https://github.com/spaii/trias-property",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Bahasa",
    items: ["TypeScript", "Python", "Java", "PHP", "Dart"],
  },
  {
    label: "Web",
    items: ["React", "Node.js", "FastAPI", "REST API", "HTML & CSS"],
  },
  { label: "Data", items: ["SQLite", "MySQL", "SQL Server"] },
  {
    label: "Alat",
    items: ["Git & GitHub", "CANVA", "Figma"],
  },
  {
    label: "Bahasa asing",
    items: ["Indonesia (asli)", "Inggris (TOEFL ITP 440)"],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  logo?: string;
  gpa?: string;
  thesis?: string;
  courses?: string;
  organization?: string;
  note?: string;
};

// Urutan: yang terbaru di paling atas.
export const educations: Education[] = [
  {
    degree: "S1 Teknik Informatika",
    school: "Universitas Banten Jaya",
    period: "2022 – 2026",
    logo: "/images/logos/Unbaja.png",
    gpa: "3.90 / 4.00",
    thesis:
      "RANCANG BANGUN SISTEM ANALISIS CITRA DAUN UNTUK DETEKSI PENYAKIT PADI MENGGUNAKAN CONVOLUTIONAL NEURAL NETWORK (CNN) ARSITEKTUR MOBILENETV2 PADA PETANI LOKAL DI DESA TUNGGAL JAYA",
    courses:
      "Basis Data, Struktur Data dan Algoritma, Rekayasa Perangkat Lunak, Pemrograman Web, Network and engineering, UI/UX Desain",
    organization:
      "Staf divisi Software & Jaringan UKM Computer Community, 2022-2025",
  },
  {
    degree: "SMK Jurusan Teknik Komputer dan Jaringan",
    school: "Dwi Putra Bangsa Cimanggu",
    period: "2019 – 2022",
    logo: "/images/logos/smk.jpg",
    note: "Nilai rata-rata rapor 86. Sebagai Teknisi Lab-Komputer", // isi yang benar, atau hapus baris ini
  },
  {
    degree: "Pondok Pesantren ",
    school: "Mabdaussalikin",
    period: "2019 – 2022",
    logo: "/images/logos/ponpes.jpeg",
    note: "Sebagai Ketua Keibadahan Laki-Laki", // isi yang benar, atau hapus baris ini
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image: string;
  href?: string; // tautan verifikasi, boleh dihapus
};

export const certificates: Certificate[] = [
  {
    title: "Workshop Career Preparation for Future Professionals", // ganti dengan yang asli
    issuer: "Universitas Banten Jaya",
    year: "2026",
    image: "/images/certificates/karir.jpg",
    href: "https://unbaja.ac.id",
  },
  {
    title: "Junior Database Programmer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    image: "/images/certificates/sbnsp.jpg",
    href: "https://www.bnsp.go.id",
  },
  {
    title: "Language Proficiency Test",
    issuer: "Universitas Banten Jaya",
    year: "2026",
    image: "/images/certificates/toefl.jpg",
    href: "https://unbaja.ac.id",
  },
  {
    title: "Computer and Network Engineering ",
    issuer: "SMK Dwi Putra Bangsa Cimanggu",
    year: "2022",
    image: "/images/certificates/smk.jpg",
    href: "https://daftarsekolah.net/",
  },
  {
    title: "IT EXPLORE",
    issuer: "Computer Community Universitas Banten Jaya",
    year: "2022",
    image: "/images/certificates/itxplore.jpg",
    href: "https://www.instagram.com/ccunbaja/",
  },
  {
    title: "Pelatihan Dasar",
    issuer: "Himpunan Mahasiswa Teknik Informatika Universitas Banten Jaya",
    year: "2022",
    image: "/images/certificates/pedas.jpg",
    href: "https://www.instagram.com/humanika.unbaja/",
  },
];

export const contact = {
  blurb:
    "Saya terbuka untuk lowongan junior, Network Engineer, kontrak, magang lanjutan. Kirim email atau whatsapp dan saya biasanya membalas dalam 1 sampai 2 hari.",
  email: "dimastkj0611@email.com",
  whatsapp: {
    label: "+62 878-9298-2350",
    href: "https://wa.me/6287892982350",
  },
  github: { label: "github.com/spaii", href: "https://github.com/spaii" },
  linkedin: {
    label: "linkedin.com/in/dimas",
    href: "https://www.linkedin.com/in/dimas",
  },
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "tentang", label: "About Me" },
  { id: "proyek", label: "Projects" },
  { id: "keahlian", label: "Skills" },
  { id: "pendidikan", label: "Education" },
  { id: "sertifikat", label: "Certificates" },
  { id: "kontak", label: "Contact" },
];
