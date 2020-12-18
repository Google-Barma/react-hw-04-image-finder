import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const galleryApi = {
  API_KEY: '13118160-85f169275baea695b5828e8ed',

  async fetchGallery(query = '', pageNumber = 1, quantity = 4) {
    return await axios
      .get(
        `/?q=${query}&page=${pageNumber}&key=${this.API_KEY}&image_type=photo&orientation=horizontal&per_page=${quantity}`,
      )
      .then(({ data }) => data.hits)
      .then(result =>
        result.map(({ id, largeImageURL, webformatURL }) => ({
          id,
          largeImageURL,
          webformatURL,
        })),
      );
  },
};

export default galleryApi;
