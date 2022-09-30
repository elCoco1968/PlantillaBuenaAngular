import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      //generamos el menu de manera dinamica
      title: 'Primarios',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Historial de Metricas', url: '' },
        { title: 'Seleccion/Validacion de primarios reales', url: '' }
      ]
    },
    {
      title: 'Rutas',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Analisis rutas comerciales', url: '' },
        { title: 'Analisis rutas aerodromos', url: '' }
      ]
    },
    {
      title: 'Areas ATM',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Historial de metricas', url: '' },
        { title: 'Seleccion / Validacion', url: '' }
      ]
    },
    {
      title: 'Aerodromos',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'CRUD de aerodromos', url: '' },
        { title: 'Listado aerodromos', url: '' },
      ]
    },
    {
      title: 'Aeronaves',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        { title: 'Identificacion / Validacion', url: 'validationAircraft' },
        { title: 'Consulta Aeronaves', url: 'consultAircraft' },
      ]
    },
    {
      title: 'Evaluacion',
      icon: 'mdi mdi-folder-lock-open',
      url: ''
    },
  ]

  constructor() { }
}
