import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { Visualizer } from '@uirouter/visualizer';
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
import { appComponent } from './app.component';
import { MAIN_MODULE } from './main/main.module';

export const APP_MODULE = angular.module('app', [
    uiRouter,
    MAIN_MODULE.name
]);

APP_MODULE.config(['$uiRouterProvider', '$locationProvider', ($uiRouter, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $uiRouter.plugin(StickyStatesPlugin);
    $uiRouter.plugin(DSRPlugin);
    $uiRouter.plugin(Visualizer);
}]);

APP_MODULE.component('app', appComponent);