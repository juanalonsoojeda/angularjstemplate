import * as angular from "angular";
import { HomeComponent } from './home.component';
import { home } from './main.states';

export const MAIN_MODULE = angular.module('main', []);

MAIN_MODULE.config(["$uiRouterProvider", function ($uiRouter) {
    const $urlService = $uiRouter.urlService;
    const $stateRegistry = $uiRouter.stateRegistry;

    $urlService.rules.otherwise({ state: 'home' });
    $stateRegistry.register(home);
}]);

MAIN_MODULE.component('home', HomeComponent);