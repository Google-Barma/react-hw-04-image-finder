import { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import pixabayApi from '../services/pixabay-api';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

export default class App extends Component {
  state = {
    gallery: [],
    page: 1,
    searchQuery: '',
    showModal: false,
    modalImageUrl: '',
    isLoading: false,
    quantity: 8,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery, quantity } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchGallery();
    }

    if (prevState.page !== page) {
      this.scrollToNextPage();
    }

    if (prevState.quantity !== quantity && searchQuery) {
      this.fetchGallery();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  fetchGallery = () => {
    const { page, searchQuery, quantity } = this.state;

    this.setState({ isLoading: true });

    pixabayApi
      .fetchGallery(searchQuery, page, quantity)
      .then(images => {
        this.setState(({ gallery, page }) => ({
          gallery: [...gallery, ...images],
          page: page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleLoadMoreBtn = () => {
    this.fetchGallery();

    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  handleOpenModal = e => {
    const url = e.target.dataset.url;

    this.toggleModal();
    this.setState({ modalImageUrl: url });
  };

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      gallery: [],
      page: 1,
    });
  };

  onChangeQuantity = value => this.setState({ quantity: value });

  scrollToNextPage = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { gallery, showModal, modalImageUrl, isLoading } = this.state;

    return (
      <>
        <SearchBar
          onSubmitForm={this.onChangeQuery}
          onChangeQuantity={this.onChangeQuantity}
        />
        <main>
          <ImageGallery
            galleryPhotos={gallery}
            onOpenModal={this.handleOpenModal}
          />
          <Loader isLoading={isLoading} />

          {gallery.length > 0 && !isLoading && (
            <Button onLoadMore={this.fetchGallery} />
          )}

          {showModal && (
            <Modal imageUrl={modalImageUrl} onCloseModal={this.toggleModal} />
          )}
        </main>
      </>
    );
  }
}
