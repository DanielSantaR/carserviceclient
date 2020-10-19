import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Owner } from '../../models/Owner';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  public API = '//thawing-chamber-47973.herokuapp.com';
  public OWNER_API = this.API + '/owners';
  constructor(private http: HttpClient) {

   }
   getOwners(){
     return this.http.get(this.OWNER_API)
   }
   getOwner(id: string){
    return this.http.get(this.API + "/owners/search/findByDni/?dni=" + id )
  }
  createOwner(owner: Owner){
    return this.http.post(this.OWNER_API, owner);
  }
  editOwner(owner: Owner, href: string){
    return this.http.put(href, owner);
  }
  deleteOwner(href: string){
    return this.http.delete(href);

  }
}
