import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ModuleLibrary } from '../Comps/ModuleLibrary';
const platform = platformBrowserDynamic();
platform.bootstrapModule(ModuleLibrary);