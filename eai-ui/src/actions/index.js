/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import * as landingActions from './landing';
import * as sidebarActions from './sidebar';
import * as iapplyActions from './iapply';
import * as testControlActions from './testControl';

module.exports = {
  ...landingActions,
  ...iapplyActions,
  ...sidebarActions,
  ...testControlActions,
};
