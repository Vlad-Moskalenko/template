import {
  useInfiniteQuery
} from '@tanstack/react-query'

import { getImages, getImagesByQuery } from 'src/services/axiosConfig'


export const useGallery = (query?: string) => {
 return useInfiniteQuery({
    queryKey: ['gallery', query],
    queryFn: ({pageParam = 1}) => {
      if(query) return getImagesByQuery({query, page: pageParam});
      return getImages(pageParam)
    },
    getNextPageParam: (lastPage, allPages) => {
      const maxPages = lastPage?.total/10
      const nextPage = allPages.length + 1
      return nextPage <= maxPages ? nextPage : undefined;
    },
    refetchOnMount: true,
    staleTime: 24*60*60*1000
  })
}