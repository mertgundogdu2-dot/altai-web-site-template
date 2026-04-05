"use client";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CarouselItem {
  image?: string;
  title: string;
  description?: string;
}

export default function Carousel({ config }: { config: any }) {
  const sectorData = config.content.sectorData || {};
  const items: CarouselItem[] = sectorData.gallery || sectorData.carousel || [];
  if (!items.length) return null;

  const pc = config.design.primaryColor;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wider uppercase"
            style={{ background: `${pc}10`, color: pc }}
          >
            Galeri
          </span>
          <h3
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ color: config.design.secondaryColor }}
          >
            {sectorData.galleryTitle || "Çalışmalarımız"}
          </h3>
        </motion.div>

        <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
          <div className="flex gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 min-w-0"
              >
                <div className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center text-6xl"
                      style={{ background: `${pc}10` }}
                    >
                      📸
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white font-bold text-lg">{item.title}</h4>
                    {item.description && (
                      <p className="text-white/70 text-sm mt-1">{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === i ? "w-8" : "bg-gray-300"
              )}
              style={selectedIndex === i ? { background: pc } : {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
