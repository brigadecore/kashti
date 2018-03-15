import { InjectionToken } from '@angular/core';
import { ProjectService } from './services/project/ProjectService';
import { BuildService } from './services/build/BuildService';

export const PROJECT_SERVICE = new InjectionToken<ProjectService>('ProjectService');
export const BUILD_SERVICE = new InjectionToken<BuildService>('BuildService')

export const BRIGADE_API_HOST = 'https://cors-anywhere.herokuapp.com/http://acid-api.technosophos.me:7745'
