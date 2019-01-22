"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> sidedrawer-getting-started-angular
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var SideDrawerGettingStartedComponent = /** @class */ (function () {
    function SideDrawerGettingStartedComponent(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
    }
    SideDrawerGettingStartedComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    SideDrawerGettingStartedComponent.prototype.ngOnInit = function () {
        this.mainContentText = "SideDrawer for NativeScript can be easily setup in the HTML definition of your page by defining tkDrawerContent and tkMainContent. The component has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.";
    };
    Object.defineProperty(SideDrawerGettingStartedComponent.prototype, "mainContentText", {
        get: function () {
            return this._mainContentText;
        },
        set: function (value) {
            this._mainContentText = value;
        },
        enumerable: true,
        configurable: true
    });
    SideDrawerGettingStartedComponent.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    SideDrawerGettingStartedComponent.prototype.onCloseDrawerTap = function () {
        this.drawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], SideDrawerGettingStartedComponent.prototype, "drawerComponent", void 0);
    SideDrawerGettingStartedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "tk-sidedrawer-getting-started",
            templateUrl: 'getting-started.component.html',
            styleUrls: ['getting-started.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], SideDrawerGettingStartedComponent);
    return SideDrawerGettingStartedComponent;
}());
exports.SideDrawerGettingStartedComponent = SideDrawerGettingStartedComponent;
// << sidedrawer-getting-started-angular
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0dGluZy1zdGFydGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdldHRpbmctc3RhcnRlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBd0M7QUFDeEMsc0NBQStGO0FBQy9GLDhEQUE0RTtBQVM1RTtJQUdJLDJDQUFvQixtQkFBc0M7UUFBdEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtJQUMxRCxDQUFDO0lBS0QsMkRBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxvREFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyw2UkFBNlIsQ0FBQztJQUN6VCxDQUFDO0lBRUQsc0JBQUksOERBQWU7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBTU0sc0RBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSw0REFBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUExQmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjs4RUFBQztJQU56RSxpQ0FBaUM7UUFON0MsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDL0MsQ0FBQzt5Q0FJMkMsd0JBQWlCO09BSGpELGlDQUFpQyxDQWlDN0M7SUFBRCx3Q0FBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDhFQUFpQztBQWtDOUMsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gc2lkZWRyYXdlci1nZXR0aW5nLXN0YXJ0ZWQtYW5ndWxhclxuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcInRrLXNpZGVkcmF3ZXItZ2V0dGluZy1zdGFydGVkXCIsXG4gICAgdGVtcGxhdGVVcmw6ICdnZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydnZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVEcmF3ZXJHZXR0aW5nU3RhcnRlZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfbWFpbkNvbnRlbnRUZXh0OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubWFpbkNvbnRlbnRUZXh0ID0gXCJTaWRlRHJhd2VyIGZvciBOYXRpdmVTY3JpcHQgY2FuIGJlIGVhc2lseSBzZXR1cCBpbiB0aGUgSFRNTCBkZWZpbml0aW9uIG9mIHlvdXIgcGFnZSBieSBkZWZpbmluZyB0a0RyYXdlckNvbnRlbnQgYW5kIHRrTWFpbkNvbnRlbnQuIFRoZSBjb21wb25lbnQgaGFzIGEgZGVmYXVsdCB0cmFuc2l0aW9uIGFuZCBwb3NpdGlvbiBhbmQgYWxzbyBleHBvc2VzIG5vdGlmaWNhdGlvbnMgcmVsYXRlZCB0byBjaGFuZ2VzIGluIGl0cyBzdGF0ZS4gU3dpcGUgZnJvbSBsZWZ0IHRvIG9wZW4gc2lkZSBkcmF3ZXIuXCI7XG4gICAgfVxuXG4gICAgZ2V0IG1haW5Db250ZW50VGV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21haW5Db250ZW50VGV4dDtcbiAgICB9XG5cbiAgICBzZXQgbWFpbkNvbnRlbnRUZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fbWFpbkNvbnRlbnRUZXh0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25DbG9zZURyYXdlclRhcCgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG59XG4vLyA8PCBzaWRlZHJhd2VyLWdldHRpbmctc3RhcnRlZC1hbmd1bGFyXG4iXX0=