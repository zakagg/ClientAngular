export interface MyJwtPayload {
    sub:string ,
  firstname: string,
  nbf: number,
  lastname:string ,
  email:string,
  role:string[] // Utilisez le type approprié pour `roles` (par exemple, `string[]` si c'est un tableau de rôles)
    // Ajoutez d'autres propriétés si nécessaire
    
}