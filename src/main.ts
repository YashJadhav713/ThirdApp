import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { ArithmaticOperations } from './Dependency/Arthmaticservice';
import { Projectclass } from './Dependencys/ProjectComp';
import { ArrayClass } from './Dependencys/ArrayComp';
import { Pipeclass } from './Pipes/pipeComp';
import { sampleclass } from './Pipes/samplecomp';

bootstrapApplication(sampleclass, appConfig)
  .catch((err) => console.error(err));
