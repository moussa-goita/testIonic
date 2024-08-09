import { Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage), canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.page').then( m => m.DashboardPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-entree-list',
    loadComponent: () => import('./components/bon-entree/bon-entree-list/bon-entree-list/bon-entree-list.page').then( m => m.BonEntreeListPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-entree-form',
    loadComponent: () => import('./components/bon-entree/bon-entree-form/bon-entree-form/bon-entree-form.page').then( m => m.BonEntreeFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-entree-print',
    loadComponent: () => import('./components/bon-entree/bon-entree-print/bon-entree-print/bon-entree-print.page').then( m => m.BonEntreePrintPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-entree-detail',
    loadComponent: () => import('./components/bon-entree/bon-entree-detail/bon-entree-detail/bon-entree-detail.page').then( m => m.BonEntreeDetailPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-sortie-list',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-list/bon-sortie-list/bon-sortie-list.page').then( m => m.BonSortieListPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-sortie-form',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-form/bon-sortie-form/bon-sortie-form.page').then( m => m.BonSortieFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-sortie-print',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-print/bon-sortie-print/bon-sortie-print.page').then( m => m.BonSortiePrintPage), canActivate: [AuthGuard]
  },
  {
    path: 'bon-sortie-detail',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-detail/bon-sortie-detail/bon-sortie-detail.page').then( m => m.BonSortieDetailPage), canActivate: [AuthGuard]
  },
  {
    path: 'categorie-list',
    loadComponent: () => import('./components/categorie/categorie-list/categorie-list/categorie-list.page').then( m => m.CategorieListPage), canActivate: [AuthGuard]
  },
  {
    path: 'categorie-form',
    loadComponent: () => import('./components/categorie/categorie-form/categorie-form/categorie-form.page').then( m => m.CategorieFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'entrepot-list',
    loadComponent: () => import('./components/entrepot/entrepot-list/entrepot-list/entrepot-list.page').then( m => m.EntrepotListPage), canActivate: [AuthGuard]
  },
  {
    path: 'entrepot-form',
    loadComponent: () => import('./components/entrepot/entrepot-form/entrepot-form/entrepot-form.page').then( m => m.EntrepotFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'fournisseur-list',
    loadComponent: () => import('./components/fournisseur/fournisseur-list/fournisseur-list/fournisseur-list.page').then( m => m.FournisseurListPage), canActivate: [AuthGuard]
  },
  {
    path: 'fournisseur-form',
    loadComponent: () => import('./components/fournisseur/fournisseur-form/fournisseur-form/fournisseur-form.page').then( m => m.FournisseurFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'produit-list',
    loadComponent: () => import('./components/produit/produit-list/produit-list/produit-list.page').then( m => m.ProduitListPage), canActivate: [AuthGuard]
  },
  {
    path: 'produit-form',
    loadComponent: () => import('./components/produit/produit-form/produit-form/produit-form.page').then( m => m.ProduitFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'role-list',
    loadComponent: () => import('./components/role/role-list/role-list/role-list.page').then( m => m.RoleListPage), canActivate: [AuthGuard]
  },
  {
    path: 'role-form',
    loadComponent: () => import('./components/role/role-form/role-form/role-form.page').then( m => m.RoleFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'utilisateur-list',
    loadComponent: () => import('./components/utilisateur/utilisateur-list/utilisateur-list/utilisateur-list.page').then( m => m.UtilisateurListPage), canActivate: [AuthGuard]
  },
  {
    path: 'utilisateur-form',
    loadComponent: () => import('./components/utilisateur/utilisateur-form/utilisateur-form/utilisateur-form.page').then( m => m.UtilisateurFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'motif-list',
    loadComponent: () => import('./components/motif/motif-list/motif-list/motif-list.page').then( m => m.MotifListPage), canActivate: [AuthGuard]
  },
  {
    path: 'motif-form',
    loadComponent: () => import('./components/motif/motif-form/motif-form/motif-form.page').then( m => m.MotifFormPage), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'user-profile',
    loadComponent: () => import('./components/user-profile/user-profile/user-profile.page').then( m => m.UserProfilePage), canActivate: [AuthGuard]
  },
  {
    path: 'scanner',
    loadComponent: () => import('./components/scanner/scanner.page').then( m => m.ScannerPage)
  },
];
