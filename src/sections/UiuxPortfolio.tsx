import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';

interface Design {
  id: number;
  title: string;
  category: string;
  image: string;        // Thumbnail di grid
  detailImage?: string; // Gambar besar di popup (opsional)
  detailVideo?: string; // Video di popup (opsional)
  description: string;
}

const UiuxPortfolio = () => {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);

  const designs: Design[] = [
    {
      id: 1,
      title: 'Mobile Study App',
      category: 'Mobile Design',
      image: '/public/aset/UI/Hamim/Hero Section.png',
      detailImage: '/public/aset/UI/Hamim/Android Compact - 1.png',
      description: 'Desain aplikasi yang difokuskan bagi user untuk belajar agama islam dengan UI yang clean dan user-friendly.',
    },
    {
      id: 2,
      title: 'Mobile Rent App',
      category: 'Mobile Design',
      image: '/public/aset/UI/GancangRent/Instagram post - 1.png',
      detailImage: '/public/aset/UI/GancangRent/GancangRent App (2).png',
      description: 'Aplikasi rental dengan desain modern dan user-friendly untuk memudahkan proses penyewaan.',
    },
    {
      id: 3,
      title: 'Web Shopping Merch',
      category: 'Web Design',
      image: '/public/aset/UI/imakuri/Screenshot_2.png',
      detailImage: '/public/aset/UI/imakuri/imakuri.png',
      description: 'Website e-commerce untuk penjualan merchandise dengan desain yang menarik.',
    },
    {
      id: 4,
      title: 'Food App',
      category: 'Mobile Design',
      image: '/public/aset/UI/Rasagram/Screenshot_3.png',
      detailImage: '/public/aset/UI/Rasagram/Android Large - 8.png',
      description: 'Aplikasi yang dimana Resep-Resep masakan enak berkumpul, dan juga memiliki panduan cara memasak yang enak.',
    },
    {
      id: 5,
      title: 'LION AIR Parcel App',
      category: 'Mobile Design',
      image: '/public/aset/UI/lion AIr paket/Screenshot_4.png',
      detailImage: '/public/aset/UI/lion AIr paket/Frame 1249186940.png',
      description: 'Aplikasi tracking dan manajemen pengiriman paket untuk LION AIR.',
    },
    {
      id: 6,
      title: 'Novara Bank',
      category: 'Video Design',
      image: '/public/aset/UI/Novara Bank/Screenshot_1.png',
      detailVideo: '/public/aset/UI/Novara Bank/Novara Bank.mp4',
      description: 'Video promosi untuk layanan perbankan digital dengan animasi modern.',
    },
  ];

  const navigateDesign = (direction: 'prev' | 'next') => {
    if (!selectedDesign) return;
    const currentIndex = designs.findIndex(d => d.id === selectedDesign.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % designs.length
      : (currentIndex - 1 + designs.length) % designs.length;
    setSelectedDesign(designs[newIndex]);
  };

  return (
    <section id="uiux" className="relative py-24 md:py-32 bg-deadpool-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-gradient-to-r from-deadpool-red/5 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="scroll-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="section-subtitle">Design Work</span>
            <h2 className="section-title mt-2">UI/UX PORTFOLIO<span className="text-deadpool-red">.</span></h2>
          </div>
          
          <a
            href="/soon figma.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-deadpool-red hover:text-white transition-colors"
          >
            <span>View Figma</span>
            <ExternalLink size={18} />
          </a>
        </div>
        
        {/* Designs Grid — 3 kolom dengan aspect ratio 3:2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className="scroll-reveal design-card group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative w-full overflow-hidden rounded-xl bg-[#1a1a1a]">
                {/* Aspect ratio 3:2 untuk gambar 1536x1024 */}
                <div className="relative w-full" style={{ paddingBottom: '67.666%' }}>
                  <img
                    src={design.image}
                    alt={design.title}
                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center text-white/30">
                          <span class="font-display text-2xl">${design.title}</span>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="design-overlay absolute inset-0">
                  <div className="flex items-end justify-between h-full p-4">
                    <div>
                      <p className="font-display text-lg text-white">{design.title}</p>
                      <p className="text-deadpool-red text-sm">{design.category}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-deadpool-red flex items-center justify-center flex-shrink-0">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal */}
      {selectedDesign && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedDesign(null)}
        >
          <div className="min-h-screen flex items-center justify-center p-4">
            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateDesign('prev'); }}
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors z-20"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigateDesign('next'); }}
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors z-20"
            >
              <ChevronRight size={24} />
            </button>
            
            <div
              className="relative w-full max-w-5xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-deadpool-red transition-colors z-20"
              >
                <X size={20} />
              </button>
              
              {/* Detail Content: Video atau Gambar */}
              <div className="bg-deadpool-gray rounded-2xl overflow-hidden">
                {selectedDesign.detailVideo ? (
                  <video
                    src={selectedDesign.detailVideo}
                    controls
                    autoPlay
                    className="w-full max-h-[75vh]"
                  />
                ) : (
                  <img
                    src={selectedDesign.detailImage}
                    alt={selectedDesign.title}
                    className="w-full max-h-[75vh] object-contain"
                  />
                )}
              </div>
              
              {/* Info */}
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-3xl text-white">{selectedDesign.title}</h3>
                  <p className="text-deadpool-red mt-1">{selectedDesign.category}</p>
                  <p className="text-white/60 mt-3 max-w-xl">{selectedDesign.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UiuxPortfolio;