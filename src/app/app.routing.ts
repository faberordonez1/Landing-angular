//Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import componentes para pagina exclusiva
import { HomeComponent} from './components/home/home.component';
import { BlogComponent} from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculaComponent } from "./components/pelicula/pelicula.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorComponent } from "./components/error/error.component";

//Array de rutas
const appRoutes : Routes =[
    {path:'',component:HomeComponent},
    {path:'blog', component:BlogComponent},
    {path:'formulario',component:FormularioComponent},
    {path:'pelicula', component:PeliculaComponent},
    {path:'pagina-de-pruebas', component:PaginaComponent},
    {path:'**',component:ErrorComponent}
];

//Exportar modulo de rutas metodo viejo
export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);