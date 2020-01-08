import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({loading}) =>
    <h1>{loading}</h1>;

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default SearchPresenter;