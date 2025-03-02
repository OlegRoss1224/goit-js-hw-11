import axios from 'axios';

export default function fetchImages(searchText) {
  const options = {
    params: {
      key: '49135563-3e7c108cd0494cefc8419da61',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}
