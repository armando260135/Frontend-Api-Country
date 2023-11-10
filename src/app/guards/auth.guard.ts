import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  console.log(1);
  const router = inject(Router);
  const token = localStorage.getItem("token_auth");
  if(!token){
    router.navigate([""]);
    return false
  }
  return true;
};
