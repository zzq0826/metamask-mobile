import TestHelpers from '../helpers';
import { CURRENCY_SWITCH } from '../../wdio/screen-objects/testIDs/Screens/AmountScreen.testIds';
import {
  AmountViewSelectorsIDs,
  AmountViewSelectorsText,
} from '../selectors/AmountView.selectors';

export default class AmountView {
  static async tapNextButton() {
    if (device.getPlatform() === 'ios') {
      await TestHelpers.waitAndTap(AmountViewSelectorsIDs.NEXT_BUTTON);
    } else {
      await TestHelpers.waitAndTapByLabel(AmountViewSelectorsIDs.NEXT_BUTTON);
    }
  }

  static async typeInTransactionAmount(amount) {
    if (device.getPlatform() === 'android') {
      await TestHelpers.typeTextAndHideKeyboard(
        AmountViewSelectorsIDs.AMOUNT_INPUT,
        amount,
      );
    } else {
      await TestHelpers.replaceTextInField(
        AmountViewSelectorsIDs.AMOUNT_INPUT,
        amount,
      );
    }
  }

  static async tapCurrencySwitch() {
    if (device.getPlatform() === 'ios') {
      await TestHelpers.waitAndTap(CURRENCY_SWITCH);
    } else {
      /* In this particular instance the test is unable to tap on the currency switch button
      because the keyboard is obstructing the element from being tappable.
      Unfortunately, the android keyboard does not close with the new line character.
      Here is random tap on the screen to close the keyboard
      */
      await element(by.id(CURRENCY_SWITCH)).tap({ x: 150, y: 100 });

      await TestHelpers.waitAndTap(CURRENCY_SWITCH);
    }
  }

  static async isVisible() {
    await TestHelpers.checkIfElementWithTextIsVisible(
      AmountViewSelectorsText.SCREEN_TITLE,
    );
  }
}
