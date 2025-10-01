import { inject } from '@angular/core';
import {GaService} from "../services/ga.service";

export function trackEvent(name: string, params: Record<string, any> = {}) {
    const ga = inject(GaService);
    ga.event(name, params);
}
