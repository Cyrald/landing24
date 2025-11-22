// Функция для получения пути к изображению с поддержкой разных форматов
export function getImagePath(basePath: string, number: number, extension: 'webp' | 'png' | 'jpg' = 'webp'): string {
  return `/images/${basePath}/${number}.${extension}`;
}

// Функция для получения массива путей к изображениям с автоматическим fallback
export function getImageSources(basePath: string, number: number): string[] {
  return [
    getImagePath(basePath, number, 'webp'),
    getImagePath(basePath, number, 'png'),
    getImagePath(basePath, number, 'jpg'),
  ];
}

// Функция для получения массива путей к изображениям
export function getImages(basePath: string, count: number): Array<{ id: number; sources: string[] }> {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    sources: getImageSources(basePath, i + 1),
  }));
}
