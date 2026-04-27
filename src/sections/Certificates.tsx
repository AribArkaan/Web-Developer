// Certificates.tsx - Complete Fix dengan Debugging

import { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Award, FileText } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  image: string;
  issuer: string;
  year: string;
}

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'System Administration and IT Infrastructure',
      image: './aset/Coursera_System Administration and IT Infrastructure_001.jpg',
      issuer: 'Coursera',
      year: '2024',
    },
    {
      id: 2,
      title: 'Belajar Dasar Pemrograman Web',
      image: './aset/Dicoding_Belajar Dasar Pemrograman Web_001.jpg',
      issuer: 'Dicoding',
      year: '2024',
    },
    {
      id: 3,
      title: 'UI/UX Figma Introduction',
      image: './aset/Arib Arkaan Fadhlullah_E-Certif SC UI_UX Figma Introduction MySkill x Lion Parcel_001.jpg',
      issuer: 'MySkill x Lion Parcel',
      year: '2024',
    },
    { id: 4, title: 'Certificate 4', image: './aset/gabungan_001.jpg', issuer: 'Various', year: '2024' },
    { id: 5, title: 'Certificate 5', image: './aset/gabungan_003.jpg', issuer: 'Various', year: '2024' },
    { id: 6, title: 'Certificate 6', image: './aset/gabungan_004.jpg', issuer: 'Various', year: '2024' },
    { id: 7, title: 'Certificate 7', image: './aset/gabungan_005.jpg', issuer: 'Various', year: '2024' },
    { id: 8, title: 'Certificate 8', image: './aset/gabungan_006.jpg', issuer: 'Various', year: '2024' },
    { id: 9, title: 'Certificate 9', image: './aset/gabungan_008.jpg', issuer: 'Various', year: '2024' },
    { id: 10, title: 'Certificate 10', image: './aset/gabungan_011.jpg', issuer: 'Various', year: '2024' },
    { id: 11, title: 'Certificate 11', image: './aset/gabungan_014.jpg', issuer: 'Various', year: '2024' },
    { id: 12, title: 'Certificate 12', image: './aset/gabungan_017.jpg', issuer: 'Various', year: '2024' },
    { id: 13, title: 'Certificate 13', image: './aset/gabungan_020.jpg', issuer: 'Various', year: '2024' },
    { id: 14, title: 'Certificate 14', image: './aset/gabungan_024.jpg', issuer: 'Various', year: '2024' },
    { id: 15, title: 'Certificate 15', image: './aset/gabungan_027.jpg', issuer: 'Various', year: '2024' },
    { id: 16, title: 'Certificate 16', image: './aset/gabungan_029.jpg', issuer: 'Various', year: '2024' },
    { id: 17, title: 'Certificate 17', image: './aset/gabungan_030.jpg', issuer: 'Various', year: '2024' },
    { id: 18, title: 'Certificate 18', image: './aset/gabungan_031.jpg', issuer: 'Various', year: '2024' },
    { id: 19, title: 'Certificate 19', image: './aset/gabungan_032.jpg', issuer: 'Various', year: '2024' },
    { id: 20, title: 'Lomba Poster UNY', image: './aset/Lomba Poster UNY.jpg', issuer: 'UNY', year: '2024' },
    { id: 21, title: 'Certificate 21', image: './aset/gabungan_033.jpg', issuer: 'Various', year: '2024' },
  ];

  const displayedCerts = showAll ? certificates : certificates.slice(0, 6);

  const handleImageError = useCallback((certId: number) => {
    console.log(`❌ Image failed to load for ID: ${certId}`);
    setImageErrors(prev => new Set([...prev, certId]));
  }, []);

  const handleImageLoad = useCallback((certId: number) => {
    console.log(`✅ Image loaded successfully for ID: ${certId}`);
    setLoadedImages(prev => new Set([...prev, certId]));
  }, []);

  const navigateCert = (direction: 'prev' | 'next') => {
    if (!selectedCert) return;
    const currentIndex = certificates.findIndex(c => c.id === selectedCert.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % certificates.length
      : (currentIndex - 1 + certificates.length) % certificates.length;
    setSelectedCert(certificates[newIndex]);
  };

  // Debug: Log semua gambar yang akan ditampilkan
  useEffect(() => {
    console.log('📸 Certificates to display:', displayedCerts.map(c => ({ id: c.id, image: c.image })));
  }, [displayedCerts]);

  return (
    <section id="certificates" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-deadpool-red/5 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal mb-16">
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title mt-2">CERTIFICATES<span className="text-deadpool-red">.</span></h2>
        </div>
        
        {/* Stats */}
        <div className="scroll-reveal flex justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl text-deadpool-red">{certificates.length}+</div>
            <div className="text-white/50 text-sm uppercase tracking-wider mt-1">Certificates</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl md:text-6xl text-white">5+</div>
            <div className="text-white/50 text-sm uppercase tracking-wider mt-1">Organizations</div>
          </div>
        </div>
        
        {/* Certificates Grid - FIXED: Menghapus opacity/transform yang menghalangi */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {displayedCerts.map((cert, index) => {
            const hasError = imageErrors.has(cert.id);
            // const isLoaded = loadedImages.has(cert.id);
            
            return (
              <div
                key={cert.id}
                className="scroll-reveal group cursor-pointer"
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-deadpool-gray border border-white/10 hover:border-deadpool-red/50 transition-all duration-300">
                  {/* REMOVED: Overlay gradient yang blocking gambar */}
                  
                  {/* Gambar - FIXED: Menghapus opacity conditional yang menyebabkan gambar tidak terlihat */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onLoad={() => handleImageLoad(cert.id)}
                    onError={() => handleImageError(cert.id)}
                    loading="lazy"
                    style={{ display: 'block' }} // Force display block
                  />
                  
                  {/* Hover Overlay - hanya gradient, tidak blocking gambar */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Hover Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                    <p className="text-white font-medium text-sm truncate">{cert.title}</p>
                    <p className="text-deadpool-red text-xs">{cert.issuer} • {cert.year}</p>
                  </div>
                  
                  {/* Fallback jika gambar error */}
                  {hasError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-deadpool-gray z-10">
                      <FileText size={48} className="text-deadpool-red/40 mb-2" />
                      <p className="text-white/60 text-xs text-center px-2">{cert.title}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* View All Button */}
        {certificates.length > 6 && (
          <div className="scroll-reveal mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary inline-flex items-center gap-2"
            >
              {showAll ? (
                <>Show Less (First 6)</>
              ) : (
                <>View All Certificates ({certificates.length - 6} more)</>
              )}
            </button>
          </div>
        )}

        {/* Debug Info - Bisa dihapus setelah problem solved */}
        <div className="text-center mt-6 text-white/30 text-xs">
          Loaded: {loadedImages.size} / {displayedCerts.length} | 
          Errors: {imageErrors.size}
        </div>
      </div>
      
      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); navigateCert('prev'); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); navigateCert('next'); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="absolute -top-12 left-0 text-white/50 text-sm">
              {certificates.findIndex(c => c.id === selectedCert.id) + 1} / {certificates.length}
            </div>
            
            <div className="bg-deadpool-gray rounded-2xl overflow-hidden min-h-[300px] flex items-center justify-center">
              {!imageErrors.has(selectedCert.id) ? (
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[70vh] object-contain"
                  onError={() => handleImageError(selectedCert.id)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                  <Award size={64} className="mb-4 text-deadpool-red/60" />
                  <h3 className="text-2xl text-white font-display mb-2">{selectedCert.title}</h3>
                  <p className="text-deadpool-red text-lg">{selectedCert.issuer}</p>
                  <p className="text-white/50 mb-4">{selectedCert.year}</p>
                </div>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="font-display text-2xl text-white">{selectedCert.title}</h3>
              <p className="text-deadpool-red mt-1">{selectedCert.issuer} • {selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;