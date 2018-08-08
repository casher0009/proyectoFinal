import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OrderserviceService {
  constructor(private http: Http) {}
  // url = "http://localhost:3000/orders/";
  url = "/orders/"
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
  createOrder(obj) :Observable<String> {
    console.log(obj)
    return this.http
      .post(this.url + "new", obj)
      .pipe(map((res: Response) => res.json()));
  }

  //edit one Order
  editOneOrder(obj) {
    return this.http
      .put(this.url + obj._id, obj)
      .pipe(map((res: Response) => res.json()));
  }

  //delete one Order richard
  deleteOrder(id):Observable<String> {
    console.log(id, "id para borrar otra vez")
    console.log(this.url + id)
    return this.http
      .delete(this.url + id, {withCredentials:true})
      .pipe(map((res: Response) => res.json()));
  }
}
