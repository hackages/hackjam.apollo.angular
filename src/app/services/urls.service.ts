import { InjectionToken } from '@angular/core';

export const SearchByTitleUrl = {
  provide: 'SearchByTitleUrl',
  useValue: new InjectionToken('app/movies/?title=')
};
