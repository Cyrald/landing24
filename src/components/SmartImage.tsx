import { useState } from 'react';

interface SmartImageProps {
  sources: string[];
  alt: string;
  className?: string;
  placeholderContent?: React.ReactNode;
}

export function SmartImage({ sources, alt, className, placeholderContent }: SmartImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentIndex < sources.length - 1) {
      // Пробуем следующий формат
      setCurrentIndex(currentIndex + 1);
    } else {
      // Все форматы не сработали, показываем плейсхолдер
      setHasError(true);
    }
  };

  if (hasError) {
    return (
      <div className={className}>
        {placeholderContent}
      </div>
    );
  }

  return (
    <img
      src={sources[currentIndex]}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
