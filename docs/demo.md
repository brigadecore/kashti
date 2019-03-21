# GitHub Pages Kashti Demo

[https://brigadecore.github.io/kashti/dashboard](https://brigadecore.github.io/kashti/dashboard)

To ship a new version of the app to the demo, you'll need to:

* set the `BRIGADE_API_HOST` to point to `api.brigade.sh`
* build the angular app using the Production environment config
* push the build to this repo's `gh-pages` branch


Install Dependancies

If you haven't already done so, run `yarn` in the root of the kashti app to install the different packages required to build and ship the app.

[https://github.com/brigadecore/kashti/blob/master/docs/developers.md](https://github.com/brigadecore/kashti/blob/master/docs/developers.md)

Refer to the [developer docs](https://github.com/brigadecore/kashti/blob/master/docs/developers.md) for more info.


## Update the app.config

By default, Kashti is configured to use its hosting location to also populate the API endpoint. For this demo, it needs to be updated to point at `api.brigade.sh`.

Update [this file](https://github.com/brigadecore/kashti/blob/master/src/app/app.config.ts#L1) locally, to change the config for it's production environment:

`window.location.origin` -> `https://api.brigade.sh`


## Build Kashti

Use the [angular-cli](https://cli.angular.io/) to rebuild the site with the desired base url:

```
ng build --prod --base-href "https://brigadecore.github.io/kashti/"
```


## Push to `gh-pages`

I recommend using [this plugin](https://github.com/angular-schule/angular-cli-ghpages) to simplify deployments.

```
yarn add angular-cli-ghpages
```

Likely you'll need to generate a GitHub token to use in deploying from your CLI. See the [plugin docs](https://github.com/angular-schule/angular-cli-ghpages#extra) here.

```
npx ngh --no-silent --repo=https://INSERT_YOUR_GH_TOKEN@github.com/azure/kashti.git --name="INSERT_YOUR_GH_USERNAME" --email=INSERT_YOUR_GH_EMAIL
```

Once this completes successfully, you should see the `gh-pages` branch update with the forced push and then the app will reflect the latest code at [brigadecore.github.io/kashti](https://brigadecore.github.io/kashti).