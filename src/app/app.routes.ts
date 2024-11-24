import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DailyHealthComponent } from './daily-health/daily-health.component';
import { DietTrackerComponent } from './diet-tracker/diet-tracker.component';
import { PamphletComponent } from './pamphlet/pamphlet.component';
import { MentalHealthComponent } from './mental-health/mental-health.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pamphlet', component: PamphletComponent },
  { path: 'daily-health', component: DailyHealthComponent },
  { path: 'diet-tracker', component: DietTrackerComponent },
  { path: 'mental-health', component: MentalHealthComponent }
];
