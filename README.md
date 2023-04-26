# Lovelace Sun card

Home assistant Lovelace Sun card based on Google weather design

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

## Preview

![Sun Card](img01.png?raw=true "Sun Card")

![Sun Card](img03.png?raw=true "Sun Card")

## Requirements

- This card uses [Sun integration](https://www.home-assistant.io/integrations/sun/) so it needs to be enabled.

## Install

### HACS

Home assistant Lovelace Sun card is available by default on HACS directory. More info [here](https://hacs.xyz/).

### Manually

1. Download the `home-assistant-sun-card.js` file from the [latest release available](https://github.com/trollix/home-assistant-sun-card/releases) and save it in your `configuration/www` folder.
1. Go to `Configuration > Lovelace dashboard > Resources` in Home Assistant and click on `Add resource`.
    1. Add `/local/community/home-assistant-sun-card.js` to the URL.
    1. Choose `Javascript Module` as Resource type.

## Set up

### Using UI

1. Go to your dashboard, enter in edit mode and click on `Add card`, you should be able to find `Custom: Sun card` in the list.
1. Once in the UI editor you can modify the card behavior by adding some of the config that you will find below

Note: If `Custom: Sun card` doesn't appear you will have to reload cleaning the cache.

### Using YAML

1. You just need to add a new card with `type: 'custom:sun-card'` to your cards list and any of the config that you will find below if you want to customize more your card.

Note: If you get an error similar to this `Custom element doesn't exist` you will have to reload cleaning the cache.

## Config

| Name              | Accepted values      | Description                          | Default                                             |
|-------------------|----------------------|--------------------------------------|-----------------------------------------------------|
| darkMode          | `boolean`            | Changes card colors to dark or light | Home assistant dark mode state                      |
| language          | `string` **(1)**     | Changes card language                | Home assistant language else english                |
| showAzimuth       | `boolean`            | Displays azimuth in the footer       | `false`                                             |
| showElevation     | `boolean`            | Displays elevation in the footer     | `false`                                             |
| timeFormat        | `'12h'`/`'24h'`      | Displayed time format                | Locale based on Home assistant language             |
| title             | `string`             | Card title                           | Doesn't display a title by default                  |
| sunColor          | `string`             | Color of the sun                     | '#f9d05e' by default                                |
| sunRadius         | `string`             | Radius of the sun                    | 14 by default                                       |
| linesColor        | `string`             | Color of the lines                   | '#464646' by default                                |
| darklinesColor    | `string`             | Color of the lines (dark)            | '#464646' by default                                |
| dayProgressColor  | `string`             | Color of the day progress            | '#8ebeeb' by default                                |
| duskProgressColor | `string`             | Color of the dusk progress           | '#393b78' by default                                |
| showDayLength     | `boolean`            | Length of the day                    | `false`                                             |

**(1)** Supported languages: `da`, `de`, `en`, `es`, `et`, `fi`, `fr`, `hu`, `it`, `nl`, `pl`, `pt-BR`, `ru`, `sl`, `sv`

## New features - new parameters

### New parameters

- Sun Radius: Radius of the sun
- Sun Color: Color of the sun

### New features

- Daylight length

### Previews

![Sun Card Param](img02.png?raw=true "Sun Card Param")
