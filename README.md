# FRC Scout
FRC Scout is a framework for web-based FRC scouting applications. It can be run from a web server or from a locally hosted server on your network.

## Installing
In most cases, including when competing in locations that block hosting of local servers, you'll want to have the all-important scouting system hosted online. This will help keep pit clutter down to a minimum, and you'll be able to access it from anywhere.

### Requirements for this method
* A public web server (your team's website is probably the best option)
* [PHP](http://php.net/manual/en/install.php) on that server

1. Place the files on your server. You can use FTP or some other method. It's recommended you put them in a subdirectory if there's anything else on the server.
2. Have your scouting team use their devices (or any devices) to navigate to wherever on the web you're hosting the scouting application.
3. When you need to fetch the data, download `data.json`.
4. It's recommended that you use a utility such as [this](https://github.com/evidens/json2csv) to convert your JSON document to a CSV spreadsheet. (You can easily change this to a Google Sheet or Excel spreadsheet if necesary.)

To reset the data, simply delete `data.json`. It will be regenerated when there's new data.


You can also host the server locally, using Apache, nginx, or a similar server system. That isn't recommended, but it should work fine.

(If you want to host locally, [red-green](https://github.com/reg-green)'s python-server-powered [RoboScout](https://github.com/reg-green/roboscout_2016) may be preferable.)

## Authors
This program was created by [Erik Boesen](https://github.com/ErikBoesen).

## License
This software is protected by the GNU Public License v3. More information in `LICENSE`.