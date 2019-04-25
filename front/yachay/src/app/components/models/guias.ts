export class Persona{

    constructor(public _id:number,public _nombre:string, public _localidad:string,public _reco:string){}

    get Id():number{
      return this._id;
    }
    set Id(nuevoId:number){
      this._id = nuevoId;
    }
    get Nombre():string{
        return this._nombre;
      }
      set Nombre(nuevoNombre:string){
        this._nombre = nuevoNombre;
      }
      get Localidad():string{
        return this._localidad;
      }
      set Localidad(nuevoLocalidad:string){
        this._localidad = nuevoLocalidad;
      }
      get _Reco():string{
        return this._reco;
      }
      set _Reco(nuevoReco:string){
        this._reco = nuevoReco;
      }

  }