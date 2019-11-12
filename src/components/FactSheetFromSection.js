import React from 'react'
import { FormattedMessage } from 'react-intl'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

let FactSheetsEnum = {
  "study_in_australia": "https://assets.ctfassets.net/jj73errt89a7/1gULqPmCd7f0AO5LIPuUVn/baae876e6dd1d8241e3966caf4d0a8cd/study_in_australia.pdf",
  "studium_v_australii": "https://assets.ctfassets.net/jj73errt89a7/1ZTLg7He4BRzHpMck6RvVe/803e0771bc7459f82f1a577e2fe50986/studium_v_australii.pdf",
  "work_and_study_canada": "https://assets.ctfassets.net/jj73errt89a7/5NgG9UlfJvS9nsx8eG0e8I/02190d10fe7a9fea5fbb7dc693332ef7/work_and_study_canada.pdf",
}

export default class FactSheetFromSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    let params = new URLSearchParams(location.search);
    let factSheetName = params.get("factsheet")

    e.preventDefault()
    const form = e.target

    fetch(`/${this.props.lang}/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'factsheet-name': factSheetName,
        ...this.state,
      }),
    })
      .then(() => window.location.href = FactSheetsEnum[factSheetName])
      .catch(error => alert(error))
  }

  render() {
    const isSlovak = this.props.lang === 'sk'

    return (
      <div className="content site-width">
        <div className="form-box">
          {this.props.data && (
            <div>
              <h2>{this.props.data.factSheetSectionTitle}</h2>
            </div>
          )}
          <form
            name="factsheet"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="factsheet"/>
            <input hidden type="text" name="factsheet-name" id="factsheetName" value="" />

            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange}/>
              </label>
            </p>

            <label htmlFor="name">
              <FormattedMessage id="name"/>
            </label>
            <FormattedMessage id="namePlaceholder">
              {text => (
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={text}
                  onChange={this.handleChange}
                />
              )}
            </FormattedMessage>

            <label htmlFor="email">
              <FormattedMessage id="email"/>
            </label>
            <FormattedMessage id="emailPlaceholder">
              {text => (
                <input required
                  type="email"
                  name="email"
                  id="email"
                  placeholder={text}
                  onChange={this.handleChange}
                />
              )}
            </FormattedMessage>

            {/*{(isSlovak && <GDPRConsent />)}*/}

            {isSlovak && (
              <label htmlFor="confirmation" className='small'>
                <FormattedMessage id="gdpr_law"/>
              </label>
            )}

            {isSlovak && (
              <label htmlFor="confirmation" className='small'>
                <FormattedMessage id="gdpr_subject"/>
              </label>
            )}

            {isSlovak && (
              <label htmlFor="confirmationCheckbox" className='small'>
                <FormattedMessage id="gdpr_confirmation"/>
              </label>)}

            {isSlovak && (<input
              type="checkbox"
              name="confirmationCheckbox"
              id="confirmationCheckbox"
              onChange={this.handleChange}
              required
            />)}


            {isSlovak && (<label htmlFor="confirmationCheckbox" className='small'>
              <FormattedMessage id="gdpr_more_info"/>
              <a href={require('../assets/terms_and_conditions.pdf')} target="_blank">TU</a>
            </label>)}

            <FormattedMessage id="send">
              {text => <input type="submit" value={text}/>}
            </FormattedMessage>
          </form>
        </div>
      </div>
    )
  }
}
