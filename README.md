# Node Red Radio

Node Red Radio is an Internetradio based on the following technologies:

* [Node Red](http://nodered.org/)
* [Mopidy](https://www.mopidy.com/)
* [Mosquitto](https://mosquitto.org/)
* [Midori Browser](http://midori-browser.org/)

All these components are available on the Raspberry Pi.
Mopidy is used as the central component. Node Red flows are used to build the glue between Mopidy and the Web Page (node-red-dashboard) and also Lirc.

## Features
* Support for display connected to the Raspbery Pi, for instance a 3.5" display from Waveshare.
* UI is based on node-red-dashboard and can be accessed fro any browser
* Spotify support via Mopidy
* Cover images are displayed for Spotify tracks
* Station Logos are displayed for Tunein stations

## Todos
* Lirc support
* Display current track position
* Caching of playlists, tracklists and image links


