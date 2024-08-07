import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'bon-entree-list',
    loadComponent: () => import('./components/bon-entree/bon-entree-list/bon-entree-list/bon-entree-list.page').then( m => m.BonEntreeListPage)
  },
  {
    path: 'bon-entree-form',
    loadComponent: () => import('./components/bon-entree/bon-entree-form/bon-entree-form/bon-entree-form.page').then( m => m.BonEntreeFormPage)
  },
  {
    path: 'bon-entree-print',
    loadComponent: () => import('./components/bon-entree/bon-entree-print/bon-entree-print/bon-entree-print.page').then( m => m.BonEntreePrintPage)
  },
  {
    path: 'bon-entree-detail',
    loadComponent: () => import('./components/bon-entree/bon-entree-detail/bon-entree-detail/bon-entree-detail.page').then( m => m.BonEntreeDetailPage)
  },
  {
    path: 'bon-sortie-list',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-list/bon-sortie-list/bon-sortie-list.page').then( m => m.BonSortieListPage)
  },
  {
    path: 'bon-sortie-form',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-form/bon-sortie-form/bon-sortie-form.page').then( m => m.BonSortieFormPage)
  },
  {
    path: 'bon-sortie-print',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-print/bon-sortie-print/bon-sortie-print.page').then( m => m.BonSortiePrintPage)
  },
  {
    path: 'bon-sortie-detail',
    loadComponent: () => import('./components/bon-sortie/bon-sortie-detail/bon-sortie-detail/bon-sortie-detail.page').then( m => m.BonSortieDetailPage)
  },
  {
    path: 'categorie-list',
    loadComponent: () => import('./components/categorie/categorie-list/categorie-list/categorie-list.page').then( m => m.CategorieListPage)
  },
  {
    path: 'categorie-form',
    loadComponent: () => import('./components/categorie/categorie-form/categorie-form/categorie-form.page').then( m => m.CategorieFormPage)
  },
  {
    path: 'entrepot-list',
    loadComponent: () => import('./components/entrepot/entrepot-list/entrepot-list/entrepot-list.page').then( m => m.EntrepotListPage)
  },
  {
    path: 'entrepot-form',
    loadComponent: () => import('./components/entrepot/entrepot-form/entrepot-form/entrepot-form.page').then( m => m.EntrepotFormPage)
  },
  {
    path: 'fournisseur-list',
    loadComponent: () => import('./components/fournisseur/fournisseur-list/fournisseur-list/fournisseur-list.page').then( m => m.FournisseurListPage)
  },
  {
    path: 'fournisseur-form',
    loadComponent: () => import('./components/fournisseur/fournisseur-form/fournisseur-form/fournisseur-form.page').then( m => m.FournisseurFormPage)
  },
  {
    path: 'produit-list',
    loadComponent: () => import('./components/produit/produit-list/produit-list/produit-list.page').then( m => m.ProduitListPage)
  },
  {
    path: 'produit-form',
    loadComponent: () => import('./components/produit/produit-form/produit-form/produit-form.page').then( m => m.ProduitFormPage)
  },
  {
    path: 'role-list',
    loadComponent: () => import('./components/role/role-list/role-list/role-list.page').then( m => m.RoleListPage)
  },
  {
    path: 'role-form',
    loadComponent: () => import('./components/role/role-form/role-form/role-form.page').then( m => m.RoleFormPage)
  },
  {
    path: 'utilisateur-list',
    loadComponent: () => import('./components/utilisateur/utilisateur-list/utilisateur-list/utilisateur-list.page').then( m => m.UtilisateurListPage)
  },
  {
    path: 'utilisateur-form',
    loadComponent: () => import('./components/utilisateur/utilisateur-form/utilisateur-form/utilisateur-form.page').then( m => m.UtilisateurFormPage)
  },
  {
    path: 'motif-list',
    loadComponent: () => import('./components/motif/motif-list/motif-list/motif-list.page').then( m => m.MotifListPage)
  },
  {
    path: 'motif-form',
    loadComponent: () => import('./components/motif/motif-form/motif-form/motif-form.page').then( m => m.MotifFormPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'user-profile',
    loadComponent: () => import('./components/user-profile/user-profile/user-profile.page').then( m => m.UserProfilePage)
  },
];
