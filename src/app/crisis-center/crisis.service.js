"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/observable/of');
require('rxjs/add/operator/map');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());
exports.Crisis = Crisis;
var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var core_1 = require('@angular/core');
var CrisisService = (function () {
    function CrisisService() {
        this.crises$ = new BehaviorSubject_1.BehaviorSubject(CRISES);
    }
    CrisisService.prototype.getCrises = function () { return this.crises$; };
    CrisisService.prototype.getCrisis = function (id) {
        return this.getCrises()
            .map(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisisService.prototype.addCrisis = function (name) {
        name = name.trim();
        if (name) {
            var crisis = new Crisis(CrisisService.nextCrisisId++, name);
            CRISES.push(crisis);
            this.crises$.next(CRISES);
        }
    };
    CrisisService.nextCrisisId = 100;
    CrisisService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CrisisService);
    return CrisisService;
}());
exports.CrisisService = CrisisService;
//# sourceMappingURL=crisis.service.js.map