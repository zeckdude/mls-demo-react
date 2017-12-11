import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroy } from 'redux-form';
import PropTypes from 'prop-types';
import { every as _every, get as _get, map as _map, values as _values } from 'lodash';
import UIkit from 'uikit';
import SingleResult from '../components/SingleResult';
import { triggerWindowResize } from '../helpers';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.clearFilters = this.clearFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    // The UIkit grid needs to re-initialized whenever the search results re-rendered
    UIkit.grid('#search-results-grid');

    // If the mobile panel has changed to this one
    if (prevProps.activePanel !== this.props.activePanel && this.props.activePanel === 'searchResults') {
      // Scroll to the top of the panel
      document.getElementById('search-results-panel').scrollTo(0, 0);
      // Trigger a resize so that UI kit grid updates the margins programmatically
      triggerWindowResize();
    }
  }

  clearFilters() {
    this.props.destroy('SearchFiltersForm');
  }

  /**
   * Render a single listing
   * @return {ReactElement} - Markup of single listing
   */
  renderSingleResults() {
    return _map(this.props.properties, (listing) => {
      const {
        mlsId,
        listingId,
        listPrice,
        address: { streetNumber, streetName },
        property: {
          area, bedrooms, garageSpaces, bathsFull,
        },
      } = listing;

      return (
        <SingleResult
          key={mlsId}
          featuredPhoto={listing.photos[0]}
          streetNumber={streetNumber}
          streetName={streetName}
          area={area}
          bedrooms={bedrooms}
          garageSpaces={garageSpaces}
          bathsFull={bathsFull}
          listPrice={listPrice}
          mlsId={mlsId}
          listingId={listingId}
        />
      );
    });
  }

  /**
   * Render search results
   * @return {ReactElement} - Markup of search results grid
   */
  renderSearchResults() {
    if (Object.keys(this.props.properties).length > 0) {
      return (
        <div id="search-results-grid" className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid uk-grid-match" data-uk-grid>
          {this.renderSingleResults()}
        </div>
      );
    }

    return (
      <div id="search-results-not-found-container"><p>There was no results found with the provided filters and/or in the marked search area. Please broaden your search to view listings.</p></div>
    );
  }

  renderClearFiltersButton() {
    // Get the form values if they are set
    const values = _get(this.props, 'SearchFiltersForm.values');
    // Check if the values are either undefined or all empty strings
    const isValuesEmpty = _every(_values(values), value => value === '');

    if (!isValuesEmpty) {
      return (
        <button className="uk-button uk-button-primary uk-button-small" onClick={this.clearFilters}>Clear Filters</button>
      );
    }

    return false;
  }

  render() {
    return (
      <div id="search-results-panel" className={`${this.props.activePanel === 'searchResults' ? 'lifted' : ''} mobile-panel`}>
        <div className="uk-padding-small">
          <div className="uk-heading-divider uk-flex uk-flex-top uk-margin-bottom">
            <h3 className="uk-flex-1 uk-margin-remove-bottom">
              Search Results (<span className="results-num">{Object.keys(this.props.properties).length}</span>)
            </h3>
            {this.renderClearFiltersButton()}
          </div>
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

/**
 * mapStateToProps which gives the component access to the redux store
 * @return {object} - Mapping of state properties (in the redux store) to prop properties that will be available within the component
 */
const mapStateToProps = state => ({
  properties: state.listings.properties,
  SearchFiltersForm: state.form.SearchFiltersForm,
  activePanel: state.mobile.activePanel,
});

export default connect(mapStateToProps, { destroy })(SearchResults);

SearchResults.propTypes = {
  properties: PropTypes.objectOf(PropTypes.object).isRequired,
};
