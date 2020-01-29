import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoRecognitionComponent } from './pages/video-recognition/video-recognition.component';

const routes: Routes = [
  {
    path: 'video-recognition',
    component: VideoRecognitionComponent
  },
  {
    path: '**',
    redirectTo: 'video-recognition'
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'video-recognition'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
