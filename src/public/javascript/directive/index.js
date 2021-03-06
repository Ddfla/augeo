
  /***************************************************************************/
  /* Augeo.io is a web application that uses Natural Language Processing to  */
  /* classify a user's internet activity into different 'skills'.            */
  /* Copyright (C) 2016 Brian Redd                                           */
  /*                                                                         */
  /* This program is free software: you can redistribute it and/or modify    */
  /* it under the terms of the GNU General Public License as published by    */
  /* the Free Software Foundation, either version 3 of the License, or       */
  /* (at your option) any later version.                                     */
  /*                                                                         */
  /* This program is distributed in the hope that it will be useful,         */
  /* but WITHOUT ANY WARRANTY; without even the implied warranty of          */
  /* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           */
  /* GNU General Public License for more details.                            */
  /*                                                                         */
  /* You should have received a copy of the GNU General Public License       */
  /* along with this program.  If not, see <http://www.gnu.org/licenses/>.   */
  /***************************************************************************/

  /***************************************************************************/
  /* Description: Index file that requires all directives for browserify     */
  /***************************************************************************/

  var augeo = require('angular').module('augeo');

  augeo.directive('activityCard', require('./activity-card'));
  augeo.directive('activityTransition', require('./activity-transition'));
  augeo.directive('leaderboardEntry', require('./leaderboard-entry'));
  augeo.directive('paginate', require('./paginate'));
  augeo.directive('passwordInput', require('./password-input'));
  augeo.directive('skillView', require('./skill-view'));
  augeo.directive('infiniteScroll', ['$rootScope', '$window', '$timeout', require('./angular-infinite-scroll')]);

