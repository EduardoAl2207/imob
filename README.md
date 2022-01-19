# House Marketplace

A mobile-first app that allows you to find and list houses for sale or for rent. This is a React and Firebase v9 project from the [React Front to Back 2022](https://www.udemy.com/course/react-front-to-back-2022) course.

[Visit the site](https://house-marketplace-six.vercel.app)

![Preview](/public/preview.png)

## Features
- Explore properties for rent or sale
- Browse properties with offers
- Contact property owner
- Sign up using email/password or Google OAuth
- List your own properties with photo upload
- Edit and delete your listings
- View property location with OpenStreetMap

## Tech
- React and React Router v6
- Firebase v9 (authentication, queries, storage)
- Deployed on [Vercel](https://vercel.com/)
- Toastify
- [Leaflet](https://leafletjs.com/) maps
- [Swiper](https://swiperjs.com/) slides

## Usage

If you want to run this locally

`git clone https://github.com/alexboyling/house-marketplace`

Navigate to the downloaded directory then

`npm start`

This will run the app in development mode. You can view it by visiting [http://localhost:3000](http://localhost:3000) in your browser.

### Using Geolocation

The geolocation feature requires the use of the Google Geolocation API. You can either disable the feature or add your own API key.

#### Disable geolocation

- In *CreateListing.jsx* set *geolocationEnabled* to "false"
- This will add a field for latitude and longitude coordinates when creating a listing 

#### Add your own API key

- Set up a GCP project and enable the [Geolocation API](https://console.cloud.google.com/apis/library/geolocation.googleapis.com?walkthrough_id=assistant_generic_index&project=dev1-338613)
- Generate an API key for the project
- Create a .env file in the cloned repo
- Add an entry for the key
`REACT_APP_GEOCODE_API_KEY="your key here"`