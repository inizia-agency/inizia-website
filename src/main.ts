// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import {GaService} from "./app/services/ga.service";
import {RouterGtagService} from "./app/services/router-gtag.service";

// GA4 + router tracking]

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(moduleRef => {
        // Initialise GA4 (loads gtag.js in the browser only)
        const ga = moduleRef.injector.get(GaService);
        ga.init(); // uses environment.gaMeasurementId and send_page_view:false

        // Start listening to Angular Router navigations and send page_view on each
        moduleRef.injector.get(RouterGtagService); // just getting it constructs & subscribes
    })
    .catch(err => console.error(err));
