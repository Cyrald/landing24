// Функция для получения пути к изображению с поддержкой разных форматов
// Браузер попробует загрузить изображение, и если файл не существует, можно показать плейсхолдер
export function getImagePath(basePath: string, number: number, extension: 'webp' | 'png' | 'jpg' = 'webp'): string {
  return `/images/${basePath}/${number}.${extension}`;
}

// Функция для получения массива путей к изображениям
export function getImages(basePath: string, count: number, extension: 'webp' | 'png' | 'jpg' = 'webp'): Array<{ id: number; src: string }> {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: getImagePath(basePath, i + 1, extension),
  }));
}
