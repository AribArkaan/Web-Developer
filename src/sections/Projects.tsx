import { useState } from 'react';
import { Play, X, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  videoUrl: string;
  imageUrl: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showMore, setShowMore] = useState(false);

  const mainProjects: Project[] = [
    {
      id: 1,
      title: 'Web Masjid Al-Kautsar',
      description: 'Website untuk manajemen dan informasi masjid dengan fitur jadwal sholat, kajian, dan donasi.',
      skills: ['Front-end', 'Back-end', 'TailwindCSS', 'PHP', 'Laravel', 'JS', 'GIT'],
      videoUrl: '/public/aset/masjid al-kautsar2.mp4',
      imageUrl: '/public/aset/Thumbnail/Masjid.png',
    },
    {
      id: 2,
      title: 'Absensi RFID',
      description: 'Sistem absensi digital menggunakan RFID card dengan integrasi IoT (ESP32).',
      skills: ['UI/UX', 'PHP', 'SQL', 'IoT (ESP32)', 'RFID Card', 'GIT'],
      videoUrl: 'https://www.youtube.com/embed/4y_PIJkq2rw',
      imageUrl: '/public/aset/Thumbnail/RFID-Absensi.png',
    },
    {
      id: 3,
      title: 'IoT Smart Greenhouse (Plantorid)',
      description: 'Sistem monitoring dan kontrol greenhouse berbasis IoT untuk pertanian pintar.',
      skills: ['IoT (ESP32)', 'Front-end Developer', 'MQTT', 'GIT'],
      videoUrl: 'https://www.youtube.com/embed/QQqWoY3z1-U?si=rikyk294nFqnz2dD',
      imageUrl: '/public/aset/Thumbnail/Plantroid.png',
    },
    {
      id: 4,
      title: 'Web Ardes.Studio',
      description: 'Website konsultan arsitek dengan portofolio proyek dan sistem konsultasi online.',
      skills: ['Front-end', 'Back-end', 'TailwindCSS', 'JS', 'GIT'],
      videoUrl: '/public/aset/Ardes-Studio.mp4',
      imageUrl: '/public/aset/Thumbnail/Ardes-Studio.png',
    },
  ];

  const moreProjects: Project[] = [
    {
      id: 5,
      title: 'Deteksi Makanan dengan AI',
      description: 'Sistem pengenalan makanan menggunakan teknologi AI dan Google Cloud.',
      skills: ['Google Cloud', 'Machine Learning', 'Python'],
      videoUrl: '/public/aset/video demonstran.mp4',
      imageUrl: '/public/aset/Thumbnail/RasaGram.png',
    },
    {
      id: 6,
      title: 'Unsafe Sitting Distance',
      description: 'Metode peringatan untuk menjaga jarak pandangan dari layar monitor.',
      skills: ['Machine Learning', 'Python', 'GIT'],
      videoUrl: '/public/aset/demo video.mp4',
      imageUrl: '/public/aset/Thumbnail/WOW.png',
    },
    {
      id: 7,
      title: 'Deteksi Glaukoma AI',
      description: 'Sistem pengecekan citra mata untuk deteksi penyakit glaukoma menggunakan AI.',
      skills: ['Python', 'Deep Learning', 'AI', 'ResNext', 'CBAM', 'GIT'],
      videoUrl: '/public/aset/Deteksi Glaukoma AI + CDR - Personal - Microsoft​ Edge 2026-01-29 18-10-28.mp4',
      imageUrl: '/public/aset/Thumbnail/Glaukoma.png',
    },
    {
      id: 8,
      title: 'Display Informasi Waktu Shalat & Kegiatan Keagamaan',
      description: 'Sistem ini tidak hanya menampilkan informasi tetapi juga memprioritaskan transparansi penuh, khususnya dalam pengelolaan keuangan masjid dan hitung mundur jadwal salat serta pengumuman kegiatan keagamaan hingga konten pendidikan Islam interaktif.',
      skills: ['HTML5', 'CSS3', 'TailwindCSS', 'JavaScript (Vanilla/ES6)', 'Fetch API', 'Node.js', 'Express.js', 'MySQL', 'GIT'],
      videoUrl: 'https://drive.google.com/file/d/1xI95-EX_FVcgqgI0ojhILU9QxxfoDixA/preview',
      imageUrl: '/public/aset/Thumbnail/Msajid Ailkhlas.png',
    },
    {
      id: 9,
      title: 'Task Management Board',
      description: 'Sistem yang dibuat diperuntukkan memanagement setiap tugas yang belum tuntas.',
      skills: ['React.js', 'CSS3', 'TailwindCSS', 'GIT'],
      videoUrl: 'https://drive.google.com/file/d/1wCrYEUIn62UomYDJ6ZCQNUOjM0ooHVl8/preview',
      imageUrl: '/public/aset/Thumbnail/Trello.png',
    },
  ];

  // Helper: cek tipe video
  const isYouTube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');
  const isGoogleDrive = (url: string) => url.includes('drive.google.com');

  // Helper: konversi Google Drive share link ke embed link
  const getDriveEmbedUrl = (url: string) => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return url;
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-deadpool-red/5 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title mt-2">PROJECTS<span className="text-deadpool-red">.</span></h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mainProjects.map((project, index) => (
            <div
              key={project.id}
              className="scroll-reveal project-card group cursor-pointer relative overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail Gambar */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Konten */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white/70">
                      +{project.skills.length - 3}
                    </span>
                  )}
                </div>

                <button className="flex items-center gap-2 text-deadpool-red hover:text-white transition-colors">
                  <Play size={16} />
                  <span className="text-sm">Watch Demo</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div className="scroll-reveal mt-12 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn-outline"
          >
            {showMore ? 'Show Less' : 'View More Projects'}
          </button>
        </div>

        {/* More Projects Grid */}
        {showMore && (
          <div className="grid md:grid-cols-3 gap-6 mt-8 animate-fade-in">
            {moreProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card group cursor-pointer relative overflow-hidden rounded-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail Gambar */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Konten */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="font-display text-xl text-white mb-1">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-white/10 backdrop-blur-sm rounded text-xs text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Video Modal — dengan sistem scrolling */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            <div
              className="relative w-full max-w-5xl bg-deadpool-gray rounded-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-deadpool-red transition-colors"
              >
                <X size={20} />
              </button>

              {/* Video Player */}
              <div className="aspect-video bg-black w-full">
                {isYouTube(selectedProject.videoUrl) ? (
                  <iframe
                    src={selectedProject.videoUrl}
                    title={selectedProject.title}
                    className="w-full h-full"
                    allowFullScreen
                  />
                ) : isGoogleDrive(selectedProject.videoUrl) ? (
                  <iframe
                    src={getDriveEmbedUrl(selectedProject.videoUrl)}
                    title={selectedProject.title}
                    className="w-full h-full"
                    allow="autoplay"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={selectedProject.videoUrl}
                    controls
                    className="w-full h-full"
                    autoPlay
                  />
                )}
              </div>

              {/* Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl md:text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                  {isGoogleDrive(selectedProject.videoUrl) && (
                    <a
                      href={selectedProject.videoUrl.replace('/preview', '/view')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-deadpool-red hover:text-white transition-colors text-sm"
                    >
                      <ExternalLink size={14} />
                      <span>Open in Drive</span>
                    </a>
                  )}
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-deadpool-red/10 border border-deadpool-red/30 rounded-full text-sm text-deadpool-red"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;