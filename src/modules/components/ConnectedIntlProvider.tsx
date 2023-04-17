import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

import enMessages from '../init/en.json';
import viMessages from '../init/vi.json';


function getMessages(locale: string): any {
  if (locale.startsWith('vi')) {
    return viMessages;
  }
  return enMessages;
}

function mapStateToProps(state: any) {
  return {
    locale: state.intl.locale,
    messages: getMessages(state.intl.locale),
  };
}

export default connect(mapStateToProps)(IntlProvider);
