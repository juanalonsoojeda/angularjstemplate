import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
import { appComponent } from './app.component';
import { MAIN_MODULE } from './main/main.module';

import '../style/app.css';

export const APP_MODULE = angular.module("app", [uiRouter, MAIN_MODULE.name]);

APP_MODULE.config(['$uiRouterProvider', '$locationProvider', ($uiRouter, $locationProvider) => {
    $locationProvider.hashPrefix('');
    $uiRouter.plugin(StickyStatesPlugin);
    $uiRouter.plugin(DSRPlugin);
    import("@uirouter/visualizer").then(module => $uiRouter.plugin(module.Visualizer));
}]);

APP_MODULE.component('app', appComponent);