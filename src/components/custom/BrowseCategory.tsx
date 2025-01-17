import { LinkCategory } from '@/core/mocks/link.mock';
import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import CardOfCategory from './cards/CardOfCategory';

const BrowseByCategory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Mise à jour dynamique du nombre de cartes visibles selon la taille de l'écran
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(5);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3);
      } else {
        setItemsPerView(2);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);

    return () => {
      window.removeEventListener('resize', updateItemsPerView);
    };
  }, []);

  // Navigation précédente
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    );
  };

  // Navigation suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > LinkCategory.length - itemsPerView ? prevIndex : prevIndex + 1
    );
  };

  return (
    <section className="w-full py-20 bg-[#FAFAFA] dark:bg-neutral-800 border-t-foreground/15">
      <div className="container space-y-8">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
            Browse by Category
          </h2>

          <div className="flex items-center gap-2 md:gap-4">
            <button
              onClick={handlePrev}
              className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-foreground/10 rounded-full disabled:opacity-50"
              disabled={currentIndex <= 0}
            >
              <AiOutlineLeft className='text-sm md:text-base lg:text-lg' />
            </button>

            <button
              onClick={handleNext}
              className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-foreground/10 rounded-full disabled:opacity-50"
              disabled={currentIndex >= (LinkCategory.length - itemsPerView)}
            >
              <AiOutlineRight className='text-sm md:text-base lg:text-lg' />
            </button>
          </div>
        </div>

        <div className="overflow-hidden relative">
          <div
            className="flex justify-between transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              width: `${(LinkCategory.length * 100) / itemsPerView}%`,
            }}
          >
            {LinkCategory.map((ele) => (
              <div
                key={ele.id}
                className="shrink-0"
                style={{ flex: `0 0 ${100 / itemsPerView}%` }}
              >
                <CardOfCategory name={ele.name} icon={ele.icon} href={ele.href} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
