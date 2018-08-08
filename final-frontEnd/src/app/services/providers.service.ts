import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http:Http) { }
//     url = "http://localhost:3000/provider/"
// cleanurl="http://localhost:3000"
url = "/provider/"
cleanurl="/"


      //get all Providers
      getAllProviders(){
        return this.http.get(this.url).toPromise()
        .then((res: Response)=> res.json())
        .catch(e=>console.log(e))                        
    }
    //get one Provider
    getOneProvider(id){
        return this.http.get(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                
    }

    //create one Provider
    createProvider(obj){
        return this.http.post(this.url, obj)
            .pipe(map((res: Response)=>res.json()))                                                             
    }    
        
    //edit one Provider
    editOneProvider(obj):Observable<String>{
    return this.http.put(this.url + obj._id, obj) 
        .pipe(map((res: Response)=>res.json()))    
    }    

    //delete one Provider 
    deleteProvider(id):Observable<String>{
        return this.http.delete(this.url + id)
            .pipe(map((res: Response)=>res.json()))                                                                


    }    
  }
