import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeExamplePipe } from './pipes/pipe-example.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ClassesModule } from './classes/classes.module';
import { HttpClientModule } from '@angular/common/http';

const declarations = [PipeExamplePipe, NavbarComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, AppRoutingModule, ClassesModule, HttpClientModule],
  exports: [PipeExamplePipe, NavbarComponent],
})
export class SharedModule {}
