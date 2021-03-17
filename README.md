# PDF Certificate Maker (App)

<img src="https://raw.githubusercontent.com/jamesrplee/certificate-app/main/public/og-image.png">

<br/>

This repo is one of two to create a PDF certificate with React and [Make.cm](https://make.cm)

- **App** (you're here)
- [Template](https://github.com/jamesrplee/certificate-template)

Check it out [here](https://certificate.make.cm/)

If you want to learn how I built this, read the guide [here](https://make.cm/blog/make-a-pdf-certificate).

## Getting started

This app runs [create react app](https://create-react-app.dev/docs/getting-started) under the hood, so any CRA command will work here.

```
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technology

- [axios](https://www.npmjs.com/package/axios): Handle http POST request
- [react-pdf](https://www.npmjs.com/package/react-pdf): Render the resulting PDF certificate in canvas on the front end
- [Make.cm](https://docs.make.cm/api-reference/make-api): Generate a custom certificate PDF
