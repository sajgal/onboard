import React from 'react';
import { getUserLangKey } from 'ptz-i18n';
import { withPrefix } from "gatsby-link";
import browserLang from 'browser-lang';
const languages = require('../data/languages')

class RedirectIndex extends React.PureComponent {
  constructor(args) {
    super(args);

    if (typeof window !== 'undefined') {
      let language = browserLang();
      if (!languages.langs.includes(language))
        language = languages.defaultLangKey;
      const homeUrl = withPrefix(`/${language}/`);
      window.___history.replace(homeUrl);
    }
  }

  render() {
    return (<div />);
  }
}

export default RedirectIndex;

