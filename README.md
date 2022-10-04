
# MCU-countdown

A countdown for the upcomming movies for Marvel Cinematic Universe.

![MCU-countdown Thumbnail](https://raw.githubusercontent.com/adhamali450/mcu-countdown/master/public/facebook-preview-image.png?token=GHSAT0AAAAAABZNZEEPDZEEJ4ZRFBDRNLY4YZ4CTYQ).




## API Reference

#### Get all items

Gets all **Marvel Studios** (identified by id 420) movies sorted descendingly by release date.
Afterwards, I take the unreleased yet movies 

```http
  GET api/movie?api_key=YOUR_KEY&language=en-US&sort_by=primary_release_date.desc&page=1&with_companies=420
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `YOUR_KEY` | `string` | **Required**. Your API key |



## Installation

after cloning the repo:

```bash
  cd mcu-coundown
  npm install
```

## Tesing

```bash
  npm run dev
```
    
## Demo

[Click here](https://mcu-countdown.vercel.app/)


## Contributing

Contributions are always welcome for making it more robust and solid.
Another feature you can add is support for upcoming TV shows (beside movies)
