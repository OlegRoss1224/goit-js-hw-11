import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '49135563-3e7c108cd0494cefc8419da61',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

export function getSearchResult(query) {
  return axiosInstance.get('', { params: { q: query } }).then(response => {
    if (response.data.hits.length === 0) {
      throw new Error('No images found');
    }
    return response.data;
  });
}
