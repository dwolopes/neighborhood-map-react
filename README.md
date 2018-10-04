# Neighborhood Map - Up to a Coffee ?

This is application was built using React, Google Maps API and FourSquare API. Accessing this app you are able to find coffee shops around Palmares, a Belo Hoziconte's neighborhood, Minas Gerais - Brazil. The clean interface allows you to see 10 options of coffee nearby Palmares, so you can filter a coffee among these options and when you click in one of these options, it will give a marker with the address of the selected location on the Map right aside. On this same map you can select a place marker and the addrress will be showed too.

## Getting Started

In order to run de app locally, consider the following steps:

1. Clone project:

    ```
    $ [sudo] git clone git@github.com: https://github.com/dwolopes/neighborhood-map-react
    ```

### Prerequisites

Consider to install:

```
Node.js and npm
```

> [Dowload Node.Js and NPM](https://nodejs.org/en/download/).

### Installing

After download and install Node.js and NPM, from the project folder run the follow comands in your prompt: 

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Running the application

After running `npm start` it will open a new tab on your default browser with the follow address bar: `http://localhost:3000`. You will see a list of 10 coffee shops around Palmares. Using the search bar, you may filter coffee shops among these items. The app presents as well a map, on it is possible to see red markers represating those same coffee shops listed. Note that when you search for one of these listed itens, the map will gives to you only the correspondent markers according to your query.


## Built With

* [React](https://reactjs.org/) - The web framework used
* [React-Bootstrao](https://react-bootstrap.github.io/) - The library responsible for styling the App.
* [React-Google-Maps](https://tomchentw.github.io/react-google-maps/) - The library responsible for render Map and InfoWindow.
* [Foursquare API](https://foursquare.com/) - API used to recover Coffee shops.
* [Google Maps API](https://developers.google.com/maps/documentation) - API used to render the Map and Coffee shop's markers.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Douglas Lopes** - *Initial work* - [Neighborhood-map-react](https://github.com/dwolopes/neighborhood-map-react)

See also the list of [contributors](https://github.com/dwolopes/neighborhood-map-react/graphs/contributors who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details