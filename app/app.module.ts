import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptHttpModule }    from "nativescript-angular/http";


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

@NgModule({
    declarations: [ 
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent
    ],
    bootstrap: [AppComponent],
    providers: [ HeroService ],
    imports: [
        NativeScriptHttpModule,
        NativeScriptModule,
        AppRoutingModule
]
})
export class AppModule { }

