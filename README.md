# Reboot Netgear Router

A puppeteer script to reboot your Netgear router.

## Setup

The project uses `node.js` version 10+ and `npm`.
Execute `npm install` to retrieve all dependencies.

The router's admin credentials will be read by the script from the `NETGEAR_USERNAME` and `NETGEAR_PASSWORD` environment variables, and default to `admin:password` if not passed.

## Start

To execute the script, run `npm run start`.

In order to pass the credentials as environment variables to the script, you can run the following command: `NETGEAR_USERNAME=myuser NETGEAR_PASSWORD=mypassword npm run start`.

---

By Matthieu Di Berardino
