import TestHelpers from '../helpers';
import {
  LOGIN_CONTAINER_ID,
  LOGIN_PASSWORD_ERROR,
  RESET_WALLET_ID,
} from '../../app/constants/test-ids';
import { LOGIN_WITH_REMEMBER_ME_SWITCH } from '../../wdio/screen-objects/testIDs/Screens/LoginScreen.testIds';
import { RevealSeedViewSelectorsIDs } from '../selectors/Settings/SecurityAndPrivacy/RevealSeedView.selectors';

export default class LoginView {
  static async enterPassword(password) {
    await TestHelpers.typeTextAndHideKeyboard(
      RevealSeedViewSelectorsIDs.PASSWORD_INPUT,
      password,
    );
  }

  static async tapResetWalletButton() {
    await TestHelpers.tap(RESET_WALLET_ID);
  }

  static async toggleRememberMe() {
    await TestHelpers.tap(LOGIN_WITH_REMEMBER_ME_SWITCH);
  }

  static async isVisible() {
    await TestHelpers.checkIfVisible(LOGIN_CONTAINER_ID);
  }

  static async isLoginErrorVisible() {
    await TestHelpers.checkIfVisible(LOGIN_PASSWORD_ERROR);
  }
}
