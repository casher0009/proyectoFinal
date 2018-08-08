import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:Http) { }
    url = "http://localhost:3000/user/"
cleanurl="http://localhost:3000"
// url = "/user/"
// cleanurl="/"


      //get all Users
      getAllUsers(){
        return this.http.get(this.url).toPromise()
        .then((res: Response)=> res.json())
        .catch(e=>console.log(e))                        
    }
    //get one User
    getOneUser(id){
        return this.http.get(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                
    }

    //create one User
    createUser(obj){
        return this.http.post(this.url, obj)
            .pipe(map((res: Response)=>res.json()))                                                             
    }    
        
    //edit one User
    editOneUser(obj){
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
    }    

    //delete one User richard
    deleteUser(id){
        return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                


    }    

      //get all Orders
  getAllOrders() {
    return this.http
      .get(this.url)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(e => console.log(e));
  }
  //get one Order
  getOneOrder(id) {
    return this.http
      .get(this.url + id)
      .pipe(map((res: Response) => res.json()));
  }

  //create one Order
  createOrder(obj){
    return this.http
      .post(this.cleanurl + "/new", obj,{withCredentials:true})
      .pipe(map((res: Response) => res.json()));
  }

  //edit one Order
  editOneOrder(obj) {
    return this.http
      .put(this.url + obj._id, obj)
      .pipe(map((res: Response) => res.json()));
  }

  //delete one Order richard
  deleteOrder(id) {
    return this.http
      .delete(this.url + id)
      .pipe(map((res: Response) => res.json()));
  }
}


