export const WHATEVER = 'asdasd';

export const SEARCH_FILTERS_FORM_FIELDS = {
  keyword: {
    containerClassName: 'uk-width-1-3@s uk-width-1-4@m',
    type: 'input',
    label: 'Keyword',
    placeholder: 'Any Keyword',
    apiName: 'q',
  },
  status: {
    containerClassName: 'uk-width-1-3@s uk-width-1-4@m',
    type: 'select',
    label: 'Property Status',
    options: [
      { value: '', text: 'Any Status' },
      { value: 'Active', text: 'Active' },
      { value: 'Pending', text: 'Pending' },
      { value: 'Closed', text: 'Closed' },
      { value: 'ActiveUnderContract', text: 'Active - Under Contract' },
      { value: 'Hold', text: 'Hold' },
      { value: 'Expired', text: 'Expired' },
      { value: 'Delete', text: 'Delete' },
      { value: 'Incomplete', text: 'Incomplete' },
      { value: 'ComingSoon', text: 'Coming Soon' },
    ],
    apiName: 'status',
  },
  propertyType: {
    containerClassName: 'uk-width-1-3@s uk-width-1-4@m',
    type: 'select',
    label: 'Property Type',
    options: [
      { value: '', text: 'Any Type' },
      { value: 'residential', text: 'Residential' },
      { value: 'rental', text: 'Rental' },
      { value: 'multifamily', text: 'Multi-Family' },
      { value: 'condominium', text: 'Condominium' },
      { value: 'commercial', text: 'Commercial' },
      { value: 'land', text: 'Land' },
    ],
    apiName: 'type',
  },
  minRooms: {
    containerClassName: 'uk-width-1-3@s uk-width-1-4@m',
    type: 'select',
    label: 'Min Rooms',
    options: [
      { value: '', text: 'Any Rooms' },
      { value: '1', text: '1' },
      { value: '2', text: '2' },
      { value: '3', text: '3' },
      { value: '4', text: '4' },
      { value: '5', text: '5' },
      { value: '6', text: '6' },
      { value: '7', text: '7' },
      { value: '8', text: '8' },
      { value: '9', text: '9' },
    ],
    apiName: 'minbeds',
  },
  minBaths: {
    containerClassName: 'uk-width-1-3@s uk-width-1-6@m',
    type: 'select',
    label: 'Min Baths',
    options: [
      { value: '', text: 'Any Bathrooms' },
      { value: '1', text: '1' },
      { value: '2', text: '2' },
      { value: '3', text: '3' },
      { value: '4', text: '4' },
      { value: '5', text: '5' },
      { value: '6', text: '6' },
      { value: '7', text: '7' },
      { value: '8', text: '8' },
      { value: '9', text: '9' },
    ],
    apiName: 'minbaths',
  },
  minPrice: {
    containerClassName: 'uk-width-1-3@s uk-width-1-6@m',
    type: 'input',
    label: 'Min Price',
    placeholder: 'No Min Price',
    addOn: '$',
    apiName: 'minprice',
  },
  maxPrice: {
    containerClassName: 'uk-width-1-3@s uk-width-1-6@m',
    type: 'input',
    label: 'Max Price',
    placeholder: 'No Max Price',
    addOn: '$',
    apiName: 'maxprice',
  },
  minArea: {
    containerClassName: 'uk-width-1-3@s uk-width-1-6@m',
    type: 'input',
    label: 'Min Area',
    labelSecondary: '(sq ft)',
    placeholder: 'No Min Area',
    addOn: '$',
    apiName: 'minarea',
  },
  maxArea: {
    containerClassName: 'uk-width-1-3@s uk-width-1-6@m',
    type: 'input',
    label: 'Max Area',
    labelSecondary: '(sq ft)',
    placeholder: 'No Max Area',
    addOn: '$',
    apiName: 'maxarea',
  },
};
