import { GalleryItem } from "src/entities/GalleryItem";

export const splitArrayToSubArray = (arr: GalleryItem[], columnCount = 3) => {
  const result = [];
  const heights = Array(columnCount).fill(0);

  for (let i = 0; i < columnCount; i++) {
    result.push([]);
  }

  arr.forEach((_, i) => {
    const lowestSubArrayIndex = heights.indexOf(Math.min(...heights));

    result[lowestSubArrayIndex].push(arr[i]);

    const imageHeight = arr[i].cover_photo?.height || arr[i].height;
    heights[lowestSubArrayIndex] = heights[lowestSubArrayIndex] + imageHeight;
  });

  return result;
};