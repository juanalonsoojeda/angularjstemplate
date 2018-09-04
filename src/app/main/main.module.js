import * as angular from 'angular';
import { teams } from './main.states';
import { TeamsComponent } from './teams.component';

export const MAIN_MODULE = angular.module('main', []);

MAIN_MODULE.config(['$uiRouterProvider', function ($uiRouter) {
    const $urlService = $uiRouter.urlService;
    const $stateRegistry = $uiRouter.stateRegistry;

    $urlService.rules.otherwise({ state: 'teams' });
    $stateRegistry.register(teams);
}]);

MAIN_MODULE.component('teams', TeamsComponent);
